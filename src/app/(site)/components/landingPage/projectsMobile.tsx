import Link from 'next/link';

import { Project } from '../../types';
import { LandingPageProjectImage } from './landingPageProjectImage';

interface ProjectsMobileProps {
  projects: Project[];
}

export default function ProjectsMobile({ projects }: ProjectsMobileProps) {
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
