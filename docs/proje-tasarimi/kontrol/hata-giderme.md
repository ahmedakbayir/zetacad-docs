# Hata Giderme

**Hata Giderme**

Kontrol sonucu raporda aşağıda yer alan hatalar bildrililebilir. Bu hataların ne anlama geldiklerini, ve bunları gidermek için ne yapmak gerektiğini bu bölümden inceleyebilirsiniz.   
  
**1\. Vaziyet Planı Hataları  
  
**_Vaziyet Planı Düzenlenmemiş:_ Zetacad, vaziyet planı ile ilgili bir bilgiye ulaşamadığı zaman bu hatayı raporlar.   
Hata Giderme: Bu hatayı gidermek için menüden veya araç çubuğundan vaziyet planını çağırarak, otomatik olarak düzenlenmesini sağlayınız.   
  
_Vaziyet Planında en az n sokak belirtilmeli:_ Yerel şartnamenize göre vaziyet planında belirli sayıda (n) sokağın belirtilmesi gerekmektedir.   
Hata Giderme: Vaziyet planına girerek sokakları belirtiniz.   
  
_Proje bilgilerinde yer alan sokak vaziyet planında bulunmuyor:_ Binanın bulunduğu sokağı proje bilgilerinde tanımladınız ancak vaziyet planında bu sokak belirtilmemiş.   
Hata Giderme: Bu hatayı gidermek için vaziyet planına giriniz ve proje bilgilerinde yer alan sokağı vaziyet planında belirtiniz.   
  
**2\. Mimari Tanım Hataları  
  
**_X Kat Planında Tanımsız Mahal:_ Bahsi geçen kat planında tanımlanmamış mahal var.   
Hata Giderme: Tanımlanmamış tüm mahalleri sağ tuş menüsünden veya özellikler panelinden tanımlayınız.   
  
_X Kat Planında Tanımsız Birim:_ Bahsi geçen kat planında, tanımsız mahaller yüzünden bir birimin ne olduğu anlaşılamamıştır. Aynı şekilde bir birimde yer alan mahallerin hepsi tanımlı olsa dahi, eğer herhangi bir ayırdedici mahal yoksa, yine aynı şekilde birimin tipi (mesken,dükkan,ortak mahal) belirlenemez.   
Hata Giderme: Tanımlanmamış tüm mahalleri sağ tuş menüsünden veya özellikler panelinden tanımlayınız. Aynı şekilde bir birimde aşağıdaki ayırdedici mahallerden birisinin bulunmasına dikkat ediniz.   
  
Zetacad birim içersindeki ayırdedici mahallerin analizini şu sırayla yapar. Herhangi bir ayıredici mahalli bulursa o birim tanımlanmış olur.   
  
1\. Yatak Odası,Oturma Odası, Yan Daire mahallerinden birisini içerirse; dairedir.   
2\. Sahanlık,Asansor, Aydınlık, Açık Aydınlık,Bodrum,Çatı Arası mahallerinden birisini içerirse; ortak mahaldir.   
3\. Ofis,Atelye,Dükkan,Kahvehane,Bakkal,Merket,Lokanta,Kantin,Çay Ocağı mahallerinden birisini içerirse; dükkandır.   
4\. Koridor,Antre,WC,Banyo,Mutfak,Yemek Odası,Salon,Kiler mahallerinden birisini içerirse; dairedir.   
5\. Depo mahallini içerirse; dükkandır.   
  
_X Kat Planında Tanımsız Merdiven :_ Zetacad , bahsi geçen katta gerektiği halde bir merdivenin bulunmadığını tespit etmiştir.   
Hata Giderme: İlgili kata en az bir merdiven yerleştiriniz.   
  
**3\. Eksik Bilgi Hataları  
  
**_Firma Bilgileri Eksik :_ Projede yer alması gereken firmaya ait herhangi bir bilginin tanımlanmamış olduğu durumlarda bu hata verilir.   
Hata Giderme: _Ayarlar_ Menüsünden _Firma bilgilerine_ girerek bahsi geçen eksik bilgileri tamamlayınız.   
  
_Proje Bilgileri Eksik:_ Projede yer alması gereken ve projeye ait herhangi bir bilginin tanımlanmamış olduğu durumlarda bu hata verilir.   
Hata Giderme: _Proje_ Menüsünden _Proje bilgilerine_ girerek bahsi geçen eksik bilgileri tamamlayınız.   
  
