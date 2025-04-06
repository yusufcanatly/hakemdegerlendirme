import Link from 'next/link';
import Image from 'next/image';
import { MatchType } from "@/utils/types";

export default function MatchCard({ match }: { match: MatchType }) {
  const { id, homeTeam, awayTeam, date, time, stadium, league, referee } = match;
  
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">{league}</span>
          <span className="text-xs text-gray-500">{date} · {time}</span>
        </div>
        
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-col items-center w-5/12">
            <div className="h-16 w-16 flex items-center justify-center mb-2">
              <span className="text-lg font-bold bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center text-slate-800">
                {homeTeam.charAt(0)}
              </span>
            </div>
            <span className="text-sm font-medium text-center">{homeTeam}</span>
          </div>
          
          <div className="w-2/12 flex flex-col items-center">
            <span className="text-xl font-bold text-gray-300 mb-2">VS</span>
          </div>
          
          <div className="flex flex-col items-center w-5/12">
            <div className="h-16 w-16 flex items-center justify-center mb-2">
              <span className="text-lg font-bold bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center text-slate-800">
                {awayTeam.charAt(0)}
              </span>
            </div>
            <span className="text-sm font-medium text-center">{awayTeam}</span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2 pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{stadium}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Hakem: {referee}</span>
          </div>
        </div>
      </div>
      
      <Link 
        href={`/maclar/${id}`} 
        className="block bg-yellow-500 text-center text-slate-800 font-medium py-2 hover:bg-yellow-600 transition-colors"
      >
        Detaylara Git
      </Link>
    </div>
  );
} 