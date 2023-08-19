import { baseURL } from "@/app/_api/axiosInstance";
import { UserDetails } from "@/app/types";
import UserBlogs from "./userBlogs";

async function getUser(userId: string) {
  const res = await fetch(`${baseURL}/users/details/${userId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const UserBlogsPage = async ({ params }: { params: { userId: string } }) => {
  const userResponse = await getUser(params.userId);
  const user: UserDetails = userResponse?.data;
  return (
    <>
      <UserBlogs user={user} />
    </>
  );
};

export default UserBlogsPage;
