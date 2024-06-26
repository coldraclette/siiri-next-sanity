'use client';

import { useEffect, useState } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import { Project } from '../../types';
import ProjectsDesktop from './projectsDesktop';
import ProjectsMobile from './projectsMobile';

interface LandingPageProjectsProps {
  projects: Project[];
}

export default function LandingPageProjects({
  projects,
}: LandingPageProjectsProps) {
  const [width, setWidth] = useState<number | null>(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize[0] !== undefined) {
      setWidth(windowSize[0]);
    }
  }, [windowSize]);

  const renderProjects = () => {
    if (width === null) {
      return null;
    }
    if (width >= 768) {
      return <ProjectsDesktop projects={projects} />;
    } else {
      return <ProjectsMobile projects={projects} />;
    }
  };

  return <>{renderProjects()}</>;
}
