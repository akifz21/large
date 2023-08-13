import { instance as axios } from "./axiosInstance";

const addBlog = (data: any) => axios.post("/blogs", data);

const updateBlog = (id: string, data: any) => axios.put(`/blogs/${id}`, data);

const deleteBlog = (id: string) => axios.delete(`/blogs/${id}`);

const getBlogs = () => axios.get("/blogs");

export { addBlog, getBlogs, deleteBlog, updateBlog };
