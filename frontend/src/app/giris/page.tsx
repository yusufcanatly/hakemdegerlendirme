'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

export default function GirisPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Gerçek bir API'niz olduğunda burayı değiştirin
      // Şimdilik sadece demo olarak işlem yapıyoruz
      console.log('Giriş yapılıyor:', { email, password });
      
      // Başarılı giriş durumunda anasayfaya yönlendir
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (err) {
      setError('Giriş yapılırken bir hata oluştu. Lütfen bilgilerinizi kontrol edin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-center text-slate-800 mb-1">Giriş Yap</h1>
          <p className="text-center text-gray-500 text-sm">Hesabınıza erişim sağlayın</p>
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
        
        <form onSubmit={handleSubmit} className="space-y-6">
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
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                placeholder="ornek@mail.com"
                required
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Şifre
              </label>
              <Link href="/sifremi-unuttum" className="text-sm font-semibold text-yellow-600 hover:text-yellow-500 transition-colors">
                Şifremi Unuttum
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          
          <div>
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
                <FiLogIn className={`h-5 w-5 ${loading ? 'text-yellow-300' : 'text-yellow-300 group-hover:text-yellow-200'} transition-colors`} />
              </span>
              {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
            </button>
          </div>
        </form>
        
        <div className="pt-4 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Hesabınız yok mu?{' '}
            <Link href="/kayit" className="font-semibold text-yellow-600 hover:text-yellow-500 transition-colors">
              Hemen Kaydolun
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 