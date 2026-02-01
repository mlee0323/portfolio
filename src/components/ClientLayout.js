"use client";
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function ClientLayout({ children, locale }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-aws-navy">
      <Header 
        currentPage="Portfolio"
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex pt-12">
        <Sidebar 
          locale={locale}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="flex-1 p-4 md:p-6 min-h-[calc(100vh-48px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
