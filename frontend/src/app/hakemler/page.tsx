'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Hakem verileri
const refereeData = [
  {
    id: 'ref1',
    name: 'Cihan Aydın',
    image: '/referees/cihan-aydin.jpg',
    rating: 4.2,
    matchesRefereed: 12,
    totalReviews: 248
  },
  {
    id: 'ref2',
    name: 'Zorbay Küçük',
    image: '/referees/zorbay-kucuk.jpg',
    rating: 3.8,
    matchesRefereed: 14,
    totalReviews: 302
  },
  {
    id: 'ref3',
    name: 'Ali Şansalan',
    image: '/referees/ali-sansalan.jpg',
    rating: 4.5,
    matchesRefereed: 18,
    totalReviews: 386
  },
  {
    id: 'ref4',
    name: 'Mehmet Türkmen',
    image: '/referees/mehmet-turkmen.jpg',
    rating: 3.9,
    matchesRefereed: 10,
    totalReviews: 215
  },
  {
    id: 'ref5',
    name: 'Oğuzhan Çakır',
    image: '/referees/oguzhan-cakir.jpg',
    rating: 4.1,
    matchesRefereed: 15,
    totalReviews: 320
  },
  {
    id: 'ref6',
    name: 'Ozan Ergün',
    image: '/referees/ozan-ergun.jpg',
    rating: 3.7,
    matchesRefereed: 11,
    totalReviews: 236
  },
  {
    id: 'ref7',
    name: 'Atilla Karaoğlan',
    image: '/referees/atilla-karaoglan.jpg',
    rating: 4.3,
    matchesRefereed: 16,
    totalReviews: 345
  },
  {
    id: 'ref8',
    name: 'Yasin Kol',
    image: '/referees/yasin-kol.jpg',
    rating: 3.6,
    matchesRefereed: 9,
    totalReviews: 198
  },
  {
    id: 'ref9',
    name: 'Direnç Tonusluoğlu',
    image: '/referees/direnc-tonusluoglu.jpg',
    rating: 4.0,
    matchesRefereed: 13,
    totalReviews: 276
  },
  {
    id: 'ref10',
    name: 'Muhammet Ali Metoğlu',
    image: '/referees/muhammet-ali-metoglu.jpg',
    rating: 3.5,
    matchesRefereed: 8,
    totalReviews: 174
  },
  {
    id: 'ref11',
    name: 'Kadir Sağlam',
    image: '/referees/kadir-saglam.jpg',
    rating: 4.4,
    matchesRefereed: 17,
    totalReviews: 365
  },
  {
    id: 'ref12',
    name: 'Halil Umut Meler',
    image: '/referees/halil-umut-meler.jpg',
    rating: 4.7,
    matchesRefereed: 20,
    totalReviews: 428
  },
  {
    id: 'ref13',
    name: 'Çağdaş Altay',
    image: '/referees/cagdas-altay.jpg',
    rating: 3.9,
    matchesRefereed: 12,
    totalReviews: 254
  },
  {
    id: 'ref14',
    name: 'Burak Pakkan',
    image: '/referees/burak-pakkan.jpg',
    rating: 4.0,
    matchesRefereed: 14,
    totalReviews: 298
  },
  {
    id: 'ref15',
    name: 'Alper Akarsu',
    image: '/referees/alper-akarsu.jpg',
    rating: 3.8,
    matchesRefereed: 11,
    totalReviews: 234
  },
  {
    id: 'ref16',
    name: 'Arda Kardeşler',
    image: '/referees/arda-kardesler.jpg',
    rating: 4.6,
    matchesRefereed: 19,
    totalReviews: 406
  },
  {
    id: 'ref17',
    name: 'Emre Kargın',
    image: '/referees/emre-kargin.jpg',
    rating: 3.7,
    matchesRefereed: 10,
    totalReviews: 218
  },
  {
    id: 'ref18',
    name: 'Turgut Doman',
    image: '/referees/turgut-doman.jpg',
    rating: 4.1,
    matchesRefereed: 15,
    totalReviews: 324
  },
  {
    id: 'ref19',
    name: 'Ümit Öztürk',
    image: '/referees/umit-ozturk.jpg',
    rating: 3.9,
    matchesRefereed: 13,
    totalReviews: 280
  },
  {
    id: 'ref20',
    name: 'Abdullah Buğra Taşkınsoy',
    image: '/referees/abdullah-bugra-taskinsoy.jpg',
    rating: 4.2,
    matchesRefereed: 16,
    totalReviews: 342
  },
  {
    id: 'ref21',
    name: 'Erkan Özdamar',
    image: '/referees/erkan-ozdamar.jpg',
    rating: 3.8,
    matchesRefereed: 12,
    totalReviews: 258
  },
  {
    id: 'ref22',
    name: 'Adnan Deniz Kayatepe',
    image: '/referees/adnan-deniz-kayatepe.jpg',
    rating: 4.0,
    matchesRefereed: 14,
    totalReviews: 302
  },
  {
    id: 'ref23',
    name: 'Volkan Bayarslan',
    image: '/referees/volkan-bayarslan.jpg',
    rating: 4.3,
    matchesRefereed: 17,
    totalReviews: 364
  },
  {
    id: 'ref24',
    name: 'Ömer Tolga Güldibi',
    image: '/referees/omer-tolga-guldibi.jpg',
    rating: 3.9,
    matchesRefereed: 13,
    totalReviews: 278
  }
];

