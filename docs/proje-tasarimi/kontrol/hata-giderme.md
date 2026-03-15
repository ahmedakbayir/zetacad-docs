# Hata Giderme

**Hata Giderme**

Kontrol sonucu raporda çok çesitli hatalar bildirililebilir. Bu hatalar ;
- TS7363 şartnamesinden doğan hatalar,
- Yerel gaz dağıtım şirketinizin özel hususlar belirlemesinden doğan hatalar,
- Programın teknik gereklilikleri sebebiyle doğan hatalar 
- proje verilerinin gaz şirketindeki verilerle uyuşmaması konusunda verilen hatalar,

gibi çok farklı şekillerde olabilir. 

Bu hatalar her versiyon verildiğinde değişiklik gösterebilir. Bazıları için ne anlama geldiklerini ve bunları gidermek için ne yapmak gerektiğini bu bölümden inceleyebilirsiniz. Burada gösterilmek istenen hataların formatı ve hataları gidermek için nasıl yaklaşmamız gerektiğidir. 

!!! tip "Kontrol Navigasyonu"
    Zetacad programının en güçlü olduğu yönlerden biri, bir hata metnine çift tıkladığınızda sizi doğrudan hata konumuna yönlendirecektir. Örneğin 30 dairelik bir projede bir cihazla ilgili hata verildiğinde bu hatayı bulmak için tüm projeyi tek tek aramak zorunda kalmayacağız. 
  


## Örnek Hatalar ve Giderilme Yolları

#### **1\. Vaziyet Planı Hataları** 

**Vaziyet Planı Düzenlenmemiş:** Zetacad, vaziyet planı ile ilgili bir bilgiye ulaşamadığı zaman bu hatayı raporlar.   


_Hata Giderme:_ Bu hatayı gidermek için menüden veya araç çubuğundan vaziyet planını çağırarak, otomatik olarak düzenlenmesini sağlayınız.   
  
--

**Vaziyet Planında en az 2 sokak belirtilmeli:** Yerel şartnamenize göre vaziyet planında belirli sayıda 2 sokağın belirtilmesi gerekmektedir.   

_Hata Giderme:_ Vaziyet planına girerek sokakları belirtiniz.   
  
--

**Proje bilgilerinde yer alan sokak vaziyet planında bulunmuyor:** Binanın bulunduğu sokağı proje bilgilerinde tanımladınız ancak vaziyet planında bu sokak belirtilmemiş.   

_Hata Giderme:_ Bu hatayı gidermek için vaziyet planına giriniz ve proje bilgilerinde yer alan sokağı vaziyet planında belirtiniz.   
  
#### **2\. Mimari Tanım Hataları** 

**X Kat Planında Tanımsız Mahal:** Bahsi geçen kat planında tanımlanmamış mahal var.   

_Hata Giderme:_ Tanımlanmamış tüm mahalleri sağ tuş menüsünden veya özellikler panelinden tanımlayınız.   

--

**X Kat Planında Tanımsız Birim:** Bahsi geçen kat planında, tanımsız mahaller yüzünden bir birimin ne olduğu anlaşılamamıştır. Aynı şekilde bir birimde yer alan mahallerin hepsi tanımlı olsa dahi, eğer herhangi bir ayırdedici mahal yoksa, yine aynı şekilde birimin tipi (mesken,dükkan,ortak mahal) belirlenemez.   

_Hata Giderme:_ Tanımlanmamış tüm mahalleri sağ tuş menüsünden veya özellikler panelinden tanımlayınız. Aynı şekilde bir birimde aşağıdaki ayırdedici mahallerden birisinin bulunmasına dikkat ediniz.   
  
Zetacad birim içersindeki ayırdedici mahallerin analizini şu sırayla yapar. Herhangi bir ayıredici mahalli bulursa o birim tanımlanmış olur.   
  
1\. Yatak Odası,Oturma Odası, Koridor,Antre,WC,Banyo,Mutfak,Yemek Odası,Salon,Kiler vs mahallerinden birisini içerirse; dairedir.  

