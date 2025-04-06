"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Match } from './MatchCard';
import Image from 'next/image';

interface RefereeRatingFormProps {
  match: Match;
}

const RefereeRatingForm = ({ match }: RefereeRatingFormProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    matchId: match.id,
    refereeName: match.referee.name,
    decisionMaking: 0,
    consistency: 0,
    gameControl: 0,
    communication: 0,
    positioning: 0,
    fitness: 0,
    comment: '',
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const ratingCategories = [
    { id: 'decisionMaking', label: 'Karar Verme', description: 'Kural uygulamaları ve kritik kararlar', icon: '⚖️' },
    { id: 'consistency', label: 'Tutarlılık', description: 'Benzer durumlarda benzer kararlar', icon: '🔄' },
    { id: 'gameControl', label: 'Oyun Kontrolü', description: 'Maçın kontrolünü elinde tutma', icon: '🎮' },
    { id: 'communication', label: 'İletişim', description: 'Oyuncularla iletişim', icon: '🗣️' },
    { id: 'positioning', label: 'Pozisyon Alma', description: 'Doğru yerde olma', icon: '📍' },
    { id: 'fitness', label: 'Fiziksel Performans', description: 'Maç boyunca koşabilme ve dayanıklılık', icon: '🏃' },
  ];

  const handleRatingChange = (category: string, rating: number) => {
    setFormData(prev => ({
      ...prev,
      [category]: rating
    }));
    
    // Clear error for this field if it exists
    if (errors[category]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[category];
        return newErrors;
      });
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      comment: e.target.value
    }));
  };

  const validateCurrentStep = () => {
    const newErrors: {[key: string]: string} = {};
    let isValid = true;

    if (currentStep === 2) {
      // Validate ratings in step 2
      ratingCategories.forEach(category => {
        if (formData[category.id as keyof typeof formData] === 0) {
          newErrors[category.id] = 'Lütfen bir puan verin';
          isValid = false;
        }
      });
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(current => Math.min(current + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(current => Math.max(current - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCurrentStep()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Normalde burada bir API çağrısı yapılacak
      console.log('Değerlendirme gönderiliyor:', formData);
      
      // API çağrısını simüle ediyoruz
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Başarılı gönderim sonrası ana sayfaya yönlendir
      alert('Değerlendirmeniz için teşekkürler!');
      router.push('/');
    } catch (error) {
      console.error('Değerlendirme gönderilirken hata oluştu:', error);
      alert('Değerlendirme gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="p-6 bg-white rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Maç Bilgileri</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 relative mb-2">
                    <Image 
                      src={match.homeTeam.logo} 
                      alt={match.homeTeam.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-lg">{match.homeTeam.name}</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold mb-2">VS</div>
                  <div className="text-sm text-gray-500">{match.date} • {match.time}</div>
                  <div className="text-sm text-gray-500">{match.stadium}</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 relative mb-2">
                    <Image 
                      src={match.awayTeam.logo} 
                      alt={match.awayTeam.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-lg">{match.awayTeam.name}</span>
                </div>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 relative rounded-full overflow-hidden">
                    <Image 
                      src={match.referee.image} 
                      alt={match.referee.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xl font-bold">{match.referee.name}</div>
                    <div className="text-gray-500">Maçın Hakemi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="p-6 bg-white rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-6">Hakem Performansını Değerlendirin</h2>
            <p className="text-gray-600 mb-6">Hakemi 1-10 arasında puanlayın. Her kategoride en az bir puan vermeniz gerekiyor.</p>
            
            <div className="space-y-8">
              {ratingCategories.map((category) => (
                <div key={category.id} className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl" role="img" aria-label={category.label}>{category.icon}</span>
                      <div>
                        <label className="font-bold text-lg">{category.label}</label>
                        <p className="text-sm text-gray-500">{category.description}</p>
                      </div>
                    </div>
                    <span className="font-bold text-xl bg-blue-100 text-blue-800 h-10 w-10 rounded-full flex items-center justify-center">
                      {formData[category.id as keyof typeof formData] || '-'}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                          formData[category.id as keyof typeof formData] === rating
                            ? 'bg-blue-600 text-white scale-110 shadow-md'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                        onClick={() => handleRatingChange(category.id, rating)}
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                  {errors[category.id] && (
                    <p className="text-red-500 text-sm mt-2">{errors[category.id]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="p-6 bg-white rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Yorumunuzu Ekleyin</h2>
            <p className="text-gray-600 mb-6">Hakemle ilgili düşüncelerinizi ve gözlemlerinizi paylaşın. Bu adım isteğe bağlıdır.</p>
            
            <div className="mb-6">
              <label className="font-medium block mb-2">Detaylı Yorumunuz</label>
              <textarea
                className="w-full p-4 border rounded-lg resize-none h-40 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Hakem hakkında düşüncelerinizi paylaşın..."
                value={formData.comment}
                onChange={handleCommentChange}
              />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Değerlendirme Özeti</h3>
              <div className="grid grid-cols-2 gap-4">
                {ratingCategories.map(category => (
                  <div key={category.id} className="flex justify-between">
                    <span className="text-gray-600">{category.label}:</span>
                    <span className="font-semibold">{formData[category.id as keyof typeof formData]}/10</span>
                  </div>
                ))}
                <div className="col-span-2 border-t pt-2 mt-2 flex justify-between">
                  <span className="text-gray-600">Ortalama Puan:</span>
                  <span className="font-bold">
                    {(Object.keys(formData)
                      .filter(key => ['decisionMaking', 'consistency', 'gameControl', 'communication', 'positioning', 'fitness'].includes(key))
                      .reduce((sum, key) => sum + Number(formData[key as keyof typeof formData]), 0) / 6).toFixed(1)}/10
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                currentStep > index + 1 
                  ? 'bg-green-500 text-white'
                  : currentStep === index + 1
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
              }`}>
                {currentStep > index + 1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              {index < totalSteps - 1 && (
                <div className={`w-full h-1 ${
                  currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <div>Maç Bilgileri</div>
          <div>Değerlendirme</div>
          <div>Yorum & Özet</div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {getStepContent()}
        
        <div className="flex justify-between mt-6">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrevious}
              className="py-2 px-6 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 transition-colors"
            >
              Geri
            </button>
          ) : (
            <div></div>
          )}
          
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              Devam Et
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`py-2 px-6 rounded-md text-white transition-colors ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Değerlendirmeyi Tamamla'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RefereeRatingForm; 