// Hakem değerlendirme verileri
const refereeReviews = {
  'ref1': [
    { id: 1, user: 'Mehmet Y.', rating: 4.5, comment: 'Maçı çok iyi yönetti, kritik pozisyonlarda doğru kararlar verdi.', date: '2023-11-15', match: 'Galatasaray vs Fenerbahçe' },
    { id: 2, user: 'Ali S.', rating: 4.0, comment: 'Genel olarak iyiydi fakat bazı pozisyonlarda daha dikkatli olabilirdi.', date: '2023-10-22', match: 'Beşiktaş vs Trabzonspor' },
    { id: 3, user: 'Ayşe K.', rating: 5.0, comment: 'Mükemmel hakemlik! Hiçbir tartışmalı karar yok.', date: '2023-10-05', match: 'Adana Demirspor vs Antalyaspor' },
  ],
  'ref2': [
    { id: 1, user: 'Kemal D.', rating: 3.5, comment: 'Bazı pozisyonlarda tutarsız kararlar verdi.', date: '2023-11-10', match: 'Başakşehir vs Konyaspor' },
    { id: 2, user: 'Zeynep B.', rating: 4.0, comment: 'İyi bir performans, maç kontrolünü hiç kaybetmedi.', date: '2023-10-18', match: 'Kayserispor vs Samsunspor' },
  ],
  'ref3': [
    { id: 1, user: 'Hasan T.', rating: 5.0, comment: 'Süper bir hakemlik performansı gösterdi.', date: '2023-11-12', match: 'Fenerbahçe vs Beşiktaş' },
    { id: 2, user: 'İbrahim Y.', rating: 4.5, comment: 'Çok adil ve dengeli bir maç yönetimi.', date: '2023-10-28', match: 'Galatasaray vs Trabzonspor' },
    { id: 3, user: 'Murat S.', rating: 4.0, comment: 'İyi bir hakem, kritik anlarda doğru kararlar veriyor.', date: '2023-10-14', match: 'Antalyaspor vs Konyaspor' },
  ],
};

// Diğer hakemler için varsayılan değerlendirmeler
for (let i = 4; i <= 24; i++) {
  const refId = `ref${i}`;
  if (!refereeReviews[refId]) {
    refereeReviews[refId] = [
      { 
        id: 1, 
        user: 'Kullanıcı A', 
        rating: Math.floor(Math.random() * 2) + 3, 
        comment: 'İyi bir hakem performansı, maçı kontrol altında tuttu.', 
        date: '2023-11-05', 
        match: 'Takım A vs Takım B' 
      },
      { 
        id: 2, 
        user: 'Kullanıcı B', 
        rating: Math.floor(Math.random() * 2) + 3.5, 
        comment: 'Genel olarak adil kararlar verdi, bazı pozisyonlarda şüpheli düdükler oldu.', 
        date: '2023-10-22', 
        match: 'Takım C vs Takım D' 
      },
    ];
  }
}

