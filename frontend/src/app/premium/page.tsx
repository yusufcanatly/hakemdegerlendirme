'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaCheck, FaTimes, FaStar, FaStarHalfAlt, FaCrown } from 'react-icons/fa';

export default function PremiumPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('');
  
  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };
  
  const handleSubscribe = () => {
    if (!selectedPlan) return;
    // Ödeme sayfasına yönlendirme eklenecek
    router.push(`/odeme?plan=${selectedPlan}`);
  };
  
  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Premium Üyelik</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Premium üyelik ile hakem değerlendirmelerinde ayrıcalıklı özelliklere erişin, 
          özel raporlar alın ve futbol tutkunuzu bir üst seviyeye taşıyın.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {/* Standart Plan */}
        <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${selectedPlan === 'standart' ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
            <h3 className="text-2xl font-bold mb-1 flex items-center">
              <FaStar className="mr-2" />
              Standart
            </h3>
            <p className="opacity-90">Temel premium özellikleri</p>
            <div className="text-3xl font-bold mt-4">
              29.99₺ <span className="text-base font-normal opacity-80">/ aylık</span>
            </div>
          </div>
          
          <div className="p-6">
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Detaylı hakem istatistiklerine erişim</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Reklamsız deneyim</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Haftalık hakem performans raporları</span>
              </li>
              <li className="flex items-start">
                <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-500">Geçmiş sezon verileri</span>
              </li>
              <li className="flex items-start">
                <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-500">Özel analizler ve içgörüler</span>
              </li>
              <li className="flex items-start">
                <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-500">Hakem karşılaştırma aracı</span>
              </li>
            </ul>
            <button
              onClick={() => handlePlanSelection('standart')}
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                selectedPlan === 'standart' 
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {selectedPlan === 'standart' ? 'Seçildi' : 'Seç'}
            </button>
          </div>
        </div>
        
        {/* Gold Plan */}
        <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${selectedPlan === 'gold' ? 'ring-2 ring-yellow-500 scale-105' : ''}`}>
          <div className="relative">
            <div className="absolute -top-4 right-0 left-0 text-center">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold py-1 px-3 rounded-full">EN POPÜLER</span>
            </div>
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 p-6 text-white pt-8">
              <h3 className="text-2xl font-bold mb-1 flex items-center">
                <FaStarHalfAlt className="mr-2" />
                Gold
              </h3>
              <p className="opacity-90">Gelişmiş özellikler</p>
              <div className="text-3xl font-bold mt-4">
                49.99₺ <span className="text-base font-normal opacity-80">/ aylık</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Standart plan özellikleri</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Geçmiş 3 sezon hakem verileri</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Hakem karşılaştırma aracı</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Takım bazlı hakem analizi</span>
              </li>
              <li className="flex items-start">
                <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-500">Hakem kararları video arşivi</span>
              </li>
              <li className="flex items-start">
                <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-500">Uzman yorumları ve analizleri</span>
              </li>
            </ul>
            <button
              onClick={() => handlePlanSelection('gold')}
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                selectedPlan === 'gold' 
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {selectedPlan === 'gold' ? 'Seçildi' : 'Seç'}
            </button>
          </div>
        </div>
        
        {/* Platinum Plan */}
        <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${selectedPlan === 'platinum' ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
          <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-6 text-white">
            <h3 className="text-2xl font-bold mb-1 flex items-center">
              <FaCrown className="mr-2" />
              Platinum
            </h3>
            <p className="opacity-90">En kapsamlı premium deneyim</p>
            <div className="text-3xl font-bold mt-4">
              79.99₺ <span className="text-base font-normal opacity-80">/ aylık</span>
            </div>
          </div>
          
          <div className="p-6">
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Gold plan özellikleri</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Tüm sezonlar için tam veri erişimi</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Hakem kararları video arşivi</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Özelleştirilebilir hakem performans grafikleri</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Uzman yorumları ve analizleri</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Öncelikli müşteri desteği</span>
              </li>
            </ul>
            <button
              onClick={() => handlePlanSelection('platinum')}
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                selectedPlan === 'platinum' 
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {selectedPlan === 'platinum' ? 'Seçildi' : 'Seç'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Kayıt Ol Butonu */}
      <div className="text-center mt-10">
        <button
          onClick={handleSubscribe}
          disabled={!selectedPlan}
          className={`py-3 px-8 rounded-md text-white font-medium text-lg transition-colors ${
            selectedPlan ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {selectedPlan ? 'Hemen Üye Ol' : 'Lütfen bir plan seçin'}
        </button>
      </div>
      
      {/* Premium Avantajları */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Premium Üyelik Avantajları</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Detaylı İstatistikler</h3>
            <p className="text-gray-600">
              Her hakemin maç yönetimindeki detaylı istatistiklerine erişim sağlayın.
              Kart gösterme eğilimleri, penaltı kararları ve kritik pozisyonlarda verdiği kararların analizi.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Video Arşivi</h3>
            <p className="text-gray-600">
              Kritik hakem kararlarının video arşivine erişim sağlayın. Tartışmalı pozisyonları
              farklı açılardan izleyin ve uzman yorumlarıyla birlikte değerlendirin.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Reklamsız Deneyim</h3>
            <p className="text-gray-600">
              Premium üyeler reklamsız bir deneyim yaşar. Kesintisiz bir şekilde
              içeriklere erişebilir ve site deneyimini en üst düzeyde yaşayabilirsiniz.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Veri Arşivi</h3>
            <p className="text-gray-600">
              Geçmiş sezonlardaki hakem performanslarına erişim. Uzun vadeli istatistiklerle
              hakemlerin gelişimini takip edin ve eğilimlerini analiz edin.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Uzman Yorumları</h3>
            <p className="text-gray-600">
              Eski hakemler ve futbol otoritelerinden özel analizler ve değerlendirmeler.
              Hakem kararlarını profesyonel gözle inceleyin.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Öncelikli Destek</h3>
            <p className="text-gray-600">
              Sorularınız ve istekleriniz için öncelikli müşteri desteği.
              Premium üyelere özel iletişim kanalları ve hızlı yanıt garantisi.
            </p>
          </div>
        </div>
      </div>
      
      {/* SSS Bölümü */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Sıkça Sorulan Sorular</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Premium üyeliğimi nasıl iptal edebilirim?</h3>
            <p className="text-gray-600">
              Premium üyeliğinizi hesap ayarlarından istediğiniz zaman iptal edebilirsiniz. İptal işlemi mevcut abonelik döneminizin sonunda etkin olur ve bu süre boyunca premium özelliklere erişiminiz devam eder.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Üyelik planları arasında geçiş yapabilir miyim?</h3>
            <p className="text-gray-600">
              Evet, üyelik planları arasında istediğiniz zaman geçiş yapabilirsiniz. Yükseltme yaparsanız, fiyat farkını ödeyerek hemen yeni plana erişebilirsiniz. Düşük bir plana geçiş yapmak isterseniz, mevcut abonelik sürenizin sonunda yeni plan aktif olur.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Premium içerikler ne sıklıkta güncellenir?</h3>
            <p className="text-gray-600">
              Hakem verileri ve istatistikler her hafta maçların ardından güncellenir. Video arşivi ve uzman analizleri haftada en az iki kez yeni içeriklerle zenginleştirilir. Sezon öncesi ve sonrası dönemlerde kapsamlı raporlar ve özel analizler paylaşılır.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Yıllık ödeme seçeneği var mı?</h3>
            <p className="text-gray-600">
              Evet, tüm premium planlarımız için yıllık ödeme seçeneği sunuyoruz. Yıllık ödeme yaparak %20 indirim avantajından yararlanabilirsiniz. Ödeme sayfasında bu seçeneği görebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 