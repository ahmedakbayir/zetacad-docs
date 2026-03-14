// PDF butonları - her sayfaya otomatik eklenir
document.addEventListener("DOMContentLoaded", function () {
  var article = document.querySelector("article.md-content__inner");
  if (!article) return;

  var h1 = article.querySelector("h1");
  if (!h1) return;

  // Sayfa başlığından temiz dosya adı oluştur
  function getFilename() {
    var title = h1.childNodes[0]
      ? h1.childNodes[0].textContent.trim()
      : h1.textContent.trim();
    return (
      title
        .replace(/\s+/g, "-")
        .replace(/[^\w\-çğışöüÇĞİŞÖÜ]/gi, "")
        .slice(0, 80) || "sayfa"
    ) + ".pdf";
  }

  // Script yükleyici (CDN'den gerektiğinde yükle)
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (document.querySelector('script[src="' + src + '"]')) {
        resolve();
        return;
      }
      var s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // PDF ikonu SVG - klasik dosya + aşağı ok şeklinde
  var pdfIconSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
    '<polyline points="14 2 14 8 20 8"/>' +
    '<line x1="12" y1="18" x2="12" y2="12"/>' +
    '<polyline points="9 15 12 18 15 15"/>' +
    "</svg>";

  // --- 1) Sayfa PDF ikonu: Başlığın sağ üstünde küçük ikon ---
  h1.style.position = "relative";

  var pageBtn = document.createElement("button");
  pageBtn.className = "md-pdf-icon";
  pageBtn.title = "Bu sayfayı PDF olarak indir";
  pageBtn.innerHTML = pdfIconSvg;

  pageBtn.addEventListener("click", function () {
    pageBtn.disabled = true;
    pageBtn.style.opacity = "0.3";

    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
    )
      .then(function () {
        return loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
        );
      })
      .then(function () {
        // Butonları geçici gizle
        var allBtn = article.querySelector(".md-pdf-all-docs");
        var editArea = article.querySelector(".md-edit-bottom");
        pageBtn.style.visibility = "hidden";
        if (allBtn) allBtn.style.visibility = "hidden";
        if (editArea) editArea.style.visibility = "hidden";

        // Lazy-loaded resimleri yüklenmeye zorla
        var allImages = article.querySelectorAll("img");
        allImages.forEach(function (img) {
          if (img.getAttribute("loading") === "lazy") {
            img.removeAttribute("loading");
            // src'yi yeniden atayarak tarayıcıyı yüklemeye zorla
            var origSrc = img.src;
            img.src = "";
            img.src = origSrc;
          }
        });

        // Tüm resimlerin yüklenmesini bekle
        var imgPromises = Array.from(allImages).map(function (img) {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();
          return new Promise(function (resolve) {
            img.onload = resolve;
            img.onerror = resolve;
          });
        });

        return Promise.all(imgPromises).then(function () {
        return html2canvas(article, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
        }).then(function (canvas) {
          pageBtn.style.visibility = "";
          if (allBtn) allBtn.style.visibility = "";
          if (editArea) editArea.style.visibility = "";

          var jsPDF = window.jspdf.jsPDF;
          var pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
          });

          // A4 boyutları ve kenar boşlukları
          var margin = 15; // mm
          var pdfW = pdf.internal.pageSize.getWidth();
          var pdfH = pdf.internal.pageSize.getHeight();
          var contentW = pdfW - margin * 2;
          var contentH = pdfH - margin * 2;

          // Her sayfa için canvas'ı dilimleyerek ekle (alt marjin korunur)
          var ratio = canvas.width / contentW;
          var sliceH = Math.floor(contentH * ratio); // piksel cinsinden sayfa yüksekliği
          var totalH = canvas.height;
          var y = 0;
          var pageNum = 0;

          while (y < totalH) {
            if (pageNum > 0) pdf.addPage();
            var currentSliceH = Math.min(sliceH, totalH - y);

            // Bu sayfa için canvas dilimi oluştur
            var pageCanvas = document.createElement("canvas");
            pageCanvas.width = canvas.width;
            pageCanvas.height = currentSliceH;
            var ctx = pageCanvas.getContext("2d");
            ctx.drawImage(canvas, 0, y, canvas.width, currentSliceH, 0, 0, canvas.width, currentSliceH);

            var pageImgData = pageCanvas.toDataURL("image/jpeg", 0.92);
            var pageImgH = (currentSliceH / ratio);
            pdf.addImage(pageImgData, "JPEG", margin, margin, contentW, pageImgH);

            y += sliceH;
            pageNum++;
          }

          pdf.save(getFilename());
        });
        }); // Promise.all imgPromises
      })
      .catch(function (err) {
        console.error("PDF oluşturulamadı:", err);
        alert("PDF oluşturulurken bir hata oluştu.");
      })
      .finally(function () {
        pageBtn.disabled = false;
        pageBtn.style.opacity = "";
      });
  });

  h1.appendChild(pageBtn);

  // --- 2) GitHub düzenle butonunu içeriğin en altına taşı ---
  var editBtn = document.querySelector(".md-content__button");
  if (editBtn) {
    var editWrapper = document.createElement("div");
    editWrapper.className = "md-edit-bottom";
    editWrapper.appendChild(editBtn);
    article.appendChild(editWrapper);
  }

  // --- 3) Tüm dokümanı indir butonu ---
  var allDocsBtn = document.createElement("a");
  allDocsBtn.className = "md-pdf-all-docs";
  allDocsBtn.title = "Tüm dokümanı PDF olarak indir";
  allDocsBtn.href = "#";
  allDocsBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
    '<polyline points="14 2 14 8 20 8"/>' +
    '<line x1="12" y1="18" x2="12" y2="12"/>' +
    '<polyline points="9 15 12 18 15 15"/>' +
    "</svg>" +
    " Tüm Dokümanı PDF Olarak İndir";

  allDocsBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Benzersiz sayfa URL'lerini topla (pathname bazlı deduplikasyon)
    var navLinks = document.querySelectorAll(
      ".md-nav--primary .md-nav__link[href]"
    );
    var pages = [];
    var seenPaths = {};

    navLinks.forEach(function (link) {
      var href = link.href;
      if (!href || href.includes("javascript:")) return;

      // URL'den pathname çıkar, normalize et
      try {
        var url = new URL(href);
        var path = url.pathname.replace(/\/$/, "") || "/";

        // Hash ve query parametrelerini yoksay, sadece path'e bak
        if (!seenPaths[path]) {
          seenPaths[path] = true;
          pages.push(url.origin + url.pathname);
        }
      } catch (ex) {
        // Geçersiz URL - atla
      }
    });

    var printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Lütfen açılır pencere engelleyicisini devre dışı bırakın.");
      return;
    }

    printWindow.document.write(
      "<!DOCTYPE html><html><head><title>ZetaCAD - Tüm Doküman</title>" +
        "<style>" +
        "body{font-family:system-ui,-apple-system,sans-serif;max-width:900px;margin:0 auto;padding:2rem;color:#1c1e21}" +
        ".page-section{page-break-before:always;padding-top:1rem}" +
        ".page-section:first-child{page-break-before:auto}" +
        ".loading{text-align:center;padding:3rem;font-size:1.2rem;color:#666}" +
        ".loading-progress{margin-top:1rem;font-size:.9rem}" +
        "h1,h2,h3,h4{color:#1c1e21}" +
        "img{max-width:100%}" +
        "table{border-collapse:collapse;width:100%}" +
        "th,td{border:1px solid #ddd;padding:8px;text-align:left}" +
        "pre{background:#f5f5f5;padding:1rem;overflow-x:auto;border-radius:4px}" +
        "code{font-family:SFMono-Regular,Consolas,monospace}" +
        "@media print{.no-print{display:none}@page{margin:1.5cm;size:A4}}" +
        "</style></head><body>" +
        '<div class="loading" id="loading">Doküman hazırlanıyor...' +
        '<div class="loading-progress" id="progress"></div></div>' +
        '<div id="content" style="display:none"></div>' +
        "</body></html>"
    );
    printWindow.document.close();

    var content = printWindow.document.getElementById("content");
    var progress = printWindow.document.getElementById("progress");
    var loading = printWindow.document.getElementById("loading");
    var loaded = 0;

    function fetchPage(url, index) {
      return fetch(url)
        .then(function (r) {
          return r.text();
        })
        .then(function (html) {
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, "text/html");
          var articleContent = doc.querySelector("article.md-content__inner");
          if (articleContent) {
            // Gereksiz tüm elemanları kaldır
            articleContent
              .querySelectorAll(
                ".md-pdf-icon, .md-pdf-all-docs, .md-content__button, .md-edit-bottom, .headerlink"
              )
              .forEach(function (el) {
                el.remove();
              });

            // Resimleri düzelt: lazy loading kaldır + göreceli yolları mutlak yap
            articleContent
              .querySelectorAll("img")
              .forEach(function (img) {
                // Lazy loading kaldır (boş pencerede viewport yok, resimler yüklenmez)
                img.removeAttribute("loading");

                // Göreceli yolları mutlak yollara dönüştür
                var src = img.getAttribute("src");
                if (src && !src.startsWith("http") && !src.startsWith("data:") && !src.startsWith("//")) {
                  try {
                    img.setAttribute("src", new URL(src, url).href);
                  } catch (e) {}
                }
              });

            return { index: index, html: articleContent.innerHTML };
          }
          return null;
        })
        .catch(function () {
          return null;
        })
        .finally(function () {
          loaded++;
          if (progress)
            progress.textContent =
              loaded + " / " + pages.length + " sayfa yüklendi";
        });
    }

    Promise.all(
      pages.map(function (url, i) {
        return fetchPage(url, i);
      })
    ).then(function (results) {
      results
        .filter(function (r) {
          return r !== null;
        })
        .sort(function (a, b) {
          return a.index - b.index;
        })
        .forEach(function (r, i) {
          var section = printWindow.document.createElement("div");
          section.className = i > 0 ? "page-section" : "";
          section.innerHTML = r.html;
          content.appendChild(section);
        });

      loading.style.display = "none";
      content.style.display = "block";

      // Tüm resimlerin yüklenmesini bekle, sonra yazdır
      var allImages = content.querySelectorAll("img");
      var imgLoadPromises = Array.from(allImages).map(function (img) {
        if (img.complete) return Promise.resolve();
        return new Promise(function (resolve) {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(imgLoadPromises).then(function () {
        setTimeout(function () {
          printWindow.print();
        }, 500);
      });
    });
  });

  article.appendChild(allDocsBtn);

  // --- 4) Klavye sol/sağ ok tuşlarıyla önceki/sonraki sayfaya geçiş ---
  document.addEventListener("keydown", function (e) {
    // Input, textarea veya contenteditable alanında yazarken çalışmasın
    var tag = e.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;

    if (e.key === "ArrowLeft") {
      var prev = document.querySelector(".md-footer__link--prev");
      if (prev) window.location.href = prev.href;
    } else if (e.key === "ArrowRight") {
      var next = document.querySelector(".md-footer__link--next");
      if (next) window.location.href = next.href;
    }
  });
});
