# Hesaplamalar

**Hesaplamalar****  
** |  [![Basa Dön](home.jpg)](zetacadnedir.htm) [![Önceki](next.jpg)](tukhesap.htm) [![Sonraki](prev.jpg)](lokalkay.htm)  
---|---  
  
Bir doğalgaz tesisatının hesapları, tesisatın her bir hattında gazın _hızını_ ve _basınç kaybını_ bulmaya yöneliktir.   
  
Bir hatta bu iki değeri hesaplayabilmek için şu unsurlara ihtiyaç vardır.   
  
a. Hat uzunluğu   
b. Hat kot farkı   
c. Hat üzerindeki yük - debi   
d. Hat üzerindeki tesisat parçaları - Lokal kayıplar   
e. Hatta gazın giriş basıncı   
f. Hat çapı   
  
Öyleyse Zetacad programı içersindeki hesaplama rutinleri de bu bilgilere ihityaç duyacaktır. Peki, bu bilgiler nasıl sağlanacaktır. Şimdi yukarıda sıralanan bu maddeleri tek tek ele lalaım.   
  
**a. Hat Uzunluğu :** Hat uzunluğu geometrik bir değerdir ve siz tesisatını konumlarken tüm hat parçalarının uzunlukları **otomatik** olarak belirlenmiş olur.   
  
**b. Hat Kot Farkı :** Hat kot farkı geometrik bir değerdir ve siz tesisatını konumlarken tüm hat parçalarının uzayda oluşturduğu iniş ve çıkışlar kullanılarak bir hattın toplam kot farkı **otomatik** olarak bulunur.   
  
**c. Hat Debisi :** Tesisat tasarlanırken proje müellifi istediği noktalara tüketim vanası veya cihazlar yerleştirerek, o noktalardaki gaz tüketimini belirlemiş olur. Dolayısyla Zetacad tesisata geometik olarak hakim olduğu için tüketim noktalarının tüm hatlarda neden olduğu eş zamansal debileri **otomatik** olarak hesaplar.   
  
**d. Lokal Kayıplar :** Zetacad'de tesisatınızı tasarlarken, dirsek, Te, Haç ayrımı gibi hatlardaki tesisat parçalarının sayılarını belirlemekle uğraşmazsınız. Tüm tesisat parçalarının varlığı hattın geometrik hareketinden **otomatik** olarak çıkarılır. Örneğin siz hattı konumlarken 90° derecelik bir dönüş yaptığınız da, Zetacad orada bir dirsek parçası varsayar. Böylelikle herhangi bir hattaki lokal kayıp değeri **otomatik** olarak ortaya çıkar.   
  
**e. Hattın giriş basıncı :** Bir hattaki giriş basıncı onun hız ve basınç kaybını etkileyen önemli bir unsurdur. Yapmanız gereken sadece servis kutusunun basıncını belirlemek ve gerekiyorsa ilgili yerlere regülatör ve regülatörleri yerleştirmek. Artık Zetacad hangi hat üzerinde hangi basıncın etkili olduğunu **otomatik** olarak tayin edebilecektir.   
  
**f. Hat Çapı :** Zetacad'de çap tayini manuel veya **otomatik** olabilir. İsterseniz siz belirli bir hatta hangi çapı kullanmak istediğinizi girersiniz, isterseniz Zetacad'in otomatik çap tasarımı opsiyonunu kullanarak tüm çapların en optimum değerde hesaplanmasını sağlayabilirsiniz.   
  
Yukarıdaki maddelerde görebileceğiniz gibi, Zetacad'de hesap tamamen otomatik yapıldığı gibi, hesabın ihtiyaç duyduğu giriş verileri de otomatik olarak belirlenir. Yani siz tesisatı geometrik olarak tasarlayıp, tüketim vanaları ve cihazlarınızı yerleştirdikten sonra, Zetacad başka bir veriye ihtiyaç duymadan tüm hesapları otomatik yapar.   
  
**Hesaplar ne zaman yapılır?  
  
