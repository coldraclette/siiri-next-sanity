export const informationPage = {
  name: 'informationPage',
  title: 'Information page',
  type: 'document',
  groups: [
    {
      name: 'informationGroup',
      title: 'Page fields',
      default: true,
    },
    {
      name: 'seoGroup',
      title: 'SEO fields',
    },
  ],
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      group: 'informationGroup',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      description: 'e.g. Siiri Tännler | Information',
      group: 'seoGroup',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seoGroup',
      description: 'This is the description that appears on search engines.',
    },
    {
      name: 'seoImage',
      title: 'SEO image',
      type: 'image',
      description: 'Image which will be shown when sharing this URL',
      group: 'seoGroup',
    },
  ],
};
