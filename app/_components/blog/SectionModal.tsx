'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useFormik } from 'formik'
import FileInput from './FileInput'

const SectionModal = ({ sections, setSections, type, isOpen, setIsOpen }: {
    sections: any,
    setSections: any,
    type: any,
    isOpen: any,
    setIsOpen: any

}) => {
    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
            image: "",
            type: type ? type : ""
        },
        enableReinitialize:true,
        onSubmit: (values: any) => {
            formik.resetForm()
            setSections([...sections, values])
            setIsOpen(false)
        }
    })

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="z-50" onClose={() => { setIsOpen(false) }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0  overflow-y-auto">
                        <div className="flex min-h-screen items-center justify-center  text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl  overflow-hidden rounded-2xl bg-light-color dark:bg-dark-color p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex flex-col">
                                        <form onSubmit={formik.handleSubmit} className="flex  rounded-md md:p-10 p-4  gap-4 w-full bg flex-col">
                                            {
                                                (type === "TITLE_TEXT") &&
                                                <input type="text"
                                                    name="title"
                                                    className="custom-input"
                                                    placeholder="Sub title  "
                                                    onChange={formik.handleChange}
                                                    autoComplete="off"
                                                />
                                            }
                                            {
                                                (type === "TITLE_TEXT" || type === "TEXT" || type === "CODE") &&
                                                <textarea rows={5} onChange={formik.handleChange} name='content' className='custom-input w-full' placeholder='Content' />
                                            }
                                            {
                                                type === "IMAGE" &&
                                                <FileInput onChange={()=>{}} name={"image"} />
                                            }
                                            <button className="custom-button"
                                                onClick={() => {setIsOpen(false)}}
                                                type='submit'
                                            >
                                                Add
                                            </button>
                                        </form>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default SectionModal
