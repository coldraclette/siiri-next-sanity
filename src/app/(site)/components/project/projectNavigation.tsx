import Link from 'next/link';

import ArrowLeft from '../../../../../public/icons/arrow-left.svg';
import ArrowRight from '../../../../../public/icons/arrow-right.svg';
import { PreviousProject } from '../../types';

interface ProjectNavigationProps {
  prev: PreviousProject | null;
  next: PreviousProject | null;
}

export default function ProjectNavigation({
  prev,
  next,
}: ProjectNavigationProps) {

  if (!prev && !next) return null;
  return (
    <>
      {prev && (
        <div className="fixed left-3 top-1/2 h-10 w-10 -translate-y-1/2">
          <Link href={`/${prev.slug.current}`}>
            <ArrowLeft />
          </Link>
        </div>
      )}
      {next && (
        <div className="fixed right-3 top-1/2 h-10 w-10 -translate-y-1/2">
          <Link href={`/${next.slug.current}`}>
            <ArrowRight />
          </Link>
        </div>
      )}
    </>
  );
}
