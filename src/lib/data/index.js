// 데이터 모듈 통합 export
// 각 파일에서 데이터를 가져와서 re-export

export { projects, getRecentProjects } from './projects';
export { personalProjects } from './personal-projects';
export { certifications } from './certifications';
export { education } from './education';
export { skills, skillCategories } from './skills';
export { stats } from './stats';

// 주요 프로젝트 + 개인 프로젝트 합산 (날짜순 정렬)
import { projects } from './projects';
import { personalProjects } from './personal-projects';

// period 필드에서 날짜 추출 (예: "2024.12 - 현재" -> "2024.12")
const getPeriodDate = (period) => {
  if (!period) return '0000.00';
  const match = period.match(/(\d{4}\.\d{2})/);
  return match ? match[1] : '0000.00';
};

// 모든 프로젝트 합산 후 날짜순 정렬 (최신순)
export const getAllProjects = () => {
  const all = [...projects, ...personalProjects];
  return all.sort((a, b) => {
    const dateA = getPeriodDate(a.period);
    const dateB = getPeriodDate(b.period);
    return dateB.localeCompare(dateA); // 최신순 (내림차순)
  });
};

export const getRecentAllProjects = (count = 3) => getAllProjects().slice(0, count);
