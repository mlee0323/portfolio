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
        'Pod 전용 secondary CIDR(100.64.0.0/23)와 ENI custom networking 구조를 반영해 EKS 네트워크 레이어 설계',
        'airline-auth / flight / payment, argocd, monitoring, karpenter namespace를 분리하고 ALB Ingress 기반 라우팅 구성',
        'GitHub Actions로 Terraform fmt / validate / plan, Kubernetes manifest kubeconform 검증 파이프라인 구성',
        'ECR 저장소 3종(auth, flights, payments)과 scan-on-push, lifecycle 정책을 정리해 이미지 운영 기준 수립',
        'Karpenter NodePool + 서비스별 HPA(min 2, max 10) 조합으로 확장 전략을 구성하고 부하 테스트용 k6 Job 자산 정리',
        'Prometheus / Grafana / Fluent Bit 운영 스택과 Grafana persistence, Prometheus 15일 보존 정책을 반영',
        'S3(web / infra / logs), KMS, CloudFront 범위 WAF managed rules를 분리해 외부 노출 경계와 보안 구성을 정리',
      ],
      en: [
        'Codified the prod VPC with Terraform and split public, node, pod, and db subnets across two AZs (2a, 2c)',
        'Designed the EKS network layer with a dedicated secondary CIDR (100.64.0.0/23) and ENI custom networking for pods',
        'Separated airline-auth, flight, payment, argocd, monitoring, and karpenter namespaces and configured ALB Ingress routing',
        'Built GitHub Actions validation flows for Terraform fmt/validate/plan and Kubernetes manifests with kubeconform',
        'Defined three shared ECR repositories (auth, flights, payments) with scan-on-push and lifecycle retention policies',
        'Combined Karpenter NodePool and per-service HPA (min 2, max 10) to shape the scaling strategy and organized k6 load-test assets',
        'Configured the Prometheus, Grafana, and Fluent Bit stack with Grafana persistence and 15-day Prometheus retention',
        'Separated S3 buckets (web, infra, logs), KMS encryption, and CloudFront-scoped WAF managed rules for edge security',
      ]
    },
    tags: ['Terraform', 'EKS', 'Karpenter', 'ALB Ingress', 'GitHub Actions', 'ECR', 'S3', 'AWS KMS', 'WAF', 'Prometheus', 'Grafana'],
    link: 'https://github.com/Megazone-Final/airline-eks',
    period: '2026.02 - 진행중',
    imageHeader: { kr: 'EKS / 인프라 아키텍처', en: 'EKS / Infra Architecture' },
    images: ['/images/projects/Airline.jpg']
  },

];

export const getRecentProjects = (count = 3) => projects.slice(0, count);
