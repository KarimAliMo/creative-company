import {defineType, defineField} from 'sanity'

export const BlogType = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Article Title',
    }),
    defineField({
      name: 'articlePanner',
      type: 'image',
      title: 'Article Main Panner',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Article Description',
    }),
    defineField({
      name: 'writer',
      type: 'string',
      title: 'Article Writer',
    }),
    defineField({
      name: 'publish',
      type: 'date',
      title: 'Date of publication',
    }),
    defineField({
      name: 'comments',
      type: 'number',
      title: 'Number of Comments',
    }),
  ],
})