**4.Yasak mahalden tesisat geçiyor  
  
**_X planında Y mahallinden tesisat geçiyor:_ Aydınlık, açık aydınlık, asansör ve çatı arası gibi ortak mahllerden tesisat geçtiğinde bu hata verilir.   
Hata Giderme: Bu hatayı düzeltmek için ilgili kat planında bahsi geçen mahalli gaz tesisatından arındırınız.   
  
**5\. Dış kapısı olmayan birim var  
  
**_X Planında dış kapısı olmayan birim var:_ Bir birimin sahanlığa ya da bina dışına açılan bir kapısı olmadığı zaman bu hata verilir.   
Hata Giderme: İlgili kat planında dış kapısı olmayan birime dış kapı olabilecek bir kapı ekleyiniz. Dış kapı sahanlığa ya da bina dışına açılmalıdır.   
  
**6\. Kabul edilemeyen hız değeri  
  
**_N nolu hatta x m/sn hızı izin verilenin üstünde:_ İlgili hatta hesaplanan hız değeri, 21 mbar da 6 m/sn, 300 mbar da ise 15 m/sn limitinin üzerinde olduğundan kabul edilemez.   
Hata Giderme: Hızı düşürmek için hattın boru çapını yükseltiniz.   
  
**7.Kayıp limiti aşılıyor  
  
**_x devresinde toplam kayıp p mbar limitinin üzerinde :_ ilgili hat devresinde toplam kayıp p (1.0, 1.8 veya 0.8 mbar) değerinin üzerinde. Toplam kayıp miktarı şartnamede belirtilen sınırın üzerinde olduğunda bu hata verilir.   
Hata Giderme: İlgili devrede çapları yükselterek basınç kaybını düşürün veya otomatik tasarla komutu ile çapları kayıp limitlerini dikkate alacak şekilde otomatik olarak tasarlatınız.   
  
_x nolu hattaki sayaca giren 300 mbarlık devrede basınç kaybı 21 mbar limitinin üzerinde :_ 300 mbarlık hat devresinde ilgili hat sonunda sayaca kadar olan kayıp en fazla 21 mbar olabilir. 21 mbar üzerindeki kayıplar teknik olarak bir sorun oluşturmasa da faturalama esaslarına aykırı olduğu için izin verilmez.   
Hata Giderme: İlgili devrede çapları yükselterek basınç kaybını düşürün veya otomatik tasarla komutu ile çapları kayıp limitlerini dikkate alacak şekilde otomatik olarak tasarlatınız.   
  
**8\. Hat yükü belirsiz  
  
**_x nolu hatta belirlenebilen bir yük yok :_ Bir hat devresi kolon tesisatında ise bir tüketim vanası ile, daire içinde ise bir cihaz ile sonlanmalıdır. Aksi takdirde o devredeki geriye doğru ilk yüklü ayrıma kadar tüm hatlarda bir yük belirlenemediğinden, bu hata oluşacaktır.   
Hata Giderme : Devrenin sonunda yük oluşturacak bir unsur ekleyiniz. (Tüketim Vanası, Yan Bina Ağzı, Cihaz)   
  
**9.Tüketim vanası hatası  
  
**_x nolu hatta tüketim vanasının birim numarası belirsiz :_ x nolu hattın ucunda yer alan tüketim vanası bir birimle ilişkili değil.   
Hata Giderme: Vana seçiliyken özellikler panelinde birim kutusuna daire no veya dükkan noyu giriniz. Dükkan numaraları 900n şeklinde kodlanmalıdır. Birim numarası vana seçiliyken Ctrl+U kısayoluna basılarak açılan kutucuğa yazılarak da belirlenebilir.   
_  
x nolu hatta ticari tüketim vanasından sonra selenoid vana kullanılmalıdır : _x nolu hattın ucunda yer alan tüketim vanası ticari (sürekli yük) olarak işaretlendiği halde , selenoid olarak işaretlenmemiş. Ticari kullanımlarda teknik şartname selenoid kullanımını sorunlu kılar.   
Hata Giderme: Bahsi geçen vananın özelliklerinde yer alan, _selenoid vana kullanılmıştır_ seçeneğini işaretleyiniz.   
  
