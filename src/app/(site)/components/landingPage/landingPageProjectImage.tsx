import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '../../../../../sanity/lib/image';
import { Project } from '../../types';

interface LandingPageProjectImageProps {
  project: Project;
  imageKey: 'desktopImage' | 'mobileImage';
}

export const LandingPageProjectImage = ({
  project,
  imageKey,
}: LandingPageProjectImageProps) => {
  const image = project.thumbnail[imageKey].asset;

  return (
    <Image
      src={urlForImage(image)}
      alt={project.thumbnail[imageKey].alt}
      className="object-contain"
      width={image.metadata.dimensions.width}
      height={image.metadata.dimensions.height}
    />
  );
};
