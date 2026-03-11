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

  // --- 1) Sayfa PDF ikonu: Başlığın sağ üstünde küçük ikon ---
  h1.style.position = "relative";

  var pageBtn = document.createElement("button");
  pageBtn.className = "md-pdf-icon";
  pageBtn.title = "Bu sayfayı PDF olarak indir";
  pageBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">' +
    '<path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/>' +
    "</svg>";

  pageBtn.addEventListener("click", function () {
    pageBtn.disabled = true;
    pageBtn.style.opacity = "0.3";

    // jsPDF + html2canvas yükle, sonra doğrudan PDF indir (yazdırma ekranı yok)
    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
    )
      .then(function () {
        return loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
        );
      })
      .then(function () {
        // Butonları geçici gizle (PDF'e girmesin)
        var allBtn = article.querySelector(".md-pdf-all-docs");
        var editArea = article.querySelector(".md-edit-bottom");
        pageBtn.style.visibility = "hidden";
        if (allBtn) allBtn.style.visibility = "hidden";
        if (editArea) editArea.style.visibility = "hidden";

        return html2canvas(article, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor:
            window.getComputedStyle(document.body).backgroundColor ||
            "#ffffff",
        }).then(function (canvas) {
          // Görünürlüğü geri yükle
          pageBtn.style.visibility = "";
          if (allBtn) allBtn.style.visibility = "";
          if (editArea) editArea.style.visibility = "";

          var jsPDF = window.jspdf.jsPDF;
          var pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
          });

          var pdfW = pdf.internal.pageSize.getWidth();
          var pdfH = pdf.internal.pageSize.getHeight();
          var imgW = pdfW;
          var imgH = (canvas.height * imgW) / canvas.width;
          var imgData = canvas.toDataURL("image/jpeg", 0.92);

          var y = 0;
          while (y < imgH) {
            if (y > 0) pdf.addPage();
            pdf.addImage(imgData, "JPEG", 0, -y, imgW, imgH);
            y += pdfH;
          }

          pdf.save(getFilename());
        });
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
    // Tüm doküman butonundan önce eklenecek, önce article'a bırakıyoruz
    article.appendChild(editWrapper);
  }

  // --- 3) Tüm dokümanı indir butonu: İçeriğin en altında ---
  var allDocsBtn = document.createElement("a");
  allDocsBtn.className = "md-pdf-all-docs";
  allDocsBtn.title = "Tüm dokümanı PDF olarak indir";
  allDocsBtn.href = "#";
  allDocsBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">' +
    '<path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/>' +
    "</svg>" +
    " Tüm Dokümanı PDF Olarak İndir";

  allDocsBtn.addEventListener("click", function (e) {
    e.preventDefault();

    var navLinks = document.querySelectorAll(
      ".md-nav--primary .md-nav__link[href]"
    );
    var pages = [];
    var seen = {};

    navLinks.forEach(function (link) {
      var href = link.href;
      if (
        href &&
        !seen[href] &&
        !href.endsWith("#") &&
        !href.includes("javascript:")
      ) {
        seen[href] = true;
        pages.push(href);
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
            // Gereksiz tüm elemanları kaldır (PDF butonları, düzenle ikonu vb.)
            articleContent
              .querySelectorAll(
                ".md-pdf-icon, .md-pdf-all-docs, .md-content__button, .md-edit-bottom, .headerlink"
              )
              .forEach(function (el) {
                el.remove();
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

      setTimeout(function () {
        printWindow.print();
      }, 500);
    });
  });

  article.appendChild(allDocsBtn);
});
