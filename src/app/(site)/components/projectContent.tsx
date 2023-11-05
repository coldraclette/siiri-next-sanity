import Image from 'next/image';
import Link from 'next/link';
import { PortableText, PortableTextComponents } from '@portabletext/react';

import { ProjectContent } from '../types';
import { urlForImage, urlForVideo } from '../../../../sanity/lib/image';


interface ProjectContentProps {
  content: ProjectContent[];
}

export default function ProjectContent({ content }: ProjectContentProps) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className='mb-4'>{children}</p>,
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined;
        const target = !value.href.startsWith('/') ? '_blank' : undefined;
        return (
          <Link
            className="underline"
            href={value.href}
            target={target}
            rel={rel}
          >
            {children}
          </Link>
        );
      },
    },
    types: {
      projectImage: ({ value }) => {
        if (!value.asset) {
          return null;
        }
        return (
          <div className='flex justify-center mb-4'>
            <Image
              src={urlForImage(value.asset)}
              alt={value.alt || ' '}
              className="object-contain"
              width={value.dimensions.width}
              height={value.dimensions.height}
              placeholder="blur"
              blurDataURL={value.lqip}
            />
          </div>
        );
      },
      projectVideo: ({ value }) => {
        if (!value.asset) {
          return null;
        }
        return (
          <div className="mb-4">
            <video controls preload="auto" width="100%" className="mb-4">
              <source src={urlForVideo(value)+"#t=000.1"} type="video/mp4" />
            </video>    
          </div>
          
        );
      },
    },
  };

  return (
    <div className="mb-8 leading-tight">
      <PortableText value={content} components={components} />
    </div>
  );
}
