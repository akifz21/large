import {instance as axios} from './axiosInstance'

const addBlog = (data:any)=> axios.post("/blogs",data)

const getBlogs = () => axios.get("/blogs")


export {
    addBlog,
    getBlogs
}