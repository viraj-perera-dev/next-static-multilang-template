import { getMessages } from '@/lib/getMessages';
import { generateSEOMetadata } from '@/components/Metadata';
import { Link } from '@/i18n/navigation';

export const metadata = generateSEOMetadata({
  contentMetadata: {
    title: 'title test 1',
    description: 'description test 1',
    keywords: ['test'],
    siteColor: 'dark',
    url: '',
    siteName: '',
    image: '',
    imageAlt: '',
  }
});



export default async function ChiSiamo({ params }) {
  
  const messages = await getMessages(params.locale);
  const t = (key) => messages.AboutUs?.[key] ?? key;

  return (
    <main>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-[#fefefe] z-50">
        <p className="text-red-500 text-6xl font-bold">{t('title')}</p>
        <div className="flex gap-5 mt-10">
          {params.locale === 'it' ? (
            <Link className='px-5 py-2 bg-red-600 text-white rounded-full hover:bg-white hover:text-red-600 transition duration-300 border border-red-600' href="/" locale="en">English</Link>
          ) : (
            <Link className='px-5 py-2 bg-red-600 text-white rounded-full hover:bg-white hover:text-red-600 transition duration-300 border border-red-600' href="/" locale="it">Italiano</Link>
          )}
        </div>
      </div>
    </main>
  );
}
