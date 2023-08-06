import Blog from "./blog";

async function getBlog(id: string) {
  const res = await fetch(`http://localhost:4000/api/blogs/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const res = await getBlog(params.id);
  const blog: Blog = res?.data;
  return (
    <>
      <Blog blog={blog} />
    </>
  );
}