2\. Sahanlık,Asansor, Aydınlık, Açık Aydınlık,Bodrum,Çatı Arası mahallerinden birisini içerirse; ortak mahaldir.  

3\. Ofis,Atelye,Dükkan,Kahvehane,Bakkal,Market,Lokanta,Kantin,Çay Ocağı mahallerinden birisini içerirse; dükkandır.   
  
--

**X Kat Planında Tanımsız Merdiven :** Zetacad , bahsi geçen katta gerektiği halde bir merdivenin bulunmadığını tespit etmiştir.   

_Hata Giderme:_ İlgili kata en az bir merdiven yerleştiriniz.   
  
#### **3\. Eksik Bilgi Hataları** 

**Firma Bilgileri Eksik :** Projede yer alması gereken firmaya ait herhangi bir bilginin tanımlanmamış olduğu durumlarda bu hata verilir.   

_Hata Giderme:_ Ayarlar Menüsünden Firma bilgilerine girerek eksik bilgileri tamamlayınız. 

--

**Proje Bilgileri Eksik:** Projede yer alması gereken ve projeye ait herhangi bir bilginin tanımlanmamış olduğu durumlarda bu hata verilir.   

_Hata Giderme:_ Proje Menüsünden Proje bilgilerine girerek eksik bilgileri tamamlayınız.  

**4.Yasak mahalden tesisat geçiyor** 

**X planında Y mahallinden tesisat geçiyor:** Aydınlık, açık aydınlık, asansör ve çatı arası gibi ortak mahllerden tesisat geçtiğinde bu hata verilir.   

_Hata Giderme:_ Bu hatayı düzeltmek için ilgili kat planında mahali gaz tesisatından arındırınız.   
  
#### **5\. Dış kapısı olmayan birim var** 

**X Planında dış kapısı olmayan birim var:** Bir birimin sahanlığa ya da bina dışına açılan bir kapısı olmadığı zaman bu hata verilir.   

_Hata Giderme:_ İlgili kat planında dış kapısı olmayan birime dış kapı olabilecek bir kapı ekleyiniz. Dış kapı sahanlığa ya da bina dışına açılmalıdır.   
  
#### **6\. Kabul edilemeyen hız değeri** 

**N nolu hatta x m/sn hızı izin verilenin üstünde:** İlgili hatta hesaplanan hız değeri, 21 mbar da 6 m/sn, 300 mbar da ise 15 m/sn limitinin üzerinde olduğundan kabul edilemez.   

_Hata Giderme:_ Hızı düşürmek için hattın boru çapını yükseltiniz.   
  
**7.Kayıp limiti aşılıyor** 

**x devresinde toplam kayıp p mbar limitinin üzerinde :** ilgili hat devresinde toplam kayıp p (1.0 veya 0.8 mbar) değerinin üzerinde. Kayıp miktarı şartnamede belirtilen sınırın üzerinde olduğunda bu hata verilir.   

_Hata Giderme:_ İlgili devrede çapları yükselterek basınç kaybını düşürün veya otomatik tasarla komutu ile çapları kayıp limitlerini dikkate alacak şekilde otomatik olarak tasarlatınız.   
  
--

**1 nolu hattaki sayaca giren 300 mbarlık devrede basınç kaybı 21 mbar limitinin üzerinde :** 300 mbarlık hat devresinde ilgili hat sonunda sayaca kadar olan kayıp en fazla 21 mbar olabilir. 21 mbar üzerindeki kayıplar teknik olarak bir sorun oluşturmasa da faturalama esaslarına aykırı olduğu için izin verilmez.   

_Hata Giderme:_ İlgili devrede çapları yükselterek basınç kaybını düşürün veya otomatik tasarla komutu ile çapları kayıp limitlerini dikkate alacak şekilde otomatik olarak tasarlatınız.   
  

