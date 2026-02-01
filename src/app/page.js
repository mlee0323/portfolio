"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/kr/');
  }, [router]);
  
  return (
    <div className="min-h-screen bg-aws-navy flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4 animate-pulse">▲</div>
        <p className="text-aws-text-secondary">Redirecting...</p>
      </div>
    </div>
  );
}
