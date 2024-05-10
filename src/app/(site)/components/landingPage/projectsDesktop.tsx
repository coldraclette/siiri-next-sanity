import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Project } from '../../types';
import { LandingPageProjectImage } from './landingPageProjectImage';

interface ProjectsDesktopProps {
  projects: Project[];
}

export default function ProjectsDesktop({ projects }: ProjectsDesktopProps) {
  const gridRef = useRef(null);

  const initializeIsotope = () => {
    const Isotope = require('isotope-layout/js/isotope');
    return new Isotope(gridRef.current, {
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: 100,
        gutter: 30,
      },
    });
  };

  useEffect(() => {
    const iso = initializeIsotope();

    iso.shuffle();

    const shuffleInterval = setInterval(() => {
      iso.shuffle();
    }, 10000);

    return () => {
      clearInterval(shuffleInterval);
    };
  }, []);

  return (
    <div ref={gridRef} className="mx-auto grid pt-1.5">
      {projects.map((project: Project) => {
        return (
          <div key={project._id} className="grid-item mb-4">
            {project.slug ? (
              <Link href={`/${project.slug.current}`}>
                <LandingPageProjectImage
                  project={project}
                  imageKey="desktopImage"
                />
              </Link>
            ) : (
              <LandingPageProjectImage
                project={project}
                imageKey="desktopImage"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
