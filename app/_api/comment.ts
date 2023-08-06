import { Comment, CommentRequest } from '../types'
import {instance as axios} from './axiosInstance'

const addComment = (comment:CommentRequest) => axios.post("/comments",comment)

const getBlogComments = (blogId:string)=>axios.get(`/comments/blog/${blogId}`)


export {
    addComment,
    getBlogComments
}