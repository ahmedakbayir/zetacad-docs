# Hesaplamalar

**Hesaplamalar**
  
Bir doğalgaz tesisatının hesapları, tesisatın her bir hattında gazın _hızını_ ve _basınç kaybını_ bulmaya yöneliktir.   
  
Bir hatta bu iki değeri hesaplayabilmek için şu unsurlara ihtiyaç vardır.   
  
a. Hat uzunluğu   
b. Hat kot farkı   
c. Hat üzerindeki yük - debi   
d. Hat üzerindeki tesisat parçaları - Lokal kayıplar   
e. Hatta gazın giriş basıncı   
f. Hat çapı   
  
Öyleyse Zetacad programı içerisindeki hesaplama rutinleri de bu bilgilere ihtiyaç duyacaktır. Peki, bu bilgiler nasıl sağlanacaktır. Şimdi yukarıda sıralanan bu maddeleri tek tek ele lalaım.   
  
**a. Hat Uzunluğu :** Hat uzunluğu geometrik bir değerdir ve siz tesisatını konumlarken tüm hat parçalarının uzunlukları **otomatik** olarak belirlenmiş olur.   
  
**b. Hat Kot Farkı :** Hat kot farkı geometrik bir değerdir ve siz tesisatını konumlarken tüm hat parçalarının uzayda oluşturduğu iniş ve çıkışlar kullanılarak bir hattın toplam kot farkı **otomatik** olarak bulunur.   
  
**c. Hat Debisi :** Tesisat tasarlanırken proje müellifi istediği noktalara tüketim vanası veya cihazlar yerleştirerek, o noktalardaki gaz tüketimini belirlemiş olur. Dolayısyla Zetacad tesisata geometik olarak hakim olduğu için tüketim noktalarının tüm hatlarda neden olduğu eş zamansal debileri **otomatik** olarak hesaplar.   
  
**d. Lokal Kayıplar :** Zetacad'de tesisatınızı tasarlarken, dirsek, Te, Haç ayrımı gibi hatlardaki tesisat parçalarının sayılarını belirlemekle uğraşmazsınız. Tüm tesisat parçalarının varlığı hattın geometrik hareketinden **otomatik** olarak çıkarılır. Örneğin siz hattı konumlarken 90° derecelik bir dönüş yaptığınız da, Zetacad orada bir dirsek parçası varsayar. Böylelikle herhangi bir hattaki lokal kayıp değeri **otomatik** olarak ortaya çıkar.   
  
**e. Hattın giriş basıncı :** Bir hattaki giriş basıncı onun hız ve basınç kaybını etkileyen önemli bir unsurdur. Yapmanız gereken sadece servis kutusunun basıncını belirlemek ve gerekiyorsa ilgili yerlere regülatör ve regülatörleri yerleştirmek. Artık Zetacad hangi hat üzerinde hangi basıncın etkili olduğunu **otomatik** olarak tayin edebilecektir.   
  
**f. Hat Çapı :** Zetacad'de çap tayini manuel veya **otomatik** olabilir. İsterseniz siz belirli bir hatta hangi çapı kullanmak istediğinizi girersiniz, isterseniz Zetacad'in otomatik çap tasarımı opsiyonunu kullanarak tüm çapların en optimum değerde hesaplanmasını sağlayabilirsiniz.   
  
Yukarıdaki maddelerde görebileceğiniz gibi, Zetacad'de hesap tamamen otomatik yapıldığı gibi, hesabın ihtiyaç duyduğu giriş verileri de otomatik olarak belirlenir. Yani siz tesisatı geometrik olarak tasarlayıp, tüketim vanaları ve cihazlarınızı yerleştirdikten sonra, Zetacad başka bir veriye ihtiyaç duymadan tüm hesapları otomatik yapar.   
  
**Hesaplar ne zaman yapılır?**

Servis kutusu yerleştikten sonra, tesisatın çizimi başlar başlamaz, zetacad hesap modülü arkada devamlı çalışır. Yükler oluştukça, çaplar belirlendikçe, uzunluklar değiştikçe, özetle en ufak değişiklikte hesaplar arka planda tazelenir. Burada kullanıcıya her zaman en son sonuçları vermek hedeflenmiştir. Dolayısıyla Zetacad'de hesabı yaptırmak için ayrıca bir _Hesapla_ komutuna ihtiyaç yoktur. Hesabın en son güncel halini, hattı tasarlarken sağ taraftaki özellikler panelinden inceleyebileceğiniz gibi, herhangi bir esnada hesap tablolarını (lokal kayıplar, boru çapı hesapları, kritik hat analizi) çağırarak detaylı hesap değerlerini inceleyebilirsiniz.   
  
Özellikler panelinde bir hat için uzunluk,debi,hız,toplam kayıp gibi değerleri görebileceğiniz gibi tesisat tasarımınıza rehberlik edecek olan _kümülatif kayıp_ değerini de görebilirsiniz. Kümülatif kayıp servis kutusundan seçili hatta kadar (o hat dahil) oluşan kaybın toplamını verir. Dolayısıyla siz ani kayıp değişimlerini çok daha rahat yakalama şansına sahip olursunuz.   
  
**Hatlandırma**

Bilindiği gibi tesisat boru parçalarının uç uca eklenmesinden meydana gelir. Birbirini takip eden belirli özellikteki boru parçaları bir arada bir hat oluştururlar. Normalde tesisat hesabı yapılırken, hatların nerede başlayıp nerede sonlandığı belirlenir ve her birine bir numara verilir. Hatlandırma dediğimiz bu işlem Zetacad programında otomatik yapılır. Zetacad hangi boru parçalarının beraber bir hat olarak ele alınacağına kendisi karar verir ve her bririni en düzgün şekilde numaralandırır. Hatları ayrıştırırken yük değişimi (geometrik dallanma) ve çap değişimi göz önüne alınır.   
  
**Hesaplama Yöntemi**

Zetacad giriş değerlerinden hız ve basıncı hesaplamak için TS7363 şartnamesini esas alır. Belirli bir hat üzerinde hız ve basınç kaybı aşağıdaki değişik koşullarda değişik yöntemlerle hesaplanır.   
  