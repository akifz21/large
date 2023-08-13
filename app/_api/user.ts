import { instance as axios } from "./axiosInstance";

const createUser = async (data: any) => axios.post("/users", data);
const deleteUser = async (id:string) => axios.delete(`/users/${id}`)

const getUsers = async () => axios.get("/users");

export { createUser ,deleteUser};
