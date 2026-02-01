// 개인 프로젝트 데이터
// 학습용, 토이 프로젝트 등

export const personalProjects = [
  { 
    id: 'portfolio',
    status: 'running', 
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
    period: '2026.01.31-today'
  },
  { 
    id: 'upbit-clone',
    status: 'completed', 
    name: { kr: '업비트 클론', en: 'Ubpit Clone' },
    desc: { kr: '하이브리드 클러스터 구성의 업비트 구현', en: 'Ubpit Clone with Hybrid Cluster' },
    detail: {
      kr: [
        '사람인, 잡코리아, 원티드 등 주요 채용사이트 크롤링',
        'Selenium을 활용한 동적 페이지 처리',
        'Pandas를 이용한 데이터 정제 및 Excel 저장',
        '키워드 기반 필터링 기능'
      ],
      en: [
        'Crawling major job sites (Saramin, JobKorea, Wanted)',
        'Dynamic page handling with Selenium',
        'Data processing and Excel export with Pandas',
        'Keyword-based filtering functionality'
      ]
    },
    tags: ['Python', 'Selenium', 'Pandas'], 
    link: 'https://github.com/mlee0323/upbit-clone',
    period: '2025.12.18-2026.01.09'
  },
];
