import Image from 'next/image';
import Link from 'next/link';
import { PortableText, PortableTextComponents } from '@portabletext/react';

import { IntroductionContent } from '../../types';

interface TextContentProps {
  content: IntroductionContent[];
}

export default function TextContent({ content }: TextContentProps) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p>{children}</p>,
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
  };

  return (
    <div className="mb-8 text-center leading-tight">
      <PortableText value={content} components={components} />
    </div>
  );
}
