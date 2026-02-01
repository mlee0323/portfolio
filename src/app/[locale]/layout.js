import { locales } from '@/lib/i18n';
import ClientLayout from '@/components/ClientLayout';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  
  return (
    <ClientLayout locale={locale}>
      {children}
    </ClientLayout>
  );
}
