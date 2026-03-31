// 자기소개 및 교육 이력 데이터
export const about = {
  intro: {
    kr: '안녕하세요. 클라우드 네이티브 환경에서의 인프라 설계와 운영 자동화에 관심이 많은 이민석입니다.',
    en: "Hi, I'm Minseok Lee — a Cloud Infrastructure & DevOps Engineer focused on designing and automating cloud-native infrastructure."
  },
  desc: {
    kr: 'AWS, Docker, Kubernetes를 중심으로 클라우드 환경을 직접 설계하고 구축해보며 경험을 쌓아가고 있습니다. 인프라를 코드로 관리하고 배포를 자동화하면서, 확장성과 안정성 모두를 갖춘 플랫폼을 만들어가는 것이 목표입니다. 또한 생성형 AI 도구 활용과 오픈소스 AI 에이전트 환경(OpenClaw 등) 구축 및 활용 경험을 바탕으로 문제 해결과 작업 생산성을 높이고 있습니다.',
    en: "I've been building hands-on experience designing and deploying cloud environments around AWS, Docker, and Kubernetes. My goal is to build platforms that are both scalable and reliable — with infrastructure managed as code and deployments fully automated. I also improve problem solving and delivery speed by using generative AI tools and by setting up and working with open-source AI agent environments such as OpenClaw."
  }
};

// 교육 이력 데이터
export const education = [
  {
    title: { kr: '메가존클라우드 MSP 솔루션 아키텍트 양성과정', en: 'Megazone Cloud MSP Solution Architect Training' },
    org: { kr: '메가존클라우드', en: 'Megazone Cloud' },
    date: { kr: '2025.09 - 진행중', en: '2025.09 - in progress' },
    items: {
      kr: ['VMWare 기반 온프레미스 환경 학습', 'AWS & GCP 핵심 서비스 학습', 'Docker/Kubernetes 실습', 'Terraform 실습', 'CI/CD 파이프라인 구축', '팀 프로젝트 수행'],
      en: ['VMWare On-premise Environment', 'AWS & GCP Core Services', 'Docker/Kubernetes Hands-on', 'Terraform Hands-on', 'CI/CD Pipeline Setup', 'Team Project Experience']
    }
  },
  {
    title: { kr: '광운대학교', en: 'Kwangwoon University' },
    org: { kr: '소프트웨어공학 학사', en: 'Bachelor of Software Engineering' },
    date: { kr: '2026.02 졸업', en: 'Graduated Feb 2026' },
    items: {
      kr: ['졸업작품 : 주식 투자 분석 및 종목 추천 시스템 (기존 예측 모델 튜닝 및 데이터 전처리)'],
      en: ['Graduation Project: Stock Investment Analysis and Recommendation System (tuned an existing prediction model and handled data preprocessing)']
    }
  },
];
