import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '../../../../../sanity/lib/image';
import { LandingPageProjects, Project } from '../../types';
import { LandingPageProjectImage } from './landingPageProjectImage';

export default function ProjectsMobile({ projects }: LandingPageProjects) {
  return (
    <div className="flex flex-col px-5">
      {projects.map((project: Project) => (
        <div key={project._id} className="grid-item">
          <Link href={`/${project.slug.current}`}>
            <LandingPageProjectImage project={project} imageKey="mobileImage" />
          </Link>
        </div>
      ))}
    </div>
  );
}
