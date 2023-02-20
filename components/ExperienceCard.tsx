import { urlFor } from '../sanity'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className='flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col
    items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity
    duration-200 hover:opacity-100 md:w-[400px] xl:w-[700px]'
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyLogo).url()}
        className='h-32 w-32 rounded-full object-cover object-center xl:h-[80px] xl:w-[80px]'
        alt='Seun Olowogoke'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
        <p className='mt-1 text-2xl font-bold'>{experience?.company}</p>
        <div className='my-2 flex space-x-2'>
          {experience.technologies.map((technology) => (
            <Image
              key={technology?._id}
              src={urlFor(technology?.image).url()}
              className='flex h-10 w-10 flex-wrap rounded-full'
              width={40}
              height={40}
              alt={technology?.title}
            />
          ))}
        </div>
        <p className='py-5 uppercase text-gray-300'>
          {new Date(experience?.startDate).toDateString()} -{' '}
          {experience?.isCurrentEmployer
            ? 'Present'
            : new Date(experience?.endDate).toDateString()}
        </p>
        <ul
          className='ml-5 h-36 list-disc space-y-1.5 overflow-y-scroll text-sm
            scrollbar-thin scrollbar-track-black scrollbar-thumb-[#3752f1]/80'
        >
          {experience.points?.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
