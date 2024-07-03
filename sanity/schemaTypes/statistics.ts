import {defineType, defineField} from 'sanity'

export const StatisticsType = defineType({
  name: 'statistics',
  type: 'document',
  title: 'Statistics Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of the statistics',
    }),
    defineField({
      name: 'start',
      type: 'number',
      title: 'The Start Date of our Company',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'A brief about our Achievements',
    }),
    defineField({
      name: 'solutions',
      type: 'number',
      title: 'Total Solutions we introduce to our Customers',
    }),
  ],
})
