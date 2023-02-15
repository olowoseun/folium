import {defineField, defineType} from 'sanity'
import { MdShare } from 'react-icons/md'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  icon: MdShare,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Social media platform (e.g. Linkedin, YouTube, Facebook, etc)',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})
