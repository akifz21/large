'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { setTheme } from '@/app/_stores/site/actions'

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
                    <Menu.Items className="absolute -right-24 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 flex flex-col gap-1">
                            <Menu.Item>
                                <button
                                    type='button'
                                    className="custom-button w-full"
                                    onClick={() => setTheme("light")}
                                >
                                    Light
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button
                                    onClick={() => setTheme("dark")}
                                    className="custom-button w-full">
                                    Dark
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button 
                                onClick={()=>setTheme("system")}
                                className="custom-button w-full">
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



