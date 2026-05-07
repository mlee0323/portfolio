export const locales = ['kr', 'en'];
export const defaultLocale = 'kr';

export const translations = {
  kr: {
    // Navigation
    'nav.dashboard': '대시보드',
    'nav.profile': '프로필',
    'nav.about': '소개',
    'nav.skills': '기술',
    'nav.certifications': '자격증',
    'nav.projectsGroup': '프로젝트',
    'nav.mainProjects': '주요 프로젝트',
    'nav.personalProjects': '개인 프로젝트',
    'nav.contact': '연락처',
    
    // Dashboard
    'dashboard.title': '대시보드',
    'dashboard.subtitle': '클라우드 인프라 · DevOps · AI 포트폴리오 개요',
    'dashboard.greeting': '👋 안녕하세요!',
    'dashboard.intro': '클라우드 인프라, DevOps, AI 활용 경험을 함께 쌓아온',
    'dashboard.name': '신입 엔지니어 이민석',
    'dashboard.desc': '의 AWS S3와 CloudFront를 활용한 포트폴리오 사이트입니다.',
    'dashboard.viewAbout': '📋 소개 보기',
    'dashboard.contact': '📧 연락하기',
    'stat.skills': '기술 스택',
    'stat.projects': '프로젝트',
    'stat.certs': '자격증 취득',
    'dashboard.recentProjects': '🔥 최근 프로젝트',
    'dashboard.skillStatus': '📊 스킬 현황',
    
    // About
    'about.title': '👤 About Me',
    'about.subtitle': '클라우드 인프라 · DevOps · AI 활용 경험 소개',
    'about.introTitle': '자기소개',
    
    // Skills
    'skills.title': '🛠️ Skills',
    'skills.subtitle': '기술 스택 및 역량',
    'skills.beginner': '입문',
    'skills.basic': '기초',
    'skills.intermediate': '중급',
    'skills.advanced': '실무',
    
    // Projects
    'projects.title': '🚀 주요 프로젝트',
    'projects.subtitle': '주요 및 팀 프로젝트',
    'projects.all': 'All',
    'projects.running': 'Running',
    'projects.completed': 'Completed',
    'projects.status': 'Status',
    'projects.project': 'Project',
    'projects.tags': 'Tags',
    'projects.action': 'Action',
    'projects.view': 'View →',
    'projects.techStacks': '🔧 기술 스택',
    'projects.details': '📋 주요 내용',
    'projects.presentation': '📄 발표자료',
    
    // Personal Projects
    'personalProjects.title': '💡 개인 프로젝트',
    'personalProjects.subtitle': '학습 및 토이 프로젝트',
    
    // Education (used in About page)
    'education.history': '📚 교육 이력',
    
    // Certifications
    'certifications.title': '🏆 자격증',
    'certifications.subtitle': '취득 및 준비 중인 자격증',
    'certifications.planned': '📋 취득 예정',
    
    // Contact
    'contact.title': '📧 Contact',
    'contact.subtitle': '연락처 및 문의',
    'contact.info': '연락처 정보',
    'contact.infoDesc': '새로운 기회와 협업에 열려있습니다. 편하게 연락주세요!',
  },
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.profile': 'Profile',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',
    'nav.projectsGroup': 'Projects',
    'nav.mainProjects': 'Main Projects',
    'nav.personalProjects': 'Personal Projects',
    'nav.contact': 'Contact',
    
    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.subtitle': 'Cloud Infrastructure, DevOps & AI Portfolio Overview',
    'dashboard.greeting': '👋 Hello!',
    'dashboard.intro': 'An engineer building experience across cloud infrastructure, DevOps, and practical AI work,',
    'dashboard.name': 'Minseok Lee',
    'dashboard.desc': '. This portfolio site is delivered with AWS S3 and CloudFront.',
    'dashboard.viewAbout': '📋 View About',
    'dashboard.contact': '📧 Contact Me',
    'stat.skills': 'Tech Stacks',
    'stat.projects': 'Projects',
    'stat.certs': 'Certifications',
    'dashboard.recentProjects': '🔥 Recent Projects',
    'dashboard.skillStatus': '📊 Skill Status',
    
    // About
    'about.title': '👤 About Me',
    'about.subtitle': 'Introduction to My Cloud Infrastructure, DevOps, and AI Work',
    'about.introTitle': 'Introduction',
    
    // Skills
    'skills.title': '🛠️ Skills',
    'skills.subtitle': 'Technical Skills & Competencies',
    'skills.beginner': 'Beginner',
    'skills.basic': 'Basic',
    'skills.intermediate': 'Intermediate',
    'skills.advanced': 'Advanced',
    
    // Projects
    'projects.title': '🚀 Main Projects',
    'projects.subtitle': 'Main & Team Projects',
    'projects.all': 'All',
    'projects.running': 'Running',
    'projects.completed': 'Completed',
    'projects.status': 'Status',
    'projects.project': 'Project',
    'projects.tags': 'Tags',
    'projects.action': 'Action',
    'projects.view': 'View →',
    'projects.techStacks': '🔧 Tech Stacks',
    'projects.details': '📋 Key Details',
    'projects.presentation': '📄 Presentation',
    
    // Personal Projects
    'personalProjects.title': '💡 Personal Projects',
    'personalProjects.subtitle': 'Learning & Toy Projects',
    
    // Education (used in About page)
    'education.history': '📚 Education History',
    
    // Certifications
    'certifications.title': '🏆 Certifications',
    'certifications.subtitle': 'Acquired & Preparing Certifications',
    'certifications.planned': '📋 Planned Certifications',
    
    // Contact
    'contact.title': '📧 Contact',
    'contact.subtitle': 'Get in Touch',
    'contact.info': 'Contact Information',
    'contact.infoDesc': 'Open to new opportunities and collaborations. Feel free to reach out!',
  },
};

export function t(locale, key) {
  return translations[locale]?.[key] || key;
}
