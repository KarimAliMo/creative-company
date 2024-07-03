import {defineType, defineField} from 'sanity'

export const workType = defineType({
  name: 'work',
  type: 'document',
  title: 'Work Levels Section',
  fields: [
    defineField({
      name: 'level',
      type: 'string',
      title: 'Work Level Name',
    }),
    defineField({
      name: 'levelNumber',
      type: 'number',
      title: 'Work Level Number',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Work Level Description',
    }),
  ],
})
