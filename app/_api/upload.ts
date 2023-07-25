import { instance as axios } from "./axiosInstance";

const uploadImage = async (data: any) =>
  await (
    await axios.post("/upload/image", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  ).data;

export { uploadImage };
