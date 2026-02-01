"use client";
import { useState, use } from 'react'; // useEffect, createPortal removed from here as they are in the component
import { t } from '@/lib/i18n';
import { projects } from '@/lib/data';
import ProjectModal from '@/components/ProjectModal';

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
                <span key={j} className="px-2 py-0.5 bg-aws-orange/10 text-aws-orange text-sm rounded">{tag}</span>
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
