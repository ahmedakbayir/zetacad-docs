# Boru Capi Tasarimi

ZetaCAD'in en guclu ozelliklerinden biri, dogalgaz boru hatlarinin caplarini **otomatik olarak en optimum degerlerde** tasarlayabilmesidir.

## Otomatik Cap Belirleme

ZetaCAD, hatlarin caplarini belirlerken asagidaki kriterleri birlikte degerlendirir:

| Kriter | Aciklama |
|--------|----------|
| **Toplam kayiplar** | Hattin basinc kayiplari hesaplanir |
| **Malzeme maliyeti** | Boru malzeme ve imalat maliyetleri goz onunde bulundurulur |
| **Sartname kisitlari** | Ilgili teknik sartnamenin belirledigi sinir degerlere uyulur |
| **Estetik gorunum** | Projenin gorsel uyumu dikkate alinir |
| **Kullanici sartlari** | Muellifin belirlediqi ozel kosullar uygulanir |

## Hesaplama Yontemi

Boru capi tasarimi, hat topolojisi uzerinden calisir:

1. ZetaCAD, tesisat elemanlarinin kapasitelerini toplar
2. Her hat segmentinin tasimasi gereken gaz debisini hesaplar
3. Basinc kaybi formulleriyle uygun caplari belirler
4. Sartname sinirlari icinde en ekonomik capin secilmesini saglar

## Basinc Araliklari

ZetaCAD asagidaki basinc araliklarinda cap tasarimi yapabilir:

- **Dusuk basinc**: 21-50 mbar
- **Orta basinc**: 50-300 mbar

## Sonuclarin Kontrolu

Otomatik cap tasariminin sonuclari, [Otomatik Kontrol](odalar.md) asamasinda yakl. 400 noktadan denetlenir. Sartname disina cikan herhangi bir deger tespit edilirse program uyari verir.
