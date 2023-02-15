import {defineField, defineType} from 'sanity'
import { MdAddTask } from 'react-icons/md'
export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: MdAddTask,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    }),
    defineField({
      name: 'linkToBuild',
      title: 'Link to Build',
      type: 'url',
    }),
  ],
})
