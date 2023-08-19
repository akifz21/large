import { instance as axios } from "./axiosInstance";


const follow = (userId:string) => axios.post(`/follows/${userId}`)

const unfollow = (userId:string) => axios.delete(`/follows/${userId}`)

export {
    follow,
    unfollow
}