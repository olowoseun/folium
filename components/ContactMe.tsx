'use client'

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {}

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    window.location.href = `mailto:seunolowogoke@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}
    . ${formData.message} (${formData.email})`
  }

  return (
    <div
      className='h-screen relative flex flex-col text-center md:text-left md:flex-row
    max-w-7xl justify-evenly px-10 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Get in touch
      </h3>

      <div className='flex flex-col space-y-7'>
        <h4 className='text-2xl font-semibold text-center pt-24'>
          Trying to find something?{' '}
          <span className='underline decoration-[#3752f1]'>
            Let&apos;s chat.
          </span>
        </h4>

        <div className='space-y-5'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#3752f1] w-7 h-7 animate-pulse' />
            <p className='text-xl'>+44 7507760135</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#3752f1] w-7 h-7 animate-pulse' />
            <p className='text-xl'>hello@seunolowogoke.com.ng</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#3752f1] w-7 h-7 animate-pulse' />
            <p className='text-xl'>Shortstown Bedford MK42 0TW</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              className='contactInput'
              placeholder='Name'
              type='text'
            />
            <input
              {...register('email')}
              className='contactInput'
              placeholder='Email'
              type='email'
            />
          </div>

          <input
            {...register('subject')}
            className='contactInput'
            placeholder='Subject'
            type='text'
          />
          <textarea
            {...register('message')}
            className='contactInput'
            placeholder='Message'
          />
          <button
            type='submit'
            className='bg-[#3752f1] py-3 px-10 text-black font-bold text-md rounded-md'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
