// 프로젝트 데이터 - 여기서만 관리
// 추가/수정하면 Dashboard, Projects 페이지에 자동 반영

export const projects = [
  // { 
  //   id: 'ecs',
  //   status: 'running', 
  //   name: { kr: 'AWS ECS 웹 서비스 배포', en: 'AWS ECS Web Service Deployment' },
  //   desc: { kr: 'Docker 컨테이너를 활용한 AWS ECS에 웹 서비스 배포', en: 'Web service deployment on AWS ECS using Docker containers' },
  //   detail: {
  //     kr: [
  //       'FastAPI 백엔드와 Nginx 프론트엔드를 Docker 컨테이너로 구성',
  //       'AWS ECS Fargate를 활용한 서버리스 컨테이너 배포',
  //       'Application Load Balancer를 통한 트래픽 분산',
  //       'ECR을 활용한 컨테이너 이미지 관리'
  //     ],
  //     en: [
  //       'FastAPI backend and Nginx frontend containerized with Docker',
  //       'Serverless container deployment using AWS ECS Fargate',
  //       'Traffic distribution with Application Load Balancer',
  //       'Container image management with ECR'
  //     ]
  //   },
  //   tags: ['ECS', 'Docker', 'Nginx', 'FastAPI'], 
  //   link: 'https://github.com/mlee0323',
  //   period: '2024.12 - 현재'
  // },

];

export const getRecentProjects = (count = 3) => projects.slice(0, count);
