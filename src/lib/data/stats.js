// 통계 데이터 - 자동 계산됨
import { projects } from './projects';
import { personalProjects } from './personal-projects';
import { certifications } from './certifications';
import { skillCategories } from './skills';

// 카테고리별 스킬 개수 합산
const totalSkills = skillCategories ? skillCategories.reduce((acc, cat) => {
  if (!cat.skills) return acc;
  return acc + cat.skills.length;
}, 0) : 0;

export const stats = {
  skills: totalSkills, 
  projects: (projects ? projects.length : 0) + (personalProjects ? personalProjects.length : 0), 
  certs: certifications ? certifications.filter(c => !c.preparing).length : 0,
};
