import {defineField, defineType} from 'sanity'
import { MdWorkOutline} from 'react-icons/md'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: MdWorkOutline,
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'isCurrentEmployer',
      title: 'Is Current Employer',
      type: 'boolean',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }]
    }),
  ],
})
