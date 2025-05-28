import '@/app/main.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import { notFound, redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';


export async function generateStaticParams() {

  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Navbar params={params}/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
