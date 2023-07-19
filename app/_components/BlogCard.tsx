import Image from "next/image"
import banner from '@/public/2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.avif'
import Link from "next/link"


const BlogCard = () => {
  return (
    <div className="flex flex-col w-full p-8">
      <Link className="flex flex-col gap-4" href={"/blog/1"}>
        <Image src={banner} className="rounded-md hover:scale-105 transform transition-transform" alt="blog-banner" />
        <div className="flex flex-col">
          <h2 className="text-base
         md:text-lg font-bold
         line-clamp-1
        
        "
          >Blog Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit.</h2>
          <span className="badge ">Tech</span>
          <span className="opacity-70">Jun 21, 2021 • 11 min read</span>
          <p className="line-clamp-2 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo id nulla amet repellat debitis ipsa aliquid corporis maxime cum. Earum explicabo cum nemo quia totam? Quod enim voluptates repellendus ex molestias vel tenetur modi iure voluptatibus pariatur libero fugit neque reiciendis eum distinctio quidem illum labore, voluptatem dicta! Quis.</p>
          <div className="mt-2">
            <p className="font-bold">
              Mehmet Akif Özdemir
            </p>
          </div>
        </div>
      </Link>
    </div >

  )
}

export default BlogCard 