#### **8\. Hat yükü belirsiz** 

**1 nolu hatta belirlenebilen bir yük yok :** Bir hat devresi kolon tesisatında ise bir tüketim vanası ile, daire içinde ise bir cihaz ile sonlanmalıdır. Aksi takdirde o devredeki geriye doğru ilk yüklü ayrıma kadar tüm hatlarda bir yük belirlenemediğinden, bu hata oluşacaktır.   

_Hata Giderme :_ Devrenin sonunda yük oluşturacak bir unsur ekleyiniz. (Tüketim Vanası, Yan Bina Ağzı, Cihaz)   
  
--

### **9.Tüketim vanası hatası** 

**1 nolu hatta tüketim vanasının birim numarası belirsiz :** 1 nolu hattın ucunda yer alan tüketim vanası bir birimle ilişkili değil.   

_Hata Giderme:_ Vana seçiliyken özellikler panelinde birim kutusuna daire no veya dükkan noyu giriniz. Birim numarası vana seçiliyken Ctrl+U kısayoluna basılarak açılan kutucuğa yazılarak da belirlenebilir.  

--

**1 nolu hatta ticari tüketim vanasından sonra selenoid vana kullanılmalıdır :** 1 nolu hattın ucunda yer alan tüketim vanası ticari olarak işaretlendiği halde , selenoid olarak işaretlenmemiş. Ticari kullanımlarda teknik şartname selenoid kullanımını sorunlu kılar.   

_Hata Giderme:_ Bahsi geçen vananın özelliklerinde yer alan, **selenoid vana kullanılmıştır** seçeneğini işaretleyiniz. 

--

**1 nolu hatta tüketim vanası aşırı yükten ötürü ticari olarak işaretlenmelidir :** 1 nolu hattın ucunda yer alan tüketim vanası yüksek kapasiteli bir genel cihaza (ticari cihaz) hizmet verdiği için ticari olduğu belirtilmelidir. Aynı şekilde eğer tesisat kahvehane,lokanta, çay ocağı gibi bir mahalde bulunarak devamlı gaz kullanan bir ocağa hizmet veriyorsa da bu hata verilir.   

_Hata Giderme:_ Vananın özelliklerinde yer alan, ticari (aşırı yük) seçeneğini işaretleyiniz.   

--

**D1 vanasının birim numarası birden fazla kullanılmış:** Birden fazla vana aynı birim ile ilişkilendirildiğinde bu hata verilir.   

_Hata Giderme:_ Vanaların birim numralarının farklı olmasına dikkat ediniz.   
  

#### **10\. Vananın flanşlı olması gerekiyor** 

**1 nolu hatta DNr çaplı vananın flanşlı olması gerekiyor:** DN65 ve ondan büyük çaplı bir vana flnaşlı olarak belirtilmediği zaman bu hata verilir.   

_Hata Giderme:_ Bahsi geçen vanayı özelliklerinden flanşlı olarak belirtiniz.   
  

#### **11\. Sayaçtan önce tüketim vanası gerekiyor** 

**1 nolu hattaki sayaçtan önce tüketim vanası gerekmektedir :** 1 nolu hattin ucunda yer alan sayaçtan önce bir tüketim vanası bulunmuyor.   

_Hata Giderme:_ Sayaca servis veren hatta bir tüketim vanası ekleyiniz.   
  

#### **12\. Sayaç tipi mevcut debi için uygun değil** 

**1 nolu hattaki sayaç taşıdığı debi için yeterli değil :** 1 nolu hattın ucuna yerleştirilen sayacın , taşıdığı debi izin verilenin üstünde.   

_Hata Giderme:_ Daha yüksek debili bir sayaç seçiniz.   
  
--

**1 nolu hattaki sayaç taşıdığı debi için fazla büyük :** 1 nolu hattın ucuna yerleştirilen sayacın , taşıdığı debi izin verilenin altında.   

_Hata Giderme:_ Daha düşük debili bir sayaç seçiniz.   
  

