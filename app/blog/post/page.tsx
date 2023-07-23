'use client'
import FileInput from '@/app/_components/blog/FileInput'
import SectionModal from '@/app/_components/blog/SectionModal'
import { useState } from 'react'
import { BiCloudUpload } from 'react-icons/bi'
import { useFormik } from 'formik'

export default function Page() {

  const formik = useFormik({
    initialValues: {
      title: "",
      sections: [],
      image: "",
      published: true,
      authorId: 1,
      tags: []
    },
    onSubmit: (values: any) => {
      console.log(values)
    }
  })

  return (
    <div className='flex flex-col gap-4 items-center'>
      <h3 className='text-2xl font-semibold'>Post a blog</h3>
      <form onSubmit={formik.handleSubmit} className='flex flex-col items-center justify-center gap-4 w-1/2'>
        <input type="text" onChange={formik.handleChange} name='tilte' className='custom-input w-full' placeholder='Main Title' />
        {/* <textarea rows={15} onChange={handleChange} name='content' className='custom-input w-full' placeholder='Main Content' /> */}
        <FileInput/>
        <div className='w-full'>
          <SectionModal />
        </div>
      
        <button type='submit' className='w-full custom-button bg-green-600 dark:bg-green-800 text-white'>Post</button>
      </form>
    </div>
  )
}
