import Link from 'next/link';

import ArrowLeft from '../../../../../public/icons/arrow-left.svg';
import ArrowRight from '../../../../../public/icons/arrow-right.svg';
import { PreviousProject } from '../../types';

interface ProjectNavigationProps {
  prev: PreviousProject;
  next: PreviousProject;
}

export default function ProjectNavigation({
  prev,
  next,
}: ProjectNavigationProps) {
  return (
    <>
      <div className="fixed left-3 top-1/2 h-10 w-10 -translate-y-1/2 md:h-20 md:w-20">
        <Link href={`/${prev.slug.current}`}>
          <ArrowLeft />
        </Link>
      </div>
      <div className="fixed right-3 top-1/2 h-10 w-10 -translate-y-1/2 md:h-20 md:w-20">
        <Link href={`/${next.slug.current}`}>
          <ArrowRight />
        </Link>
      </div>
    </>
  );
}
