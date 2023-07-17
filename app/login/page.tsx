'use client'
import { useState } from "react"
import axios from 'axios'
import { login } from "../_stores/user/actions"

export default function Page() {
    const [formData, setFormData] = useState({})
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:4000/api/auth", formData)
            login(response.data.data.access_token)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex flex-col items-center h-[50vh] gap-10 justify-center">
            <h1 className="text-4xl font-extrabold">Login</h1>
            <form onSubmit={handleSubmit} className="flex  rounded-md  gap-4 w-1/2 bg flex-col" action="">
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
                <button className="
                   text-sm text-light-color
                   w-1/2
                   self-center
                   bg-dark-color dark:bg-light-color dark:text-dark-color p-2 rounded-md"
                >Submit</button>
            </form>
        </div>
    )
}
