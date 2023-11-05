import {
  getProjectNavgation,
  getSingleProjectData,
} from '../../../../sanity/sanity.query';
import ProjectContent from '../components/project/projectContent';
import ProjectNavigation from '../components/project/projectNavigation';
import TextContent from '../components/project/textContent';
import NotFound from '../not-found';
import { SingleProject } from '../types';

export const revalidate = 120;

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
