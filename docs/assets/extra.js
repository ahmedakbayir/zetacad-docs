// PDF butonları - her sayfaya otomatik eklenir
document.addEventListener("DOMContentLoaded", function () {
  var article = document.querySelector("article.md-content__inner");
  if (!article) return;

  var h1 = article.querySelector("h1");
  if (!h1) return;

  // --- 1) Sayfa PDF ikonu: Başlığın sağ üstünde küçük ikon ---
  // h1'i relative yap ki ikon absolute konumlanabilsin
  h1.style.position = "relative";

  var pageBtn = document.createElement("button");
  pageBtn.className = "md-pdf-icon";
  pageBtn.title = "Bu sayfayı PDF olarak indir";
  pageBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">' +
    '<path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/>' +
    "</svg>";

  pageBtn.addEventListener("click", function () {
    window.print();
  });

  h1.appendChild(pageBtn);

  // --- 2) Tüm dokümanı indir butonu: İçeriğin en altında ---
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

    // Tüm sayfa linklerini topla
    var navLinks = document.querySelectorAll(".md-nav--primary .md-nav__link[href]");
    var pages = [];
    var seen = {};

    navLinks.forEach(function (link) {
      var href = link.href;
      if (href && !seen[href] && !href.endsWith("#") && !href.includes("javascript:")) {
        seen[href] = true;
        pages.push(href);
      }
    });

    // Yeni pencerede tüm sayfaları birleştirip yazdır
    var printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Lütfen açılır pencere engelleyicisini devre dışı bırakın.");
      return;
    }

    printWindow.document.write(
      "<!DOCTYPE html><html><head><title>ZetaCAD - Tüm Doküman</title>" +
      "<style>" +
      "body { font-family: system-ui, -apple-system, sans-serif; max-width: 900px; margin: 0 auto; padding: 2rem; color: #1c1e21; }" +
      ".page-section { page-break-before: always; padding-top: 1rem; }" +
      ".page-section:first-child { page-break-before: auto; }" +
      ".loading { text-align: center; padding: 3rem; font-size: 1.2rem; color: #666; }" +
      ".loading-progress { margin-top: 1rem; font-size: 0.9rem; }" +
      "h1, h2, h3, h4 { color: #1c1e21; }" +
      "img { max-width: 100%; }" +
      "table { border-collapse: collapse; width: 100%; } " +
      "th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }" +
      "pre { background: #f5f5f5; padding: 1rem; overflow-x: auto; border-radius: 4px; }" +
      "code { font-family: SFMono-Regular, Consolas, monospace; }" +
      "@media print { .no-print { display: none; } @page { margin: 1.5cm; size: A4; } }" +
      "</style></head><body>" +
      '<div class="loading" id="loading">Doküman hazırlanıyor...<div class="loading-progress" id="progress"></div></div>' +
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
        .then(function (r) { return r.text(); })
        .then(function (html) {
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, "text/html");
          var articleContent = doc.querySelector("article.md-content__inner");
          if (articleContent) {
            // PDF butonlarını kaldır
            var btns = articleContent.querySelectorAll(".md-pdf-icon, .md-pdf-all-docs");
            btns.forEach(function (b) { b.remove(); });
            // Permalink (#) sembollerini kaldır
            var permaLinks = articleContent.querySelectorAll(".headerlink");
            permaLinks.forEach(function (pl) { pl.remove(); });

            return { index: index, html: articleContent.innerHTML };
          }
          return null;
        })
        .catch(function () { return null; })
        .finally(function () {
          loaded++;
          if (progress) {
            progress.textContent = loaded + " / " + pages.length + " sayfa yüklendi";
          }
        });
    }

    // Sayfaları paralel yükle, sonra sırayla birleştir
    Promise.all(pages.map(function (url, i) { return fetchPage(url, i); }))
      .then(function (results) {
        results
          .filter(function (r) { return r !== null; })
          .sort(function (a, b) { return a.index - b.index; })
          .forEach(function (r, i) {
            var section = printWindow.document.createElement("div");
            section.className = i > 0 ? "page-section" : "";
            section.innerHTML = r.html;
            content.appendChild(section);
          });

        loading.style.display = "none";
        content.style.display = "block";

        // Kısa gecikme ile yazdır
        setTimeout(function () {
          printWindow.print();
        }, 500);
      });
  });

  article.appendChild(allDocsBtn);
});
