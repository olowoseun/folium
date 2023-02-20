'use client'

import { urlFor } from '../sanity'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
        max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='w-full absolute top-[30%] bg-[#3752f1]/10 left-0 h-[300px] -skew-y-12' />

      <div
        className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory 
            pt-24 z-20 customScrollbar'
      >
        {projects?.map((project, i) => (
          <div
            key={project?._id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              className='w-64 h-64'
              alt=''
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='underline decoration-[#3752f1]'>
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>

              <div className='flex items-center justify-center space-x-2'>
                {project?.technologies.map((technology) => (
                  <Image
                    className='h-10 w-10'
                    key={technology?._id}
                    src={urlFor(technology?.image).url()}
                    alt={technology?.title}
                    width={40}
                    height={40}
                  />
                ))}
              </div>

              <p className='text-md text-center md:text-left max-w-[400px]'>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
