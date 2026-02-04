// 스킬 데이터 - 여기서만 관리
// 추가/수정하면 Dashboard, Skills 페이지에 자동 반영

// 레벨: beginner(입문) < basic(기초) < intermediate(중급) < advanced(실무)

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
      { name: 'EC2', level: 'intermediate' }, { name: 'ECS', level: 'intermediate' },
      { name: 'RDS', level: 'basic' }, { name: 'S3', level: 'intermediate' },
      { name: 'VPC', level: 'basic' }, { name: 'IAM', level: 'basic' },
      { name: 'CloudFront', level: 'beginner' }, { name: 'Route53', level: 'basic' },
      { name: 'EKS', level: 'basic' },
    ]
  },
  {
    icon: '🐳', title: 'Containers',
    skills: [
      { name: 'Docker', level: 'intermediate' }, { name: 'Kubernetes', level: 'intermediate' },
    ]
  },
  {
    icon: '🔄', title: 'CI/CD',
    skills: [
      { name: 'GitHub Actions', level: 'intermediate' },
    ]
  },
  {
    icon: '📝', title: 'IaC & Config',
    skills: [
      { name: 'Terraform', level: 'basic' }, { name: 'CloudFormation', level: 'beginner' },
      { name: 'Ansible', level: 'beginner' },
    ]
  },
  {
    icon: '💻', title: 'Development',
    skills: [
      { name: 'Python', level: 'intermediate' }, { name: 'Bash', level: 'basic' },
      { name: 'Linux', level: 'basic' }, { name: 'Git', level: 'intermediate' },
    ]
  },
  {
    icon: '🌐', title: 'Web & Database',
    skills: [
      { name: 'Nginx', level: 'intermediate' }, { name: 'FastAPI', level: 'basic' },
      { name: 'MySQL', level: 'basic' }, { name: 'PostgreSQL', level: 'beginner' },
    ]
  },
];