export default function HakemlerPage() {
  const [sortOption, setSortOption] = useState<'rating' | 'name' | 'matches'>('rating');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReferees, setFilteredReferees] = useState(refereeData);
  const [selectedReferee, setSelectedReferee] = useState(null);
  const [showReviews, setShowReviews] = useState(false);

  // Arama ve sıralama işlemleri
  useEffect(() => {
    let result = [...refereeData];
    
    // Arama filtresi
    if (searchTerm) {
      result = result.filter(referee => 
        referee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sıralama
    switch (sortOption) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'matches':
        result.sort((a, b) => b.matchesRefereed - a.matchesRefereed);
        break;
    }
    
    setFilteredReferees(result);
  }, [searchTerm, sortOption]);

  // Değerlendirmeleri göster
  const handleViewReviews = (referee) => {
    setSelectedReferee(referee);
    setShowReviews(true);
  };

  // Modalı kapat
  const closeModal = () => {
    setShowReviews(false);
  };

  // Puan yıldızlarını render et
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="halfStarGradient">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill="url(#halfStarGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      }
    }
    
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Hakemler</h1>
      
      {/* Filtre ve Arama */}
      <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
        <div className="md:w-1/3">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Hakem Ara
          </label>
          <input
            type="text"
            id="search"
            placeholder="Hakem ismi yazın..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        
        <div className="md:w-1/3">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
            Sıralama
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={e => setSortOption(e.target.value as 'rating' | 'name' | 'matches')}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          >
            <option value="rating">Puana Göre</option>
            <option value="name">İsme Göre</option>
            <option value="matches">Maç Sayısına Göre</option>
          </select>
        </div>
      </div>
      
      {/* Hakem Listesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReferees.map(referee => (
          <div key={referee.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-5">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 relative rounded-full overflow-hidden bg-gray-100">
                  <Image 
                    src={referee.image} 
                    alt={referee.name}
                    fill 
                    className="object-cover"
                    onError={(e) => {
                      // Resim yüklenemezse varsayılan resim göster
                      const target = e.target as HTMLImageElement;
                      target.src = '/referees/default-referee.jpg';
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{referee.name}</h2>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-lg font-bold text-yellow-600">{referee.rating.toFixed(1)}</span>
                    {renderStars(referee.rating)}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-500">Yönetilen Maç</div>
                  <div className="text-lg font-bold text-blue-600">{referee.matchesRefereed}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-500">Değerlendirme</div>
                  <div className="text-lg font-bold text-blue-600">{referee.totalReviews}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-gray-500">Son maç: </span>
                  <span className="font-medium">GS vs FB</span>
                </div>
                <button 
                  className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  onClick={() => handleViewReviews(referee)}
                >
                  Değerlendirmeleri Gör
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredReferees.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aradığınız kritere uygun hakem bulunamadı.
        </div>
      )}

      {/* Değerlendirmeler Modalı */}
      {showReviews && selectedReferee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
            <div className="p-5 bg-slate-800 text-white flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedReferee.name} - Değerlendirmeler</h3>
              <button 
                onClick={closeModal}
                className="text-white hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-5 overflow-y-auto max-h-[calc(90vh-130px)]">
              <div className="flex items-center gap-4 mb-6 p-4 bg-slate-50 rounded-lg">
                <div className="h-20 w-20 relative rounded-full overflow-hidden bg-gray-100">
                  <Image 
                    src={selectedReferee.image} 
                    alt={selectedReferee.name}
                    fill 
                    className="object-cover"
                    onError={(e) => {
                      // Resim yüklenemezse varsayılan resim göster
                      const target = e.target as HTMLImageElement;
                      target.src = '/referees/default-referee.jpg';
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{selectedReferee.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-bold text-yellow-600">{selectedReferee.rating.toFixed(1)}</span>
                    {renderStars(selectedReferee.rating)}
                    <span className="text-gray-500 text-sm">({selectedReferee.totalReviews} değerlendirme)</span>
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-4">Kullanıcı Değerlendirmeleri</h4>
              
              {refereeReviews[selectedReferee.id]?.map(review => (
                <div key={review.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{review.user}</span>
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                  <div className="flex items-center mb-1">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm text-gray-600">{review.match}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
              
              {!refereeReviews[selectedReferee.id] || refereeReviews[selectedReferee.id].length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  Bu hakem için henüz değerlendirme yapılmamış.
                </div>
              ) : null}
            </div>
            
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <button 
                onClick={closeModal}
                className="w-full py-2 px-4 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 