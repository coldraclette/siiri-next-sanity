import Image from 'next/image';

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
      quality={100}
      src={urlForImage(image)}
      alt={project.thumbnail[imageKey].alt || project.title}
      className="object-contain"
      width={image.metadata.dimensions.width}
      height={image.metadata.dimensions.height}
      // sizes="(min-width: 1140px) 984px, (min-width: 780px) calc(83.53vw + 48px), calc(100vw - 40px)"
    />
  );
};
