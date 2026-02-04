// 개인 프로젝트 데이터
// 학습용, 토이 프로젝트 등

export const personalProjects = [
  { 
    id: 'portfolio',
    status: 'completed', 
    name: { kr: '포트폴리오 웹사이트', en: 'Portfolio Website' },
    desc: { kr: 'Next.js + Tailwind CSS 기반 포트폴리오', en: 'Portfolio built with Next.js + Tailwind CSS' },
    detail: {
      kr: [
        'Next.js App Router 기반 다국어 지원 (한국어/영어)',
        'Tailwind CSS를 활용한 AWS 콘솔 스타일 UI 구현',
        'S3 정적 웹호스팅 배포',
        '다크/라이트 모드 지원'
      ],
      en: [
        'Multi-language support (Korean/English) with Next.js App Router',
        'AWS Console style UI implemented with Tailwind CSS',
        'S3 static web hosting deployment',
        'Dark/Light mode support'
      ]
    },
    tags: ['Next.js', 'Tailwind', 'S3'], 
    link: 'https://github.com/mlee0323',
    period: '2026.01.31-2026.02.03'
  },

];