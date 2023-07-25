import {instance as axios} from './axiosInstance'

const addBlog = (data:any)=> axios.post("/blogs",data)

const uploadImage = (data:any) => axios.post("/upload/image",data)

export {
    addBlog,
    uploadImage
}