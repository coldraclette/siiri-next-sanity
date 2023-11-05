import { getSingleProjectData } from '../../../../sanity/sanity.query';
import ProjectContent from '../components/projectContent';
import TextContent from '../components/textContent';
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

  return (
    <div className="mx-auto max-w-5xl px-2.5 md:px-5">
      <TextContent content={project.introduction} />
      <ProjectContent content={project.content} />
    </div>
  );
}
