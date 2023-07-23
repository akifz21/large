import { BsSearch } from "react-icons/bs"

const SearchBar = () => {
    return (
        <div className="relative w-1/2 text-gray-400">
            <input type="search" className="py-2 w-full text-sm text-black border rounded-md px-3 dark:bg-dark-color dark:text-light-color focus:outline-none" placeholder=" Search..." autoComplete="off" />
            <span className="absolute inset-y-0 right-5 flex items-center pl-2">
                <BsSearch />
            </span>
        </div>
    )
}

export default SearchBar