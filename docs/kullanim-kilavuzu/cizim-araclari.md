# Akilli Nesneler

ZetaCAD'de standart CAD programlarindaki gibi primitif cizim nesneleri (cizgi, daire, dikdortgen) yoktur. Bunlarin yerine **ozellestirilmis ve gelismis tanimli nesneler** bulunur. Bu akilli nesneler, dogalgaz tesisat projesinin tum bilesen ve hesaplamalarini otomatik olarak yonetir.

## Mimari Nesneler

| Nesne | Aciklama |
|-------|----------|
| **Duvar** | Kalinlik, yukseklik ve malzeme bilgisi tasiyan mimari duvar |
| **Kapi** | Duvar uzerine yerlesen, acilma yonu ve genisligi olan kapi |
| **Pencere** | Duvar uzerine yerlesen, boyut bilgisi olan pencere |
| **Kolon** | Yapisal kolon elemani |

## Tesisat Nesneleri

| Nesne | Aciklama |
|-------|----------|
| **Kombi** | Dogalgaz kombisi (kapasite bilgisi icerir) |
| **Soba** | Dogalgaz sobasi |
| **Ocak** | Dogalgaz ocagi |
| **Sofben** | Dogalgaz sofbeni |
| **Sayac** | Gaz sayaci |
| **Regulator** | Basinc regulatoru |
| **Vana** | Kesme vanasi (D:1, D:2 vb. numaralandirma) |
| **Boru Hatti** | Dogalgaz boru hatti (cap, uzunluk, kayip bilgileri) |

## Nesne Davranislari

ZetaCAD'deki akilli nesneler birbirleriyle etkilesim icerisindedir:

- **Duvar-Kapi iliskisi**: Kapi yalnizca duvar uzerine yerlestirilebilir. Kapi silindiginde duvar butunlugu geri gelir.
- **Duvar kesisimleri**: Iki duvar kesistiginde program kesisim noktasini otomatik olarak isler.
- **Hat-Cihaz iliskisi**: Boru hatlari tesisat cihazlarina baglanir ve hat topolojisi otomatik olusturulur.
- **Oda tespiti**: Kapali duvar donguleri otomatik olarak oda olarak tanimlanir.

## BIM Avantaji

Her nesne muhendislik bilgisi tasidigi icin ZetaCAD:

- Hatlarin caplarini otomatik hesaplayabilir
- Basinc kayiplarini analiz edebilir
- Sartname uygunlugunu kontrol edebilir
- Otomatik 3D kati model olusturabilir
- Proje ciktisini dogru formatta uretebilir
