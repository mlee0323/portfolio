// 프로젝트 데이터 - 여기서만 관리
// 추가/수정하면 Dashboard, Projects 페이지에 자동 반영

export const projects = [
  { 
    id: 'airline',
    status: 'completed', 
    name: { kr: '항공권 예매 웹사이트', en: 'Airline Ticket Reservation Website' },
    desc: { kr: 'Terraform + EKS + Helm/Argo CD 기반 항공 서비스 플랫폼 구축 완료 (6인 팀 프로젝트 / 팀장)', en: 'Completed airline platform built with Terraform, EKS, Helm, and Argo CD (6-member team / Team Lead)' },
    detail: {
      kr: [
        'Terraform으로 prod VPC를 코드화하고 public / node / pod / db subnet을 2개 AZ(2a, 2c) 기준으로 분리',
        'Terraform의 eks / eks_addons 모듈로 EKS 클러스터, managed node group, IRSA, ENIConfig, Karpenter 리소스를 함께 관리하도록 확장',
        'auth / flight / payment 서비스를 Helm chart 구조로 전환하고 Argo CD Application + Image Updater annotation 기반 GitOps 배포 흐름을 구성',
        'airline-auth / flight / payment namespace에 Istio Ambient 라벨과 Argo CD sync-wave를 반영하고 ALB Ingress 및 admin ingress 경로를 구성',
        'Istio Ambient Mesh용 base / CNI / istiod / ztunnel 구성을 추가하고 auth / payment 서비스의 outbound IP 예외 설정을 조정',
        'Karpenter NodePool + 서비스별 HPA(min 2, max 10) 조합으로 확장 전략을 구성하고 k6 Job 기반 부하 테스트 자산을 정리',
        '기존 k6 시나리오를 유지한 상태에서 3대 EC2 분산 부하 테스트를 다시 수행해 총 4,200 VUs 안정 구간과 총 15,000 VUs stress 구간 기준을 정리',
        '대표 노드 기준 1,400 VUs에서 p95 17ms 이하·실패율 0%, 5,000 VUs에서는 p95 약 89ms·실패율 0.74%·dropped iterations를 확인해 saturation point를 식별',
        'Prometheus / Grafana / Fluent Bit 운영 스택과 Grafana persistence, Prometheus 15일 보존 정책을 반영',
        'GitHub Actions로 Terraform fmt / validate / plan, Kubernetes manifest kubeconform 검증 파이프라인 구성',
        'Valkey 세션 / 서비스 캐시용 Terraform 모듈과 endpoint output을 추가하고, ElastiCache 인증 방식을 password + IAM으로 분리',
        'ECR scan-on-push를 registry-level scanning 방식으로 전환하고 lifecycle 정책을 유지',
        'S3(web / infra / logs), KMS, CloudFront 범위 WAF managed rules를 Terraform 리소스 기준으로 정리해 외부 노출 경계를 분리',
      ],
      en: [
        'Codified the prod VPC with Terraform and split public, node, pod, and db subnets across two AZs (2a, 2c)',
        'Expanded the Terraform eks and eks_addons modules to manage the EKS cluster, managed node group, IRSA, ENIConfig, and Karpenter resources together',
        'Migrated auth, flight, and payment services to Helm charts and wired a GitOps deployment flow with Argo CD Applications plus Image Updater annotations',
        'Applied Istio Ambient labels and Argo CD sync-wave settings to the airline-auth, flight, and payment namespaces and configured ALB plus admin ingress paths',
        'Added the Istio Ambient Mesh base, CNI, istiod, and ztunnel setup and tuned outbound IP exclusions for the auth and payment services',
        'Combined Karpenter NodePool and per-service HPA (min 2, max 10) to shape the scaling strategy and organized k6 load-test assets',
        'Re-ran the existing k6 scenarios as a distributed test across three EC2 instances and defined both the stable 4,200 VUs range and the 15,000 VUs stress range',
        'Using the representative node output, confirmed sub-17ms p95 with 0% failures at 1,400 VUs and identified the saturation point at 5,000 VUs with ~89ms p95, 0.74% failures, and dropped iterations',
        'Configured the Prometheus, Grafana, and Fluent Bit stack with Grafana persistence and 15-day Prometheus retention',
        'Built GitHub Actions validation flows for Terraform fmt/validate/plan and Kubernetes manifests with kubeconform',
        'Added a Terraform Valkey module plus endpoint outputs for session and service caches, splitting ElastiCache authentication into password and IAM modes',
        'Migrated ECR scan-on-push to registry-level scanning while keeping lifecycle retention policies',
        'Organized S3 buckets (web, infra, logs), KMS encryption, and CloudFront-scoped WAF managed rules as Terraform resources for edge security',
      ]
    },
    tags: ['Terraform', 'EKS', 'Helm', 'Argo CD', 'Istio Ambient', 'Karpenter', 'ALB Ingress', 'k6', 'ECR', 'Valkey', 'Prometheus', 'Grafana', 'WAF'],
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
