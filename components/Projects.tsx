'use client'

import { urlFor } from '../sanity'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative z-0 mx-auto flex h-screen max-w-full flex-col 
        items-center justify-evenly overflow-hidden text-left md:flex-row'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Projects
      </h3>

      <div className='absolute top-[30%] left-0 h-[300px] w-full -skew-y-12 bg-[#3752f1]/10' />

      <div
        className='customScrollbar relative z-20 flex w-full snap-x snap-mandatory 
            overflow-x-scroll pt-24 overflow-y-hidden'
      >
        {projects?.map((project, i) => (
          <div
            key={project?._id}
            className='flex h-screen w-screen flex-shrink-0 snap-center flex-col
                    items-center justify-center space-y-5 p-20 md:p-44'
          >
            <Link href={project?.linkToBuild} className='h-64 w-64'>
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                className='h-48 w-48'
                alt=''
              />
            </Link>

            <div className='max-w-6xl space-y-10 px-0 md:px-10'>
              <h4 className='text-center text-2xl font-semibold'>
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

              <p className='text-md max-w-[400px] text-center md:text-left'>
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
