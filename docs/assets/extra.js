// PDF olarak kaydet butonu - her sayfaya otomatik eklenir
document.addEventListener("DOMContentLoaded", function () {
  // Sayfa başlığını bul
  var article = document.querySelector("article.md-content__inner");
  if (!article) return;

  var h1 = article.querySelector("h1");
  if (!h1) return;

  // PDF butonu oluştur
  var btn = document.createElement("button");
  btn.className = "md-pdf-button";
  btn.title = "Bu sayfayı PDF olarak kaydet";
  btn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">' +
    '<path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/>' +
    '<circle cx="18" cy="11.5" r="1"/>' +
    "</svg>" +
    " PDF olarak kaydet";

  btn.addEventListener("click", function () {
    window.print();
  });

  // Başlığın altına ekle
  h1.insertAdjacentElement("afterend", btn);
});
