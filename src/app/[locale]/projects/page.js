"use client";
import { useState, use } from 'react';
import { t } from '@/lib/i18n';
import { projects } from '@/lib/data';
import ProjectModal from '@/components/ProjectModal';

export default function ProjectsPage({ params }) {
  const { locale } = use(params);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-5xl mx-auto animate-fadeIn">
      <div className="mb-6 pb-4 border-b-2 border-aws-orange">
        <h1 className="text-xl font-semibold">{t(locale, 'projects.title')}</h1>
        <p className="text-sm text-aws-text-muted">{t(locale, 'projects.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="bg-aws-card border border-aws-border rounded-lg p-5 hover:border-aws-teal transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <span className={`text-xs font-semibold px-2 py-1 rounded ${
                project.status === 'running' 
                  ? 'bg-aws-green/10 text-aws-green' 
                  : 'bg-aws-text-muted/10 text-aws-text-muted'
              }`}>
                ● {project.status === 'running' ? 'Running' : 'Completed'}
              </span>
              <button 
                onClick={() => setSelectedProject(project)}
                className="text-aws-teal text-sm hover:underline"
              >
                View →
              </button>
            </div>
            <h3 className="font-medium text-white mb-2">{project.name[locale]}</h3>
            <p className="text-sm text-aws-text-muted mb-4">{project.desc[locale]}</p>
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag, j) => (
                <span key={j} className="px-2 py-0.5 bg-aws-teal/10 text-aws-teal text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
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
