import {defineType, defineField} from 'sanity'

export const AboutType = defineType({
  name: 'about',
  type: 'document',
  title: 'About Us Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Introducing Short Statement',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Short Description About Us',
    }),
  ],
})
