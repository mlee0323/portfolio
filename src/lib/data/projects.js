// 프로젝트 데이터 - 여기서만 관리
// 추가/수정하면 Dashboard, Projects 페이지에 자동 반영

export const projects = [
  { 
    id: 'airline',
    status: 'running', 
    name: { kr: '항공권 예매 웹사이트', en: 'Airline Ticket Reservation Website' },
    desc: { kr: 'Terraform + EKS 기반 항공 서비스 플랫폼 구축 진행 중 (6인 팀 프로젝트 / 팀장)', en: 'Terraform and EKS-based airline platform in progress (6-member team / Team Lead)' },
    detail: {
      kr: [
        'Terraform으로 prod VPC를 코드화하고 public / node / pod / db subnet을 2개 AZ(2a, 2c) 기준으로 분리',
        'eksctl 기반 클러스터 부트스트랩에 OIDC, EBS CSI Driver, Prefix Delegation, ENI custom networking 구성을 반영',
        'airline-auth / flight / payment namespace에 Istio Ambient 라벨과 Argo CD sync-wave를 반영하고 ALB Ingress 및 admin ingress 경로를 구성',
        'Istio Ambient Mesh용 base / CNI / istiod / ztunnel 매니페스트를 추가하고 auth / payment 서비스의 outbound IP 예외 설정을 조정',
        'Karpenter NodePool + 서비스별 HPA(min 2, max 10) 조합으로 확장 전략을 구성하고 k6 Job 기반 부하 테스트 자산을 정리',
        'Prometheus / Grafana / Fluent Bit 운영 스택과 Grafana persistence, Prometheus 15일 보존 정책을 반영',
        'GitHub Actions로 Terraform fmt / validate / plan, Kubernetes manifest kubeconform 검증 파이프라인 구성',
        'Valkey 세션 / 서비스 캐시용 Terraform 모듈과 endpoint output을 추가하고, ElastiCache 인증 방식을 password + IAM으로 분리',
        'ECR scan-on-push를 registry-level scanning 방식으로 전환하고 lifecycle 정책을 유지',
        'S3(web / infra / logs), KMS, CloudFront 범위 WAF managed rules를 Terraform 리소스 기준으로 정리해 외부 노출 경계를 분리',
      ],
      en: [
        'Codified the prod VPC with Terraform and split public, node, pod, and db subnets across two AZs (2a, 2c)',
        'Applied OIDC, EBS CSI Driver, Prefix Delegation, and ENI custom networking to the eksctl-based cluster bootstrap',
        'Applied Istio Ambient labels and Argo CD sync-wave settings to the airline-auth, flight, and payment namespaces and configured ALB plus admin ingress paths',
        'Added Istio Ambient Mesh manifests for base, CNI, istiod, and ztunnel, and tuned outbound IP exclusions for the auth and payment services',
        'Combined Karpenter NodePool and per-service HPA (min 2, max 10) to shape the scaling strategy and organized k6 load-test assets',
        'Configured the Prometheus, Grafana, and Fluent Bit stack with Grafana persistence and 15-day Prometheus retention',
        'Built GitHub Actions validation flows for Terraform fmt/validate/plan and Kubernetes manifests with kubeconform',
        'Added a Terraform Valkey module plus endpoint outputs for session and service caches, splitting ElastiCache authentication into password and IAM modes',
        'Migrated ECR scan-on-push to registry-level scanning while keeping lifecycle retention policies',
        'Organized S3 buckets (web, infra, logs), KMS encryption, and CloudFront-scoped WAF managed rules as Terraform resources for edge security',
      ]
    },
    tags: ['Terraform', 'EKS', 'Istio Ambient', 'Karpenter', 'ALB Ingress', 'GitHub Actions', 'ECR', 'Valkey', 'S3', 'Prometheus', 'Grafana', 'WAF'],
    link: 'https://github.com/orgs/Megazone-Final/repositories?q=airline',
    period: '2026.02 - 진행중',
    imageHeader: { kr: 'EKS / 인프라 아키텍처', en: 'EKS / Infra Architecture' },
    images: ['/images/projects/Airline.jpg']
  },

];

export const getRecentProjects = (count = 3) => projects.slice(0, count);
