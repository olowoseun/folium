import { urlFor } from "@/sanity"
import { motion } from "framer-motion"

type Props = {
  pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0, }}
    whileInView={{ opacity: 1, }}
    transition={{ duration: 1.5, }}
    className='relative flex flex-col h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img
            initial={{ x: -200, opacity: 0, }}
            transition={{ duration: 1.2, }}
            whileInView={{ x: 0, opacity: 1, }}
            // viewport={{ once: true, }}
            src={ urlFor(pageInfo?.profilePhoto).url() }
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
            md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[540px] pt-24' 
        />

        <div className='space-y-10 px-0 md:px-10 pt-24'>
            <h4 className='text-4xl font-semibold'>
            Here is some <span className='underline decoration-[#3752f1]/50'>historical</span> context
            </h4>
            <p className='text-base'>
              {pageInfo?.backgroundInfo}
            </p>
        </div>
    </motion.div>
  )
}

export default About