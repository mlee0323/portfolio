// 프로젝트 데이터 - 여기서만 관리
// 추가/수정하면 Dashboard, Projects 페이지에 자동 반영

export const projects = [
  { 
    id: 'upbit-clone',
    status: 'completed', 
    name: { kr: '업비트 클론', en: 'Ubpit Clone' },
    desc: { kr: '하이브리드 클러스터 구성의 업비트 구현', en: 'Ubpit Clone with Hybrid Cluster' },
    detail: {
      kr: [
        'Redis를 활용한 실시간 시세 데이터 처리',

      ],
      en: [
        'Real-time market data processing with Redis',

      ]
    },
    tags: ['Kubernetes', 'VMWare', 'Docker', 'Node.js', 'Tailscale', 'Timescale', 'Redis', 'Grafana', 'Prometheus'], 
    link: 'https://github.com/mlee0323/upbit-clone',
    period: '2025.12.18-2026.01.09',
    imageHeader: { kr: '아키텍처', en: 'Architecture' },
    images: ['/images/projects/upbit-clone.png']
  },

];

export const getRecentProjects = (count = 3) => projects.slice(0, count);
