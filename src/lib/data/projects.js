// 프로젝트 데이터 - 여기서만 관리
// 추가/수정하면 Dashboard, Projects 페이지에 자동 반영

export const projects = [
  { 
    id: 'airline',
    status: 'completed', 
    name: { kr: 'Airline Platform | AWS EKS 기반 항공 예약 마이크로서비스 플랫폼', en: 'Airline Platform | AWS EKS-based Airline Reservation Microservices Platform' },
    desc: {
      kr: '6인 팀 프로젝트에서 항공권 예매 트래픽 시나리오를 가정한 AWS EKS 기반 마이크로서비스 플랫폼 PoC를 설계·구축',
      en: 'Designed and built an AWS EKS-based microservices platform PoC for airline reservation traffic scenarios in a 6-member team project'
    },
    role: {
      kr: 'Team Lead / Cloud-Native Delivery & Observability Lead',
      en: 'Team Lead / Cloud-Native Delivery & Observability Lead'
    },
    detail: {
      kr: [
        '6인 팀의 팀장으로 항공권 예매 트래픽 시나리오를 가정한 AWS EKS 기반 마이크로서비스 플랫폼 PoC를 설계·구축하고, task breakdown·technical discussion·morning seminar·Q&A 루틴으로 팀 내 지식 격차를 완화',
        'Route 53, CloudFront, WAF, ALB, Kubernetes Ingress, Service, Pod로 이어지는 end-to-end traffic path를 설계해 외부 유입부터 워크로드 도달까지의 요청 흐름을 정리',
        'Terraform 모듈로 VPC, EKS, IRSA, ENIConfig, Karpenter 기반 node autoscaling 등 인프라 리소스를 구성하고 운영 가능한 클라우드 네이티브 구조를 코드로 관리',
        'GitHub Actions OIDC, Helm, Argo CD 기반 GitOps 배포 흐름을 구축해 인프라 변경과 애플리케이션 배포를 일관된 방식으로 검증·반영',
        'IRSA 기반 pod-level AWS permission, SSM Session Manager 기반 SSH 미노출 노드 접근, WAF rule 기반 외부 경계 제어를 적용해 기본 보안 운영 모델을 구성',
        'Prometheus, Grafana, Fluent Bit, CloudWatch 기반 metric/log observability를 구성하고 CloudWatch·S3 log routing을 붙여 운영 관찰성을 확보',
        'k6 API-level load test를 최대 25,000 req/s 조건까지 수행했고, 테스트 기준 99.93% success rate, 21.1 ms average response time, 109.8 ms p99 latency를 관찰',
        'readiness probe misconfiguration, pod IP range limitation, HPA/Karpenter scaling condition 등 운영 이슈를 확인하고 후속 개선 항목으로 문서화'
      ],
      en: [
        'Led a 6-member team in designing and building an AWS EKS-based microservices platform PoC for airline reservation traffic scenarios, and used task breakdowns, technical discussions, morning seminars, and Q&A routines to reduce knowledge gaps across the team',
        'Designed the end-to-end traffic path across Route 53, CloudFront, WAF, ALB, Kubernetes Ingress, Service, and Pod so the external request flow was explicit from edge to workload',
        'Provisioned infrastructure resources through Terraform modules, including VPC, EKS, IRSA, ENIConfig, and Karpenter-based node autoscaling, to manage an operable cloud-native foundation as code',
        'Built a GitOps delivery flow with GitHub Actions OIDC, Helm, and Argo CD so infrastructure and application changes could be validated and promoted in a consistent way',
        'Applied a baseline security model with IRSA-based pod-level AWS permissions, SSH-free node access through SSM Session Manager, and WAF rules at the external boundary',
        'Set up observability with Prometheus, Grafana, Fluent Bit, and CloudWatch, including CloudWatch and S3 log routing for metrics and log visibility',
        'Ran k6 API-level load tests up to 25,000 req/s and observed a 99.93 percent success rate, 21.1 ms average response time, and 109.8 ms p99 latency under the documented test condition',
        'Identified operational issues such as readiness probe misconfiguration, pod IP range limits, and HPA or Karpenter scaling conditions, then documented them as follow-up improvements'
      ]
    },
    extraDetailTitle: { kr: '세부 구현 내역', en: 'Implementation Details' },
    extraDetail: {
      kr: [
        'Istio Ambient Mesh 기반 namespace 분리와 admin ingress 경로 구성',
        'Valkey 세션/서비스 캐시 구성과 ElastiCache 인증 방식 분리',
        'ECR scan-on-push와 lifecycle 정책, kubeconform 기반 Kubernetes manifest 검증',
        'S3(web / infra / logs), KMS, CloudWatch 연동으로 로그 저장 및 보호 경계 구성'
      ],
      en: [
        'Namespace segmentation and admin ingress paths built around an Istio Ambient Mesh setup',
        'Valkey-backed session and service cache design with separated ElastiCache authentication modes',
        'ECR scan-on-push and lifecycle policies, plus Kubernetes manifest validation with kubeconform',
        'Log storage and protection boundaries organized with S3 buckets for web, infra, and logs, KMS, and CloudWatch integration'
      ]
    },
    tags: ['AWS', 'EKS', 'Terraform', 'Helm', 'Argo CD', 'GitHub Actions', 'Prometheus', 'Grafana', 'Fluent Bit', 'CloudWatch', 'k6'],
    link: 'https://github.com/orgs/Megazone-Final/repositories?q=airline',
    period: '2026.02 - 2026.05',
    imageHeader: { kr: 'EKS / 인프라 아키텍처', en: 'EKS / Infra Architecture' },
    images: ['/images/projects/Airline.png']
  },
  {
    id: 'investment-analysis-ai',
    status: 'completed',
    name: { kr: '주식 투자 분석 및 종목 추천 시스템', en: 'Stock Investment Analysis and Recommendation System' },
    desc: {
      kr: '졸업작품 팀 프로젝트에서 LSTM 계열 딥러닝 구조를 바탕으로 주가 예측용 시계열 모델을 구성하고, 데이터 전처리부터 학습 흐름까지 정리',
      en: 'Graduation team project where I built an LSTM-based time-series model for stock prediction and organized the flow from data preprocessing to training'
    },
    detail: {
      kr: [
        '팀 프로젝트에서 주가 예측 모델 파트를 맡아 LSTM 계열 딥러닝 구조를 활용한 커스텀 시계열 모델을 구성하고 학습',
        '논문, 오픈소스 구현, AI 도구를 참고해 입력 feature, 시퀀스 구성, 학습 흐름을 프로젝트 데이터에 맞게 정리',
        '주가 데이터 전처리, feature 정리, 학습 및 예측 스크립트 관리 등 실험 환경을 구성',
        '예측 결과가 추천 시스템에서 활용될 수 있도록 저장 구조와 후속 연결 흐름을 맞춤',
        '기존 공개 구조를 그대로 적용하는 데서 그치지 않고 프로젝트 목적에 맞게 모델과 데이터 흐름을 재구성한 경험'
      ],
      en: [
        'Owned the stock prediction part of the graduation project by building and training a custom time-series model based on an LSTM-style deep learning structure',
        'Used papers, open-source implementations, and AI tools to organize input features, sequence construction, and the training flow for the project dataset',
        'Set up the experiment environment by handling stock data preprocessing, feature organization, and training and prediction scripts',
        'Aligned the storage structure and downstream flow so prediction results could be used by the recommendation system',
        'Went beyond applying a public baseline as-is by restructuring the model and data flow to fit the project goal'
      ]
    },
    tags: ['Python', 'Deep Learning', 'Time-Series', 'Data Processing', 'AI Tooling', 'TimescaleDB'],
    link: 'https://github.com/Team-DIFFUSER/Investment_analysis_ai',
    period: '2025.03 - 2025.08'
  },

];

export const getRecentProjects = (count = 3) => projects.slice(0, count);
