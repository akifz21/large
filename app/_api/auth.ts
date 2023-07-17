import { instance as axios } from './axiosInstance'


const authLogin = (data: any) => axios.post("/auth", data)

export {
    authLogin
}