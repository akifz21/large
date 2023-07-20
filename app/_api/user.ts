import {instance as axios} from './axiosInstance'


const createUser =async (data:any) => axios.post("/users",data)


export {
    createUser
}