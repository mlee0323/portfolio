"use client";
import { t } from '@/lib/i18n';
import { use } from 'react';

export default function AboutPage({ params }) {
  const { locale } = use(params);
  
  const highlights = [
    { icon: '🎓', titleKey: 'about.learning', descKey: 'about.learningDesc' },
    { icon: '🔧', titleKey: 'about.handson', descKey: 'about.handsonDesc' },
    { icon: '🤝', titleKey: 'about.teamwork', descKey: 'about.teamworkDesc' },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      <div className="mb-6 pb-4 border-b-2 border-aws-orange">
        <h1 className="text-xl font-semibold">{t(locale, 'about.title')}</h1>
        <p className="text-sm text-aws-text-muted">{t(locale, 'about.subtitle')}</p>
      </div>

      <div className="bg-aws-card border border-aws-border rounded-lg p-6 mb-6">
        <h2 className="text-aws-orange font-medium mb-4">{t(locale, 'about.introTitle')}</h2>
        <p className="text-lg text-white mb-3">
          {t(locale, 'about.intro')} <strong>{t(locale, 'about.name')}</strong>{t(locale, 'about.introEnd')}
        </p>
        <p className="text-aws-text-secondary">{t(locale, 'about.desc')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {highlights.map((item, i) => (
          <div key={i} className="bg-aws-card border border-aws-border rounded-lg p-6 text-center hover:border-aws-orange transition-all">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-medium mb-2">{t(locale, item.titleKey)}</h3>
            <p className="text-sm text-aws-text-secondary">{t(locale, item.descKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
