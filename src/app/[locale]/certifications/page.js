"use client";
import { t } from '@/lib/i18n';
import { use } from 'react';
import { certifications } from '@/lib/data';

export default function CertificationsPage({ params }) {
  const { locale } = use(params);

  return (
    <div className="max-w-5xl mx-auto animate-fadeIn">
      <div className="mb-6 pb-4 border-b-2 border-aws-orange">
        <h1 className="text-xl font-semibold">{t(locale, 'certifications.title')}</h1>
        <p className="text-sm text-aws-text-muted">{t(locale, 'certifications.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <div 
            key={i} 
            className={`bg-aws-card border border-aws-border rounded-lg p-5 hover:border-aws-orange transition-all ${
              cert.preparing ? 'opacity-80' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                cert.preparing ? 'bg-aws-orange/10' : 'bg-aws-teal/10'
              }`}>
                {cert.preparing ? '📚' : '✅'}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white">{cert.name[locale]}</h3>
                <p className={`text-sm mt-1 ${cert.preparing ? 'text-aws-orange' : 'text-aws-teal'}`}>
                  {cert.status[locale]}
                </p>
              </div>
              {!cert.preparing && (
                <span className="text-aws-teal text-xl">🏆</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-aws-card border border-aws-border rounded-lg p-5">
        <h3 className="font-medium mb-4">{t(locale, 'certifications.planned')}</h3>
        <div className="flex flex-wrap gap-2">
          {['AWS SAA', 'AWS DVA', 'CKA', 'CKAD'].map((cert, i) => (
            <span key={i} className="px-3 py-1.5 bg-aws-input border border-aws-border rounded text-sm text-aws-text-muted">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
