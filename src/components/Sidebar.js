"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { t } from '@/lib/i18n';

const navGroups = [
  {
    id: 'dashboard',
    icon: '📊',
    labelKey: 'nav.dashboard',
    href: '',
    isGroup: false,
  },
  {
    id: 'profile',
    icon: '👤',
    labelKey: 'nav.profile',
    isGroup: true,
    children: [
      { id: 'about', icon: '📋', labelKey: 'nav.about', href: 'about' },
      { id: 'skills', icon: '🛠️', labelKey: 'nav.skills', href: 'skills' },
      { id: 'certifications', icon: '🏆', labelKey: 'nav.certifications', href: 'certifications' },
    ]
  },
  {
    id: 'projects',
    icon: '📁',
    labelKey: 'nav.projectsGroup',
    isGroup: true,
    children: [
      { id: 'main-projects', icon: '🚀', labelKey: 'nav.mainProjects', href: 'projects' },
      { id: 'personal-projects', icon: '💡', labelKey: 'nav.personalProjects', href: 'projects/personal' },
    ]
  },
  {
    id: 'contact',
    icon: '📧',
    labelKey: 'nav.contact',
    href: 'contact',
    isGroup: false,
  },
];

const externalLinks = [
  { icon: '💻', label: 'GitHub', url: 'https://github.com/mlee0323' },
  { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/minseok-lee-1540992a9' },
  { icon: '📝', label: 'Blog', url: 'https://mlee0323.github.io/' },
];

export default function Sidebar({ locale, isOpen, onClose }) {
  const pathname = usePathname();
  const [expandedGroups, setExpandedGroups] = useState(['profile', 'projects']);

  const toggleGroup = (groupId) => {
    setExpandedGroups(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const isActive = (href) => {
    const currentPath = pathname.replace(`/${locale}`, '').replace(/^\//, '');
    return currentPath === href || (href === '' && currentPath === '');
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose} />}
      <aside className={`fixed md:sticky top-12 left-0 h-[calc(100vh-48px)] w-52 bg-aws-squid-ink border-r border-aws-border overflow-y-auto z-50 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-3">
          <div className="text-[10px] uppercase tracking-wider text-aws-text-muted mb-2 px-2">Portfolio</div>
          <nav className="flex flex-col gap-0.5">
            {navGroups.map((item) => (
              item.isGroup ? (
                <div key={item.id}>
                  <button
                    onClick={() => toggleGroup(item.id)}
                    className="w-full flex items-center justify-between px-2 py-2 text-sm text-aws-text-secondary hover:bg-aws-card rounded transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.icon}</span>
                      <span>{t(locale, item.labelKey)}</span>
                    </span>
                    <span className={`text-xs transition-transform ${expandedGroups.includes(item.id) ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {expandedGroups.includes(item.id) && (
                    <div className="ml-4 pl-2 border-l border-aws-border">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={`/${locale}/${child.href}`}
                          onClick={onClose}
                          className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded transition-all ${
                            isActive(child.href)
                              ? 'bg-aws-teal/10 text-aws-teal border-l-2 border-aws-teal -ml-[2px]'
                              : 'text-aws-text-secondary hover:bg-aws-card'
                          }`}
                        >
                          <span className="text-xs">{child.icon}</span>
                          <span>{t(locale, child.labelKey)}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.id}
                  href={`/${locale}/${item.href}`}
                  onClick={onClose}
                  className={`flex items-center gap-2 px-2 py-2 text-sm rounded transition-all ${
                    isActive(item.href)
                      ? 'bg-aws-teal/10 text-aws-teal border-l-2 border-aws-teal'
                      : 'text-aws-text-secondary hover:bg-aws-card'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{t(locale, item.labelKey)}</span>
                </Link>
              )
            ))}
          </nav>
        </div>

        <div className="p-3 border-t border-aws-border">
          <div className="text-[10px] uppercase tracking-wider text-aws-text-muted mb-2 px-2">Links</div>
          <nav className="flex flex-col gap-0.5">
            {externalLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-2 py-2 text-sm text-aws-text-secondary hover:bg-aws-card rounded transition-all"
              >
                <span className="flex items-center gap-2">
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </span>
                <span className="text-xs text-aws-text-muted">↗</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
