import Link from 'next/link';
import { Auth } from './Auth';
import ThemeDropdown from './ThemeDropdown';


const Header = () => {

    return (
        <header className='
             fixed
             flex flex-row 
             z-50
             px-8 sm:px-16 md:px-36 lg:px-52 2xl:px-60
             w-full items-center justify-center 
             top-0 h-20 
             text-md border-b
             border-slate-500
             border-opacity-20
             shadow-md
             bg-light-color text-dark-color  dark:bg-dark-color transition-colors dark:text-light-color
             '>

            <div className='flex flex-row  items-center gap-10  transition-opacity'>
                <div className='nav-item'>
                    Blogs
                </div>
                <div className='nav-item'>
                    About
                </div>
               
                <div className='nav-item'>
                    Contact
                </div>
                <h4 className='cursor-pointer font-bold text-xl'>
                    <Link href={'/'}>B-LOG</Link>
                </h4>
                <Auth />
                <div >
                    <ThemeDropdown />
                </div>


            </div>
        </header>
    )
}

export default Header