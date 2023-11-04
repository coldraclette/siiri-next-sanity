import { getAllProjectWithPage } from '../../../sanity/sanity.query';
import LandingPageProjects from './components/landingPage/landingPageProjects';
import { Project } from './types';

export const revalidate = 120;

export default async function Home() {
  const projects: Project[] = await getAllProjectWithPage();
  if (!projects) return;

  return (
    <>
      <LandingPageProjects projects={projects} />
    </>
  );
}
