"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { t } from '@/lib/i18n';
import { use } from 'react';
import { getRecentAllProjects, skills, stats } from '@/lib/data';

function Counter({ target, icon, labelKey, locale }) {
  const ref = useRef(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 1000;
        const startTime = performance.now();
        
        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(target * easeOut);
          if (progress < 1) requestAnimationFrame(animate);
          else el.textContent = target;
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);
  
  return (
    <div className="bg-aws-card border border-aws-border rounded-lg p-5 flex items-center gap-4 hover:border-aws-orange transition-all">
      <span className="text-3xl">{icon}</span>
      <div className="flex flex-col">
        <span ref={ref} className="text-2xl font-bold text-aws-orange">0</span>
        <span className="text-xs text-aws-text-muted">{t(locale, labelKey)}</span>
      </div>
    </div>
  );
}

export default function DashboardPage({ params }) {
  const { locale } = use(params);
  const recentProjects = getRecentAllProjects(3);

  return (
    <div className="max-w-6xl mx-auto animate-fadeIn">
      <div className="mb-6 pb-4 border-b-2 border-aws-orange">
        <h1 className="text-xl font-semibold">{t(locale, 'dashboard.title')}</h1>
        <p className="text-sm text-aws-text-muted">{t(locale, 'dashboard.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="md:col-span-1 bg-aws-card border border-aws-border rounded-lg p-5 hover:border-aws-orange transition-all">
          <h2 className="text-lg mb-3">{t(locale, 'dashboard.greeting')}</h2>
          <p className="text-sm text-aws-text-secondary mb-2">
            {t(locale, 'dashboard.intro')} <strong className="text-white">{t(locale, 'dashboard.name')}</strong>{t(locale, 'dashboard.desc')}
          </p>
          <div className="flex gap-2 flex-wrap mt-4">
            <Link href={`/${locale}/projects`} className="px-3 py-2 bg-aws-orange text-black text-xs font-semibold rounded hover:bg-aws-orange-hover transition-all">
              {t(locale, 'dashboard.viewProjects')}
            </Link>
            <Link href={`/${locale}/contact`} className="px-3 py-2 border border-aws-border text-xs rounded hover:border-aws-orange transition-all">
              {t(locale, 'dashboard.contact')}
            </Link>
          </div>
        </div>
        <Counter target={stats.skills} icon="🛠️" labelKey="stat.skills" locale={locale} />
        <Counter target={stats.projects} icon="🚀" labelKey="stat.projects" locale={locale} />
        <Counter target={stats.certs} icon="🏆" labelKey="stat.certs" locale={locale} />
      </div>

      <div className="bg-aws-card border border-aws-border rounded-lg p-5 mb-6">
        <h3 className="font-medium mb-4">{t(locale, 'dashboard.recentProjects')}</h3>
        <div className="flex flex-col gap-2">
          {recentProjects.map((project, i) => (
            <Link 
              key={i}
              href={`/${locale}/projects`}
              className="grid grid-cols-[90px_1fr_150px_30px] gap-2 items-center p-3 bg-aws-input rounded hover:bg-aws-card hover:translate-x-1 transition-all"
            >
              <span className={`text-xs font-semibold ${project.status === 'running' ? 'text-aws-green' : 'text-aws-text-muted'}`}>
                ● {project.status === 'running' ? 'Running' : 'Completed'}
              </span>
              <span className="font-medium text-sm truncate pr-2">{project.name[locale]}</span>
              <span className="text-xs text-aws-text-muted hidden md:block whitespace-nowrap overflow-hidden text-ellipsis">{project.tags.slice(0, 3).join(', ')}</span>
              <span className="text-aws-orange text-right">→</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-aws-card border border-aws-border rounded-lg p-5">
        <h3 className="font-medium mb-4">{t(locale, 'dashboard.skillStatus')}</h3>
        <div className="flex flex-col gap-3">
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-24 text-sm text-aws-text-secondary">{skill.name}</span>
              <div className="flex-1 h-2 bg-aws-input rounded overflow-hidden">
                <div className="h-full bg-gradient-to-r from-aws-orange to-aws-teal rounded" style={{ width: `${skill.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
