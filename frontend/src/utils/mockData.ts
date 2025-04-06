import { MatchType } from './types';

export const mockMatches: MatchType[] = [
  {
    id: "1",
    homeTeam: "Bodrum FK",
    awayTeam: "Galatasaray",
    date: "12 Nisan 2025",
    time: "20:00",
    stadium: "Bodrum Arena",
    league: "Süper Lig",
    referee: "Cüneyt Çakır"
  },
  {
    id: "2",
    homeTeam: "Fenerbahçe",
    awayTeam: "Bodrum FK",
    date: "19 Nisan 2025",
    time: "19:00",
    stadium: "Ülker Stadyumu",
    league: "Süper Lig",
    referee: "Halil Umut Meler"
  },
  {
    id: "3",
    homeTeam: "Trabzonspor",
    awayTeam: "Beşiktaş",
    date: "20 Nisan 2025",
    time: "20:30",
    stadium: "Şenol Güneş Stadyumu",
    league: "Süper Lig",
    referee: "Ali Palabıyık"
  },
  {
    id: "4",
    homeTeam: "Antalyaspor",
    awayTeam: "Bodrum FK",
    date: "27 Nisan 2025",
    time: "16:00",
    stadium: "Antalya Stadyumu",
    league: "Süper Lig",
    referee: "Mete Kalkavan"
  },
  {
    id: "5",
    homeTeam: "Bodrum FK",
    awayTeam: "Kayserispor",
    date: "3 Mayıs 2025",
    time: "19:00",
    stadium: "Bodrum Arena",
    league: "Süper Lig",
    referee: "Atilla Karaoğlan"
  },
  {
    id: "6",
    homeTeam: "Konyaspor",
    awayTeam: "Bodrum FK",
    date: "10 Mayıs 2025",
    time: "20:00",
    stadium: "Konya Büyükşehir Stadyumu",
    league: "Süper Lig",
    referee: "Arda Kardeşler"
  }
];

// Değerlendirme sonuçları için örnek veri
export interface RefereeRating {
  refereeName: string;
  refereeImage: string;
  averageRating: number;
  matchCount: number;
  ratings: {
    decisionMaking: number;
    consistency: number;
    gameControl: number;
    communication: number;
    positioning: number;
    fitness: number;
  };
}

export const mockRefereeRatings: RefereeRating[] = [
  {
    refereeName: "Cüneyt Çakır",
    refereeImage: "https://i.imgur.com/SjLRtXk.jpg",
    averageRating: 8.5,
    matchCount: 15,
    ratings: {
      decisionMaking: 8.7,
      consistency: 8.3,
      gameControl: 9.0,
      communication: 7.9,
      positioning: 8.6,
      fitness: 8.5
    }
  },
  {
    refereeName: "Halil Umut Meler",
    refereeImage: "https://i.imgur.com/6Wvz0Qm.jpg",
    averageRating: 7.8,
    matchCount: 12,
    ratings: {
      decisionMaking: 7.5,
      consistency: 7.2,
      gameControl: 8.3,
      communication: 8.0,
      positioning: 7.9,
      fitness: 8.1
    }
  },
  {
    refereeName: "Ali Şansalan",
    refereeImage: "https://i.imgur.com/xtJXcXZ.jpg",
    averageRating: 7.2,
    matchCount: 10,
    ratings: {
      decisionMaking: 7.0,
      consistency: 6.8,
      gameControl: 7.5,
      communication: 7.6,
      positioning: 7.3,
      fitness: 7.0
    }
  },
  {
    refereeName: "Atilla Karaoğlan",
    refereeImage: "https://i.imgur.com/EjX2yyF.jpg",
    averageRating: 8.1,
    matchCount: 8,
    ratings: {
      decisionMaking: 8.0,
      consistency: 7.8,
      gameControl: 8.4,
      communication: 8.2,
      positioning: 8.0,
      fitness: 8.2
    }
  },
  {
    refereeName: "Mert Güzenge",
    refereeImage: "https://i.imgur.com/dkXzQDs.jpg",
    averageRating: 7.5,
    matchCount: 6,
    ratings: {
      decisionMaking: 7.3,
      consistency: 7.4,
      gameControl: 7.8,
      communication: 7.6,
      positioning: 7.2,
      fitness: 7.7
    }
  }
]; 