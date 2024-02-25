import { urlForImage } from '../../../../sanity/lib/image';
import {
  getAllProjectWithPage,
  getProjectNavgation,
  getSingleProjectData,
} from '../../../../sanity/sanity.query';
import ProjectContent from '../components/project/projectContent';
import ProjectNavigation from '../components/project/projectNavigation';
import TextContent from '../components/project/textContent';
import NotFound from '../not-found';
import { siteConfig } from '../site.config';
import { SingleProject } from '../types';

export const dynamicParams = true;
export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = await getSingleProjectData(slug);
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
          url: urlForImage(
            data.seoImage || data.thumbnail?.mobileImage,
            1200,
            630
          ),
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

export async function generateStaticParams() {
  const data = await getAllProjectWithPage();

  return data
    .filter((project: any) => project.slug && project.slug.current)
    .map((project: any) => ({
      slug: project.slug.current,
    }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  const project: SingleProject = await getSingleProjectData(slug);

  if (!project) {
    return <NotFound />;
  }

  const { prev, next } = await getProjectNavgation(slug);

  return (
    <div className="mx-auto max-w-5xl px-2.5 md:px-5">
      <ProjectNavigation prev={prev} next={next} />
      <TextContent content={project.introduction} align="text-center" />
      <ProjectContent content={project.content} />
    </div>
  );
}
