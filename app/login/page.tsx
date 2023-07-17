'use client'
import { useState } from "react"
import axios from 'axios'
import { login } from "../_stores/user/actions"
import { useRouter } from "next/navigation"
import { authLogin } from "../_api/auth"

export default function Page() {
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
        <></>
    )
}
