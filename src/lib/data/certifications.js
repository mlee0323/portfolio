// 자격증 데이터 - 여기서만 관리
// 추가/수정하면 Education 페이지에 자동 반영

export const certifications = [

  { 
    name: { kr: 'TOEIC', en: 'TOEIC' },
    status: { kr: '2025년 취득', en: 'Acquired 2025' },
    // score: '850',
    preparing: false 
  },
  { 
    name: { kr: 'OPIc', en: 'OPIc' },
    status: { kr: '2025년 취득', en: 'Acquired 2025' },
    // score: 'IM2',
    preparing: false 
  },

  // 취득 예정 (준비 중)
  { 
    name: { kr: 'AWS Solutions Architect', en: 'AWS Solutions Architect Associate' },
    status: { kr: '준비중', en: 'Preparing' },
    preparing: true 
  },
  { 
    name: { kr: 'CKA', en: 'CKA' },
    status: { kr: '준비중', en: 'Preparing' },
    preparing: true 
  },

];
