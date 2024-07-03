import {defineType, defineField} from 'sanity'

export const TeamType = defineType({
  name: 'team',
  type: 'document',
  title: 'Team Section',
  fields: [
    defineField({
      name: 'member',
      type: 'string',
      title: 'Team Member Name',
    }),
    defineField({
      name: 'picture',
      type: 'image',
      title: 'Member Picture',
    }),
    defineField({
      name: 'job',
      type: 'string',
      title: 'Job Name',
    }),
  ],
})
