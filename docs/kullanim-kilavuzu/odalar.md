# Otomatik Kontrol

ZetaCAD'in en onemli ozelliklerinden biri, tamamlanan veya tamamlanmakta olan projeyi **yaklasik 400 noktadan** otomatik olarak kontrol edebilmesidir.

## Kontrol Sistemi

ZetaCAD'in yapay zekasi, projeyi ilgili teknik sartnameye gore otomatik olarak denetler. Bu kontrol:

- Hicbir insan inisiyatifine ihtiyac duymadan gerceklesir
- Sartnameyle uyumsuz olan en ufak hatayi dahi fark eder
- Hatanin ne oldugunu acikca belirtir
- Duzeltme icin gerekli yollari onerir

## Kontrol Edilen Alanlar

| Alan | Ornek Kontroller |
|------|-----------------|
| **Boru caplari** | Hatlarin caplari sartname sinirlarinda mi? |
| **Basinc kayiplari** | Toplam basinc kaybi izin verilen aralikta mi? |
| **Cihaz kapasiteleri** | Tesisat cihazlarinin kapasiteleri dogru mu? |
| **Hat uzunluklari** | Hat uzunluklari sartname limitlerine uygun mu? |
| **Vana konumlari** | Vanalar dogru konumlarda mi? |
| **Sayac ve regulator** | Sayac ve regulator uygun tipte mi? |
| **Mesafe kontrolleri** | Cihazlar arasi mesafeler sartnameye uygun mu? |
| **Genel proje** | Proje butunlugu ve tutarliligi |

## Kontrol Sonuclari

Kontrol sonucunda tespit edilen sorunlar bir rapor halinde sunulur. Her sorun icin:

- Sorunun tipi ve aciklamasi
- Sorunun yeri (hangi hat, eleman veya bolge)
- Onerilern cozum yolu

!!! warning "Sartname Uygunlugu"
    ZetaCAD'in otomatik kontrol sistemi, projenin ilgili teknik sartnameye uygunlugunu saglamak icin tasarlanmistir. Kontrol sonuclarini dikkatle inceleyip gerekli duzeltmeleri yapmak muellifin sorumlulugundadIr.

## Surekli Kontrol

Kontrol sadece proje bittiginde degil, proje hazirlanirken de calistirilabilir. Bu sayede hatalar erkenden tespit edilir ve duzeltme maliyeti minimumda tutulur.
