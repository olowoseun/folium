import { urlFor } from '../sanity'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden'
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyLogo).url()}
        className='w-32 h-32 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center'
        alt='Seun Olowogoke'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map((technology) => (
            <Image
              key={technology?._id}
              src={urlFor(technology?.image).url()}
              className='w-10 h-10 rounded-full'
              width={40}
              height={40}
              alt={technology?.title}
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience?.startDate).toDateString()} -{' '}
          {experience?.isCurrentEmployer
            ? 'Present'
            : new Date(experience?.endDate).toDateString()}
        </p>
        <ul
          className='list-disc space-y-1.5 ml-5 text-sm h-36 overflow-y-scroll
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
