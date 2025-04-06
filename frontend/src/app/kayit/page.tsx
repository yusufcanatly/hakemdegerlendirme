'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiUser, FiMail, FiLock, FiUserPlus } from 'react-icons/fi';

export default function KayitPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Şifre kontrolü
    if (formData.password !== formData.confirmPassword) {
      setError('Şifreler eşleşmiyor. Lütfen kontrol ediniz.');
      setLoading(false);
      return;
    }

    try {
      // Gerçek bir API'niz olduğunda burayı değiştirin
      // Şimdilik sadece demo olarak işlem yapıyoruz
      console.log('Kayıt oluşturuluyor:', { 
        name: formData.name,
        email: formData.email,
        password: formData.password 
      });
      
      // Başarılı kayıt durumunda anasayfaya yönlendir
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (err) {
      setError('Kayıt oluşturulurken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-center text-slate-800 mb-1">Kayıt Ol</h1>
          <p className="text-center text-gray-500 text-sm">Yeni bir hesap oluşturun</p>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-100 flex items-center">
            <span className="text-red-600 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </span>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ad Soyad
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                placeholder="Adınız Soyadınız"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-posta Adresi
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                placeholder="ornek@mail.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Şifre
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                placeholder="••••••••"
                minLength={6}
                required
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">En az 6 karakter olmalıdır</p>
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Şifre Tekrar
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-400" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                placeholder="••••••••"
                minLength={6}
                required
              />
            </div>
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center items-center px-4 py-3 text-white font-medium rounded-lg ${
                loading 
                  ? 'bg-yellow-400 cursor-not-allowed' 
                  : 'bg-yellow-500 hover:bg-yellow-600'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors`}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FiUserPlus className={`h-5 w-5 ${loading ? 'text-yellow-300' : 'text-yellow-300 group-hover:text-yellow-200'} transition-colors`} />
              </span>
              {loading ? 'Kayıt Oluşturuluyor...' : 'Kayıt Ol'}
            </button>
          </div>
        </form>
        
        <div className="pt-4 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Zaten bir hesabınız var mı?{' '}
            <Link href="/giris" className="font-semibold text-yellow-600 hover:text-yellow-500 transition-colors">
              Giriş Yapın
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 