_x nolu hatta tüketim vanası aşırı yükten ötürü ticari olarak işaretlenmelidir :_ x nolu hattın ucunda yer alan tüketim vanası yüksek kapasiteli bir genel cihaza (ticari cihaz) hizmet verdiği için ticari olduğu belirtilmelidir. Aynı şekilde eğer tesisat kahvehane,lokanta, çay ocağı gibi bir mahalde bulunarak devamlı gaz kullanan bir ocağa hizmet veriyorsa da bu hata verilir.   
Hata Giderme: Bahsi geçen vananın özelliklerinde yer alan, _ticari (aşırı yük)_ seçeneğini işaretleyiniz.   
  
_Dn vanasının birim numarası birden fazla kullanılmış:_ Birden fazla vana aynı birim ile ilişkilendirildiğinde bu hata verilir.   
Hata Giderme: Bahsi geçen vanaların birim numralarının farklı olmasına dikkat ediniz.   
  
**10\. Vananın flanşlı olması gerekiyor  
  
**_X nolu hatta DNr çaplı vananın flanşlı olması gerekiyor:_ DN65 ve ondan büyük çaplı bir vana flnaşlı olarak belirtilmediği zaman bu hata verilir.   
Hata Giderme: Bahsi geçen vanayı özelliklerinden flanşlı olarak belirtiniz.   
  
**11\. Sayaçtan önce tüketim vanası gerekiyor  
  
**_x nolu hattaki sayaçtan önce tüketim vanası gerekmektedir :_ x nolu hattin ucunda yer alan sayaçtan önce bir tüketim vanası bulunmuyor.   
Hata Giderme: Sayaca servis veren hatta bir tüketim vanası ekleyiniz.   
  
**12\. Sayaç tipi mevcut debi için uygun değil  
  
**_x nolu hattaki sayaç taşıdığı debi için yeterli değil :_ x nolu hattın ucuna yerleştirilen sayacın , taşıdığı debi izin verilenin üstünde.   
Hata Giderme: Daha yüksek debili bir sayaç seçiniz.   
  
_x nolu hattaki sayaç taşıdığı debi için fazla büyük :_ x nolu hattın ucuna yerleştirilen sayacın , taşıdığı debi izin verilenin altında.   
Hata Giderme: Daha düşük debili bir sayaç seçiniz.   
  
**13\. Basınç uygun değil  
****_  
_**_x nolu hattaki sayaca giren hat basıncı 21 veya 300 mbar değerinde olmalıdır :_ Doğalgaz sayaçları ancak 21 mbar veya 300 mbarlık gaz akışını ölçebilir. x nolu hattın ucundaki sayaca, bu basınçların arasındaki bir değerde gaz gelirse bu hata verilir.   
Hata Giderme: Servis kutusu basıncının istediğiniz basınç olmasına dikkat ediniz. Eğer 50 mbar gibi bir ara basınç kulanmak istiyorsanız, regülatörü sayaçtan sonra yerleştirin ve sayaca 300 mbarlık gaz akışını sağlayın, veya sayaçtan önce regülatör koyarak çıkışını 21 mbara ayarlayın.   
  
_x nolu hatta hattaki cihaz işletme basıncı 21 mbar olmalıdır:_ Ocak,kombi,soba,şofben gibi standart cihazlar 21 mbarlık basınçla çalıştırılmalıdır. Eğer bu tür bir cihaza daha yüksek bir basınçla gaz geliyorsa bu hata verilir.   
Hata Giderme: Servis kutusu basıncının istediğiniz basınç olmasına dikkat ediniz. Eğer 300 mbar kullanıyorsanız standart ev cihazlarına tesisat girmeden bu basıncı regülatör ile 21 mbara düşürünüz. Eğer yüksek basınçta çalışan özel bir cihaz kullanmak istiyorsanız standart cihazlar yerine Genel Cihaz kullanınız.   
  
**14\. Açık alanda muhafaza gerekmektedir  
  
**_Açık alandaki x nolu hattaki tesisat elemanı muhafazalı olmalıdır :_ Cihaz, vana ve sayaçlar açık alanda oldukları zaman muhafaza içine alınmalıdır.   
Hata Giderme: İlgili tesisat elemanını özellikler panelinden muhafazalı şeklinde işaretleyiniz.   
  
**15\. Ana kesme vanası hatası  
  
**_Kolon hattında Ana Kesme Vanası gerekmektedir:_ Tesisatın gaz akışını kontrol edebilecek bir ana kesme vanası kolon hattında bulunmuyor.   
Hata Giderme: Uygun yere bir AKV ekleyiniz.**  
  
