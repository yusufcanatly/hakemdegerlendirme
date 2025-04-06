'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCreditCard, FaLock, FaCcVisa, FaCcMastercard, FaCcAmex, FaArrowLeft } from 'react-icons/fa';

export default function OdemePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [planType, setPlanType] = useState('');
  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    saveCard: false,
    billingPeriod: 'monthly' // 'monthly' veya 'yearly'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan) {
      setPlanType(plan);
    } else {
      // Plan seçilmemişse premium sayfasına yönlendir
      router.push('/premium');
    }
  }, [searchParams, router]);
  
  const getPlanDetails = () => {
    switch(planType) {
      case 'standart':
        return {
          name: 'Standart',
          monthlyPrice: 29.99,
          yearlyPrice: 287.90, // %20 indirimli
          color: 'blue',
          features: [
            'Detaylı hakem istatistiklerine erişim',
            'Reklamsız deneyim',
            'Haftalık hakem performans raporları'
          ]
        };
      case 'gold':
        return {
          name: 'Gold',
          monthlyPrice: 49.99,
          yearlyPrice: 479.90, // %20 indirimli
          color: 'yellow',
          features: [
            'Standart plan özellikleri',
            'Geçmiş 3 sezon hakem verileri',
            'Hakem karşılaştırma aracı',
            'Takım bazlı hakem analizi'
          ]
        };
      case 'platinum':
        return {
          name: 'Platinum',
          monthlyPrice: 79.99,
          yearlyPrice: 767.90, // %20 indirimli
          color: 'purple',
          features: [
            'Gold plan özellikleri',
            'Tüm sezonlar için tam veri erişimi',
            'Hakem kararları video arşivi',
            'Özelleştirilebilir hakem performans grafikleri',
            'Uzman yorumları ve analizleri',
            'Öncelikli müşteri desteği'
          ]
        };
      default:
        return {
          name: '',
          monthlyPrice: 0,
          yearlyPrice: 0,
          color: 'gray',
          features: []
        };
    }
  };
  
  const planDetails = getPlanDetails();
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Hataları temizle
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const setBillingPeriod = (period) => {
    setPaymentData({
      ...paymentData,
      billingPeriod: period
    });
  };
  
  const formatCardNumber = (value) => {
    // Sadece rakamları al
    const v = value.replace(/\s+/g, '').replace(/\D/g, '');
    // 4 rakam grupları halinde formatla
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setPaymentData({
      ...paymentData,
      cardNumber: formattedValue
    });
    
    if (errors.cardNumber) {
      setErrors({
        ...errors,
        cardNumber: null
      });
    }
  };
  
  const formatExpDate = (value) => {
    // Sadece rakamları al
    const v = value.replace(/\s+/g, '').replace(/\D/g, '');
    
    if (v.length >= 2) {
      return v.slice(0, 2) + (v.length > 2 ? '/' + v.slice(2, 4) : '');
    }
    
    return v;
  };
  
  const handleExpDateChange = (e) => {
    const formattedValue = formatExpDate(e.target.value);
    setPaymentData({
      ...paymentData,
      expDate: formattedValue
    });
    
    if (errors.expDate) {
      setErrors({
        ...errors,
        expDate: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!paymentData.cardName.trim()) {
      newErrors.cardName = 'Kart üzerindeki isim gereklidir';
    }
    
    if (!paymentData.cardNumber.trim()) {
      newErrors.cardNumber = 'Kart numarası gereklidir';
    } else if (paymentData.cardNumber.replace(/\s+/g, '').length < 16) {
      newErrors.cardNumber = 'Geçerli bir kart numarası giriniz';
    }
    
    if (!paymentData.expDate.trim()) {
      newErrors.expDate = 'Son kullanma tarihi gereklidir';
    } else {
      const [month, year] = paymentData.expDate.split('/');
      if (!month || !year || month > 12 || month < 1) {
        newErrors.expDate = 'Geçerli bir son kullanma tarihi giriniz';
      }
    }
    
    if (!paymentData.cvv.trim()) {
      newErrors.cvv = 'Güvenlik kodu gereklidir';
    } else if (paymentData.cvv.length < 3) {
      newErrors.cvv = 'Geçerli bir güvenlik kodu giriniz';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      // Burada gerçek ödeme işlemi yapılacak
      // Simülasyon için bir gecikme ekleyelim
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Başarılı ödeme sonrası ana sayfaya yönlendirme
      router.push('/odeme-basarili');
    } catch (error) {
      console.error('Ödeme işlemi sırasında hata:', error);
      setErrors({
        form: 'Ödeme işlemi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      });
    } finally {
      setLoading(false);
    }
  };
  
  const currentPrice = paymentData.billingPeriod === 'monthly' 
    ? planDetails.monthlyPrice 
    : planDetails.yearlyPrice;
  
  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <div className="mb-6">
        <Link href="/premium" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <FaArrowLeft className="mr-2" />
          Premium Planlarına Dön
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Sol Taraf - Ödeme Formu */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-6">Ödeme Bilgileri</h1>
            
            {errors.form && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                {errors.form}
              </div>
            )}
            
            <div className="mb-6">
              <div className="flex mb-4">
                <button
                  type="button"
                  onClick={() => setBillingPeriod('monthly')}
                  className={`flex-1 py-2 text-center border-b-2 ${
                    paymentData.billingPeriod === 'monthly' 
                      ? `border-${planDetails.color}-500 text-${planDetails.color}-700` 
                      : 'border-gray-200 text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Aylık Ödeme
                </button>
                <button
                  type="button"
                  onClick={() => setBillingPeriod('yearly')}
                  className={`flex-1 py-2 text-center border-b-2 ${
                    paymentData.billingPeriod === 'yearly' 
                      ? `border-${planDetails.color}-500 text-${planDetails.color}-700` 
                      : 'border-gray-200 text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Yıllık Ödeme <span className="text-green-600 font-medium">(%20 indirim)</span>
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                  Kart Üzerindeki İsim
                </label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={paymentData.cardName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${errors.cardName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Ad Soyad"
                />
                {errors.cardName && (
                  <p className="mt-1 text-sm text-red-600">{errors.cardName}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Kart Numarası
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength="19"
                    className={`w-full px-3 py-2 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10`}
                    placeholder="1234 5678 9012 3456"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <div className="flex space-x-1">
                      <FaCcVisa className="text-blue-700" />
                      <FaCcMastercard className="text-red-500" />
                      <FaCcAmex className="text-blue-500" />
                    </div>
                  </div>
                </div>
                {errors.cardNumber && (
                  <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="expDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Son Kullanma Tarihi
                  </label>
                  <input
                    type="text"
                    id="expDate"
                    name="expDate"
                    value={paymentData.expDate}
                    onChange={handleExpDateChange}
                    maxLength="5"
                    className={`w-full px-3 py-2 border ${errors.expDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="AA/YY"
                  />
                  {errors.expDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.expDate}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                    Güvenlik Kodu (CVV)
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handleInputChange}
                    maxLength="4"
                    className={`w-full px-3 py-2 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="123"
                  />
                  {errors.cvv && (
                    <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="saveCard"
                    checked={paymentData.saveCard}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Kart bilgilerimi kaydet</span>
                </label>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-4">
                  "Ödeme Yap" düğmesine tıklayarak, <Link href="/kullanim-kosullari" className="text-blue-600 hover:underline">Kullanım Koşulları</Link>'nı 
                  ve <Link href="/gizlilik-politikasi" className="text-blue-600 hover:underline">Gizlilik Politikası</Link>'nı kabul etmiş olursunuz.
                </p>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center ${
                    loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      İşleniyor...
                    </>
                  ) : (
                    <>
                      <FaCreditCard className="mr-2" />
                      Ödeme Yap ({currentPrice.toFixed(2)}₺)
                    </>
                  )}
                </button>
              </div>
              
              <div className="flex items-center justify-center text-sm text-gray-600">
                <FaLock className="mr-2 text-green-600" />
                Güvenli ödeme SSL şifrelemesi ile korunmaktadır
              </div>
            </form>
          </div>
        </div>
        
        {/* Sağ Taraf - Sipariş Özeti */}
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
            <h2 className="text-xl font-bold mb-4">Sipariş Özeti</h2>
            
            <div className={`mb-6 p-4 rounded-md bg-${planDetails.color}-50 border border-${planDetails.color}-200`}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{planDetails.name} Plan</h3>
                <span className="font-semibold">
                  {paymentData.billingPeriod === 'monthly' ? 'Aylık' : 'Yıllık'}
                </span>
              </div>
              
              <ul className="mb-4 pl-5 text-sm">
                {planDetails.features.map((feature, index) => (
                  <li key={index} className="mb-1 list-disc">{feature}</li>
                ))}
              </ul>
              
              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center text-lg">
                  <span>Toplam:</span>
                  <span className="font-bold">{currentPrice.toFixed(2)}₺</span>
                </div>
                {paymentData.billingPeriod === 'yearly' && (
                  <div className="text-right text-sm text-green-600 font-medium">
                    %20 indirim uygulandı
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              <p className="mb-2">
                {paymentData.billingPeriod === 'monthly' 
                  ? 'Aboneliğiniz her ay otomatik olarak yenilenecektir.' 
                  : 'Aboneliğiniz her yıl otomatik olarak yenilenecektir.'}
              </p>
              <p>
                İstediğiniz zaman hesap ayarlarınızdan aboneliğinizi iptal edebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 