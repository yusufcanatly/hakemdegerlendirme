'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function KayitOlPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    favoriteTeam: '',
    agreeToTerms: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const teams = [
    'Adana Demirspor', 'Alanyaspor', 'Antalyaspor', 'Başakşehir', 
    'Beşiktaş', 'Fenerbahçe', 'Galatasaray', 'Gaziantep FK', 
    'Hatayspor', 'İstanbulspor', 'Kasımpaşa', 'Kayserispor', 
    'Konyaspor', 'Pendikspor', 'Rizespor', 'Samsunspor',
    'Sivasspor', 'Trabzonspor'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Şifreler eşleşmiyor.');
      return;
    }

    if (!formData.agreeToTerms) {
      setError('Devam etmek için gizlilik politikasını kabul etmelisiniz.');
      return;
    }

    try {
      setLoading(true);
      
      // Burada gerçek bir API çağrısı yapılacak
      // Şimdilik başarılı olduğunu simüle ediyoruz
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Başarılı kayıt sonrası ana sayfaya yönlendirme
      router.push('/');
    } catch (err) {
      setError('Kayıt olma sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Kayıt Ol</h1>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Ad Soyad
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Şifre
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Şifre Tekrar
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="favoriteTeam" className="block text-sm font-medium text-gray-700 mb-1">
            Favori Takımınız
          </label>
          <select
            id="favoriteTeam"
            name="favoriteTeam"
            value={formData.favoriteTeam}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Takım Seçin</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-6">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1 mr-2"
            />
            <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
              <span>Kişisel verilerimin işlenmesine ilişkin </span>
              <Link href="/gizlilik-politikasi" className="text-blue-600 hover:underline">
                Gizlilik Politikası
              </Link>
              <span>'nı okudum ve kabul ediyorum.</span>
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          {loading ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Zaten bir hesabınız var mı?{' '}
          <Link href="/giris" className="text-blue-600 hover:underline">
            Giriş Yap
          </Link>
        </p>
      </div>
    </div>
  );
} 