**_Ana Kesme Vanası tüm tüketimi kontrol etmelidir :_ Ana kesme vanası bina bağlantı hattından sonraki bir ayrıma konulmuşsa, diğer ayrımları kontrol edemeyeceğinden bu hata verilir.   
Hata Giderme : Ana Kesme vanasını bina içindeki tüm hatlara giden gazı kesecek bir yere yerleştirin. Bu yerde hattın debisi toplam kapasiteye eşittir. (Ana Kesme Vanası yan bina ayrımını kontrol etmemelidir)   
  
_Ana Kesme Vanası sahanlık veya bina dışında bulunabilir :_ Ana kesme vanası bina dışında muhafazlı veya bina içinde sahanlıkta olmalıdır.   
Hata Giderme: Ana kesme vanasını bahsi geçen yerlerden birine yerleştiriniz.   
  
_Bina bağlantı hattında bina girişinden önce Ana Kesme Vanası gerekmektedir:_ Eğer tesisat, binaya sahanlık harici farklı bir yerden dğrudan giriyorsa (örneğin gömülü olarak bodruma), gazı kontrol edebilmek için bina dışında bir AKV olması gerekmektedir.   
Hata Giderme: Bina dışındaki hatta bir AKV yerleştiriniz.   
  
_Bina sahanlığında Ana Kesme Vanası gerekmektedir:_ Bir önceki hatada izah edilen durumlarda, dışarıdaki AKV ye ek olarak içeride, hat binaya girdiği yerden tekrar sahanlığa ulaştığı zaman, tesisatta bir AKV bulunmalıdır.   
Hata Giderme: Sahanlıktaki kolon hattına bir AKV yerleştiriniz.   
  
**16\. Kolon hattı hatası  
  
**_Kolon hattında topraklama çubuğu gerekmektedir :_ Kolon hattında topraklama çubuğu bulunmuyorsa bu hata verilir.   
Hata Giderme: Kolon hattına bir topraklama çubuğu ekleyiniz.   
**  
**_Topraklama çubuğu bina dışında olmalıdır :_ Topraklama çubuğu bina içine yerleştirildiğinde bu hata verilir.   
Hata Giderme: Topraklama çubuğunu bina dışına yerleştiriniz.   
  
_Kolon hattında Gömülü hattan sonra izolasyon flanşı gerekmektedir :_ Gömülü hattan sonra izolasyon flanşı olmadığı durumlarda bu hata verilir.   
Hata Giderme: Gömülü hattan sonra izolasyon flanşı ekleyiniz.   
  
_x nolu kolon hattı için DN15 çapı ugun değil :_ Kolon hattında hız ve kayıp limitlerini kurtarsa dahi DN15 çapına izin verilmez.   
Hata Giderme: Bahsi geçen hattın çapını yükseltiniz.   
  
**17\. Hat yanlış mahalden geçiyor  
  
**_x nolu hat kolon içerisinden geçiyor:_ Mimari yapı elemanı kolonlar içinden hat geçişine izin verilmez.   
Hata Giderme: Bahsi geçen hattı kolon etrafından dolaştırınız.   
  
_x nolu hat kiriş içerisinden geçiyor:_ Mimari yapı elemanı kirişler içinden hat geçişine izin verilmez.   
Hata Giderme: Bahsi geçen hattı kiriş etrafından dolaştırınız.   
  
_x nolu iç tesisat hattı birim sınırını ihlal ediyor:_ Bir iç tesisat hattı yan,üst veya alt birime (daire,dükkan) geçemez.   
Hata Giderme: Bahsi geçen hattın birim içinde dolaşmasına dikkat ediniz.   
  
_x nolu kolon hattı özel mahalden geçiyor:_ Bir kolon hattı özel bir birimden (daire, dükkan) geçemez.   
Hata Giderme: Bahsi geçen hattın ortak mahal içinde dolaşmasına dikkat ediniz.   
  
_x nolu kolon hattı havalandırmasız mahalden geçiyor:_ Bir kolon hattı sahanlık harici bir ortak mahlden geçerse, o mahalde havalandırma veya gaz alarm cihazı bulunmalıdır.   
Hata Giderme: Bahsi geçen hattın geçtiği mahalli menfez ile havalandırınız veya mahale alarm cihazı ekleyiniz.   
  
**18\. Emniyet vanası gerekmektedir  
  
