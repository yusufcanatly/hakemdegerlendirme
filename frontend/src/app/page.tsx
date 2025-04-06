import Image from "next/image";
import Link from "next/link";
import MatchCard from "@/components/MatchCard";
import { mockMatches } from "@/utils/mockData";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/arkaplan.png" 
            alt="Hakem değerlendirme arka plan" 
            fill 
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative z-10 py-16 px-6 md:px-12 text-white max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Hakemleri Değerlendir, <span className="text-yellow-300">Futbola Katkıda Bulun</span>
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Türkiye'nin en kapsamlı hakem değerlendirme platformuna hoş geldiniz. 
              Maçları izleyin, hakemleri değerlendirin ve futbola katkıda bulunun.
            </p>
            <div className="flex gap-4">
              <Link href="#matches" 
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Maçları İncele
              </Link>
              <Link href="/sonuclar" 
                className="bg-transparent hover:bg-white/10 border border-yellow-300 text-yellow-300 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Sonuçları Gör
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">Hemen Katılın</h3>
              <p className="text-gray-300 mb-4">
                Maçları izleyin, hakemleri değerlendirin ve Türk futbolunun kalitesine katkıda bulunun.
              </p>
              <Link href="/kayit" 
                className="block text-center bg-yellow-500 hover:bg-yellow-600 text-slate-800 px-4 py-2 rounded-md font-medium transition-colors"
              >
                Ücretsiz Üye Ol
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white rounded-xl shadow-md p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">150+</div>
              <div className="text-gray-600">Değerlendirilen Hakem</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">1250+</div>
              <div className="text-gray-600">Değerlendirilen Maç</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 mb-2">8500+</div>
              <div className="text-gray-600">Aktif Kullanıcı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Matches Section */}
      <section id="matches" className="scroll-mt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Bu Haftanın Maçları</h2>
          <Link href="#" className="text-yellow-600 hover:text-yellow-700 flex items-center gap-1">
            <span>Tüm Maçlar</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-white rounded-xl shadow-md p-8 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Nasıl Çalışır?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Üye Ol</h3>
            <p className="text-gray-600">Birkaç adımda hızlıca kaydolun ve değerlendirmelere başlayın.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v8M8 12h8"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Maçları İzleyin</h3>
            <p className="text-gray-600">Gelecek maçları takip edin ve canlı olarak hakem performanslarını izleyin.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Değerlendirin</h3>
            <p className="text-gray-600">Hakemleri objektif kriterlere göre değerlendirin ve yorumlarınızı paylaşın.</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-10 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Hemen Başlayın</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Türk futboluna katkıda bulunmak ve hakem değerlendirmelerinizi paylaşmak için şimdi kaydolun.
        </p>
        <Link href="/kayit" className="bg-yellow-500 text-slate-800 hover:bg-yellow-400 font-semibold px-6 py-3 rounded-lg transition-colors">
          Kayıt Ol
        </Link>
      </section>
    </div>
  );
}
