'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiHome, FiCalendar, FiUser, FiBarChart2, FiInfo, FiMail, FiLogIn, FiUserPlus, FiAward } from 'react-icons/fi';

export default function ClientLayout() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ana menü öğeleri - tek bir yerde tanımlayarak tutarlılık sağlıyoruz
  const menuItems = [
    { path: '/', title: 'Ana Sayfa', icon: FiHome },
    { path: '/maclar', title: 'Maçlar', icon: FiCalendar },
    { path: '/hakemler', title: 'Hakemler', icon: FiUser },
    { path: '/premium', title: 'Premium', icon: FiAward },
    { path: '/sonuclar', title: 'Değerlendirme Sonuçları', icon: FiBarChart2 },
    { path: '/hakkimizda', title: 'Hakkımızda', icon: FiInfo },
    { path: '/iletisim', title: 'İletişim', icon: FiMail }
  ];

  return (
    <>
      <header className="bg-slate-800 shadow-md text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-yellow-300">SON</span>
                <span className="text-xl font-bold text-white">KARAR</span>
              </Link>
            </div>
            
            {/* Masaüstü Menüsü - Ortalanmış ve Düzenli */}
            <div className="hidden md:flex md:items-center md:justify-between md:flex-1 md:ml-10">
              <nav className="flex mx-auto justify-center">
                <ul className="flex space-x-4">
                  {menuItems.map((item) => (
                    <li key={item.path}>
                      <Link 
                        href={item.path} 
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                          pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
                            ? 'text-yellow-300 bg-slate-700' 
                            : 'text-gray-300 hover:text-yellow-300 hover:bg-slate-700'
                        }`}
                      >
                        <item.icon className="mr-1.5" /> {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              
              {/* Giriş/Kayıt butonları */}
              <div className="flex items-center space-x-2">
                <Link 
                  href="/giris" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                    pathname === '/giris' 
                      ? 'text-yellow-300 bg-slate-700' 
                      : 'text-white hover:text-yellow-300 hover:bg-slate-700'
                  }`}
                >
                  <FiLogIn className="mr-1.5" /> Giriş
                </Link>
                <Link 
                  href="/kayit-ol" 
                  className="px-3 py-2 rounded-md text-sm font-medium bg-yellow-500 text-slate-800 hover:bg-yellow-400 transition-colors flex items-center"
                >
                  <FiUserPlus className="mr-1.5" /> Kayıt Ol
                </Link>
              </div>
            </div>
            
            {/* Mobil Menü Butonu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-yellow-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 transition-colors"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Menüyü {isMenuOpen ? 'Kapat' : 'Aç'}</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobil Menü - Aynı menü öğelerini kullanıyor */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700">
            <div className="container mx-auto px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path} 
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center ${
                    pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
                      ? 'text-yellow-300 bg-slate-700' 
                      : 'text-gray-300 hover:text-yellow-300 hover:bg-slate-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="mr-2" /> {item.title}
                </Link>
              ))}
              
              {/* Mobil Giriş/Kayıt Butonları */}
              <div className="pt-4 pb-2 border-t border-slate-700 flex flex-col space-y-2">
                <Link 
                  href="/giris" 
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center ${
                    pathname === '/giris' 
                      ? 'text-yellow-300 bg-slate-700' 
                      : 'text-white hover:text-yellow-300 hover:bg-slate-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiLogIn className="mr-2" /> Giriş
                </Link>
                <Link 
                  href="/kayit-ol" 
                  className="block px-3 py-2 rounded-md text-base font-medium bg-yellow-500 text-slate-800 hover:bg-yellow-400 transition-colors flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiUserPlus className="mr-2" /> Kayıt Ol
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
} 