**_x nolu hatta emniyet vanası gerekmektedir:_ Bahsi geçen hatta özel bir nedenden ötürü gaz akışını kontrol etmek için emniyet vanası gerekmektedir. Emniyet vanası, bir birime giren tüketim hattının tüketim vanası, birimin dış kapısından ulaşılamıyacak veya uzak bir mesafedeyse, birim içinde veya birim kapısı yakınında birim içi gaz akışını kontrol edecek bir hat lokasyonunda, kapıdan veya birim içinden ulaşılabilecek bir yerde istenir.   
Hata Giderme: Bahsi geçen hatta bir emniyet vanası ekleyiniz.   
_  
x nolu kolon ayrımında emniyet vanası (K.K.V) gerekmektedir: _Kolon hattında, eğer tesisat katlara farklı kollardan hizmet verecek şekilde dallara ayrılıyorsa her ayrımda bir KKV gerekir.   
Hata Giderme: Bahsi geçen ayrıma bir KKV ekleyiniz. KKV vanaları Zetacad'de emniyet vansı olarak ele alınır.   
  
**19\. Sayaç konum hatası  
  
**_x nolu hattaki sayaç konumu belirlenemiyor,mutemelen binaya bağlantısız durumda:_ Sayaçlar duvarlarla ilişkili olmalıdır.   
Hata Giderme: Bahsi geçen sayacı bir duvarla ilşkilendiriniz.   
  
_x nolu hattaki sayaç ortak mahal veya bina dışında bulunmalıdır:_ Eğer bir sayaç özel mahade bulunuyorsa bu hata verilir.   
Hata Giderme: Bahsi geçen sayacı ortak mahal veya bina dışına yerleştiriniz.   
  
_x nolu hattaki sayaç konumu ile hizmet verdiği birim arasındaki kat farkı izin verilenin dışında:_ Bir sayaç hizmet verdiği birimden en fazla 2 kat yukarıda veya aşağıda konumlanabilir.   
Hata Giderme: Bahsi geçen sayacı hizmet verdiği birimin katına veya yakın bir kata yerleştiriniz.   
  
**20\. Cihaz konum hatası  
  
**_x nolu hattaki cihaz konumu belirlenemiyor,mutemelen binaya bağlantısız durumda:_ Cihazlar duvarlarla ilişkili olmalıdır.   
Hata Giderme: Bahsi geçen cihazı bir duvarla ilşkilendiriniz.   
  
_x nolu hattaki cihaz sayaç kullanılmayan tüketim hattında:_ Bir cihaza gidengazın miktarı ölçülmelidir, dolayısıyla cihazlar sayaç kullanılmayan hatlara yerleştirilemez.   
Hata Giderme: Bahsi geçen cihazdan önce bir sayacın olmasına dikkat ediniz.   
  
_x nolu hattaki cihazın bulunduğu alanı tanımlayınız:_ Cihazlar tanımsız mahallere konumlanamazlar.   
Hata Giderme: Cihazın bulunduğu mahalli tanımlayınız.   
  
_x nolu hattaki cihazın menfez ile paylaştığı alanı tanımlayınız:_ Cihazlar bulundukları mahal dışındaki mahalleri menfez yoluyla paylaşıyorsa o mahaller tanımlı olmalıdır.   
Hata Giderme: Cihazın bulunduğu mahalden menfez açılan yan mahal ya da mahalleri tanımlayınız.   
  
_x nolu hattaki cihaz m mahallinde bulunamaz:_ Bacalı cihazlar ve ocaklar Yatak odası,çocuk odası,banyo,WC gibi mahalerde bulunamaz.   
Hata Giderme: Cihazı bu mahallerin haricindeki mahallere yerleştiriniz veya mahallin tanımını değiştiriniz.   
  
_x nolu hattaki cihaz m mahallini menfez yoluyla paylaşamaz:_ Bacalı cihazlar ve ocakların bulunduğu mahallerden yatak odası,çocuk odası,banyo,WC gibi mahallere menfez açılamaz.   
Hata Giderme: Cihazın mahallinden bu mahalle olan menfezi kaldırınız, veya paylaşılan mahallin tanımını değiştiriniz.   
  
_x nolu hattaki cihaz ortak mahalde bulunamaz:_ Cihazlar aydınlık,sahanlık,asansör gibi ortak mahallerde bulunamaz.   
Hata Giderme: Cihazı ortak mahalden özel mahale taşıyınız.   
  
