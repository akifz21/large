import { instance as axios } from "./axiosInstance";

const like = (blogId:string,userId:string) => axios.get(`/likes/${blogId}&${userId}`) 

const unlike = (blogId:string,userId:string) => axios.delete(`/likes/${blogId}&${userId}`)

const getLike = (blogId:string,userId:string) => axios.get(`/likes/${blogId}&${userId}`)

const getBlogLikes = (blogId:string) => axios.get(`/likes/blog/${blogId}`)

export {
    like,
    unlike,
    getBlogLikes
}