// PDF butonları - her sayfaya otomatik eklenir
document.addEventListener("DOMContentLoaded", function () {
  var article = document.querySelector("article.md-content__inner");
  if (!article) return;

  var h1 = article.querySelector("h1");

  // Orijinal MkDocs CSS'lerini (ikonlar, renkler, fontlar) PDF'e kayıpsız taşımak için topla
  var pageStylesheets = "";
  document.querySelectorAll('link[rel="stylesheet"], style').forEach(function(el) {
      pageStylesheets += el.outerHTML;
  });

  // Yazdırma penceresi için sayfa kırılmaları ve genel ayarlar
  var customPrintStyles = 
    "<style>" +
    "body { background: white !important; color: #1c1e21; padding: 2rem; max-width: 1000px; margin: 0 auto; }" +
    ".page-section { padding-top: 1.5rem; border-top: 1px solid #ddd; margin-top: 1.5rem; }" +
    ".page-section:first-child { border-top: none; margin-top: 0; }" +
    ".section-start { page-break-before: always; border-top: none; padding-top: 0; margin-top: 0; }" +
    ".loading { text-align: center; padding: 3rem; font-size: 1.2rem; color: #666; font-family: sans-serif; }" +
    ".loading-progress { margin-top: 1rem; font-size: 0.9rem; }" +
    /* Sayfa sonu kutu bölünmelerini engelleme ve ikon renklerini PDF'e zorlama */
    ".md-typeset .admonition, .md-typeset details { page-break-inside: avoid !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important; }" +
    ".md-typeset .admonition-title::before, .md-typeset summary::before { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }" +
    "img { max-width: 100%; page-break-inside: avoid; }" +
    "table, pre { page-break-inside: avoid; }" +
    /* PDF'de görünmemesi gereken butonları gizle */
    ".md-pdf-icon, .md-pdf-all-docs, .md-edit-bottom, .md-content__button, .headerlink { display: none !important; }" +
    "</style>";

  // Linkleri düz metne dönüştür
  function stripLinks(container) {
    container.querySelectorAll("a").forEach(function (a) {
      var span = document.createElement("span");
      span.innerHTML = a.innerHTML;
      a.parentNode.replaceChild(span, a);
    });
  }

  var pdfIconSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
    '<polyline points="14 2 14 8 20 8"/>' +
    '<line x1="12" y1="18" x2="12" y2="12"/>' +
    '<polyline points="9 15 12 18 15 15"/>' +
    "</svg>";

  // --- 1) Sayfa PDF ikonu ---
  if (h1) {
    h1.style.position = "relative";
    var pageBtn = document.createElement("button");
    pageBtn.className = "md-pdf-icon";
    pageBtn.title = "Bu sayfayı PDF olarak indir";
    pageBtn.innerHTML = pdfIconSvg;

    pageBtn.addEventListener("click", function () {
      pageBtn.disabled = true;
      pageBtn.style.opacity = "0.3";

      var clone = article.cloneNode(true);
      stripLinks(clone);

      clone.querySelectorAll("img").forEach(function (img) {
        img.removeAttribute("loading");
        var src = img.getAttribute("src");
        if (src && !src.startsWith("http") && !src.startsWith("data:") && !src.startsWith("//")) {
          try { img.setAttribute("src", new URL(src, window.location.href).href); } catch (e) {}
        }
      });

      var printWindow = window.open("", "_blank");
      if (!printWindow) {
        alert("Lütfen açılır pencere engelleyicisini devre dışı bırakın.");
        pageBtn.disabled = false;
        pageBtn.style.opacity = "";
        return;
      }

      var baseTag = '<base href="' + window.location.href + '">';
      printWindow.document.write(
        "<!DOCTYPE html><html><head><title>" + (document.title || "ZetaCAD") + "</title>" +
        baseTag + pageStylesheets + customPrintStyles + 
        "</head><body class=\"md-typeset\">" +
        clone.outerHTML +
        "</body></html>"
      );
      printWindow.document.close();

      var allImages = printWindow.document.querySelectorAll("img");
      var imgPromises = Array.from(allImages).map(function (img) {
        if (img.complete) return Promise.resolve();
        return new Promise(function (resolve) { img.onload = resolve; img.onerror = resolve; });
      });

      Promise.all(imgPromises).then(function () {
        setTimeout(function () {
          printWindow.print();
          pageBtn.disabled = false;
          pageBtn.style.opacity = "";
        }, 800);
      });
    });
    h1.appendChild(pageBtn);
  }

  // --- 2) GitHub düzenle butonunu içeriğin altına taşı ---
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
  allDocsBtn.innerHTML = pdfIconSvg + " Tüm Dokümanı PDF Olarak İndir";

  allDocsBtn.addEventListener("click", function (e) {
    e.preventDefault();

    var navLinks = document.querySelectorAll(".md-nav--primary .md-nav__link[href]");
    var pages = [];
    var seenPaths = {};
    var sectionStartPaths = {};

    var topLevelItems = document.querySelectorAll(".md-nav--primary > .md-nav__list > .md-nav__item");
    topLevelItems.forEach(function (item) {
      var firstLink = item.querySelector(".md-nav__link[href]");
      if (firstLink && firstLink.href && !firstLink.href.includes("javascript:")) {
        try {
          var p = new URL(firstLink.href).pathname.replace(/\/$/, "") || "/";
          sectionStartPaths[p] = true;
        } catch (ex) {}
      }
    });

    navLinks.forEach(function (link) {
      var href = link.href;
      if (!href || href.includes("javascript:")) return;
      try {
        var url = new URL(href);
        var path = url.pathname.replace(/\/$/, "") || "/";
        if (!seenPaths[path]) {
          seenPaths[path] = true;
          pages.push({ url: url.origin + url.pathname, isSectionStart: !!sectionStartPaths[path] });
        }
      } catch (ex) {}
    });

    var printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Lütfen açılır pencere engelleyicisini devre dışı bırakın.");
      return;
    }

    var baseTag = '<base href="' + window.location.href + '">';
    printWindow.document.write(
      "<!DOCTYPE html><html><head><title>ZetaCAD - Tüm Doküman</title>" +
      baseTag + pageStylesheets + customPrintStyles + 
      "</head><body class=\"md-typeset\">" +
      '<div class="loading" id="loading">Doküman PDF için hazırlanıyor... <br><small>Bu işlem biraz sürebilir, lütfen bekleyin.</small>' +
      '<div class="loading-progress" id="progress">0 / ' + pages.length + ' sayfa yüklendi</div></div>' +
      '<div id="content" style="display:none"></div>' +
      "</body></html>"
    );
    printWindow.document.close();

    var content = printWindow.document.getElementById("content");
    var progress = printWindow.document.getElementById("progress");
    var loading = printWindow.document.getElementById("loading");
    var loaded = 0;

    function fetchPage(url, index, isSectionStart) {
      return fetch(url).then(function (r) { return r.text(); })
        .then(function (html) {
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, "text/html");
          var articleContent = doc.querySelector("article.md-content__inner");
          if (articleContent) {
            stripLinks(articleContent);
            articleContent.querySelectorAll("img").forEach(function (img) {
              img.removeAttribute("loading");
              var src = img.getAttribute("src");
              if (src && !src.startsWith("http") && !src.startsWith("data:") && !src.startsWith("//")) {
                try { img.setAttribute("src", new URL(src, url).href); } catch (e) {}
              }
            });
            return { index: index, html: articleContent.innerHTML, isSectionStart: isSectionStart };
          }
          return null;
        }).catch(function () { return null; })
        .finally(function () {
          loaded++;
          if (progress) progress.textContent = loaded + " / " + pages.length + " sayfa yüklendi";
        });
    }

    Promise.all(pages.map(function (page, i) { return fetchPage(page.url, i, page.isSectionStart); }))
      .then(function (results) {
        results.filter(function (r) { return r !== null; })
          .sort(function (a, b) { return a.index - b.index; })
          .forEach(function (r, i) {
            var section = printWindow.document.createElement("div");
            var classes = ["page-section"];
            if (r.isSectionStart && i > 0) classes.push("section-start");
            section.className = classes.join(" ");
            section.innerHTML = r.html;
            content.appendChild(section);
          });

        loading.style.display = "none";
        content.style.display = "block";

        var allImages = content.querySelectorAll("img");
        var imgLoadPromises = Array.from(allImages).map(function (img) {
          if (img.complete) return Promise.resolve();
          return new Promise(function (resolve) { img.onload = resolve; img.onerror = resolve; });
        });

        Promise.all(imgLoadPromises).then(function () {
          setTimeout(function () { printWindow.print(); }, 1000);
        });
      });
  });

  article.appendChild(allDocsBtn);

  // --- 4) Klavye sol/sağ ok tuşlarıyla geçiş ---
  document.addEventListener("keydown", function (e) {
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