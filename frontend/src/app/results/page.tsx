import Image from 'next/image';
import { mockRefereeRatings } from '@/utils/mockData';

export default function ResultsPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-10 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hakem Değerlendirme Sonuçları</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Kullanıcıların değerlendirmeleri sonucunda hakemlerin performans puanları aşağıda listelenmiştir.
            Bu veriler, futbol maçlarındaki hakem performanslarını objektif olarak yansıtmaktadır.
          </p>
        </div>
      </section>

      {/* Top Rated Referees */}
      <section className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">En Yüksek Puanlı Hakemler</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {mockRefereeRatings
            .sort((a, b) => b.averageRating - a.averageRating)
            .slice(0, 3)
            .map((rating, index) => (
              <div key={rating.refereeName} className="flex flex-col items-center">
                <div className="relative">
                  <div className="h-24 w-24 relative rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                    <Image 
                      src={rating.refereeImage} 
                      alt={rating.refereeName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 h-10 w-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-lg">{rating.refereeName}</h3>
                <div className="text-blue-600 font-bold">{rating.averageRating.toFixed(1)}</div>
              </div>
            ))}
        </div>
      </section>

      {/* All Referees */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Tüm Hakem Değerlendirmeleri</h2>
          <div className="flex gap-2">
            <select className="border rounded-md px-3 py-1.5 bg-white">
              <option>Puana Göre</option>
              <option>İsme Göre</option>
              <option>Maç Sayısına Göre</option>
            </select>
            <input 
              type="search" 
              placeholder="Hakem ara..."
              className="border rounded-md px-3 py-1.5"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRefereeRatings.map((rating) => (
            <div key={rating.refereeName} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 relative rounded-full overflow-hidden">
                  <Image 
                    src={rating.refereeImage} 
                    alt={rating.refereeName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{rating.refereeName}</h2>
                  <p className="text-sm text-gray-500">{rating.matchCount} maçta değerlendirildi</p>
                </div>
                <div className="ml-auto">
                  <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                    {rating.averageRating.toFixed(1)}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <RatingBar 
                  label="Karar Verme" 
                  value={rating.ratings.decisionMaking} 
                />
                <RatingBar 
                  label="Tutarlılık" 
                  value={rating.ratings.consistency} 
                />
                <RatingBar 
                  label="Oyun Kontrolü" 
                  value={rating.ratings.gameControl} 
                />
                <RatingBar 
                  label="İletişim" 
                  value={rating.ratings.communication} 
                />
                <RatingBar 
                  label="Pozisyon Alma" 
                  value={rating.ratings.positioning} 
                />
                <RatingBar 
                  label="Fiziksel Performans" 
                  value={rating.ratings.fitness} 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 rounded-xl p-8 text-center my-10">
        <h2 className="text-2xl font-bold mb-4">Siz de Değerlendirmeye Katılın</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Hakem değerlendirmelerine katkıda bulunarak, Türk futbolunun gelişimine destek olabilirsiniz.
          Tarafsız ve objektif değerlendirmeleriniz bizim için çok değerli.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors">
          Maçları İncele
        </button>
      </section>
    </div>
  );
}

interface RatingBarProps {
  label: string;
  value: number;
}

function RatingBar({ label, value }: RatingBarProps) {
  // Renk değerini hesapla (kırmızı->turuncu->yeşil geçişi)
  const getColorClass = (rating: number) => {
    if (rating < 5) return 'bg-red-500';
    if (rating < 7) return 'bg-orange-500';
    if (rating < 8.5) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="font-medium">{value.toFixed(1)}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${getColorClass(value)}`}
          style={{ width: `${(value / 10) * 100}%` }}
        ></div>
      </div>
    </div>
  );
} 