_x nolu hattaki cihaz ulaşılabilir(kapısı olan) bir mahalde olmalıdır:_ Cihazlar ulaşımın kapı ile mümkün olduğu mahallerde bulunmalıdır.   
Hata Giderme: Cihazın bulunduğu mahale kapı açınız.   
  
_x nolu hattaki cihaz y m³ altındaki mahalde bulunamaz:_ Bacalı cihazlar en az 8 m³ olmak üzere kapasitesine göre belirli bir hacime sahip bir mahalde bulunmalıdır. Ocaklar en az 12 m³ lük bir hacme sahip mahallerde bulunabilirler. Bir cihaz gerekli hacime sahip bir mahalde değilse bu hata verilir.   
Hata Giderme: Cihazın bulunduğu mahallin hacmini alt üst havalandırma ile yan mahallerle birleştiriniz.   
  
_x nolu hattaki cihazın bulunduğu m mahallinde açık alana hava menfezi bulunmuyor:_ Bacalı cihazlar ve ocaklar atmosfere açılan bir menfezin olduğu mahallerde bulunabilirler. Eğer atmosfere bakan bir duvar yoksa, yan mahalle açılan alt-üst havalandırma ile, yan mahale eklenen menfez yoluyla dolaylı havalandırma da yapılabilinir. Aksi durumlarda hata verilir.   
Hata Giderme: Cihazın bulunduğu mahale atmosferi gören bir menfez sağlayınız.   
  
_x nolu hattaki hermetik cihazın açık alana bağlantısı yok:_ Hermetik cihazların hava bağlantı borusu atmosfere ulaşmıyorsa bu hata verilir.   
Hata Giderme: Hermetik cihazın baca çıkış istikametini atmosferi görecek şekilde belirleyiniz.   
  
_x nolu hattaki A Tipi genel cihazın bulunduğu m mahallinde alarm cihazı bulunmuyor :_ Ocak tipi ticari cihazların bulunduğu mahlde alarm cihazı bulunmalıdır.   
Hata Giderme: Bu cihazların bulundğu mahallere alarm cihazı ekleyiniz.   
  
_x nolu hattaki cihazın gaz giriş kotu tavana çok yakın:_ Duvara asılan cihazlar tavanadan en az 15 cm aşağıda konumlanmalıdır.   
Hata Giderme: İlgili cihazın kotunu düşürmek için cihaz hattını aşağıya doğru uzatınız.   
  
_x nolu hattaki cihazın gaz giriş kotu zeminden çok yüksek:_ Zemine sabitlenen cihazlara gazın sağlandığı hattın kotu, cihazdan flex boyunun müsade ettiği ölçüde uzak olabilir.   
Hata Giderme: Cihaz hattını aşağıya doğru uzatınız.   
  
_x nolu hattaki cihaz gaz hattına çok uzak:_ Cihazlar yatay düzlemde kendilerine gaz sağlıyan hattan ancak flexin müsade ettiği ölçüde uzak olabilirler.   
Hata Giderme: Cihazı kırmızı taşıma noktasından hatta doğru taşıyınız.   
  
**21\. Cihaz vana hatası  
  
**_x nolu hattaki cihazın cihaz vanası yok:_ Bir cihaza giden gazı kontrol etmek için cihaz hattında bir cihza vansı bulunmadığında bu hata verilir.   
Hata Giderme: Bahsi geçen cihaz hattına cihaz vanası ekleyiniz.   
  
_x nolu hattaki cihazın cihaz vanası cihaza yeterince yakın değil:_ Cihaz vanası , cihaz 1.5 metrelik hat mesafesinde bulunmalıdır.   
Hata Giderme: Bahsi geçen cihaz vanasını cihaza daha yakın bir hat noktasına yerleştiriniz.   
  
_x nolu hattaki cihazın cihaz vanası ile cihaz farklı mahallerde bulunuyor.:_ Cihaz vanası ile cihaz aynı mahalde olmalıdır. Tipik bir hata olarak, örneğin balkonda bulunan kombinin cihaz vanası , hat balkona girmeden konulursa bu hata verilir.   
Hata Giderme: Bahsi geçen cihaz vanasını cihazın bulunduğu mahalde yer alan bir hat noktasına yerleştiriniz.   
  
**22\. Servis kutusu hatası  
  
**_Servis kutusu bina dışında olmalıdır: S_ ervis kutusu bina içine taşındığında bu hata verilir.   
Hata Giderme: Servis kutusunu bina dışına taşıyınız.