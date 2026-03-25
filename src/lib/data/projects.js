// 프로젝트 데이터 - 여기서만 관리
// 추가/수정하면 Dashboard, Projects 페이지에 자동 반영

export const projects = [
  { 
    id: 'airline',
    status: 'running', 
    name: { kr: '항공권 예매 웹사이트', en: 'Airline Ticket Reservation Website' },
    desc: { kr: 'Terraform + EKS + Helm/Argo CD 기반 항공 서비스 플랫폼 구축 진행 중 (6인 팀 프로젝트 / 팀장)', en: 'Airline platform in progress with Terraform, EKS, Helm, and Argo CD (6-member team / Team Lead)' },
    detail: {
      kr: [
        'Terraform으로 prod VPC를 코드화하고 public / node / pod / db subnet을 2개 AZ(2a, 2c) 기준으로 분리',
        'Terraform의 eks / eks_addons 모듈로 EKS 클러스터, managed node group, IRSA, ENIConfig, Karpenter 리소스를 함께 관리하도록 확장',
        'auth / flight / payment 서비스를 Helm chart 구조로 전환하고 Argo CD Application + Image Updater annotation 기반 GitOps 배포 흐름을 구성',
        'airline-auth / flight / payment namespace에 Istio Ambient 라벨과 Argo CD sync-wave를 반영하고 ALB Ingress 및 admin ingress 경로를 구성',
        'Istio Ambient Mesh용 base / CNI / istiod / ztunnel 구성을 추가하고 auth / payment 서비스의 outbound IP 예외 설정을 조정',
        'Karpenter NodePool + 서비스별 HPA(min 2, max 10) 조합으로 확장 전략을 구성하고 k6 Job 기반 부하 테스트 자산을 정리',
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
        'Configured the Prometheus, Grafana, and Fluent Bit stack with Grafana persistence and 15-day Prometheus retention',
        'Built GitHub Actions validation flows for Terraform fmt/validate/plan and Kubernetes manifests with kubeconform',
        'Added a Terraform Valkey module plus endpoint outputs for session and service caches, splitting ElastiCache authentication into password and IAM modes',
        'Migrated ECR scan-on-push to registry-level scanning while keeping lifecycle retention policies',
        'Organized S3 buckets (web, infra, logs), KMS encryption, and CloudFront-scoped WAF managed rules as Terraform resources for edge security',
      ]
    },
    tags: ['Terraform', 'EKS', 'Helm', 'Argo CD', 'Istio Ambient', 'Karpenter', 'ALB Ingress', 'ECR', 'Valkey', 'Prometheus', 'Grafana', 'WAF'],
    link: 'https://github.com/orgs/Megazone-Final/repositories?q=airline',
    period: '2026.02 - 진행중',
    imageHeader: { kr: 'EKS / 인프라 아키텍처', en: 'EKS / Infra Architecture' },
    images: ['/images/projects/Airline.jpg']
  },
  {
    id: 'investment-analysis-ai',
    status: 'completed',
    name: { kr: '주식 투자 분석 및 종목 추천 시스템', en: 'Stock Investment Analysis and Recommendation System' },
    desc: {
      kr: '졸업작품 팀 프로젝트에서 TensorFlow 기반 주가 예측 모델을 구현하고 기술지표 feature engineering 및 학습 파이프라인을 구성',
      en: 'Graduation team project where I implemented a TensorFlow-based stock prediction model with technical-indicator feature engineering and a training pipeline'
    },
    detail: {
      kr: [
        '팀 프로젝트에서 주가 예측 모델 파트를 담당하며 22개 주요 종목 대상 시계열 예측 파이프라인을 구현',
        'TensorFlow 기반 LSTM 예측 모델을 구성하고 일부 종목 모델에는 Attention, Batch Normalization, Dropout, Huber loss를 적용해 학습 안정성을 보강',
        'OHLCV 데이터에 RSI, MACD, 이동평균, 볼린저 밴드, ATR, ADX 등 기술적 지표를 추가해 feature engineering 수행',
        'TimescaleDB와 연동해 주가 이력과 예측 결과를 저장하고 학습, 예측, 평가 스크립트를 분리해 운영 흐름을 정리',
        'EarlyStopping, ReduceLROnPlateau, ModelCheckpoint를 적용하고 MSE, MAE, R2 기준으로 모델 성능을 점검',
        '프로젝트 전체 시스템은 뉴스 감성 분석과 재무지표 기반 추천 로직과 연결되도록 설계'
      ],
      en: [
        'Owned the stock prediction model in a team graduation project and built a time-series forecasting pipeline for 22 major Korean stocks',
        'Implemented TensorFlow-based LSTM models and applied Attention, Batch Normalization, Dropout, and Huber loss to selected stock-specific models for more stable training',
        'Performed feature engineering on OHLCV data with technical indicators such as RSI, MACD, moving averages, Bollinger Bands, ATR, and ADX',
        'Integrated the pipeline with TimescaleDB for historical prices and prediction outputs, and separated training, inference, and evaluation scripts for a cleaner workflow',
        'Used EarlyStopping, ReduceLROnPlateau, and ModelCheckpoint, and checked model quality with MSE, MAE, and R2 metrics',
        'Connected the overall system to sentiment-analysis and financial-factor-based recommendation logic'
      ]
    },
    tags: ['TensorFlow', 'LSTM', 'Time Series', 'Feature Engineering', 'TimescaleDB', 'MongoDB'],
    link: 'https://github.com/Team-DIFFUSER/Investment_analysis_ai',
    period: '2025.03 - 2025.08'
  },

];

export const getRecentProjects = (count = 3) => projects.slice(0, count);
