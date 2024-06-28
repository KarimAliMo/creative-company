import {defineType, defineField} from 'sanity'

export const landingType = defineType({
  name: 'landing',
  type: 'document',
  title: 'Landing Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),

    defineField({
      name: 'sliderImage2',
      type: 'image',
      title: 'Slider Image 2',
    }),
    defineField({
      name: 'welcomeText1',
      type: 'string',
      title: 'Welcome Text First Slide',
    }),
    defineField({
      name: 'headLine1',
      type: 'string',
      title: 'Head Line First Slide',
    }),
    defineField({
      name: 'subHeadLine1',
      type: 'string',
      title: 'Sub Head Line First Slide',
    }),
    defineField({
      name: 'infoText1',
      type: 'string',
      title: 'Info Text First Slide',
    }),
    defineField({
      name: 'welcomeText2',
      type: 'string',
      title: 'Welcome Text Second Slide',
    }),
    defineField({
      name: 'headLine2',
      type: 'string',
      title: 'Head Line Second Slide',
    }),
    defineField({
      name: 'subHeadLine2',
      type: 'string',
      title: 'Sub Head Line Second Slide',
    }),
    defineField({
      name: 'infoText2',
      type: 'string',
      title: 'Info Text Second Slide',
    }),
    defineField({
      name: 'welcomeText3',
      type: 'string',
      title: 'Welcome Text Third Slide',
    }),
    defineField({
      name: 'headLine3',
      type: 'string',
      title: 'Head Line Third Slide',
    }),
    defineField({
      name: 'subHeadLine3',
      type: 'string',
      title: 'Sub Head Line Third Slide',
    }),
    defineField({
      name: 'infoText3',
      type: 'string',
      title: 'Info Text Third Slide',
    }),
  ],
})