#### **13\. Basınç uygun değil** 

** 

**1 nolu hattaki sayaca giren hat basıncı 21 veya 300 mbar değerinde olmalıdır :** Doğalgaz sayaçları ancak 21 mbar veya 300 mbarlık gaz akışını ölçebilir. 1 nolu hattın ucundaki sayaca, bu basınçların arasındaki bir değerde gaz gelirse bu hata verilir.   

_Hata Giderme:_ Servis kutusu basıncının istediğiniz basınç olmasına dikkat ediniz. Eğer 50 mbar gibi bir ara basınç kulanmak istiyorsanız, regülatörü sayaçtan sonra yerleştirin ve sayaca 300 mbarlık gaz akışını sağlayın, veya sayaçtan önce regülatör koyarak çıkışını 21 mbara ayarlayın.   
  
--

**1 nolu hatta hattaki cihaz işletme basıncı 21 mbar olmalıdır:** Ocak,kombi,soba,şofben gibi standart cihazlar 21 mbarlık basınçla çalıştırılmalıdır. Eğer bu tür bir cihaza daha yüksek bir basınçla gaz geliyorsa bu hata verilir.   

_Hata Giderme:_ Servis kutusu basıncının istediğiniz basınç olmasına dikkat ediniz. Eğer 300 mbar kullanıyorsanız standart ev cihazlarına tesisat girmeden bu basıncı regülatör ile 21 mbara düşürünüz. Eğer yüksek basınçta çalışan özel bir cihaz kullanmak istiyorsanız standart cihazlar yerine Genel Cihaz kullanınız.   
  

#### **14\. Açık alanda muhafaza gerekmektedir** 

**Açık alandaki 1 nolu hattaki tesisat elemanı muhafazalı olmalıdır :** Cihaz, vana ve sayaçlar açık alanda oldukları zaman muhafaza içine alınmalıdır.   

_Hata Giderme:_ İlgili tesisat elemanını özellikler panelinden muhafazalı işaretleyiniz.   
  

#### **15\. Ana kesme vanası hatası** 

**Kolon hattında Ana Kesme Vanası gerekmektedir:** Tesisatın gaz akışını kontrol edebilecek bir ana kesme vanası kolon hattında bulunmuyor.   

_Hata Giderme:_ Uygun yere bir AKV ekleyiniz.

--

**Ana Kesme Vanası tüm tüketimi kontrol etmelidir :** Ana kesme vanası bina bağlantı hattından sonraki bir ayrıma konulmuşsa, diğer ayrımları kontrol edemeyeceğinden bu hata verilir.   

_Hata Giderme :_ Ana Kesme vanasını bina içindeki tüm hatlara giden gazı kesecek bir yere yerleştirin. Bu yerde hattın debisi toplam kapasiteye eşittir. (Ana Kesme Vanası yan bina ayrımını kontrol etmemelidir)   
  
--

**Ana Kesme Vanası sahanlık veya bina dışında bulunabilir :** Ana kesme vanası bina dışında muhafazalı veya bina içinde sahanlıkta olmalıdır.   

_Hata Giderme:_ Ana kesme vanasını bahsi geçen yerlerden birine yerleştiriniz.   
  
--

**Bina bağlantı hattında bina girişinden önce Ana Kesme Vanası gerekmektedir:** Eğer tesisat, binaya sahanlık harici farklı bir yerden doğrudan giriyorsa (örneğin gömülü olarak bodruma), gazı kontrol edebilmek için bina dışında bir AKV olması gerekmektedir.   

_Hata Giderme:_ Bina dışındaki hatta bir AKV yerleştiriniz.   
  
--

**Bina sahanlığında Ana Kesme Vanası gerekmektedir:** Bir önceki hatada izah edilen durumlarda, dışarıdaki AKV ye ek olarak içeride, hat binaya girdiği yerden tekrar sahanlığa ulaştığı zaman, tesisatta bir AKV bulunmalıdır.   

