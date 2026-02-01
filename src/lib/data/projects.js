// 프로젝트 데이터 - 여기서만 관리
// 추가/수정하면 Dashboard, Projects 페이지에 자동 반영

export const projects = [
  { 
    id: 'ecs',
    status: 'running', 
    name: { kr: 'AWS ECS 웹 서비스 배포', en: 'AWS ECS Web Service Deployment' },
    desc: { kr: 'Docker 컨테이너를 활용한 AWS ECS에 웹 서비스 배포', en: 'Web service deployment on AWS ECS using Docker containers' },
    detail: {
      kr: [
        'FastAPI 백엔드와 Nginx 프론트엔드를 Docker 컨테이너로 구성',
        'AWS ECS Fargate를 활용한 서버리스 컨테이너 배포',
        'Application Load Balancer를 통한 트래픽 분산',
        'ECR을 활용한 컨테이너 이미지 관리'
      ],
      en: [
        'FastAPI backend and Nginx frontend containerized with Docker',
        'Serverless container deployment using AWS ECS Fargate',
        'Traffic distribution with Application Load Balancer',
        'Container image management with ECR'
      ]
    },
    tags: ['ECS', 'Docker', 'Nginx', 'FastAPI'], 
    link: 'https://github.com/mlee0323',
    period: '2024.12 - 현재'
  },
  { 
    id: 'cicd',
    status: 'completed', 
    name: { kr: 'CI/CD 파이프라인 구축', en: 'CI/CD Pipeline Setup' },
    desc: { kr: 'GitHub Actions 기반 CI/CD 파이프라인', en: 'CI/CD pipeline using GitHub Actions' },
    detail: {
      kr: [
        'GitHub Actions를 활용한 자동 빌드 및 테스트 파이프라인',
        'Docker 이미지 빌드 후 ECR에 자동 푸시',
        'ECS 서비스 자동 업데이트 구현',
        '환경별(dev, prod) 배포 분리'
      ],
      en: [
        'Automated build and test pipeline with GitHub Actions',
        'Docker image build and auto-push to ECR',
        'Automatic ECS service update implementation',
        'Environment-based deployment separation (dev, prod)'
      ]
    },
    tags: ['GitHub Actions', 'ECR', 'Docker'], 
    link: 'https://github.com/mlee0323',
    period: '2024.11'
  },

  { 
    id: 'k8s',
    status: 'completed', 
    name: { kr: 'Kubernetes 클러스터 구축', en: 'Kubernetes Cluster Setup' },
    desc: { kr: 'EKS 기반 K8s 환경 구성', en: 'K8s environment setup on EKS' },
    detail: {
      kr: [
        'Amazon EKS를 활용한 Kubernetes 클러스터 구성',
        'Helm 차트를 활용한 애플리케이션 배포',
        'Ingress Controller 설정 및 서비스 노출',
        'kubectl을 활용한 클러스터 관리'
      ],
      en: [
        'Kubernetes cluster setup with Amazon EKS',
        'Application deployment using Helm charts',
        'Ingress Controller configuration and service exposure',
        'Cluster management with kubectl'
      ]
    },
    tags: ['Kubernetes', 'EKS', 'Helm'], 
    link: 'https://github.com/mlee0323',
    period: '2024.09'
  },
];

export const getRecentProjects = (count = 3) => projects.slice(0, count);
