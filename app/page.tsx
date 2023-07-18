"use client";
import BlogCard from "./_components/BlogCard";
import SearchBar from "./_components/SearchBar";


export default function Home() {

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-black">
          B-LOG
        </h1>
        <p className="opacity-75 font-medium">a blog about software development</p>
      </div>
      <SearchBar />
      <div className="flex flex-row w-full justify-between gap-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex flex-row w-full justify-between gap-4">
        <div className="w-1/2 flex flex-col gap-2 p-10 items-center">
          <h4 className="text-2xl font-bold">Subscribe To Our Newsletter</h4>
          <p className="w-full opacity-75">Get weekly software news, articles, and videos delivered to your inbox.</p>
          <div className="flex flex-col  w-full gap-4">
            <input type="text" className="py-2 w-full text-sm text-light-color bg-dark-color rounded-md px-3 dark:bg-light-color dark:text-dark-color focus:outline-none" placeholder=" Email" autoComplete="off" />
            <button
              className="
                   text-sm text-light-color
                   w-1/4
                   
                   bg-dark-color dark:bg-light-color dark:text-dark-color p-2 rounded-md">
              Sign up
            </button>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-2 p-10 items-center">
          <h4 className="text-2xl font-bold">Popular posts</h4>
          <ul className=" font-semibold underline">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
