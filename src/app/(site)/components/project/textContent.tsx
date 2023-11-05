import Image from 'next/image';
import Link from 'next/link';
import { PortableText, PortableTextComponents } from '@portabletext/react';

import { IntroductionContent } from '../../types';
import { composeClassNames } from '../../utils';

interface TextContentProps {
  content: IntroductionContent[];
  align?: string;
  textSpacing?: boolean;
}

export default function TextContent({
  content,
  align = 'text-left',
  textSpacing = false,
}: TextContentProps) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className={composeClassNames({ 'mb-4': textSpacing })}>{children}</p>
      ),
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
    <div className={`mb-8 leading-tight ${align}`}>
      <PortableText value={content} components={components} />
    </div>
  );
}
