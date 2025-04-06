import Link from 'next/link';

export default function HakkimizdaPage() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 my-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Hakkımızda</h1>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">Hakem Değerlendirme Platformu</h2>
          <p className="mb-4 text-gray-700">
            Hakem Değerlendirme Platformu, Türkiye'deki futbol hakemlerinin performansını topluluk tarafından 
            değerlendirilmesini sağlayan bağımsız bir platform olarak 2023 yılında kurulmuştur. Futbol severlerin, 
            maçlardaki hakem kararlarını objektif kriterlere göre değerlendirmesine olanak tanıyan platformumuz, 
            hakemlik kurumunun şeffaflığına ve gelişimine katkıda bulunmayı amaçlamaktadır.
          </p>
          <p className="mb-4 text-gray-700">
            Platformumuz, futbolun en önemli unsurlarından biri olan hakemlerin performansını, 
            topluluğun gözünden değerlendirerek hem taraftarlar hem de hakemler için yararlı 
            geri bildirimler oluşturmayı hedefler. Amacımız, futbolda adalet duygusunu güçlendirmek 
            ve hakem kararlarının daha anlaşılır hale gelmesini sağlamaktır.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">Misyonumuz</h2>
          <p className="mb-4 text-gray-700">
            Futbol hakemliği konusunda toplumsal farkındalığı artırmak, hakemlik kararlarının daha iyi
            anlaşılmasını sağlamak ve objektif değerlendirme kriterleri sunarak futbol kültürüne olumlu 
            katkıda bulunmak.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded-r">
            <p className="text-yellow-800 italic">
              "Adaletli bir oyun, herkesin kazandığı bir oyundur."
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">Vizyonumuz</h2>
          <p className="mb-4 text-gray-700">
            Türkiye'de futbol hakemliği alanında referans platform haline gelerek hakemlik 
            kurumunun gelişimine katkıda bulunmak ve futbolun tüm paydaşları arasında daha 
            sağlıklı bir diyalog kurulmasına yardımcı olmak.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-slate-700">Objektiflik</h3>
              <p className="text-gray-700">
                Hakem kararlarını değerlendirirken tarafsız ve objektif kriterler kullanıyoruz.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-slate-700">Şeffaflık</h3>
              <p className="text-gray-700">
                Değerlendirme süreçlerimiz ve sonuçlarımız herkes tarafından görülebilir ve incelenebilir.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-slate-700">Katılımcılık</h3>
              <p className="text-gray-700">
                Tüm futbolseverlerin katılımını teşvik ederek geniş bir topluluk perspektifi oluşturuyoruz.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-slate-700">Sürekli Gelişim</h3>
              <p className="text-gray-700">
                Platformumuzu ve değerlendirme sistemimizi sürekli olarak geliştiriyoruz.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">Nasıl Çalışırız?</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <strong className="text-slate-800">Topluluk Değerlendirmesi:</strong> Her maç sonrası platformumuza üye olan kullanıcılar, hakemler hakkında değerlendirme yapabilir.
            </li>
            <li>
              <strong className="text-slate-800">Objektif Kriterler:</strong> Değerlendirmeler, önceden belirlenmiş objektif kriterlere göre yapılır.
            </li>
            <li>
              <strong className="text-slate-800">Veri Analizi:</strong> Toplanan veriler analiz edilerek hakemlerin performans grafikleri oluşturulur.
            </li>
            <li>
              <strong className="text-slate-800">Şeffaf Raporlama:</strong> Tüm değerlendirme sonuçları şeffaf bir şekilde paylaşılır.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-slate-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-800">Ahmet Yılmaz</h3>
                <p className="text-sm text-slate-500 mb-2">Kurucu & CEO</p>
                <p className="text-sm text-gray-600">
                  Spor yönetimi uzmanı ve eski hakem. 15 yıllık futbol hakemliği deneyimiyle platformun vizyonunu şekillendiriyor.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-slate-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-800">Zeynep Kaya</h3>
                <p className="text-sm text-slate-500 mb-2">Veri Analisti</p>
                <p className="text-sm text-gray-600">
                  İstatistik uzmanı ve spor analisti. Değerlendirme verilerinin analizi ve raporlanmasından sorumlu.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-slate-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-800">Mehmet Demir</h3>
                <p className="text-sm text-slate-500 mb-2">Teknik Direktör</p>
                <p className="text-sm text-gray-600">
                  Yazılım mühendisi ve futbol tutkunu. Platformun teknik altyapısından ve kullanıcı deneyiminden sorumlu.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Tüm sorularınız için <Link href="/iletisim" className="text-yellow-600 hover:text-yellow-700">İletişim</Link> sayfamızı ziyaret edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
} 