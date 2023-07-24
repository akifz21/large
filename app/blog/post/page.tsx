'use client'
import SectionModal from '@/app/_components/blog/SectionModal'
import { useState } from 'react'
import { useFormik } from 'formik'
import { useUser } from '@/app/_stores/user/hooks'
import SectionDropdown from '@/app/_components/blog/SectionDropdown'

export default function Page() {

  const [sections, setSections] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [type,setType] = useState("")

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
      values.sections = sections
      console.log(values)
    }
  })

  const handleDelete = (elementToDelete: any) => {
    const filteredArray = sections.filter((item) => item !== elementToDelete)
    setSections(filteredArray)
  }

  return (
    <div className='flex flex-col gap-4'>
      <form onSubmit={formik.handleSubmit} className='flex flex-col w-full items-center justify-center gap-4'>
        <input type="text"
          onChange={formik.handleChange}
          name='tilte'
          autoComplete='false'
          className='custom-input p-0 font-bold text-4xl w-full border-none shadow-none focus:outline-none focus:ring-0'
          placeholder='Main Title'
        />
        <div className='flex flex-col gap-4 w-full'>
          {
            sections.map((section: any, index) => (
              <div key={index} className='self-start flex justify-between items-center flex-row w-full'>
                <div>
                  <h3 className='font-semibold text-3xl'>{section?.title}</h3>
                  <div className='w-full content'>{section?.content}</div>
                </div>
                <div className=''>
                  <button onClick={() => handleDelete(section)} className='custom-button w-fit text-white bg-red-600'>Delete</button>
                </div>
              </div>
            ))
          }
        </div>
        <div className='w-full flex items-center justify-center'>
          <SectionDropdown setType={setType} setIsOpen={setIsOpen}/>
        </div>
        <button type='submit' className=' custom-button bg-green-600 dark:bg-green-800 text-white'>Post</button>

      </form>

      <SectionModal isOpen={isOpen} setIsOpen={setIsOpen} sections={sections} setSections={setSections} type={type} />
    </div>

  )
}
