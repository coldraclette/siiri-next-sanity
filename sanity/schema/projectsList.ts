import { CustomFeaturedProjectsInput } from '../utils/CustomFeaturedProjectsInput';

export const projectsList = {
  name: 'projectsList',
  title: 'Projects List',
  type: 'document',
  fields: [
    {
      name: 'projects',
      title: 'Projects',
      validation: (Rule: any) => Rule.required(),
      components: {
        input: CustomFeaturedProjectsInput,
      },
      description:
        'list of projects which are display on the frontpage and on the information page',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'project',
            },
          ],
        },
      ],
    },
  ],
};
