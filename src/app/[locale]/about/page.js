"use client";
import { t } from '@/lib/i18n';
import { use } from 'react';
import { education } from '@/lib/data';

export default function AboutPage({ params }) {
  const { locale } = use(params);
  
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

      {/* Education Section Merged */}
      <div className="bg-aws-card border border-aws-border rounded-lg p-6">
        <h2 className="text-aws-orange font-medium mb-5">{t(locale, 'education.history')}</h2>
        <div className="relative pl-6 border-l-2 border-aws-orange">
          {education.map((edu, i) => (
            <div key={i} className="relative mb-8 last:mb-0">
              <div className="absolute -left-[29px] w-3 h-3 bg-aws-orange rounded-full border-2 border-aws-card"></div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h4 className="font-medium text-lg">{edu.title[locale]}</h4>
                <span className="px-3 py-1 bg-aws-orange/10 text-aws-orange text-sm rounded">{edu.date[locale]}</span>
              </div>
              <span className="block text-sm text-aws-text-muted mb-3">{edu.org[locale]}</span>
              <ul className="text-sm text-aws-text-secondary space-y-2">
                {edu.items[locale].map((item, j) => (
                  <li key={j} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-aws-teal">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