_Hata Giderme:_ Sahanlıktaki kolon hattına bir AKV yerleştiriniz.   
  

#### **16\. Kolon hattı hatası** 

**Kolon hattında topraklama çubuğu gerekmektedir :** Kolon hattında topraklama çubuğu bulunmuyorsa bu hata verilir.   

_Hata Giderme:_ Kolon hattına bir topraklama çubuğu ekleyiniz.   

--

**Topraklama çubuğu bina dışında olmalıdır :** Topraklama çubuğu bina içine yerleştirildiğinde bu hata verilir.   

_Hata Giderme:_ Topraklama çubuğunu bina dışına yerleştiriniz.   
  
--

**Kolon hattında Gömülü hattan sonra izolasyon flanşı gerekmektedir :** Gömülü hattan sonra izolasyon flanşı olmadığı durumlarda bu hata verilir.   

_Hata Giderme:_ Gömülü hattan sonra izolasyon flanşı ekleyiniz.   
  
--

**1 nolu kolon hattı için DN15 çapı ugun değil :** Kolon hattında hız ve kayıp limitlerini kurtarsa dahi DN15 çapına izin verilmez.   

_Hata Giderme:_ Bahsi geçen hattın çapını yükseltiniz.   
  

#### **17\. Hat yanlış mahalden geçiyor** 

**1 nolu hat kolon içerisinden geçiyor:** Mimari yapı elemanı kolonlar içinden hat geçişine izin verilmez.   

_Hata Giderme:_ Bahsi geçen hattı kolon etrafından dolaştırınız.   
  
--

**1 nolu hat kiriş içerisinden geçiyor:** Mimari yapı elemanı kirişler içinden hat geçişine izin verilmez.   

_Hata Giderme:_ Bahsi geçen hattı kiriş etrafından dolaştırınız.   
  
--

**1 nolu iç tesisat hattı birim sınırını ihlal ediyor:** Bir iç tesisat hattı yan, üst veya alt birime (daire,dükkan) geçemez.   

_Hata Giderme:_ Bahsi geçen hattın birim içinde dolaşmasına dikkat ediniz. 
  
--

**1 nolu kolon hattı özel mahalden geçiyor:** Bir kolon hattı özel bir birimden (daire, dükkan) geçemez.   

_Hata Giderme:_ Bahsi geçen hattın ortak mahal içinde dolaşmasına dikkat ediniz.   
  
--

**1 nolu kolon hattı havalandırmasız mahalden geçiyor:** Bir kolon hattı sahanlık harici bir ortak mahlden geçerse, o mahalde havalandırma veya gaz alarm cihazı bulunmalıdır.   

_Hata Giderme:_ Bahsi geçen hattın geçtiği mahalli menfez ile havalandırınız veya mahale alarm cihazı ekleyiniz.   
  

#### **18\. Emniyet vanası gerekmektedir** 

**1 nolu hatta emniyet vanası gerekmektedir:** Bahsi geçen hatta özel bir nedenden ötürü gaz akışını kontrol etmek için emniyet vanası gerekmektedir. Emniyet vanası, bir birime giren tüketim hattının tüketim vanası, birimin dış kapısından ulaşılamıyacak veya uzak bir mesafedeyse, birim içinde veya birim kapısı yakınında birim içi gaz akışını kontrol edecek bir hat lokasyonunda, kapıdan veya birim içinden ulaşılabilecek bir yerde istenir.   

_Hata Giderme:_ Bahsi geçen hatta bir emniyet vanası ekleyiniz.   

--

**1 nolu kolon ayrımında emniyet vanası (K.K.V) gerekmektedir:** Kolon hattında, eğer tesisat katlara farklı kollardan hizmet verecek  dallara ayrılıyorsa her ayrımda bir KKV gerekir.   

_Hata Giderme:_ Bahsi geçen ayrıma bir KKV ekleyiniz. KKV vanaları Zetacad'de emniyet vanası olarak ele alınır.   
  

