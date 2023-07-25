'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import SectionModal from './SectionModal'


const SectionDropdown = ({ setIsOpen, setType }: {
    setIsOpen: any,
    setType: any
}) => {

    const handleOpen = (type: any) => {
        setIsOpen(true)
        setType(type)
    }

    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <>
                    <Menu.Button>
                        <BsPlusCircle size={35} className='self-center' />
                    </Menu.Button>
                </>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items static className="absolute -right-24 mt-2 w-56 top-8 origin-top-right divide-y divide-gray-100 rounded-md dark:bg-dark-color dark:ring-gray-950 p-2 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 flex flex-col gap-2">
                            <Menu.Item >
                                <div className="inset-0 flex items-center justify-center">
                                    <button
                                        type="button"
                                        onClick={() => handleOpen("TITLE_TEXT")}
                                        className='custom-button w-full shadow-none'
                                    >
                                        Subtitle and Text
                                    </button>
                                </div>
                            </Menu.Item>
                            <Menu.Item >
                                <div className="inset-0 flex items-center justify-center">
                                    <button
                                        type="button"
                                        onClick={() => handleOpen("TEXT")}
                                        className='custom-button w-full shadow-none'
                                    >
                                        Text
                                    </button>
                                </div>
                            </Menu.Item>
                            <Menu.Item >
                                <div className="inset-0 flex items-center justify-center">
                                    <button
                                        type="button"
                                        onClick={() => handleOpen("IMAGE")}
                                        className='custom-button w-full shadow-none'
                                    >
                                        Image
                                    </button>
                                </div>
                            </Menu.Item>
                            <Menu.Item >
                                <div className="inset-0 flex items-center justify-center">
                                    <button
                                        type="button"
                                        onClick={() => handleOpen("CODE")}
                                        className='custom-button w-full shadow-none'
                                    >
                                        Code
                                    </button>
                                </div>
                            </Menu.Item>
                          
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}


export default SectionDropdown



