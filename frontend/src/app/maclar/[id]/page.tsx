'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

// Tüm maç datasını import et
import { matches } from '../page';

interface EvaluationCriteria {
  id: string;
  title: string;
  description: string;
}

const evaluationCriteria: EvaluationCriteria[] = [
  {
    id: 'fairness',
    title: 'Tarafsızlık',
    description: 'Hakemin maç boyunca her iki takıma karşı tarafsız davranması'
  },
  {
    id: 'consistency',
    title: 'Tutarlılık',
    description: 'Benzer pozisyonlarda benzer kararlar verilmesi'
  },
  {
    id: 'calmness',
    title: 'Sakinlik',
    description: 'Baskı altında ve kritik anlarda sergilediği duruş'
  },
  {
    id: 'positioning',
    title: 'Pozisyon Alma',
    description: 'Maç içinde doğru noktalarda bulunabilme becerisi'
  },
  {
    id: 'decisions',
    title: 'Kritik Kararlar',
    description: 'Kritik pozisyonlarda verdiği kararların doğruluğu'
  }
];

export default function HakemDegerlendirmePage({ params }: { params: { id: string } }) {
  // Next.js 14'te params bir Promise olduğu için React.use() ile çözüyoruz
  const resolvedParams = use(params);
  const matchId = resolvedParams.id;
  
  const [matchData, setMatchData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  // İlgili maçı bul
  useEffect(() => {
    // Bu simulasyon için matches array'inden ilgili maçı buluyoruz
    // Gerçek uygulamada bu bir API call olabilir
    const match = matches.find(m => m.id === matchId);
    
    if (match) {
      setMatchData(match);
    }
    
    setLoading(false);
  }, [matchId]);

  const handleRatingChange = (criteriaId: string, value: number) => {
    setRatings({
      ...ratings,
      [criteriaId]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Tüm kriterler için puan verilip verilmediğini kontrol ediyoruz
    const allCriteriaRated = evaluationCriteria.every(criteria => 
      ratings[criteria.id] !== undefined
    );
    
    if (!allCriteriaRated) {
      setSubmitResult({
        success: false,
        message: 'Lütfen tüm kriterleri değerlendirin.'
      });
      return;
    }
    
    if (comment.trim().length < 10) {
      setSubmitResult({
        success: false,
        message: 'Lütfen en az 10 karakter içeren bir yorum yazın.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitResult(null);
    
    // API'ye gönderimi simüle ediyoruz
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: 'Değerlendirmeniz başarıyla kaydedildi. Katkınız için teşekkür ederiz!'
      });
      
      // Formu sıfırlıyoruz
      setRatings({});
      setComment('');
    }, 1500);
  };
  
  // Ortalama puanı hesapla
  const calculateAverageRating = () => {
    const values = Object.values(ratings);
    if (values.length === 0) return 0;
    
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto my-8 px-4 text-center">
        <p>Yükleniyor...</p>
      </div>
    );
  }

  if (!matchData) {
    return (
      <div className="max-w-4xl mx-auto my-8 px-4">
        <div className="mb-6">
          <Link href="/maclar" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Maçlara Dön
          </Link>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-red-800">Maç bulunamadı</h1>
          <p className="text-red-600">
            Üzgünüz, aradığınız maç bulunamadı. Lütfen maçlar sayfasına dönüp tekrar deneyin.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <div className="mb-6">
        <Link href="/maclar" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Maçlara Dön
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Hakem Değerlendirme</h1>
        
        {/* Maç Bilgileri */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-center flex-1 flex flex-col items-center">
            <div className="h-16 w-16 relative mb-2 bg-gray-100 rounded-full p-1">
              <div className="relative h-full w-full">
                <Image 
                  src={matchData.homeTeam.logo} 
                  alt={matchData.homeTeam.name}
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="font-semibold">{matchData.homeTeam.name}</div>
            <div className="text-xl font-bold">{matchData.homeTeam.score}</div>
          </div>
          
          <div className="mx-4 text-center">
            <div className="text-xs text-gray-500 mb-1">{matchData.date}</div>
            <div className="text-lg font-bold">VS</div>
            <div className="text-xs text-gray-500 mt-1">{matchData.stadium}</div>
          </div>
          
          <div className="text-center flex-1 flex flex-col items-center">
            <div className="h-16 w-16 relative mb-2 bg-gray-100 rounded-full p-1">
              <div className="relative h-full w-full">
                <Image 
                  src={matchData.awayTeam.logo} 
                  alt={matchData.awayTeam.name}
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="font-semibold">{matchData.awayTeam.name}</div>
            <div className="text-xl font-bold">{matchData.awayTeam.score}</div>
          </div>
        </div>
        
        {/* Hakem Bilgileri */}
        <div className="flex items-center justify-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="h-16 w-16 relative rounded-full overflow-hidden bg-gray-200">
            <Image 
              src={matchData.referee.image} 
              alt={matchData.referee.name}
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-sm text-gray-500">Hakem</div>
            <div className="text-xl font-semibold">{matchData.referee.name}</div>
          </div>
        </div>
        
        {/* Değerlendirme Formu */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Hakem Performans Değerlendirmesi</h2>
            <p className="text-sm text-gray-600 mb-4">
              Lütfen aşağıdaki kriterlere göre hakemin performansını 1-5 arasında değerlendirin 
              (1 en düşük, 5 en yüksek puanı ifade eder).
            </p>
            
            <div className="space-y-4">
              {evaluationCriteria.map((criteria) => (
                <div key={criteria.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{criteria.title}</h3>
                      <p className="text-sm text-gray-600">{criteria.description}</p>
                    </div>
                    <div className="text-sm font-medium text-yellow-600">
                      {ratings[criteria.id] ? `${ratings[criteria.id]}/5` : '-'}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 justify-between">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => handleRatingChange(criteria.id, value)}
                        className={`flex-1 py-2 border rounded-md transition-colors ${
                          ratings[criteria.id] === value
                            ? 'bg-yellow-500 text-white border-yellow-500'
                            : 'bg-white border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Yorum
            </label>
            <textarea
              id="comment"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Hakemin performansı hakkında genel değerlendirmenizi buraya yazabilirsiniz..."
            />
          </div>
          
          {/* Ortalama Puan */}
          {Object.keys(ratings).length > 0 && (
            <div className="bg-yellow-50 p-4 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="font-medium">Ortalama Puanınız</h3>
                <p className="text-sm text-gray-600">Tüm kriterlerin ortalaması</p>
              </div>
              <div className="text-xl font-bold text-yellow-600">
                {calculateAverageRating().toFixed(1)}/5
              </div>
            </div>
          )}
          
          {submitResult && (
            <div className={`p-4 rounded-lg ${
              submitResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              {submitResult.message}
            </div>
          )}
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-md transition-colors font-medium shadow-sm ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Değerlendirmeyi Gönder'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 