#### **19\. Sayaç konum hatası** 


**1 nolu hattaki sayaç ortak mahal veya bina dışında bulunmalıdır:** Eğer bir sayaç özel mahade bulunuyorsa bu hata verilir.   

_Hata Giderme:_ Bahsi geçen sayacı ortak mahal veya bina dışına yerleştiriniz.   
  
--

**1 nolu hattaki sayaç konumu ile hizmet verdiği birim arasındaki kat farkı izin verilenin dışında:** Bir sayaç hizmet verdiği birimden en fazla 2 kat yukarıda veya aşağıda konumlanabilir.   

_Hata Giderme:_ Bahsi geçen sayacı hizmet verdiği birimin katına veya yakın bir kata yerleştiriniz.   
  

#### **20\. Cihaz konum hatası** 

**1 nolu hattaki cihaz konumu belirlenemiyor,muhtemelen binaya bağlantısız durumda:** Cihazlar duvarlarla ilişkili olmalıdır.   

_Hata Giderme:_ Bahsi geçen cihazı bir duvarla ilşkilendiriniz.   
  
--

**1 nolu hattaki cihaz sayaç kullanılmayan tüketim hattında:** Bir cihaza giden gazın miktarı ölçülmelidir, dolayısıyla cihazlar sayaç kullanılmayan hatlara yerleştirilemez.   

_Hata Giderme:_ Bahsi geçen cihazdan önce bir sayacın olmasına dikkat ediniz.   
  
--

**1 nolu hattaki cihazın bulunduğu alanı tanımlayınız:** Cihazlar tanımsız mahallere konumlanamazlar.   

_Hata Giderme:_ Cihazın bulunduğu mahali tanımlayınız.   
  
--

**1 nolu hattaki cihazın menfez ile paylaştığı alanı tanımlayınız:** Cihazlar bulundukları mahal dışındaki mahalleri menfez yoluyla paylaşıyorsa o mahaller tanımlı olmalıdır.   

_Hata Giderme:_ Cihazın bulunduğu mahalden menfez açılan yan mahal ya da mahalleri tanımlayınız.   
  
--

**1 nolu hattaki cihaz m mahallinde bulunamaz:** Bacalı cihazlar ve ocaklar Yatak odası,çocuk odası,banyo,WC gibi mahalerde bulunamaz.   

_Hata Giderme:_ Cihazı bu mahallerin haricindeki mahallere yerleştiriniz veya mahallin tanımını değiştiriniz.   
  
--

**1 nolu hattaki cihaz m mahallini menfez yoluyla paylaşamaz:** Bacalı cihazlar ve ocakların bulunduğu mahallerden yatak odası,çocuk odası,banyo,WC gibi mahallere menfez açılamaz.   

_Hata Giderme:_ Cihazın mahallinden bu mahalle olan menfezi kaldırınız veya paylaşılan mahallin tanımını değiştiriniz.   
  
--

**1 nolu hattaki cihaz ortak mahalde bulunamaz:** Cihazlar aydınlık,sahanlık,asansör gibi ortak mahallerde bulunamaz.   

_Hata Giderme:_ Cihazı ortak mahalden özel mahale taşıyınız.   
  
--

**1 nolu hattaki cihaz ulaşılabilir(kapısı olan) bir mahalde olmalıdır:** Cihazlar ulaşımın kapı ile mümkün olduğu mahallerde bulunmalıdır.   

_Hata Giderme:_ Cihazın bulunduğu mahale kapı açınız.   
  
--

**1 nolu hattaki cihaz y m³ altındaki mahalde bulunamaz:** Bacalı cihazlar en az 8 m³ olmak üzere kapasitesine göre belirli bir hacime sahip bir mahalde bulunmalıdır. Ocaklar en az 12 m³ lük bir hacme sahip mahallerde bulunabilirler. Bir cihaz gerekli hacime sahip bir mahalde değilse bu hata verilir.   

