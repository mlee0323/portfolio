"use client";
import { use } from 'react';
import { t } from '@/lib/i18n';

const contacts = [
  { icon: '✉️', label: 'Email', value: 'minseoklee0323@gmail.com', href: 'mailto:minseoklee0323@gmail.com' },
  { icon: '💻', label: 'GitHub', value: 'github.com/mlee0323', href: 'https://github.com/mlee0323' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/minseok-lee-1540992a9', href: 'https://linkedin.com/in/minseok-lee-1540992a9' },
  { icon: '📝', label: 'Blog', value: 'https://mlee0323.github.io/', href: 'https://mlee0323.github.io/' },
];

export default function ContactPage({ params }) {
  const { locale } = use(params);

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      <div className="mb-6 pb-4 border-b-2 border-aws-orange">
        <h1 className="text-xl font-semibold">{t(locale, 'contact.title')}</h1>
        <p className="text-sm text-aws-text-muted">{t(locale, 'contact.subtitle')}</p>
      </div>

      <div className="bg-aws-card border border-aws-border rounded-lg p-6">
        <h2 className="text-aws-orange font-medium mb-4">{t(locale, 'contact.info')}</h2>
        <p className="text-sm text-aws-text-secondary mb-5">{t(locale, 'contact.infoDesc')}</p>
        <div className="flex flex-col gap-3">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-aws-input border border-aws-border rounded hover:border-aws-orange hover:translate-x-1 transition-all"
            >
              <span className="text-2xl">{contact.icon}</span>
              <div>
                <strong className="block text-sm">{contact.label}</strong>
                <span className="text-xs text-aws-text-muted">{contact.value}</span>
              </div>
              <span className="ml-auto text-aws-orange">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
