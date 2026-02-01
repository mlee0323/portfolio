// 스킬 데이터 - 여기서만 관리
// 추가/수정하면 Dashboard, Skills 페이지에 자동 반영

// Dashboard에서 사용하는 스킬 진행률
export const skills = [
  { name: 'AWS', progress: 70 },
  { name: 'Docker', progress: 75 },
  { name: 'Kubernetes', progress: 50 },
  { name: 'Terraform', progress: 45 },
];

// Skills 페이지에서 사용하는 카테고리별 스킬
export const skillCategories = [
  {
    icon: '☁️', title: 'AWS Services',
    skills: [
      { name: 'EC2', level: 'learning' }, { name: 'ECS', level: 'learning' },
      { name: 'RDS', level: 'learning' }, { name: 'S3', level: 'learning' },
      { name: 'VPC', level: 'basic' }, { name: 'IAM', level: 'basic' },
      { name: 'CloudWatch', level: 'basic' }, { name: 'Route53', level: 'basic' },
    ]
  },
  {
    icon: '🐳', title: 'Containers',
    skills: [
      { name: 'Docker', level: 'learning' }, { name: 'Docker Compose', level: 'learning' },
      { name: 'Kubernetes', level: 'basic' }, { name: 'EKS', level: 'basic' },
    ]
  },
  {
    icon: '🔄', title: 'CI/CD',
    skills: [
      { name: 'GitHub Actions', level: 'learning' },
      { name: 'Jenkins', level: 'basic' }, { name: 'CodePipeline', level: 'basic' },
    ]
  },
  {
    icon: '📝', title: 'IaC & Config',
    skills: [
      { name: 'Terraform', level: 'basic' }, { name: 'CloudFormation', level: 'basic' },
      { name: 'Ansible', level: 'basic' },
    ]
  },
  {
    icon: '💻', title: 'Development',
    skills: [
      { name: 'Python', level: 'learning' }, { name: 'Bash', level: 'learning' },
      { name: 'Linux', level: 'basic' }, { name: 'Git', level: 'basic' },
    ]
  },
  {
    icon: '🌐', title: 'Web & Database',
    skills: [
      { name: 'Nginx', level: 'learning' }, { name: 'FastAPI', level: 'learning' },
      { name: 'MySQL', level: 'basic' }, { name: 'PostgreSQL', level: 'basic' },
    ]
  },
];
