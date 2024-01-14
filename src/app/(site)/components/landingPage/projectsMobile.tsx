import Link from 'next/link';

import { LandingPageProjects, Project } from '../../types';
import { LandingPageProjectImage } from './landingPageProjectImage';

export default function ProjectsMobile({ projects }: LandingPageProjects) {
  return (
    <div className="flex flex-col gap-4 px-5">
      {projects.map((project: Project) => (
        <div key={project._id} className="grid-item">
          {project.slug ? (
            <Link href={`/${project.slug.current}`}>
              <LandingPageProjectImage
                project={project}
                imageKey="mobileImage"
              />
            </Link>
          ) : (
            <LandingPageProjectImage project={project} imageKey="mobileImage" />
          )}
        </div>
      ))}
    </div>
  );
}
