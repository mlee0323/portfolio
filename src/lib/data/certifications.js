// 자격증 데이터 - 여기서만 관리
// 추가/수정하면 Education 페이지에 자동 반영

export const certifications = [

  { 
    name: { kr: 'TOEIC', en: 'TOEIC' },
    status: { kr: '2026년 취득', en: 'Acquired 2026' },
    score: '955',
    preparing: false 
  },
  { 
    name: { kr: 'OPIc', en: 'OPIc' },
    status: { kr: '2026년 취득', en: 'Acquired 2026' },
    score: 'IH',
    preparing: false 
  },

  { 
    name: { kr: 'AWS Certified Solutions Architect - Associate', en: 'AWS Certified Solutions Architect - Associate' },
    status: { kr: '2026년 6월 취득', en: 'Acquired Jun 2026' },
    score: 'SAA-C03',
    preparing: false 
  },
  // 취득 예정 (준비 중)
  { 
    name: { kr: 'CKA', en: 'CKA' },
    status: { kr: '준비중', en: 'Preparing' },
    preparing: true 
  },

];
