'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useFormik } from 'formik'
import FileInput from './FileInput'

const SectionModal = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const formik = useFormik({
        initialValues: {
            title:"",
            content:"",
            image:""
        },
        onSubmit:(values:any)=>{
            console.log(values)
        }
    })

    return (
        <>
            <div className="inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className='custom-button w-full'

                >
                    Add Section
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className=" z-10" onClose={closeModal}>
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

                    <div className="fixed inset-0 overflow-y-auto">
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
                                    <Dialog.Title
                                        as="h1"
                                        className="text-2xl text-center font-bold leading-6 border-b-2 pb-2  text-dark-color dark:text-light-color"
                                    >
                                        Add section
                                    </Dialog.Title>
                                    <div className="flex flex-col">
                                        <form onSubmit={formik.handleSubmit} className="flex border-b-2 rounded-md md:p-10 p-4  gap-4 w-full bg flex-col" action="">
                                            <input type="text"
                                                name="title"
                                                className="custom-input"
                                                placeholder="Title"
                                                onChange={formik.handleChange}
                                                autoComplete="off"
                                            />
                                            <textarea rows={5} onChange={formik.handleChange} name='content' className='custom-input w-full' placeholder='Content' />
                                            <FileInput/>
                                            <button className="custom-button"
                                                onClick={() => closeModal()}
                                                type='submit'
                                            >
                                                Create Section
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
