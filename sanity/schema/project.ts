export const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    {
      name: 'projectGroup',
      title: 'Project fields',
      default: true,
    },
    {
      name: 'projectInformationGroup',
      title: 'Project information fields',
    },
    {
      name: 'seoGroup',
      title: 'SEO fields',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'projectGroup',
    },
    {
      title: 'Create project page',
      name: 'hasProjectPage',
      type: 'boolean',
      group: 'projectGroup',
      description:
        'Check this if you want to create a project page for this project.',
      initialValue: false,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This is the URL of the project.',
      group: 'projectGroup',
      hidden: ({ parent }: any) => !parent.hasProjectPage,
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule: any) =>
        Rule.custom(
          (
            slug: { current: string } | undefined,
            context: { document: { hasProjectPage: boolean } }
          ) => {
            const hasProjectPage = context.document.hasProjectPage;
            if (hasProjectPage && !slug) {
              return 'Slug is required when project page is created';
            }
            return true;
          }
        ),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'reference',
      group: 'projectInformationGroup',
      description: 'The medium type of the project.',
      to: [{ type: 'mediumType' }],
    },
    {
      name: 'published',
      title: 'Published By',
      type: 'object',
      group: 'projectInformationGroup',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'url',
          title: 'Url',
          type: 'string',
        },
      ],
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      group: 'projectInformationGroup',
      description:
        'The year of the project. It will appear on Information page.',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
      group: 'projectInformationGroup',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'object',
      group: 'projectGroup',
      hidden: ({ parent }: any) => !parent.hasProjectPage,
      fields: [
        {
          name: 'image',
          title: 'For Desktop',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt description',
            },
          ],
        },
        {
          name: 'mobileImage',
          title: 'For Mobile',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt description',
            },
          ],
        },
        {
          name: 'video',
          title: 'Video',
          type: 'file',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt description',
            },
          ],
        },
      ],
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      group: 'projectGroup',
      description: 'This is the text that appears on the project page.',
      hidden: ({ parent }: any) => !parent.hasProjectPage,
      of: [{ type: 'block' }],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      group: 'projectGroup',
      hidden: ({ parent }: any) => !parent.hasProjectPage,
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          name: 'projectImage',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt description',
            },
          ],
        },
        {
          type: 'file',
          title: 'video',
          name: 'projectVideo',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt description',
            },
          ],
        },
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      description: 'e.g. Siiri Tännler | <PROJECT NAME>',
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'thumbnail.image',
      mediumType: 'type.title',
    },
    prepare({ title, subtitle, media, mediumType }: any) {
      return {
        title,
        subtitle: `${subtitle} - ${mediumType}`,
        media: media ? media : null,
      };
    },
  },
};
