'use client'
import React, { useState } from 'react'
import { setTheme } from '../../_stores/site/actions'
import Switch from "react-switch";
import { BsFillSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from '@/app/_stores/site/hooks';
import Link from 'next/link';
import { useIsLoggedIn } from '@/app/_stores/user/hooks';
import { logout } from '@/app/_stores/user/actions';
import { useRouter } from 'next/navigation';
import LoginModal from '../LoginModal';
import ProfileDropdown from '../ProfileDropdown';
import { toast } from 'react-toastify';


const Header = () => {
    const theme = useTheme()
    const [isChecked, setIsChecked] = useState(typeof window !== 'undefined' && localStorage.getItem("theme") === "light" ? false : true)
    const isLoggedIn = useIsLoggedIn()
    const router = useRouter()

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
        setIsChecked(!isChecked)
    }


    const handleLogout = () => {
        logout()
        router.push("/")
        toast.success("Logout successfully")
    }

    return (
        <header className='
             fixed
             flex flex-row 
             z-50
             px-8 sm:px-16 md:px-36 lg:px-52 2xl:px-60
             w-full items-center justify-center 
             top-0 h-16 
             text-md border-b
             border-slate-500
             border-opacity-20
             bg-light-color text-dark-color  dark:bg-dark-color transition-colors dark:text-light-color
             '>
          
            <ul className='flex flex-row  items-center gap-10  transition-opacity'>
                <li className='nav-item'>
                    Blogs
                </li>
                <li className='nav-item'>
                    About
                </li>
                <h4 className='cursor-pointer font-bold'>
                    <Link href={'/'}>B-LOG</Link>
                </h4>
                <li className='nav-item'>
                    Contact
                </li>
              
                {
                    !isLoggedIn ?
                        <li> <LoginModal /></li>
                        :
                        <div className='flex flex-row gap-4 items-center'>
                            <li ><ProfileDropdown /></li>
                            <li className='nav-item'><button onClick={() => handleLogout()}>Logout</button></li>
                        </div>
                }
                <li>
                    <button >
                        <Switch
                            onChange={toggleTheme}
                            checked={isChecked}
                            offColor='#201F1F'
                            onColor='#F9F4EC'
                            offHandleColor='#F9F4EC'
                            onHandleColor='#201F1F'
                            uncheckedIcon={
                                <div className='flex justify-center items-center h-full text-light-color'>
                                    <BsFillMoonFill />
                                </div>
                            }
                            checkedIcon={<div className='flex justify-center items-center h-full text-dark-color'>
                                <BsFillSunFill />
                            </div>}
                        />
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default Header