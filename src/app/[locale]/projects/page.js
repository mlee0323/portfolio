"use client";
import { useState, useEffect, use } from 'react';
import { createPortal } from 'react-dom';
import { t } from '@/lib/i18n';
import { projects } from '@/lib/data';

function ProjectModal({ project, locale, onClose }) {
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
        className="bg-aws-card border border-aws-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-aws-card border-b border-aws-border p-4 flex justify-between items-start">
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
        
        <div className="p-4 space-y-4">
          {project.period && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-aws-text-muted">📅 기간:</span>
              <span>{project.period}</span>
            </div>
          )}

          <div>
            <h3 className="font-medium mb-2 text-aws-orange">🔧 기술 스택</h3>
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
              <h3 className="font-medium mb-2 text-aws-teal">📋 주요 내용</h3>
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
        </div>

        <div className="sticky bottom-0 bg-aws-card border-t border-aws-border p-4">
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

export default function ProjectsPage({ params }) {
  const { locale } = use(params);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const filtered = filter === 'all' ? projects : projects.filter(p => p.status === filter);

  return (
    <div className="max-w-5xl mx-auto animate-fadeIn">
      <div className="mb-6 pb-4 border-b-2 border-aws-orange">
        <h1 className="text-xl font-semibold">{t(locale, 'projects.title')}</h1>
        <p className="text-sm text-aws-text-muted">{t(locale, 'projects.subtitle')}</p>
      </div>

      <div className="flex gap-2 mb-4">
        {['all', 'running', 'completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm rounded transition-all ${
              filter === f ? 'bg-aws-orange text-black' : 'bg-aws-card border border-aws-border hover:border-aws-orange'
            }`}
          >
            {t(locale, `projects.${f}`)}
          </button>
        ))}
      </div>

      <div className="bg-aws-card border border-aws-border rounded-lg overflow-hidden">
        <div className="grid grid-cols-[80px_1fr_150px_60px] p-3 bg-aws-input text-xs font-semibold uppercase text-aws-text-muted border-b border-aws-border">
          <span>{t(locale, 'projects.status')}</span>
          <span>{t(locale, 'projects.project')}</span>
          <span className="hidden md:block">{t(locale, 'projects.tags')}</span>
          <span>{t(locale, 'projects.action')}</span>
        </div>
        {filtered.map((project, i) => (
          <div key={i} className="grid grid-cols-[80px_1fr_150px_60px] p-4 items-center border-b border-aws-border last:border-b-0 hover:bg-aws-input transition-all">
            <span className={`text-xs font-semibold ${project.status === 'running' ? 'text-aws-green' : 'text-aws-text-muted'}`}>
              ● {project.status === 'running' ? 'Running' : 'Completed'}
            </span>
            <div>
              <strong className="block text-sm">{project.name[locale]}</strong>
              <span className="text-xs text-aws-text-muted">{project.desc[locale]}</span>
            </div>
            <div className="hidden md:flex gap-1 flex-wrap">
              {project.tags.slice(0, 3).map((tag, j) => (
                <span key={j} className="px-2 py-0.5 bg-aws-orange/10 text-aws-orange text-[10px] rounded">{tag}</span>
              ))}
            </div>
            <button 
              onClick={() => setSelectedProject(project)}
              className="text-aws-teal text-sm font-medium hover:underline"
            >
              {t(locale, 'projects.view')}
            </button>
          </div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        locale={locale} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
