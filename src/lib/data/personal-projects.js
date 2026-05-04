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
  {
    id: 'gpti',
    status: 'completed',
    name: { kr: 'GPTI', en: 'GPTI' },
    desc: {
      kr: 'OpenAI API 기반 MBTI 궁합 분석과 오픈채팅 연계를 제공하는 웹 서비스',
      en: 'Web service for MBTI compatibility analysis and open chat integration powered by the OpenAI API'
    },
    detail: {
      kr: [
        '두 MBTI와 활동 키워드를 입력받아 직장, 연애, 생활, 식문화 등 상황별 궁합 결과를 제공하는 서비스로 구성',
        'Express + hbs + MySQL 구조에서 OpenAI chat completions를 연동해 장점, 단점, 주의할 점, 1~100 궁합 점수를 생성',
        '회원가입 시 MBTI, 나이, 성별 정보를 저장하고 JWT 로그인과 프로필 수정 흐름을 붙여 개인화된 검사 경험을 구현',
        '오픈카톡 목록과 내 링크 등록 기능을 붙여 공통 관심사 사용자가 대화로 이어질 수 있도록 연결',
        '만족도 점수가 높은 결과를 rating 테이블에 누적해 이후 답변 생성 시 참고 데이터로 활용하는 보강 흐름을 구성'
      ],
      en: [
        'Built a service that accepts two MBTI types and an activity keyword, then returns compatibility insights across work, dating, daily life, and food contexts',
        'Integrated OpenAI chat completions into an Express, hbs, and MySQL stack to generate strengths, weaknesses, precautions, and a 1 to 100 compatibility score',
        'Stored MBTI, age, and gender during sign-up and added JWT login plus profile editing to support a personalized test flow',
        'Connected the experience to open chat lists and user-submitted links so people with shared interests could continue the conversation',
        'Created a feedback loop that copies high-rated results into a rating table and reuses them as reference data for future generations'
      ]
    },
    tags: ['Node.js', 'Express', 'hbs', 'OpenAI API', 'MySQL', 'JWT'],
    link: 'https://github.com/mlee0323/GPTI',
    period: '2023.11'
  },
  {
    id: 'jilgyungyi',
    status: 'completed',
    name: { kr: '질경이', en: 'Jilgyungyi' },
    desc: {
      kr: 'OpenAI API를 연동해 본문 기반 글 생성을 운영할 수 있는 내부 어드민 웹앱 구현',
      en: 'Internal admin web app for operating article generation workflows with OpenAI API integration'
    },
    detail: {
      kr: [
        'Express + Handlebars + Bootstrap 기반 어드민 웹앱으로 생성 결과, 카테고리, 본문/백서 목록을 관리',
        'OpenAI text-davinci-003 API를 연동해 본문, 키워드, 글 개수, 글자 수 조건으로 글 초안 생성 흐름을 구현',
        'origin 본문과 vex 백서 두 소스 흐름을 분리하고 생성 결과를 MySQL article, generate, dashboard 테이블에 저장',
        '생성 요청 시 dashboard 상태를 진행중, 완료, 오류로 갱신해 운영자가 작업 현황을 확인할 수 있는 진행상황 화면 구성',
        'JWT 로그인, bcrypt 비밀번호 처리, 검색/카테고리 필터링, 상세 조회까지 포함한 내부 운영 도구 형태로 마무리'
      ],
      en: [
        'Built an admin web app with Express, Handlebars, and Bootstrap to manage generated content, categories, and source article and whitepaper lists',
        'Integrated the OpenAI text-davinci-003 API to generate article drafts from source text, keywords, article count, and length constraints',
        'Separated origin article and vex whitepaper flows and stored outputs in MySQL article, generate, and dashboard tables',
        'Updated dashboard status as in progress, completed, or failed for each generation request so operators could track workflow progress',
        'Finished it as an internal operations tool with JWT login, bcrypt password handling, search and category filtering, and detail views'
      ]
    },
    tags: ['Node.js', 'Express', 'Handlebars', 'Bootstrap', 'OpenAI API', 'MySQL', 'JWT'],
    link: 'https://github.com/mlee0323/jilgyungyi_gpt',
    period: '2023.07-2023.08'
  },
];
