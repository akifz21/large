import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { authLogin } from '../_api/auth'
import { useRouter } from 'next/navigation'
import { login } from '../_stores/user/actions'
import { Button } from './common/Button'

export default function LoginModal() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [formData, setFormData] = useState({})
    const router = useRouter()
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const response = await authLogin(formData)
            console.log(response)
            login(response.data.data.access_token)
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className=" inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Login
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

                    <div className="fixed  inset-0  overflow-y-auto">
                        <div className="flex min-h-screen items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-1/2 max-w-lg  overflow-hidden rounded-2xl bg-light-color dark:bg-dark-color p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg text-center font-bold leading-6 text-dark-color dark:text-light-color"
                                    >
                                        Login
                                    </Dialog.Title>
                                    <div className="flex flex-col items-center ">
                                        <form onSubmit={handleSubmit} className="flex  rounded-md p-4  gap-4 w-full bg flex-col" action="">
                                            <input type="text"
                                                name="email"
                                                className="py-2 
                                                    text-sm text-light-color
                                                bg-dark-color rounded-md px-3
                                                    dark:bg-light-color dark:text-dark-color 
                                                    focus:outline-none"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                autoComplete="off"
                                            />
                                            <input type="password"
                                                name="password"
                                                className="py-2 
                                                            text-sm text-light-color
                                                        bg-dark-color rounded-md px-3
                                                            dark:bg-light-color dark:text-dark-color 
                                                            focus:outline-none"
                                                placeholder=" Password"
                                                onChange={handleChange}
                                                autoComplete="off"
                                            />
                                            <Button type={'submit'} onClick={() => closeModal()}>Submit</Button>
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
