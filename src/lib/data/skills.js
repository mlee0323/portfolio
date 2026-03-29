// 스킬 데이터 - 여기서만 관리
// 추가/수정하면 Dashboard, Skills 페이지에 자동 반영

// 레벨: beginner(입문) < basic(기초) < intermediate(중급) < advanced(실무)

// Dashboard에서 사용하는 스킬 진행률
export const skills = [
  { name: 'AWS', progress: 70 },
  { name: 'Docker', progress: 75 },
  { name: 'Kubernetes', progress: 55 },
  { name: 'Terraform', progress: 45 },
  { name: 'AI Tools', progress: 85 },
];

// Skills 페이지에서 사용하는 카테고리별 스킬
export const skillCategories = [
  {
    icon: '☁️', title: 'AWS Services',
    skills: [
      { name: 'EC2', level: 'intermediate' }, { name: 'ECS', level: 'intermediate' },
      { name: 'EKS', level: 'intermediate' }, { name: 'ECR', level: 'intermediate' },
      { name: 'RDS', level: 'intermediate' }, { name: 'S3', level: 'intermediate' },
      { name: 'VPC', level: 'intermediate' }, { name: 'IAM', level: 'intermediate' },
      { name: 'CloudFront', level: 'basic' }, { name: 'Route53', level: 'basic' },
      { name: 'ACM', level: 'basic' }, { name: 'WAF', level: 'basic' },
    ]
  },
  {
    icon: '🐳', title: 'Containers & Orchestration',
    skills: [
      { name: 'Docker', level: 'intermediate' }, { name: 'Kubernetes', level: 'intermediate' },
      { name: 'Istio', level: 'basic' }, { name: 'Karpenter', level: 'basic' },
    ]
  },
  {
    icon: '🔄', title: 'CI / CD',
    skills: [
      { name: 'GitHub Actions', level: 'intermediate' }, { name: 'Argo CD', level: 'intermediate' },
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
    icon: '📊', title: 'Monitoring & Logging',
    skills: [
      { name: 'Prometheus', level: 'intermediate' }, { name: 'Grafana', level: 'intermediate' },
      { name: 'Fluent Bit', level: 'basic' },
    ]
  },
  {
    icon: '💻', title: 'Development',
    skills: [
      { name: 'Python', level: 'intermediate' }, { name: 'Node.js', level: 'intermediate' },
      { name: 'Linux', level: 'intermediate' }, { name: 'Git', level: 'intermediate' },
      { name: 'Bash', level: 'basic' }, { name: 'Java', level: 'basic' },
    ]
  },
  {
    icon: '🤖', title: 'AI & Productivity',
    skills: [
      { name: 'Generative AI Tooling', level: 'advanced' },
      { name: 'Prompting & Workflow Design', level: 'advanced' },
      { name: 'Open-source AI Agent Setup', level: 'intermediate' },
    ]
  },
  {
    icon: '🌐', title: 'Web & Database',
    skills: [
      { name: 'Nginx', level: 'intermediate' }, { name: 'FastAPI', level: 'intermediate' },
      { name: 'MySQL', level: 'intermediate' }, { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'Redis', level: 'basic' },
    ]
  },
];
