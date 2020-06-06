export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'homeTitle',
      title: 'Home Title',
      type: 'string',
    },
    {
      name: 'homeSubtitle',
      title: 'Home Subtitle',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featuresTitle',
      title: 'Features Title',
      type: 'string',
    },
    {
      name: 'featuresPoints',
      title: 'Features Points',
      type: 'array',
      of: [
        {
          type: 'featuresPoint',
        },
      ],
    },
    {
      name: 'courseSectionTitle',
      title: 'Course Section Title',
      type: 'string',
    },
    {
      name: 'courseSectionSubtitle',
      title: 'Course Section Subtitle',
      type: 'string',
    },
    {
      name: 'aboutSectionImage',
      title: 'About Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'aboutSectionSubtitle',
      title: 'About Section Subtitle',
      type: 'string',
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'review',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'homeTitle',
    },
  },
};
