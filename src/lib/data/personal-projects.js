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
  { 
    id: 'upbit-clone',
    status: 'completed', 
    name: { kr: '업비트 클론', en: 'Ubpit Clone' },
    desc: { kr: '하이브리드 클러스터 구성의 업비트 구현', en: 'Ubpit Clone with Hybrid Cluster' },
    detail: {
      kr: [
        'GitHub Actions를 활용한 CI/CD 파이프라인 및 GitOps 운영',
        'Kubernetes와 VMWare를 활용한 하이브리드 클러스터 구성',
        'Tailscale VPN을 활용한 안전한 메시 네트워크 환경 구축',
        'Redis와 TimescaleDB를 활용한 실시간 시계열 데이터 처리',
        'Grafana와 Prometheus를 활용한 풀스택 모니터링 시스템'
      ],
      en: [
        'CI/CD pipeline and GitOps operation using GitHub Actions',
        'Hybrid cluster configuration using Kubernetes and VMWare',
        'Secure mesh network environment using Tailscale VPN',
        'Real-time time-series data processing using Redis and TimescaleDB',
        'Full-stack monitoring system using Grafana and Prometheus'
      ]
    },
    tags: ['Kubernetes', 'VMWare', 'Docker', 'Node.js', 'Tailscale', 'Timescale', 'Redis', 'Grafana', 'Prometheus'], 
    link: 'https://github.com/mlee0323/upbit-clone',
    presentation: '/pdfs/upbit-clone.pdf',
    period: '2025.12.18-2026.01.09',
    imageHeader: { kr: '아키텍처', en: 'Architecture' },
    images: ['/images/projects/upbit-clone.png']
  },
];