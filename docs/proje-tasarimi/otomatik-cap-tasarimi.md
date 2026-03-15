# Otomatik Çap Tasarımı

**Otomatik Çap Tasarımı**
  
Tesisatın konumlandırmasını tamamladıktan sonra, yani hatlarınızı çizip tüketim unsurlarını yerleştirdikten sonra eğer isterseniz Zetacad sizin için en uygun hat çaplarını hesaplayarak tasarlayabilir. Burada çok özel **yapay zeka algoritmaları** kullanılarak, bir hattın çapı tüm devredeki kayıp miktarı, hattaki gaz hızı ve maliyet ekonomisi dikkate alınarak çaplandırma yapılır.   
  
Otomatik çaplandırmayı yaptırmak içim _Hesap_ menüsünden _Otomatik Tasarla_ seçeneğini tıklayınız veya araç çubuğundan _Otomatik Tasarla_![clip0030](../assets/resimler/clip0030.jpg) butonuna basınız. 
  
Çaplar seçilirken özel yapay zeka algoritması bir çok seçeneği dener ve   
  
a. hız limitlerini aşmayan (hatta zorlamayan)   
b. devredeki toplam kayıp limitini dikkate alan   
c. özellikle daire içi ve kat branşmanlarında estetiği gözeten   
d. mümkün olan en düşük maliyetli   
e. kullanıcının özel isteklerine cevap veren   
  
optimum tasarımı oluşturur.   
  
**Tasarım Seçenekleri**

_Hesap_ menüsünden _Otomatik Tasarla_ seçeneğini tıkladığınızda karşınıza aşağıdaki pencere açılacaktır.   
  
![tasar](../assets/resimler/tasar.png)  
  
Bu penceredeki seçenekleri kullanarak otomatik çap tayini algoritmasının sizin tercihlerinize göre davranmasını sağlayabilirsiniz. Çap tasarımında özelleştirebileceğiniz hususlar aşağıda açıklanmıştır. Bu penceredeki değerleri belirledikten sonra _TAMAM_ butonuna basarsanız tesisat otomatik olarak çaplandırılacaktır. Bu pencerede sisteme verdiğiniz tercihlerin son değerleri projede saklı tutulacaktır. Araç çubuğundaki ilgili _tasarla_ butonuna bastığınızda artık bu pencere açılmayacak ve son mevcut tercihlerle tasarlama yapılacaktır.


**En düşük kolon çapı**
  
Bazen hız ve kayıp değerleriyle uyumlu olsa de kolon tesisatında ve branşmanlarda DN20 gibi düşük çaplı boru kullanmak istemeyiz. Bu elimizdeki malzemenin durumu ile ilgili olduğu gibi değişik nedenlerle de alakalı olabilir. Varsayılan değeri DN20 olan _En düşük kolon çapı_ seçeneğini isterseniz DN25 yapabilirsiniz. Böylelikle otomatik tasarım kolon çaplarını oluştururken DN25 altındaki değerleri kullanmayacaktır.   
  
**En yüksek kolon çapı**

Bazen hız ve kayıp değerleriyle uyumlu olsa de kolon tesisatında ve branşmanlarda yüksek çaplı boru kullanmak istemeyiz. Bu elimizdeki malzemenin durumu ile ilgili olduğu gibi değişik nedenlerle de alakalı olabilir. Varsayılan değeri DN80 olan _En yüksek kolon çapı_ seçeneğini isterseniz daha küçük değerlerden seçebilirsiniz. Böylelikle otomatik tasarım kolon çaplarını oluştururken seçtiğiniz değerin üstündeki çapları kullanmayacaktır.