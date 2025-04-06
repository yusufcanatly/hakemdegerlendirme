import Link from 'next/link';

export default function KVKKPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 my-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Kişisel Verilerin Korunması ve Gizlilik Politikası</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">
          Son güncellenme: {new Date().toLocaleDateString('tr-TR')}
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. GİRİŞ</h2>
        <p>
          Hakem Değerlendirme Platformu ("Platform", "biz", "bizim") olarak kişisel verilerinizin güvenliğine önem veriyoruz. 
          Bu Gizlilik Politikası, platformumuzu kullanırken toplanan, işlenen ve paylaşılan kişisel verilerinizle ilgili 
          uygulamalarımızı açıklamaktadır. Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 
          kapsamında hazırlanmıştır.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. TOPLADIĞIMIZ KİŞİSEL VERİLER</h2>
        <p>
          Platformumuz aracılığıyla aşağıdaki kişisel verileri toplayabiliriz:
        </p>
        <ul className="list-disc ml-6 my-4">
          <li><strong>Kimlik Bilgileri:</strong> Ad, soyad</li>
          <li><strong>İletişim Bilgileri:</strong> E-posta adresi</li>
          <li><strong>Hesap Bilgileri:</strong> Kullanıcı adı, şifre</li>
          <li><strong>Kullanım Verileri:</strong> Platform içi etkinlikleriniz, değerlendirmeleriniz</li>
          <li><strong>Teknik Veriler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. KİŞİSEL VERİLERİN İŞLENME AMAÇLARI</h2>
        <p>
          Kişisel verilerinizi aşağıdaki amaçlar doğrultusunda işlemekteyiz:
        </p>
        <ul className="list-disc ml-6 my-4">
          <li>Platformumuza kayıt ve hesap oluşturma süreçlerinin yürütülmesi</li>
          <li>Kullanıcı deneyimini iyileştirme ve kişiselleştirme</li>
          <li>Hakem değerlendirme hizmetlerimizin sunulması</li>
          <li>İstatistiksel analizlerin yapılması</li>
          <li>Yasal yükümlülüklerimizin yerine getirilmesi</li>
          <li>Güvenlik ihlallerinin tespiti ve önlenmesi</li>
          <li>İletişim faaliyetlerinin yürütülmesi</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. KİŞİSEL VERİLERİN SAKLANMASI VE GÜVENLİĞİ</h2>
        <p>
          Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca saklanacaktır. 
          Verilerinizin güvenliğini sağlamak için uygun teknik ve idari tedbirleri alıyoruz. 
          Bu tedbirler arasında veri şifreleme, erişim kontrolü, düzenli güvenlik değerlendirmeleri 
          ve personel eğitimi yer almaktadır.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. KİŞİSEL VERİLERİN PAYLAŞILMASI</h2>
        <p>
          Kişisel verileriniz, aşağıdaki durumlar haricinde üçüncü taraflarla paylaşılmamaktadır:
        </p>
        <ul className="list-disc ml-6 my-4">
          <li>Yasal zorunluluk durumlarında (mahkeme kararı, resmi kurum talebi vb.)</li>
          <li>Hizmet sağlayıcılarımızla (bulut depolama, analiz hizmetleri vb.) - bu durumda veri güvenliği sözleşmeleri yapılmaktadır</li>
          <li>Açık rızanızın bulunduğu durumlarda</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. ÇEREZLER (COOKIES)</h2>
        <p>
          Platformumuz, kullanıcı deneyimini iyileştirmek ve hizmet kalitesini artırmak amacıyla çerezler kullanmaktadır. 
          Çerezler, tarayıcınız tarafından bilgisayarınızda saklanan küçük metin dosyalarıdır. Çerez kullanımı hakkında 
          detaylı bilgi için <Link href="/kvkk/cerez-politikasi" className="text-blue-600 hover:underline">Çerez Politikamızı</Link> inceleyebilirsiniz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. VERİ SAHİBİ HAKLARI</h2>
        <p>
          KVKK'nın 11. maddesi uyarınca, kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
        </p>
        <ul className="list-disc ml-6 my-4">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
          <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
          <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
          <li>KVKK'da öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
          <li>Kişisel verilerinizin aktarıldığı üçüncü kişilere yukarıda belirtilen düzeltme, silme veya yok edilme bildiriminin yapılmasını isteme</li>
          <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
          <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
        </ul>

        <p>
          Bu haklarınızı kullanmak için bizimle <a href="mailto:kvkk@hakemdegerlendirme.com" className="text-blue-600 hover:underline">kvkk@hakemdegerlendirme.com</a> e-posta 
          adresi üzerinden iletişime geçebilirsiniz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. ÇOCUKLARIN GİZLİLİĞİ</h2>
        <p>
          Platformumuz 18 yaşından küçüklere yönelik değildir. 18 yaşın altındaki kişilerden bilerek kişisel veri toplamıyoruz. 
          Eğer 18 yaşından küçükseniz, platformumuzu kullanmadan önce ebeveynlerinizden veya yasal vasinizden izin almanız gerekmektedir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">9. GİZLİLİK POLİTİKASINDA DEĞİŞİKLİKLER</h2>
        <p>
          Bu Gizlilik Politikası'nı dilediğimiz zaman güncelleyebiliriz. Değişiklikler, güncellenmiş politikanın 
          platformumuzda yayınlanmasıyla birlikte yürürlüğe girecektir. Önemli değişiklikler yapıldığında, 
          kayıtlı kullanıcılarımıza e-posta yoluyla bildirim göndereceğiz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">10. İLETİŞİM</h2>
        <p>
          Bu Gizlilik Politikası hakkında sorularınız veya endişeleriniz varsa, lütfen bizimle şu adresten iletişime geçin:
        </p>
        <p className="my-4">
          <strong>E-posta:</strong> <a href="mailto:kvkk@hakemdegerlendirme.com" className="text-blue-600 hover:underline">kvkk@hakemdegerlendirme.com</a><br />
          <strong>Adres:</strong> Atatürk Mah. Ataşehir Bulvarı No:123, 34758 Ataşehir, İstanbul
        </p>
      </div>
    </div>
  );
} 