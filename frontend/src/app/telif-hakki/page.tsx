import Link from 'next/link';

export default function TelifHakkiPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 my-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Telif Hakkı Bildirimi</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">
          Son güncellenme: {new Date().toLocaleDateString('tr-TR')}
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. TELİF HAKKI AÇIKLAMASI</h2>
        <p>
          Hakem Değerlendirme Platformu ("Platform", "biz", "bizim") web sitesi ve içeriği, 
          telif hakkı ve diğer fikri mülkiyet kanunları ile korunmaktadır. Platform üzerindeki 
          tüm metin, grafikler, kullanıcı arayüzü, görsel arayüz, fotoğraflar, ticari markalar, 
          logolar, sesler, müzik, resimler ve bilgisayar kodları dahil ancak bunlarla sınırlı 
          olmamak üzere tüm içerik, bizim mülkiyetimizde olup telif hakları tarafından korunmaktadır.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. İÇERİK KULLANIMI</h2>
        <p>
          Platform üzerindeki içeriğin tamamı veya bir kısmı, önceden yazılı izin olmaksızın 
          çoğaltılamaz, kopyalanamaz, yeniden yayınlanamaz, yüklenemez, gönderilemez, halka 
          açık olarak gösterilemez, kodlanamaz, tercüme edilemez, iletilemez veya dağıtılamaz.
        </p>
        <p>
          Aşağıdaki durumlar için içeriğimizi kullanabilirsiniz:
        </p>
        <ul className="list-disc ml-6 my-4">
          <li>Kişisel, ticari olmayan kullanım için</li>
          <li>Eğitim veya akademik amaçlarla, uygun referans ve atıf ile</li>
          <li>Haber raporlama amacıyla, kaynağın açıkça belirtilmesi şartıyla</li>
        </ul>
        <p>
          Platform içeriğinin herhangi bir ticari amaçla kullanımı için önceden yazılı izin almanız gerekmektedir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. KULLANICI İÇERİĞİ</h2>
        <p>
          Kullanıcılarımız tarafından platforma yüklenen veya gönderilen içerikler (yorumlar, 
          değerlendirmeler, geri bildirimler vb.) için, ilgili kullanıcı kendi telif haklarını 
          korur. Ancak, bu içeriği platformumuzda yayınlayarak, kullanıcılar bize bu içeriği 
          platformumuzda ve ilgili tanıtım materyallerinde kullanma, çoğaltma, değiştirme, 
          uyarlama, yayınlama, tercüme etme ve dağıtma hakkı vermektedir.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. MARKALAR</h2>
        <p>
          "Hakem Değerlendirme Platformu" ismi, logosu ve platformla ilişkili diğer tüm markalar, 
          hizmet markaları, grafikler ve logolar bizim ticari markalarımız veya tescilli ticari 
          markalarımızdır. Platformumuzda görünen diğer ticari markalar, hizmet markaları, 
          grafikler ve logolar, üçüncü tarafların ticari markaları olabilir. Platformumuzu 
          kullanmanız, size veya herhangi bir üçüncü tarafa, bizim veya üçüncü tarafların 
          herhangi bir ticari markasını kullanma hakkı vermez.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. TELİF HAKKI İHLALİ BİLDİRİMİ</h2>
        <p>
          Telif hakkınızın ihlal edildiğini düşünüyorsanız, lütfen aşağıdaki bilgileri içeren 
          bir bildirim gönderin:
        </p>
        <ul className="list-disc ml-6 my-4">
          <li>Telif hakkı sahibinin veya yetkili temsilcisinin fiziksel veya elektronik imzası</li>
          <li>İhlal edildiğini iddia ettiğiniz telif hakkıyla korunan çalışmanın tanımı</li>
          <li>İhlal ettiğini iddia ettiğiniz materyalin platformumuzda bulunduğu konumun tanımı (URL ile)</li>
          <li>Adresiniz, telefon numaranız ve e-posta adresiniz</li>
          <li>Şikayet konusu materyalin kullanımının telif hakkı sahibi, temsilcisi veya yasalar tarafından yetkilendirilmediğine inandığınıza dair bir açıklama</li>
          <li>Bildiriminizdeki bilgilerin doğru olduğuna ve telif hakkı sahibi veya yetkili temsilcisi olarak hareket ettiğinize dair, yalancı şahitlik cezası altında bir beyan</li>
        </ul>
        <p>
          Telif hakkı ihlali bildirimlerinizi aşağıdaki adrese gönderebilirsiniz:
        </p>
        <p className="my-4">
          <strong>E-posta:</strong> <a href="mailto:copyright@hakemdegerlendirme.com" className="text-blue-600 hover:underline">copyright@hakemdegerlendirme.com</a><br />
          <strong>Adres:</strong> Atatürk Mah. Ataşehir Bulvarı No:123, 34758 Ataşehir, İstanbul
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. KARŞI BİLDİRİM</h2>
        <p>
          Materyalinizin yanlışlıkla kaldırıldığını veya erişimin engellendiğini düşünüyorsanız, 
          aşağıdaki bilgileri içeren bir karşı bildirim gönderebilirsiniz:
        </p>
        <ul className="list-disc ml-6 my-4">
          <li>Fiziksel veya elektronik imzanız</li>
          <li>Kaldırılan veya erişimi engellenen materyalin tanımı ve kaldırılmadan veya engellenmeden önce bulunduğu konum</li>
          <li>Materyalin yanlışlıkla veya yanlış tanımlama sonucu kaldırıldığına veya engellendiğine inandığınıza dair bir beyan</li>
          <li>Adınız, adresiniz, telefon numaranız ve e-posta adresiniz</li>
          <li>Bulunduğunuz bölgenin yargı yetkisine tabi olduğunuzu ve şikayet eden tarafın veya temsilcisinin yargı yetkisini kabul ettiğinize dair bir beyan</li>
          <li>Beyanınızın doğruluğuna ve karşı bildirim yapma yetkinize dair, yalancı şahitlik cezası altında bir beyan</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. TELİF HAKKI POLİTİKASINDA DEĞİŞİKLİKLER</h2>
        <p>
          Bu Telif Hakkı Bildirimi'ni zaman zaman güncelleyebiliriz. Değişiklikler, güncellenmiş 
          bildirimin platformumuzda yayınlanmasıyla birlikte yürürlüğe girecektir. Bu bildirimi 
          düzenli olarak kontrol etmenizi öneririz.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. İLETİŞİM</h2>
        <p>
          Bu Telif Hakkı Bildirimi hakkında sorularınız veya endişeleriniz varsa, lütfen bizimle şu adresten iletişime geçin:
        </p>
        <p className="my-4">
          <strong>E-posta:</strong> <a href="mailto:copyright@hakemdegerlendirme.com" className="text-blue-600 hover:underline">copyright@hakemdegerlendirme.com</a><br />
          <strong>Adres:</strong> Atatürk Mah. Ataşehir Bulvarı No:123, 34758 Ataşehir, İstanbul
        </p>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex gap-4">
            <Link href="/kvkk" className="text-blue-600 hover:underline">Gizlilik Politikası</Link>
            <Link href="/kullanim-kosullari" className="text-blue-600 hover:underline">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 