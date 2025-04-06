import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ClientLayout from "./client-layout";
import ClientFooter from "./client-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hakem Değerlendirme Platformu",
  description: "Türkiye'nin en kapsamlı hakem değerlendirme platformu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen bg-gray-100 flex flex-col bg-opacity-50 relative`}>
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-gray-200 opacity-90" />
        </div>
        <ClientLayout />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <ClientFooter />
      </body>
    </html>
  );
}
