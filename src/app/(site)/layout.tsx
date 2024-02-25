import { Analytics } from '@vercel/analytics/react';

import './globals.css';

import { urlForImage } from '../../../sanity/lib/image';
import { getInformationPageData } from '../../../sanity/sanity.query';
import Navigation from './components/navigation/navigation';
import { siteConfig } from './site.config';

export async function generateMetadata() {
  const data = await getInformationPageData();
  if (!data) return;

  return {
    title: {
      default: data.seoTitle || siteConfig.title,
    },
    description: data.seoDescription || siteConfig.description,
    openGraph: {
      type: 'website',
      url: siteConfig.siteUrl,
      title: data.seoTitle || siteConfig.title,
      description: data.seoDescription || siteConfig.description,
      siteName: siteConfig.siteUrlShort,
      images: [
        {
          url: urlForImage(data.seoImage, 1200, 630),
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen px-2.5 pb-4 pt-12 md:px-5">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
