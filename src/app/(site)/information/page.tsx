import { urlForImage } from '../../../../sanity/lib/image';
import {
  getAllProjects,
  getInformationPageData,
  getProjectListData,
} from '../../../../sanity/sanity.query';
import TextContent from '../components/project/textContent';
import ProjectTable from '../components/projectTable';
import { siteConfig } from '../site.config';
import { InformationPage, ProjectListItem } from '../types';

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

export const revalidate = 60;

export default async function Page() {
  const data: InformationPage = await getInformationPageData();

  const projects: ProjectListItem[] = await getProjectListData();

  if (!data) {
    return null;
  }

  if (!projects) {
    return null;
  }

  return (
    <div>
      <TextContent content={data.content} textSpacing={true} />
      <ProjectTable projects={projects} />
    </div>
  );
}
