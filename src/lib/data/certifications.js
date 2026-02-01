// 자격증 데이터 - 여기서만 관리
// 추가/수정하면 Education 페이지에 자동 반영

export const certifications = [
  { 
    name: { kr: 'AWS Solutions Architect', en: 'AWS Solutions Architect' },
    status: { kr: '준비중', en: 'Preparing' },
    preparing: true 
  },
  { 
    name: { kr: '리눅스마스터 2급', en: 'Linux Master Level 2' },
    status: { kr: '2024년 취득', en: 'Acquired 2024' },
    preparing: false 
  },
  { 
    name: { kr: '정보처리기사', en: 'Engineer Information Processing' },
    status: { kr: '2024년 취득', en: 'Acquired 2024' },
    preparing: false 
  },
  { 
    name: { kr: '네트워크관리사 2급', en: 'Network Manager Level 2' },
    status: { kr: '2024년 취득', en: 'Acquired 2024' },
    preparing: false 
  },
];