**Servis kutusu yerleştikten sonra, tesisatın çizimi başlar başlamaz, zetacad hesap modülü arkada devamlı surette çalışır. Yükler oluştuka,çaplar belirlendikçe, uzunluklar değiştikçe, özetle en ufak değişiklikte hesaplar arka planda tazelenir. Burada kullanıcıya her zaman en son sonuçları vermek hedeflenmiştir. Dolayısıyla Zetacad'de hesabı yaptırmak için ayrıca bir _Hesapla_ komutuna ihtiyaç yoktur. Hesabın en son güncel halini, hattı tasarlarken sağ taraftaki [hat özellikleri](hatozellikleri.htm) panelinden inceleyebileceğiniz gibi, herhang bir esnada hesap tablolarını (lokal kayıplar, boru çapı hesapları, kritik hat analizi) çağırarak detaylı hesap değerlerini inceleyebilirsiniz.   
  
Özellikler panelinde bir hat için uzunluk,debi,hız,toplam kayıp gibi değerleri görebileceğiniz gibi tesisat tasarımınıza rehberlik edecek olan _kümülatif kayıp_ değerini de görebilirsiniz. Kümülatif kayıp servis kutusundan seçili hatta kadar (o hat dahil) oluşan kaybın toplamını verir. Dolayısıyla siz ani kayıp değişimlerini çok daha rahat yakalama şansına sahip olursunuz.   
  
**Hatlandırma  
  
**Bilindiği gibi tesisat boru parçalarının uç uca eklenmesinden meydana gelir. Birbirini takip eden belirli özellikteki boru parçaları bir arada bir hat oluştururlar. Normalde tesisat hesabı yapılırken, hatların nerede başalyıp nerede sonalndığı belirlenir ve her birine bir numara verilir. Hatlandırma dediğimiz bu işlem Zetacad programında otomatik yapılır. Zetacad hangi boru parçalarının berber bir hat olarak ele alınacağına kendisi karar verir ve her bririni en düzgün şekilde numaralandırır. Hatları ayrıştırırken yük değişimi (geometrik dallanma) ve çap değişimi göz önüne alınır.   
  
**Hesaplama Yöntemi  
  
**Zetacad giriş değerlerinden hız ve basıncı hesaplamak için tüm Türkiye'de kullanılan tablo ve formulleri esas alır. Belirli bir hat üzerinde hız ve basınç kaybı aşağıdaki değişik koşullarda değişik yöntemlerle hesaplanır.   
  
**_1._**_Eğer giriş basıncı 21 mbar ve hat yükü 31_ _m_ _³/h değerinden küçük ise;_ deneysel verilerle oluşturulmuş hazır tabloları kullanır. Ara değerler için doğru orantılı interpolasyon yöntemini kullanır. Burada hız 6.0 m/s değerini aşmamalıdır.   
  
**_2._**_Eğer giriş basıncı 21 mbar ile 50 mbar arasında ise;_ bu durumda yük ne olursa olsun,tablolar sadece 21 mbar için tasarlandığı için, Zetacad, bu basınç aralığındaki hesaplar için aşağıdaki formülü kullanır. Burada hız 6.0 m/s değerini aşmamalıdır.   
  
Hız Hesap Formülü   
|  _Formül 1_   
  
---|---  
  
|    
  
Kayıp Hesap Formülü   
|  _Formül 2_   
  
  
|    
  
  
  
**3.**_Eğer hat yükü 31_ _m_ _³/h değerinden büyük ve_ _giriş basıncı 50 mbar değerinden küçük ise;_ bu durumda da hız ve kayıp hesaplamalrı için yukarıdaki 1 ve 2 nolu formül kullanılır. Burada hız 6.0 m/s değerini aşmamalıdır.   
  
**4.**_Eğer giriş basıncı 50 mbar değerinin üzerinde ise;_ bu durumda hat yükü ne olursa olsun, orta basınçlı hatlar için tasarlanan aşağıdaki formüller hız ve basınç kaybını hesaplamak için kullanılır. Burada hız 15.0 m/s değerini aşmamalıdır.   
  
Hız Hesap Formülü   
|  _Formül 3_   
  
---|---  
  
|    
  
Kayıp Hesap Formülü   
|  _Formül 4_   
  
  
|