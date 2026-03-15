# Servis Kutusu

**Servis Kutusu**
  
Servis kutusu kolon tesisatı için en zorunlu elemandır ve tesisat ancak servis kutusu ile başlatılabilinir. Servis kutusunu eklemek için bir komut çağırmanıza gerek yoktur, Sıfır projede tesisat moduna geçtiğinizde eğer henüz bir servis kutunuz yoksa Zetacad otomatik olarak en uygun duvara servis kutusunu yerleştirir ve kullanıcılar isterlerse servis kutusunu sürükleyeek istedikleri herhangi bir konuma taşıyabilirler. Servis kutusunun tüm bilgilerine ilgili [özellikler](../../../program-arayuzu/ozellikler-paneli/servis-kutusu.md) panelinden ulaşarak hem izleyip hem değiştirebilirsiniz.   
  
![skMove](../../../assets/resimler/skMove.png)   
  

**Servis kutusu taşınırken**
 Servis kutusunun konumu ile ilgili olarak bilinmesi gereken önemli bir nokta, kutunun duvarla olan zayıf bağımlılığıdır. Yani servis kutusu  bir duvarın iç veya dış sathında konumlanabilir ama istenirse uzaklaştırılabilir de.
  
**Servis Kutusu Tipleri**

Servis kutusunun tipini özellikler panelinden belirleyebeilirsiniz. Kutu tipine göre şu davranışlar sergilenir.  
  
**S200**   
S200 servis kutusu duvar yüzeyinde konumlanabilir, ve yandan veya önden hat çıkışı sağlayabilir.   
  
  
**S300**   
S300 servis kutusu duvar yüzeyinde konumlanabilir, ve sadece önden hat çıkışı sağlayabilir.   
  
**CES200**   
CES200 servis kutusu duvar yüzeyinde konumlanabilir, ancak mesafe değeri girilerek duvardan açığa yerleştirilebilir. CES200 kutusu sadece arkadan hat çıkışı sağlayabilir.   

Bunlardan başka; S700, S2200, S2300, CES300 gibi seçenekler de vardır.
  
  
**Servis Kutusu Hat Çıkışı**

Servis kutusu özellikler panelinde kutunun hat çıkışı belirlenmiştir. Kutu çıkış şekli kutu tipine göre izin veriliyor ise değiştirilebilir. Kutu çıkışı aynı zamanda tesisatın başlangıç noktasını da belirler.   
  
**Servis Kutusu Basıncı**

Servis kutusu hizmet basıncı, 300 veya 21 mbar olarak ayarlanabilir. Servis kutusunun basıncı sadece bir tanım değil aynı zamanda hat tasarım ve hasabını etkileyen bir seçenektir. Eğer basınç 21 mbar olarak verilirse, tesisatın tüm hatlarında basınç 21 mbar olarak varsayılır ancak eğer kutu basıncı 300 mabr olarak belirlenirse, tesisatın hatlarındaki basınçlar regülatörlerin konum ve çıkış basınçlarına göre belirlenir.   

Örnek olarak; servis kutusu basıncı 300 mabr olarak verilirse; program gazın hareketini 300 mbar olarak takip eder ve tesisatta herhangi bir regülatöre rastlarsa, bu noktadan sonra regülatörün servis verdiği hatlarda ki basıncı regülatör çıkış basıncından alır.  
  