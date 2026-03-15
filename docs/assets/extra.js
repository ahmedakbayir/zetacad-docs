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

<<<<<<< HEAD
  // Linkleri düz metne dönüştür
=======
  // PDF ikonu SVG - klasik dosya + aşağı ok şeklinde
  var pdfIconSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
    '<polyline points="14 2 14 8 20 8"/>' +
    '<line x1="12" y1="18" x2="12" y2="12"/>' +
    '<polyline points="9 15 12 18 15 15"/>' +
    "</svg>";

  // Ortak yazdırma stilleri (tek sayfa ve tüm doküman için)
  // İkon SVG'leri MkDocs Material temasından alındı
  var admonIcons = {
    note: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m3.1 5.07c.14 0 .28.05.4.16l1.27 1.27c.23.22.23.57 0 .78l-1 1-2.05-2.05 1-1c.1-.11.24-.16.38-.16m-1.97 1.74 2.06 2.06-6.06 6.06H7.07v-2.06z'/%3E%3C/svg%3E",
    abstract: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M17 9H7V7h10m0 6H7v-2h10m-3 6H7v-2h7M12 3a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1m7 0h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2'/%3E%3C/svg%3E",
    info: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2'/%3E%3C/svg%3E",
    tip: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M17.66 11.2c-.23-.3-.51-.56-.77-.82-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32-2.59 2.08-3.61 5.75-2.39 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5.14.6.41 1.2.71 1.73 1.08 1.73 2.95 2.97 4.96 3.22 2.14.27 4.43-.12 6.07-1.6 1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6-1.12.4-2.24-.16-2.9-.82 1.19-.28 1.9-1.16 2.11-2.05.17-.8-.15-1.46-.28-2.23-.12-.74-.1-1.37.17-2.06.19.38.39.76.63 1.06.77 1 1.98 1.44 2.24 2.8.04.14.06.28.06.43.03.82-.33 1.72-.93 2.27'/%3E%3C/svg%3E",
    success: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59z'/%3E%3C/svg%3E",
    question: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='m15.07 11.25-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2 2 2 0 0 0-2 2H8a4 4 0 0 1 4-4 4 4 0 0 1 4 4 3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-5.53-4.5-10-10-10'/%3E%3C/svg%3E",
    warning: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2z'/%3E%3C/svg%3E",
    failure: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E",
    danger: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='m11.5 20 4.86-9.73H13V4l-5 9.73h3.5zM12 2c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12s-1 5.1-2.95 7.05S14.75 22 12 22s-5.1-1-7.05-2.95S2 14.75 2 12s1-5.1 2.95-7.05S9.25 2 12 2'/%3E%3C/svg%3E",
    bug: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M11 13h2v1h-2zm10-8v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4zm-4 5h-2.2c-.2-.6-.6-1.1-1.1-1.5l1.2-1.2-.7-.7L12.8 8H12c-.2 0-.5 0-.7.1L9.9 6.6l-.8.8 1.2 1.2c-.5.3-.9.8-1.1 1.4H7v1h2v1H7v1h2v1H7v1h2.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2H17v-1h-2v-1h2v-1h-2v-1h2zm-6 2h2v-1h-2z'/%3E%3C/svg%3E",
    example: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 2v2h1v14a4 4 0 0 0 4 4 4 4 0 0 0 4-4V4h1V2zm4 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m2-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m1-5h-4V4h4z'/%3E%3C/svg%3E",
    quote: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3z'/%3E%3C/svg%3E"
  };

  // MkDocs Material renk tonları (border + başlık arka planı %10 opaklık)
  var admonColors = {
    note:     { border: "#448aff", bg: "#448aff1a" },
    abstract: { border: "#00b0ff", bg: "#00b0ff1a" },
    info:     { border: "#00b8d4", bg: "#00b8d41a" },
    tip:      { border: "#00bfa5", bg: "#00bfa51a" },
    success:  { border: "#00c853", bg: "#00c8531a" },
    question: { border: "#64dd17", bg: "#64dd171a" },
    warning:  { border: "#ff9100", bg: "#ff91001a" },
    failure:  { border: "#ff5252", bg: "#ff52521a" },
    danger:   { border: "#ff1744", bg: "#ff17441a" },
    bug:      { border: "#f50057", bg: "#f500571a" },
    example:  { border: "#7c4dff", bg: "#7c4dff1a" },
    quote:    { border: "#9e9e9e", bg: "#9e9e9e1a" }
  };

  // Admonition tip-renk-ikon CSS'ini oluştur
  var admonTypeStyles = "";
  var aliases = { summary: "abstract", check: "success", faq: "question" };
  Object.keys(admonColors).forEach(function (type) {
    var c = admonColors[type];
    var icon = admonIcons[type];
    admonTypeStyles +=
      ".admonition." + type + "{border-color:" + c.border + "}" +
      ".admonition." + type + ">.admonition-title{background:" + c.bg + "}" +
      ".admonition." + type + ">.admonition-title:before{background-color:" + c.border + ";-webkit-mask-image:url(\"" + icon + "\");mask-image:url(\"" + icon + "\")}";
  });
  // Alias'lar
  Object.keys(aliases).forEach(function (alias) {
    var target = aliases[alias];
    var c = admonColors[target];
    var icon = admonIcons[target];
    admonTypeStyles +=
      ".admonition." + alias + "{border-color:" + c.border + "}" +
      ".admonition." + alias + ">.admonition-title{background:" + c.bg + "}" +
      ".admonition." + alias + ">.admonition-title:before{background-color:" + c.border + ";-webkit-mask-image:url(\"" + icon + "\");mask-image:url(\"" + icon + "\")}";
  });

  var printStyles =
    "body{font-family:system-ui,-apple-system,sans-serif;max-width:900px;margin:0 auto;padding:2rem;color:#1c1e21}" +
    ".page-section{padding-top:1.5rem;border-top:1px solid #ddd;margin-top:1.5rem}" +
    ".page-section:first-child{border-top:none;margin-top:0}" +
    ".section-start{page-break-before:always;border-top:none;padding-top:0;margin-top:0}" +
    ".loading{text-align:center;padding:3rem;font-size:1.2rem;color:#666}" +
    ".loading-progress{margin-top:1rem;font-size:.9rem}" +
    "h1,h2,h3,h4{color:#1c1e21}" +
    "img{max-width:100%}" +
    "table{border-collapse:collapse;width:100%}" +
    "th,td{border:1px solid #ddd;padding:8px;text-align:left}" +
    "pre{background:#f5f5f5;padding:1rem;overflow-x:auto;border-radius:4px}" +
    "code{font-family:SFMono-Regular,Consolas,monospace}" +
    ".admonition{border:0;border-left:.2rem solid #448aff;border-radius:.1rem;font-size:.72rem;margin:1rem 0;padding:0 .6rem .6rem;page-break-inside:avoid}" +
    ".admonition-title{font-weight:700;margin:0 -.6rem .4rem;padding:.4rem .6rem .4rem 2rem;position:relative;border-radius:.1rem .1rem 0 0}" +
    ".admonition-title:before{content:\"\";position:absolute;left:.6rem;top:50%;transform:translateY(-50%);width:1rem;height:1rem;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;background-color:#448aff}" +
    admonTypeStyles +
    ".admonition p:last-child{margin-bottom:0}" +
    "a{color:inherit;text-decoration:none}" +
    "@media print{.no-print{display:none}@page{margin:1.5cm;size:A4}}";

  // Linkleri düz metne dönüştür (PDF'te tıklanabilir link olmasın)
>>>>>>> 23b9c19a99b9678be197639608c35401ab494bbf
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