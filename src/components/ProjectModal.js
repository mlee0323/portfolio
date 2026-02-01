"use client";
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { t } from '@/lib/i18n';

export default function ProjectModal({ project, locale, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-aws-card border border-aws-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-aws-card border-b border-aws-border p-4 flex justify-between items-start z-10">
          <div>
            <span className={`text-xs font-semibold px-2 py-1 rounded ${
              project.status === 'running' ? 'bg-aws-green/10 text-aws-green' : 'bg-aws-text-muted/10 text-aws-text-muted'
            }`}>
              ● {project.status === 'running' ? 'Running' : 'Completed'}
            </span>
            <h2 className="text-xl font-semibold mt-2">{project.name[locale]}</h2>
            <p className="text-sm text-aws-text-muted mt-1">{project.desc[locale]}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-aws-text-muted hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>
        
        <div className="p-4 space-y-6">
          {project.period && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-aws-text-muted">📅 기간:</span>
              <span>{project.period}</span>
            </div>
          )}

          <div>
            <h3 className="font-medium mb-2 text-aws-orange">{t(locale, 'projects.techStacks')}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-aws-orange/10 text-aws-orange text-sm rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.detail && (
            <div>
              <h3 className="font-medium mb-2 text-aws-teal">{t(locale, 'projects.details')}</h3>
              <ul className="space-y-2">
                {project.detail[locale].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-aws-text-secondary">
                    <span className="text-aws-teal mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 이미지 렌더링 섹션 */}
          {project.images && project.images.length > 0 && (
            <div>
              <h3 className="font-medium mb-3 text-aws-text-secondary">
                {project.imageHeader ? project.imageHeader[locale] : t(locale, 'projects.screenshots')}
              </h3>
              <div className="space-y-4">
                {project.images.map((img, i) => (
                  <div key={i} className="border border-aws-border rounded-lg overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`${project.name[locale]} screenshot ${i+1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-aws-card border-t border-aws-border p-4 z-10">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-aws-orange text-black font-semibold rounded hover:bg-aws-orange-hover transition-all"
          >
            💻 GitHub에서 보기 →
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
