"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();
  const [showError, setShowError] = useState(false);
  
  useEffect(() => {
    // Prevent infinite redirect loop
    // If we are already on a sub-page (e.g., /kr/), do not redirect automatically
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html') {
      router.replace('/kr/');
    } else {
      // If we are here but path is NOT root, it means server served root index.html (SPA Fallback)
      // but failed to serve the correct file for the path.
      // Show error/manual navigation after a delay
      const timer = setTimeout(() => setShowError(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [router]);
  
  // Return an empty div or a minimal loader to avoid "flicker"
  return (
    <div className="min-h-screen bg-aws-navy flex flex-col items-center justify-center p-4">
      {!showError ? (
        <div className="w-8 h-8 border-4 border-aws-orange border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <div className="text-center animate-fadeIn max-w-md">
           <div className="text-4xl mb-4">⚠️</div>
           <h2 className="text-xl font-bold text-white mb-2">페이지 로드 안내</h2>
           <p className="text-aws-text-secondary mb-6 text-sm">
             현재 새로고침이나 직접 접근으로 인해 페이지를 찾지 못했습니다.<br/>
             (AWS S3/CloudFront의 라우팅 설정이 필요합니다)
           </p>
           <button 
             onClick={() => router.replace('/kr/')}
             className="px-6 py-2 bg-aws-orange text-black font-bold rounded hover:bg-aws-orange-hover transition-colors"
           >
             메인으로 이동
           </button>
        </div>
      )}
    </div>
  );
}
