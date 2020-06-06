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
