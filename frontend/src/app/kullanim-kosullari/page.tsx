import Link from 'next/link';

export default function KullanimKosullariPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 my-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Kullanım Koşulları</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">
          Son güncellenme: {new Date().toLocaleDateString('tr-TR')}
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. GİRİŞ</h2>
        <p>
          Bu Kullanım Koşulları, Hakem Değerlendirme Platformu ("Platform", "biz", "bizim") tarafından 
          sunulan hizmetlerin kullanımını düzenleyen şartları ve koşulları belirler. Lütfen platformumuzu 
          kullanmadan önce bu koşulları dikkatlice okuyun. Platformumuza erişerek veya platformumuzu 
          kullanarak bu Kullanım Koşullarını kabul etmiş sayılırsınız.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. HİZMET TANIMI</h2>
        <p>
          Hakem Değerlendirme Platformu, futbol hakemlerinin performansının topluluk tarafından 
          değerlendirilmesine olanak tanıyan bir platformdur. Kullanıcılarımız, maçlar ve hakemler 
          hakkında görüş paylaşabilir, değerlendirme yapabilir ve diğer kullanıcıların değerlendirmelerini 
          inceleyebilir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. HESAP OLUŞTURMA VE GÜVENLİK</h2>
        <p>
          Platformumuzun bazı özelliklerini kullanabilmek için bir hesap oluşturmanız gerekebilir. 
          Hesap oluştururken doğru, güncel ve eksiksiz bilgiler vermeyi kabul edersiniz. Hesabınızın 
          güvenliğini sağlamak ve hesabınız altında gerçekleşen tüm etkinliklerden sorumlu olmak 
          sizin sorumluluğunuzdadır.
        </p>
        <p>
          Hesap güvenliğinizle ilgili bir ihlal veya yetkisiz kullanım fark ederseniz, derhal 
          bize bildirmelisiniz. Hesabınızın güvenliğini sağlamak için güçlü bir şifre kullanmanızı 
          ve bu şifreyi başkalarıyla paylaşmamanızı öneririz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. KULLANICI İÇERİĞİ VE DAVRANIŞI</h2>
        <p>
          Platformumuzda paylaştığınız tüm içeriklerden (yorumlar, değerlendirmeler, geri bildirimler vb.) 
          siz sorumlusunuz. Paylaştığınız içeriklerin aşağıdaki şartları karşılaması gerekmektedir:
        </p>
        <ul className="list-disc ml-6 my-4">
          <li>Yasalara uygun olmalı</li>
          <li>Başkalarının haklarını ihlal etmemeli</li>
          <li>Yanıltıcı, tehditkar, küfürlü, müstehcen, ayrımcı veya nefret söylemi içermemeli</li>
          <li>Spam, reklam veya izinsiz ticari içerik barındırmamalı</li>
          <li>Zararlı yazılım veya virüs içermemeli</li>
        </ul>
        <p>
          Platformumuzda aşağıdaki davranışları sergilememeyi kabul edersiniz:
        </p>
        <ul className="list-disc ml-6 my-4">
          <li>Platformun normal işleyişini engelleme veya bozma</li>
          <li>Diğer kullanıcıları taciz etme veya tehdit etme</li>
          <li>Başka bir kişinin kimliğine bürünme</li>
          <li>Platformu yasadışı faaliyetler için kullanma</li>
        </ul>
        <p>
          Uygunsuz içerik veya davranış tespit ettiğimizde, kendi takdirimize bağlı olarak içeriği 
          kaldırma, hesabınızı askıya alma veya sonlandırma hakkını saklı tutarız.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. FİKRİ MÜLKİYET HAKLARI</h2>
        <p>
          Platform üzerindeki tüm içerik, metin, görseller, logolar, düzenlemeler ve diğer materyaller 
          bizim mülkiyetimizde olup telif hakkı ve diğer fikri mülkiyet hakları kanunları ile korunmaktadır. 
          Platformumuzda paylaştığınız içeriklere ilişkin fikri mülkiyet haklarını elinizde tutarsınız, 
          ancak bu içerikleri platformumuzda yayınlama, dağıtma ve tanıtma için bize evrensel, telifsiz, 
          devredilebilir bir lisans vermiş olursunuz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. SORUMLULUK REDDİ</h2>
        <p>
          Platformumuz "olduğu gibi" ve "mevcut olduğu şekliyle" sunulmaktadır. Platformun kesintisiz, 
          hatasız veya güvenli olacağını garanti etmiyoruz. Platformumuzu kullanmanızdan veya 
          kullanamamanızdan kaynaklanan doğrudan, dolaylı, arızi, özel veya sonuç olarak ortaya 
          çıkan herhangi bir zarardan sorumlu değiliz.
        </p>
        <p>
          Platformumuzda yer alan hakem değerlendirmeleri ve diğer kullanıcı içerikleri tamamen 
          kişisel görüşleri yansıtmakta olup resmi bir değerlendirme niteliği taşımamaktadır. 
          Bu içeriklerin doğruluğu, tamlığı veya güvenilirliği konusunda hiçbir garanti vermiyoruz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. HİZMET DEĞİŞİKLİKLERİ</h2>
        <p>
          Platformumuzu, özelliklerini veya hizmetlerimizi herhangi bir zamanda, herhangi bir 
          sebeple ve size bildirimde bulunmaksızın değiştirme, askıya alma veya sonlandırma 
          hakkını saklı tutarız. Platformun herhangi bir kısmına erişiminizi sınırlama veya 
          engelleme hakkımız da bulunmaktadır.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. ÜÇÜNCÜ TARAF BAĞLANTILARI</h2>
        <p>
          Platformumuz, üçüncü taraflara ait web sitelerine veya hizmetlere bağlantılar içerebilir. 
          Bu bağlantılar sadece bilgi amaçlı sunulmakta olup ilgili siteleri veya hizmetleri 
          onayladığımız anlamına gelmemektedir. Bu bağlantıları takip etmek tamamen sizin 
          sorumluluğunuzdadır ve bağlantı verilen sitelerin içeriği, gizlilik politikaları veya 
          uygulamaları konusunda hiçbir sorumluluk kabul etmiyoruz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">9. KULLANIM KOŞULLARINDA DEĞİŞİKLİKLER</h2>
        <p>
          Bu Kullanım Koşullarını dilediğimiz zaman değiştirme veya güncelleme hakkını saklı tutarız. 
          Değişiklikler, güncellenmiş koşulları platformumuzda yayınladıktan sonra geçerli olacaktır. 
          Önemli değişiklikler yapıldığında, makul yollarla sizi bilgilendirmeye çalışacağız. 
          Değişikliklerden sonra platformumuzu kullanmaya devam etmeniz, güncellenmiş koşulları 
          kabul ettiğiniz anlamına gelecektir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">10. GEÇERLİ HUKUK VE UYUŞMAZLIK ÇÖZÜMÜ</h2>
        <p>
          Bu Kullanım Koşulları, Türkiye Cumhuriyeti kanunlarına tabidir. Bu koşullardan veya 
          platformun kullanımından kaynaklanan herhangi bir anlaşmazlık durumunda, öncelikle 
          sorunu dostane bir şekilde çözmeye çalışacağız. Anlaşmazlığın dostane yollarla 
          çözülememesi durumunda, İstanbul Mahkemeleri ve İcra Daireleri yetkili olacaktır.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">11. İLETİŞİM</h2>
        <p>
          Bu Kullanım Koşulları hakkında sorularınız veya endişeleriniz varsa, lütfen bizimle şu adresten iletişime geçin:
        </p>
        <p className="my-4">
          <strong>E-posta:</strong> <a href="mailto:info@hakemdegerlendirme.com" className="text-blue-600 hover:underline">info@hakemdegerlendirme.com</a><br />
          <strong>Adres:</strong> Atatürk Mah. Ataşehir Bulvarı No:123, 34758 Ataşehir, İstanbul
        </p>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex gap-4">
            <Link href="/kvkk" className="text-blue-600 hover:underline">Gizlilik Politikası</Link>
            <Link href="/kvkk/cerez-politikasi" className="text-blue-600 hover:underline">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 