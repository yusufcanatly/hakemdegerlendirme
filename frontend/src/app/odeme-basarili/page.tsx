'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle, FaHome, FaUser } from 'react-icons/fa';

export default function OdemeBasariliPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Kullanıcıyı otomatik olarak 5 saniye sonra ana sayfaya yönlendir
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 15000);
    
    // Temizleme işlemi
    return () => clearTimeout(redirectTimer);
  }, [router]);
  
  const currentDate = new Date();
  const nextMonth = new Date(currentDate);
  nextMonth.setMonth(currentDate.getMonth() + 1);
  
  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
          <FaCheckCircle className="text-green-600 text-4xl" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Ödemeniz Başarıyla Tamamlandı!</h1>
        
        <p className="text-lg text-gray-600 mb-6">
          Premium üyeliğiniz başarıyla aktifleştirildi. Artık tüm premium özelliklere erişebilirsiniz.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Sipariş Bilgileri</h2>
          
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-sm text-gray-500">Sipariş Numarası</p>
              <p className="font-medium">{Math.floor(Math.random() * 1000000) + 100000}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Tarih</p>
              <p className="font-medium">{currentDate.toLocaleDateString('tr-TR')}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Bir Sonraki Ödeme Tarihi</p>
              <p className="font-medium">{nextMonth.toLocaleDateString('tr-TR')}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Ödeme Yöntemi</p>
              <p className="font-medium">Kredi Kartı (****1234)</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Sonraki Adımlar</h2>
          
          <ul className="text-left space-y-2 max-w-md mx-auto">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-2">
                1
              </div>
              <p>Hesap ayarlarınızdan premium üyelik bilgilerinizi görüntüleyebilirsiniz.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-2">
                2
              </div>
              <p>Hakem değerlendirmelerinde detaylı istatistiklere erişim sağlayabilirsiniz.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-2">
                3
              </div>
              <p>Herhangi bir sorunuz olursa müşteri hizmetlerimizle iletişime geçebilirsiniz.</p>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium flex items-center justify-center hover:bg-blue-700 transition-colors">
            <FaHome className="mr-2" />
            Ana Sayfaya Dön
          </Link>
          
          <Link href="/hesabim" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md font-medium flex items-center justify-center hover:bg-gray-300 transition-colors">
            <FaUser className="mr-2" />
            Hesabım
          </Link>
        </div>
        
        <p className="mt-6 text-sm text-gray-500">
          15 saniye içinde otomatik olarak ana sayfaya yönlendirileceksiniz.
        </p>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-4">Müşteri Desteği</h3>
        <p className="text-gray-600">
          Herhangi bir sorunuz veya sorununuz varsa, lütfen <a href="mailto:destek@hakemdegerlendirme.com" className="text-blue-600 hover:underline">destek@hakemdegerlendirme.com</a> adresinden bizimle iletişime geçin.
        </p>
      </div>
    </div>
  );
} 