"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pageNames = {
  '': { kr: '대시보드', en: 'Dashboard' },
  'about': { kr: '소개', en: 'About' },
  'skills': { kr: '기술', en: 'Skills' },
  'projects': { kr: '프로젝트', en: 'Projects' },
  'education': { kr: '교육', en: 'Education' },
  'contact': { kr: '연락처', en: 'Contact' },
};

export default function Header({ onMenuToggle }) {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  const locale = pathParts[0] || 'kr';
  const currentPagePath = pathParts.length > 1 ? pathParts[1] : '';
  const otherLocale = locale === 'kr' ? 'en' : 'kr';
  
  // Get current page name from URL
  const currentPage = pageNames[currentPagePath]?.[locale] || pageNames[''][locale];
  
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-12 bg-aws-squid-ink flex items-center justify-between px-4 z-50 border-b border-aws-border">
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuToggle}
          className="md:hidden text-white text-xl p-2 hover:bg-white/10 rounded"
        >
          ☰
        </button>
        <Link href={`/${locale}`} className="flex items-center gap-2 text-white font-bold">
          <span className="text-aws-orange text-xl">▲</span>
          <span>Lee</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm text-aws-text-secondary">
          <span>Portfolio</span>
          <span className="text-aws-text-muted">›</span>
          <span className="text-white font-medium">{currentPage}</span>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="px-3 py-1.5 border border-aws-border rounded text-sm hover:bg-white/10 hover:border-aws-orange transition-all"
          title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        
        {/* Language Toggle - Single Button */}
        <Link 
          href={`/${otherLocale}/${currentPagePath}`}
          className="px-3 py-1.5 border border-aws-border rounded text-sm hover:bg-white/10 hover:border-aws-orange transition-all"
          title={locale === 'kr' ? 'Switch to English' : '한국어로 변경'}
        >
          {locale === 'kr' ? '🇺🇸 EN' : '🇰🇷 KR'}
        </Link>
      </div>
    </header>
  );
}
