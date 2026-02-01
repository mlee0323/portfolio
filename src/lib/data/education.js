// 교육 이력 데이터 - 여기서만 관리
// 추가/수정하면 Education 페이지에 자동 반영

export const education = [
  {
    title: { kr: '메가존클라우드 MSP 솔루션 아키텍트 양성과정', en: 'Megazone Cloud MSP Solution Architect Training' },
    org: { kr: '메가존클라우드', en: 'Megazone Cloud' },
    date: { kr: '2025.10 - 진행중', en: '2025.10 - in progress' },
    items: {
      kr: ['AWS 핵심 서비스 학습', 'Docker/Kubernetes 실습', 'CI/CD 파이프라인 구축', '팀 프로젝트 수행'],
      en: ['AWS Core Services', 'Docker/Kubernetes Hands-on', 'CI/CD Pipeline Setup', 'Team Project Experience']
    }
  },
  {
    title: { kr: '컴퓨터공학과', en: 'Computer Science' },
    org: { kr: '광운대학교', en: 'Kwangwoon University' },
    date: { kr: '2021 - 2025', en: '2021 - 2025' },
    items: {
      kr: ['소프트웨어공학 학사'],
      en: ['Bachelor of Software Engineering']
    }
  },
];
