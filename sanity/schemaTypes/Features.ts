import {defineType, defineField} from 'sanity'

export const FeaturesType = defineType({
  name: 'features',
  type: 'document',
  title: 'Features Section',
  fields: [
    defineField({
      name: 'featureTitle',
      type: 'string',
      title: 'Feature Title',
    }),
    defineField({
      name: 'icon',
      type: 'iconPicker',
      title: 'Choose Icon For The Feature',
      options: {
        storeSvg: true,
      },
    }),
    defineField({
      name: 'featureDescription',
      type: 'text',
      title: 'Feature Description',
    }),
  ],
})
