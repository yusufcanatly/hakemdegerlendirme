import Link from 'next/link';

export default function CerezPolitikasiPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 my-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Çerez (Cookie) Politikası</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">
          Son güncellenme: {new Date().toLocaleDateString('tr-TR')}
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. GİRİŞ</h2>
        <p>
          Hakem Değerlendirme Platformu ("Platform", "biz", "bizim") olarak, web sitemizi ziyaret ettiğinizde 
          deneyiminizi geliştirmek için çerezler ve benzer teknolojiler kullanıyoruz. Bu Çerez Politikası, 
          bu teknolojilerin nasıl kullanıldığını ve seçeneklerinizi açıklamaktadır.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. ÇEREZ NEDİR?</h2>
        <p>
          Çerezler, ziyaret ettiğiniz web siteleri tarafından bilgisayarınıza, telefonunuza veya tabletinize 
          indirilen küçük metin dosyalarıdır. Web siteleri, çerezleri sizi tanımak, tercihlerinizi hatırlamak 
          ve size kişiselleştirilmiş bir deneyim sunmak için kullanır. Çerezler aynı zamanda web sitesinin 
          trafiğini analiz etmek ve reklamları kişiselleştirmek için de kullanılır.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. KULLANDIĞIMIZ ÇEREZ TÜRLERİ</h2>
        <p>
          Platformumuzda aşağıdaki çerez türlerini kullanıyoruz:
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">3.1. Zorunlu Çerezler</h3>
        <p>
          Bu çerezler, platformumuzun çalışması için gereklidir ve sistemlerimizde kapatılamazlar. Genellikle 
          yalnızca sizin tarafınızdan yapılan ve gizlilik tercihlerinizi ayarlama, oturum açma veya form 
          doldurma gibi hizmet taleplerine yanıt olarak ayarlanırlar. Tarayıcınızı bu çerezleri engelleyecek 
          şekilde ayarlayabilirsiniz, ancak bu durumda sitenin bazı bölümleri çalışmayabilir.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">3.2. Performans ve Analiz Çerezleri</h3>
        <p>
          Bu çerezler, ziyaretçilerin web sitemizi nasıl kullandığı hakkında bilgi toplamamıza yardımcı olur. 
          Hangi sayfaların en popüler olduğunu, kullanıcıların sitede nasıl gezindiğini ve karşılaştıkları 
          hata mesajlarını anlamamıza olanak tanır. Bu çerezlerin topladığı tüm bilgiler anonimdir ve 
          doğrudan sizi tanımlamak için kullanılamaz.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">3.3. İşlevsellik Çerezleri</h3>
        <p>
          Bu çerezler, web sitemizde gelişmiş işlevsellik ve kişiselleştirme sağlar. Bunlar, bizim tarafımızdan 
          veya web sitemize eklediğimiz üçüncü taraf hizmet sağlayıcıları tarafından ayarlanabilir. Bu 
          çerezleri engellerseniz, bu hizmetlerin bazıları veya tümü düzgün çalışmayabilir.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">3.4. Hedefleme ve Reklam Çerezleri</h3>
        <p>
          Bu çerezler, reklam ortaklarımız tarafından web sitemiz aracılığıyla ayarlanabilir. Bu şirketler, 
          ilgi alanlarınızın bir profilini oluşturmak ve size diğer sitelerde alakalı reklamlar göstermek 
          için bunları kullanabilir. Doğrudan kişisel bilgileri depolamazlar, ancak tarayıcınızı ve internet 
          cihazınızı benzersiz bir şekilde tanımaya dayanırlar. Bu çerezleri engellerseniz, daha az hedefli 
          reklamlar görürsünüz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. ÇEREZ KULLANIMI İÇİN AÇIK RIZANIZ</h2>
        <p>
          Web sitemizi ilk ziyaretinizde, çerez kullanımı hakkında bir bildirim kutusu görüntülenecektir. 
          "Tümünü Kabul Et" düğmesine tıklayarak, tüm çerez türlerinin kullanımına izin vermiş olursunuz. 
          "Ayarları Özelleştir" düğmesine tıklayarak, hangi çerez türlerinin kullanılacağını seçebilirsiniz. 
          "Sadece Zorunlu Çerezleri Kabul Et" düğmesine tıklayarak, yalnızca web sitesinin çalışması için 
          gerekli olan çerezlerin kullanımına izin vermiş olursunuz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. ÇEREZLERİ YÖNETİM ŞEKLİNİZ</h2>
        <p>
          Çoğu tarayıcı, çerezleri kabul etmeyi veya reddetmeyi seçmenize ve mevcut çerezleri silmenize 
          olanak tanır. Tarayıcı çerezlerini nasıl yöneteceğiniz hakkında daha fazla bilgi için, tarayıcınızın 
          yardım veya destek bölümüne bakabilirsiniz:
        </p>
        <ul className="list-disc ml-6 my-4">
          <li><a href="https://support.google.com/chrome/answer/95647?hl=tr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
          <li><a href="https://support.microsoft.com/tr-tr/windows/microsoft-edge-g%C3%B6z-atma-verilerini-silme-8c7643b6-2624-0226-6708-2b6d6dc45460" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
          <li><a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
        </ul>
        <p>
          Çerezleri reddederseniz, platformumuzun bazı özellikleri düzgün çalışmayabilir veya bazı 
          hizmetlere erişemeyebilirsiniz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. ÜÇÜNCÜ TARAF ÇEREZLERİ</h2>
        <p>
          Platformumuzda, üçüncü taraf hizmet sağlayıcılarımız tarafından yerleştirilen çerezler de 
          bulunabilir. Bu çerezler, web sitemizin performansını analiz etmek, reklamları kişiselleştirmek, 
          sosyal medya özellikleri sağlamak veya trafik analizini desteklemek için kullanılabilir. Bu 
          üçüncü taraf çerezleri, ilgili şirketlerin gizlilik politikalarına tabi olabilir ve bu 
          politikaları incelemenizi öneririz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. ÇEREZ POLİTİKASINDAKİ DEĞİŞİKLİKLER</h2>
        <p>
          Bu Çerez Politikası'nı zaman zaman güncelleyebiliriz. Politikada önemli değişiklikler olması 
          durumunda, web sitemizde bir bildirim yayınlayacağız veya size doğrudan bir bildirim göndereceğiz. 
          Platformumuzu her ziyaretinizde bu politikayı gözden geçirmenizi öneririz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. DAHA FAZLA BİLGİ</h2>
        <p>
          Çerezler ve gizliliğiniz hakkında sorularınız veya endişeleriniz varsa, lütfen 
          <a href="mailto:kvkk@hakemdegerlendirme.com" className="text-blue-600 hover:underline"> kvkk@hakemdegerlendirme.com</a> 
          adresinden bizimle iletişime geçin.
        </p>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link href="/kvkk" className="text-blue-600 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Kişisel Verilerin Korunması Politikasına Geri Dön
          </Link>
        </div>
      </div>
    </div>
  );
} 