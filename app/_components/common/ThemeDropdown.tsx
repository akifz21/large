'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { setTheme } from '@/app/_stores/site/actions'
import { BsSun } from 'react-icons/bs'
import { FiMoon } from 'react-icons/fi'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'

export default function ThemeDropdown() {
    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <>
                    <Menu.Button className='nav-item'>
                        Theme
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
                    <Menu.Items className="absolute -right-12 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 dark:bg-dark-color dark:ring-gray-950 p-2 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 flex flex-col gap-1">
                            <Menu.Item>

                                <button
                                    type='button'
                                    className="custom-button gap-3 w-full items-center flex "
                                    onClick={() => setTheme("light")}
                                >
                                    <BsSun size={20} />
                                    Light

                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button
                                    onClick={() => setTheme("dark")}
                                    className="custom-button gap-3 w-full items-center flex "
                                >
                                    <FiMoon size={20} />
                                    Dark
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button
                                    onClick={() => setTheme("system")}
                                    className="custom-button gap-3 w-full items-center flex "
                                >
                                    <HiOutlineComputerDesktop size={20} />
                                    System
                                </button>
                            </Menu.Item>

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}



