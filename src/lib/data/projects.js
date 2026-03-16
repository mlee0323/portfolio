// 프로젝트 데이터 - 여기서만 관리
// 추가/수정하면 Dashboard, Projects 페이지에 자동 반영

export const projects = [
  { 
    id: 'airline',
    status: 'running', 
    name: { kr: '항공권 예매 웹사이트', en: 'Airline Ticket Reservation Website' },
    desc: { kr: 'EKS 기반 MSA 항공권 예매 플랫폼 (6인 팀 프로젝트 / 팀장)', en: 'EKS-based MSA airline booking platform (6-member team / Team Lead)' },
    detail: {
      kr: [
        '프로젝트 전체 아키텍처 설계 및 팀 역할 분배 (팀장)',
        'EKS 클러스터 구성, namespace 전략, Ingress 라우팅 설계',
        'GitHub Actions + Argo CD 기반 GitOps CI/CD 파이프라인 구축',
        'ECR 리포지토리 구조 설계 및 이미지 배포 자동화',
        'ALB Ingress Controller를 활용한 마이크로서비스별 API 라우팅',
        'Auth/User 서비스 직접 개발 (회원가입, 로그인, 사용자 정보 API)',
        'HPA 오토스케일링 정책 정의 및 적용',
        'Prometheus + Grafana 모니터링 환경 구성',
        'Istio 서비스 메시 확장 (canary routing, retry/timeout 정책)',
      ],
      en: [
        'Designed overall project architecture and distributed team roles (Team Lead)',
        'Configured EKS cluster, namespace strategy, and Ingress routing design',
        'Built GitOps CI/CD pipeline with GitHub Actions + Argo CD',
        'Structured ECR repositories and automated image deployment',
        'Set up per-service API routing via ALB Ingress Controller',
        'Developed Auth/User service (registration, login, user info API)',
        'Defined and applied HPA autoscaling policies',
        'Set up monitoring with Prometheus + Grafana',
        'Extended with Istio service mesh (canary routing, retry/timeout policies)',
      ]
    },
    tags: ['EKS', 'Argo CD', 'GitHub Actions', 'ECR', 'Docker', 'Node.js', 'Istio', 'Prometheus', 'Grafana', 'Karpenter'],
    link: '',
    period: '2026.02 - 진행중',
  },

];

export const getRecentProjects = (count = 3) => projects.slice(0, count);
