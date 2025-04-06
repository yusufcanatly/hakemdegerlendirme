'use client';

import { useState, useEffect } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

// Sonuç veri modelleri
interface HakemDegerlendirme {
  id: number;
  hakemAdi: string;
  macSayisi: number;
  ortalamaPuan: number;
  basariYuzdesi: number;
  kategori: string;
  sonKararVermeYuzdesi: number;
}

export default function SonuclarPage() {
  const [degerlendirmeler, setDegerlendirmeler] = useState<HakemDegerlendirme[]>([]);
  const [filtrelenmisData, setFiltrelenmisData] = useState<HakemDegerlendirme[]>([]);
  const [aramaTermi, setAramaTermi] = useState('');
  const [siralama, setSiralama] = useState<{alan: keyof HakemDegerlendirme, yon: 'asc' | 'desc'}>({
    alan: 'ortalamaPuan',
    yon: 'desc'
  });
  const [secilenKategori, setSecilenKategori] = useState<string>('hepsi');
  const [yukleniyor, setYukleniyor] = useState(true);

  // Örnek veri oluşturma
  useEffect(() => {
    // Normalde bir API'den veri çekecek olsanız burada fetch işlemi yaparsınız
    setTimeout(() => {
      const ornekVeriler: HakemDegerlendirme[] = [
        { id: 1, hakemAdi: 'Ali Palabıyık', macSayisi: 15, ortalamaPuan: 8.7, basariYuzdesi: 92, kategori: 'Süper Lig', sonKararVermeYuzdesi: 96 },
        { id: 2, hakemAdi: 'Cüneyt Çakır', macSayisi: 18, ortalamaPuan: 9.2, basariYuzdesi: 96, kategori: 'Süper Lig', sonKararVermeYuzdesi: 98 },
        { id: 3, hakemAdi: 'Halil Umut Meler', macSayisi: 14, ortalamaPuan: 8.4, basariYuzdesi: 88, kategori: 'Süper Lig', sonKararVermeYuzdesi: 90 },
        { id: 4, hakemAdi: 'Mete Kalkavan', macSayisi: 12, ortalamaPuan: 7.9, basariYuzdesi: 84, kategori: 'Süper Lig', sonKararVermeYuzdesi: 87 },
        { id: 5, hakemAdi: 'Yaşar Kemal Uğurlu', macSayisi: 10, ortalamaPuan: 7.5, basariYuzdesi: 81, kategori: 'Süper Lig', sonKararVermeYuzdesi: 85 },
        { id: 6, hakemAdi: 'Arda Kardeşler', macSayisi: 13, ortalamaPuan: 8.0, basariYuzdesi: 85, kategori: 'Süper Lig', sonKararVermeYuzdesi: 88 },
        { id: 7, hakemAdi: 'Atilla Karaoğlan', macSayisi: 9, ortalamaPuan: 7.2, basariYuzdesi: 78, kategori: 'Süper Lig', sonKararVermeYuzdesi: 82 },
        { id: 8, hakemAdi: 'Erkan Özdamar', macSayisi: 8, ortalamaPuan: 7.0, basariYuzdesi: 76, kategori: 'Süper Lig', sonKararVermeYuzdesi: 80 },
        { id: 9, hakemAdi: 'Hakan Ceylan', macSayisi: 7, ortalamaPuan: 6.8, basariYuzdesi: 74, kategori: 'Süper Lig', sonKararVermeYuzdesi: 78 },
        { id: 10, hakemAdi: 'Burak Şeker', macSayisi: 6, ortalamaPuan: 6.5, basariYuzdesi: 72, kategori: 'Süper Lig', sonKararVermeYuzdesi: 76 },
        { id: 11, hakemAdi: 'Volkan Bayarslan', macSayisi: 5, ortalamaPuan: 6.2, basariYuzdesi: 70, kategori: 'Süper Lig', sonKararVermeYuzdesi: 74 },
        { id: 12, hakemAdi: 'Dilek Özçelik', macSayisi: 11, ortalamaPuan: 7.8, basariYuzdesi: 83, kategori: 'Süper Lig', sonKararVermeYuzdesi: 86 },
      ];
      
      setDegerlendirmeler(ornekVeriler);
      setFiltrelenmisData(ornekVeriler);
      setYukleniyor(false);
    }, 800); // Gerçekçi bir yükleme tecrübesi için kısa bir gecikme
  }, []);

  // Arama ve filtreleme
  useEffect(() => {
    let sonuclar = [...degerlendirmeler];
    
    // Arama filtrelemesi
    if (aramaTermi) {
      sonuclar = sonuclar.filter(hakem => 
        hakem.hakemAdi.toLowerCase().includes(aramaTermi.toLowerCase())
      );
    }
    
    // Kategori filtrelemesi
    if (secilenKategori !== 'hepsi') {
      sonuclar = sonuclar.filter(hakem => hakem.kategori === secilenKategori);
    }
    
    // Sıralama
    sonuclar.sort((a, b) => {
      const aValue = a[siralama.alan];
      const bValue = b[siralama.alan];
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return siralama.yon === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return siralama.yon === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
      
      return 0;
    });
    
    setFiltrelenmisData(sonuclar);
  }, [aramaTermi, secilenKategori, siralama, degerlendirmeler]);

  // Sütunları sıralama işlevi
  const siralamaToggle = (alan: keyof HakemDegerlendirme) => {
    if (siralama.alan === alan) {
      // Aynı alan, yönü değiştir
      setSiralama({
        alan,
        yon: siralama.yon === 'asc' ? 'desc' : 'asc'
      });
    } else {
      // Farklı alan, varsayılan olarak azalan sıralama
      setSiralama({
        alan,
        yon: 'desc'
      });
    }
  };

  // Sıralama göstergesi
  const SiralamaGosterge = ({ alan }: { alan: keyof HakemDegerlendirme }) => {
    if (siralama.alan !== alan) return null;
    
    return (
      <span className="ml-1 text-xs">
        {siralama.yon === 'asc' ? '▲' : '▼'}
      </span>
    );
  };

  // Kategori seçenekleri
  const kategoriler = ['hepsi', 'Süper Lig'];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Hakem Değerlendirme Sonuçları</h1>
        <p className="mt-2 text-gray-600">
          Bu sayfada hakemlerin performans değerlendirme sonuçlarını görebilirsiniz. Hakemler çeşitli kriterlere göre değerlendirilir.
        </p>
      </div>
      
      {/* Arama ve Filtreleme */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Arama */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Hakem adı ara..."
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            value={aramaTermi}
            onChange={(e) => setAramaTermi(e.target.value)}
          />
        </div>
        
        {/* Kategori filtreleme */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiFilter className="text-gray-400" />
          </div>
          <select
            className="pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
            value={secilenKategori}
            onChange={(e) => setSecilenKategori(e.target.value)}
          >
            {kategoriler.map((kategori) => (
              <option key={kategori} value={kategori}>
                {kategori === 'hepsi' ? 'Tüm Kategoriler' : kategori}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Değerlendirme Tablosu */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-slate-700"
                onClick={() => siralamaToggle('hakemAdi')}
              >
                Hakem Adı
                <SiralamaGosterge alan="hakemAdi" />
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-slate-700"
                onClick={() => siralamaToggle('kategori')}
              >
                Kategori
                <SiralamaGosterge alan="kategori" />
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-slate-700"
                onClick={() => siralamaToggle('macSayisi')}
              >
                Maç Sayısı
                <SiralamaGosterge alan="macSayisi" />
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-slate-700"
                onClick={() => siralamaToggle('ortalamaPuan')}
              >
                Ort. Puan
                <SiralamaGosterge alan="ortalamaPuan" />
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-slate-700"
                onClick={() => siralamaToggle('basariYuzdesi')}
              >
                Başarı (%)
                <SiralamaGosterge alan="basariYuzdesi" />
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-slate-700"
                onClick={() => siralamaToggle('sonKararVermeYuzdesi')}
              >
                Son Karar Verme (%)
                <SiralamaGosterge alan="sonKararVermeYuzdesi" />
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {yukleniyor ? (
              // Yükleme göstergesi
              Array(5).fill(0).map((_, index) => (
                <tr key={index} className="animate-pulse">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  </td>
                </tr>
              ))
            ) : filtrelenmisData.length > 0 ? (
              // Sonuçlar
              filtrelenmisData.map((hakem) => (
                <tr key={hakem.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {hakem.hakemAdi}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {hakem.kategori}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hakem.macSayisi}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">
                      {hakem.ortalamaPuan.toFixed(1)}
                    </div>
                    <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                      <div 
                        className={`h-2 rounded-full ${
                          hakem.ortalamaPuan >= 8.5 ? 'bg-green-500' : 
                          hakem.ortalamaPuan >= 7.5 ? 'bg-green-400' :
                          hakem.ortalamaPuan >= 6.5 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${(hakem.ortalamaPuan / 10) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">
                      %{hakem.basariYuzdesi}
                    </div>
                    <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                      <div 
                        className={`h-2 rounded-full ${
                          hakem.basariYuzdesi >= 90 ? 'bg-green-500' : 
                          hakem.basariYuzdesi >= 80 ? 'bg-green-400' :
                          hakem.basariYuzdesi >= 70 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${hakem.basariYuzdesi}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">
                      %{hakem.sonKararVermeYuzdesi}
                    </div>
                    <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                      <div 
                        className={`h-2 rounded-full ${
                          hakem.sonKararVermeYuzdesi >= 90 ? 'bg-green-500' : 
                          hakem.sonKararVermeYuzdesi >= 80 ? 'bg-green-400' :
                          hakem.sonKararVermeYuzdesi >= 70 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${hakem.sonKararVermeYuzdesi}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              // Sonuç bulunamadı
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                  Aramanızla eşleşen hakem bulunamadı
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Bilgi */}
      <div className="mt-8 bg-yellow-50 border border-yellow-100 rounded-lg p-4">
        <h3 className="text-lg font-medium text-yellow-800">Değerlendirme Kriterleri</h3>
        <ul className="mt-2 text-sm text-yellow-700 space-y-1 pl-5 list-disc">
          <li>Ortalama Puan: Hakemin maçlardaki tüm kararlarının doğruluk oranına göre verilen 1-10 arası puan</li>
          <li>Başarı Yüzdesi: Tartışmalı pozisyonlarda doğru karar verme oranı</li>
          <li>Son Karar Verme: Zor durumlarda doğru ve hızlı karar verme yeteneği</li>
          <li>Kategori: Hakemin yönettiği en üst lig seviyesi</li>
        </ul>
      </div>
    </div>
  );
} 