import {instance as axios} from './axiosInstance'

const addBlog = (data:any)=> axios.post("/blogs",data)


export {
    addBlog
}