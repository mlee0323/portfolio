"use client";
import { t } from '@/lib/i18n';
import { use } from 'react';
import { skillCategories } from '@/lib/data';

export default function SkillsPage({ params }) {
  const { locale } = use(params);

  return (
    <div className="max-w-5xl mx-auto animate-fadeIn">
      <div className="mb-6 pb-4 border-b-2 border-aws-orange">
        <h1 className="text-xl font-semibold">{t(locale, 'skills.title')}</h1>
        <p className="text-sm text-aws-text-muted">{t(locale, 'skills.subtitle')}</p>
      </div>

      <div className="flex gap-6 mb-5 p-3 bg-aws-card rounded-lg text-sm">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-aws-teal"></span> {t(locale, 'skills.learning')}
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-aws-orange opacity-60"></span> {t(locale, 'skills.basic')}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((cat, i) => (
          <div key={i} className="bg-aws-card border border-aws-border rounded-lg p-5 hover:border-aws-teal transition-all">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-aws-border">
              <span className="text-xl">{cat.icon}</span>
              <h3 className="font-medium">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span 
                  key={j}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-transform hover:scale-105 ${
                    skill.level === 'learning' 
                      ? 'bg-aws-teal/15 text-aws-teal border border-aws-teal/30' 
                      : 'bg-aws-orange/10 text-aws-orange border border-aws-orange/20'
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
