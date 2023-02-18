import { urlFor } from '../sanity'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean
  skill: Skill
}

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className='rounded-full border border-gray-500 object-cover w-12 h-12 md:w-14 md:h-14 xl:w-18 xl:h-18 
        filter group-hover:grayscale transition duration-300'
        src={urlFor(skill?.image).url()}
      />

      <div
        className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white w-12 h-12 md:w-14 md:h-14 xl:w-18 xl:h-18 rounded-full z-0'
      >
        <div className='flex items-center justify-center h-full'>
          <p className='text-md font-bold text-black opacity-100'>
            {skill?.progress}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
