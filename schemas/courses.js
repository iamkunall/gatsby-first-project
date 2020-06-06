export default {
  name: 'courses',
  title: 'Courses',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'Subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      title: 'Points',
      name: 'points',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      title: 'Requirements',
      name: 'requirements',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
