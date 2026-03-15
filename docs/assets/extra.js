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

  // Ortak yazdırma stilleri (tek sayfa ve tüm doküman için)
  // MkDocs Material renk tonları (border + %10 opaklık arka plan)
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
    ".admonition{border:0;border-left:.2rem solid #448aff;border-radius:.1rem;margin:1rem 0;padding:.6rem .8rem;page-break-inside:avoid;background:#e8f0fe}" +
    ".admonition-title{font-weight:700;margin-bottom:.4rem;font-size:.85rem}" +
    ".admonition-title::before{content:'';display:inline-block;width:.9em;height:.9em;margin-right:.4rem;vertical-align:middle;background-color:currentColor;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center}" +
    ".admonition.note>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.84 1.83 3.75 3.75 1.84-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.84 1.83 3.75 3.75 1.84-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z'/%3E%3C/svg%3E\")}" +
    ".admonition.info>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'/%3E%3C/svg%3E\")}" +
    ".admonition.abstract>.admonition-title::before,.admonition.summary>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'/%3E%3C/svg%3E\")}" +
    ".admonition.tip>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z'/%3E%3C/svg%3E\")}" +
    ".admonition.success>.admonition-title::before,.admonition.check>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E\")}" +
    ".admonition.question>.admonition-title::before,.admonition.faq>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z'/%3E%3C/svg%3E\")}" +
    ".admonition.warning>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")}" +
    ".admonition.failure>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/%3E%3C/svg%3E\")}" +
    ".admonition.danger>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 2v11h3v9l7-12h-4l4-8z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 2v11h3v9l7-12h-4l4-8z'/%3E%3C/svg%3E\")}" +
    ".admonition.bug>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 8h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 8h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z'/%3E%3C/svg%3E\")}" +
    ".admonition.example>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z'/%3E%3C/svg%3E\")}" +
    ".admonition.quote>.admonition-title::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z'/%3E%3C/svg%3E\")}" +
    ".admonition.note{border-color:#448aff;background:#e8f0fe}" +
    ".admonition.note>.admonition-title{color:#448aff}" +
    ".admonition.abstract,.admonition.summary{border-color:#00b0ff;background:#e0f4ff}" +
    ".admonition.abstract>.admonition-title,.admonition.summary>.admonition-title{color:#00b0ff}" +
    ".admonition.info{border-color:#00b8d4;background:#e0f7fa}" +
    ".admonition.info>.admonition-title{color:#00b8d4}" +
    ".admonition.tip{border-color:#00bfa5;background:#e0f2f1}" +
    ".admonition.tip>.admonition-title{color:#00bfa5}" +
    ".admonition.success,.admonition.check{border-color:#00c853;background:#e8f5e9}" +
    ".admonition.success>.admonition-title,.admonition.check>.admonition-title{color:#00c853}" +
    ".admonition.question,.admonition.faq{border-color:#64dd17;background:#f1f8e9}" +
    ".admonition.question>.admonition-title,.admonition.faq>.admonition-title{color:#64dd17}" +
    ".admonition.warning{border-color:#ff9100;background:#fff3e0}" +
    ".admonition.warning>.admonition-title{color:#ff9100}" +
    ".admonition.failure{border-color:#ff5252;background:#ffebee}" +
    ".admonition.failure>.admonition-title{color:#ff5252}" +
    ".admonition.danger{border-color:#ff1744;background:#fce4ec}" +
    ".admonition.danger>.admonition-title{color:#ff1744}" +
    ".admonition.bug{border-color:#f50057;background:#fce4ec}" +
    ".admonition.bug>.admonition-title{color:#f50057}" +
    ".admonition.example{border-color:#7c4dff;background:#ede7f6}" +
    ".admonition.example>.admonition-title{color:#7c4dff}" +
    ".admonition.quote{border-color:#9e9e9e;background:#f5f5f5}" +
    ".admonition.quote>.admonition-title{color:#9e9e9e}" +
    ".admonition p:last-child{margin-bottom:0}" +
    "a{color:inherit;text-decoration:none}" +
    "@media print{.no-print{display:none}@page{margin:1.5cm;size:A4}}";

  // Linkleri düz metne dönüştür (PDF'te tıklanabilir link olmasın)
  function stripLinks(container) {
    container.querySelectorAll("a").forEach(function (a) {
      var span = document.createElement("span");
      span.innerHTML = a.innerHTML;
      a.parentNode.replaceChild(span, a);
    });
  }

  // Collapsible admonition'ları (details) normal div'e dönüştür (PDF için)
  function convertDetailsToDiv(container) {
    container.querySelectorAll("details").forEach(function (details) {
      var div = document.createElement("div");
      div.className = "admonition " + (details.className || "note");
      var summary = details.querySelector("summary");
      if (summary) {
        var title = document.createElement("p");
        title.className = "admonition-title";
        title.innerHTML = summary.innerHTML;
        div.appendChild(title);
      }
      // summary dışındaki tüm child'ları aktar
      Array.from(details.childNodes).forEach(function (child) {
        if (child.nodeName !== "SUMMARY") {
          div.appendChild(child.cloneNode(true));
        }
      });
      details.parentNode.replaceChild(div, details);
    });
  }

  // --- 1) Sayfa PDF ikonu: Başlığın sağ üstünde küçük ikon ---
  h1.style.position = "relative";

  var pageBtn = document.createElement("button");
  pageBtn.className = "md-pdf-icon";
  pageBtn.title = "Bu sayfayı PDF olarak indir";
  pageBtn.innerHTML = pdfIconSvg;

  pageBtn.addEventListener("click", function () {
    pageBtn.disabled = true;
    pageBtn.style.opacity = "0.3";

    // Article içeriğini klonla
    var clone = article.cloneNode(true);

    // Gereksiz elemanları kaldır
    clone
      .querySelectorAll(
        ".md-pdf-icon, .md-pdf-all-docs, .md-content__button, .md-edit-bottom, .headerlink"
      )
      .forEach(function (el) {
        el.remove();
      });

    // Collapsible admonition'ları normal div'e dönüştür
    convertDetailsToDiv(clone);

    // Linkleri düz metne dönüştür
    stripLinks(clone);

    // Resimleri düzelt: lazy loading kaldır + göreceli yolları mutlak yap
    clone.querySelectorAll("img").forEach(function (img) {
      img.removeAttribute("loading");
      var src = img.getAttribute("src");
      if (src && !src.startsWith("http") && !src.startsWith("data:") && !src.startsWith("//")) {
        try {
          img.setAttribute("src", new URL(src, window.location.href).href);
        } catch (e) {}
      }
    });

    var printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Lütfen açılır pencere engelleyicisini devre dışı bırakın.");
      pageBtn.disabled = false;
      pageBtn.style.opacity = "";
      return;
    }

    printWindow.document.write(
      "<!DOCTYPE html><html><head><title>" + (document.title || "ZetaCAD") + "</title>" +
        "<style>" + printStyles + "</style></head><body>" +
        clone.innerHTML +
        "</body></html>"
    );
    printWindow.document.close();

    // Tüm resimlerin yüklenmesini bekle, sonra yazdır
    var allImages = printWindow.document.querySelectorAll("img");
    var imgPromises = Array.from(allImages).map(function (img) {
      if (img.complete) return Promise.resolve();
      return new Promise(function (resolve) {
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imgPromises).then(function () {
      setTimeout(function () {
        printWindow.print();
        pageBtn.disabled = false;
        pageBtn.style.opacity = "";
      }, 500);
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

    // Üst düzey bölümlerin ilk sayfalarını tespit et (sayfa kırılması için)
    var sectionStartPaths = {};
    var topLevelItems = document.querySelectorAll(
      ".md-nav--primary > .md-nav__list > .md-nav__item"
    );
    topLevelItems.forEach(function (item) {
      var firstLink = item.querySelector(".md-nav__link[href]");
      if (firstLink && firstLink.href && !firstLink.href.includes("javascript:")) {
        try {
          var u = new URL(firstLink.href);
          var p = u.pathname.replace(/\/$/, "") || "/";
          sectionStartPaths[p] = true;
        } catch (ex) {}
      }
    });

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
          pages.push({
            url: url.origin + url.pathname,
            isSectionStart: !!sectionStartPaths[path]
          });
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
        "<style>" + printStyles + "</style></head><body>" +
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

    function fetchPage(url, index, isSectionStart) {
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

            // Collapsible admonition'ları normal div'e dönüştür
            convertDetailsToDiv(articleContent);

            // Linkleri düz metne dönüştür
            stripLinks(articleContent);

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

            return { index: index, html: articleContent.innerHTML, isSectionStart: isSectionStart };
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
      pages.map(function (page, i) {
        return fetchPage(page.url, i, page.isSectionStart);
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
          var classes = [];
          if (i > 0) classes.push("page-section");
          if (r.isSectionStart && i > 0) classes.push("section-start");
          section.className = classes.join(" ");
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