_Hata Giderme:_ Cihazın bulunduğu mahallin hacmini alt üst havalandırma ile yan mahallerle birleştiriniz.   
  
--

**1 nolu hattaki cihazın bulunduğu m mahallinde açık alana hava menfezi bulunmuyor:** Bacalı cihazlar ve ocaklar atmosfere açılan bir menfezin olduğu mahallerde bulunabilirler. Eğer atmosfere bakan bir duvar yoksa, yan mahalle açılan alt-üst havalandırma ile, yan mahale eklenen menfez yoluyla dolaylı havalandırma da yapılabilinir. Aksi durumlarda hata verilir.   

_Hata Giderme:_ Cihazın bulunduğu mahale atmosferi gören bir menfez sağlayınız.   
  
--

**1 nolu hattaki hermetik cihazın açık alana bağlantısı yok:** Hermetik cihazların hava bağlantı borusu atmosfere ulaşmıyorsa bu hata verilir.   

_Hata Giderme:_ Hermetik cihazın baca çıkış istikametini atmosferi görecek şekilde belirleyiniz.   
  
--

**1 nolu hattaki A Tipi genel cihazın bulunduğu m mahallinde alarm cihazı bulunmuyor :** Ocak tipi ticari cihazların bulunduğu mahalde alarm cihazı bulunmalıdır.   

_Hata Giderme:_ Bu cihazların bulundğu mahallere alarm cihazı ekleyiniz.   
  
--

**1 nolu hattaki cihazın gaz giriş kotu tavana çok yakın:** Duvara asılan cihazlar tavandan en az 15 cm aşağıda konumlanmalıdır.   

_Hata Giderme:_ İlgili cihazın kotunu düşürmek için cihaz hattını aşağıya doğru uzatınız.   
  
--

**1 nolu hattaki cihazın gaz giriş kotu zeminden çok yüksek:** Zemine sabitlenen cihazlara gazın sağlandığı hattın kotu, cihazdan flex boyunun müsade ettiği ölçüde uzak olabilir.   

_Hata Giderme:_ Cihaz hattını aşağıya doğru uzatınız.   
  
--

**1 nolu hattaki cihaz gaz hattına çok uzak:** Cihazlar yatay düzlemde kendilerine gaz sağlıyan hattan ancak flexin müsade ettiği ölçüde uzak olabilirler.   

_Hata Giderme:_ Cihazı hattın ucuna yaklaştırarak fleks boyunu kısaltınız.
  

#### **21\. Cihaz vana hatası** 

**1 nolu hattaki cihazın cihaz vanası yok:** Bir cihaza giden gazı kontrol etmek için cihaz hattında bir cihza vansı bulunmadığında bu hata verilir.   

_Hata Giderme:_ Bahsi geçen cihaz hattına cihaz vanası ekleyiniz.   
  
--

**1 nolu hattaki cihazın cihaz vanası cihaza yeterince yakın değil:** Cihaz vanası , cihaz 1.5 metrelik hat mesafesinde bulunmalıdır.   

_Hata Giderme:_ Bahsi geçen cihaz vanasını cihaza daha yakın bir hat noktasına yerleştiriniz.   
  
--

**1 nolu hattaki cihazın cihaz vanası ile cihaz farklı mahallerde bulunuyor.:** Cihaz vanası ile cihaz aynı mahalde olmalıdır. Tipik bir hata olarak, örneğin balkonda bulunan kombinin cihaz vanası , hat balkona girmeden konulursa bu hata verilir.   

_Hata Giderme:_ Bahsi geçen cihaz vanasını cihazın bulunduğu mahalde yer alan bir hat noktasına yerleştiriniz.   
  

#### **22\. Servis kutusu hatası** 


**Servis kutusu bina dışında olmalıdır :** Servis kutusu bina içine taşındığında bu hata verilir.  

_Hata Giderme:_ Servis kutusunu bina dışına taşıyınız.