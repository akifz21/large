import { instance as axios } from "./axiosInstance";

const createUser = async (data: any) => axios.post("/users", data);

const getUsers = async () => axios.get("/users");

export { createUser };
