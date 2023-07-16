import Image from 'next/image'
import image from '@/public/Banner.png'

export default function Page({ params }: {
    params: { id: string }
}) {
    return (
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col text-center gap-4'>
                <h1 className='text-5xl font-extrabold'>Blog Title</h1>
                <div>
                    <p className='opacity-75  text-lg'>Mehmet Akif Özdemir</p>
                    <p className='opacity-75'>30 November 2021</p>
                </div>
            </div>
            <h1 className='text-4xl font-extrabold'>. . .</h1>
            <div>
                <Image src={image} alt='blog image' className='rounded-md w-full' />
            </div>
            <div className='flex mt-4 flex-col gap-4 font-medium text-xl'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cupiditate provident obcaecati magni, ipsam quae voluptatem fuga minus mollitia voluptates doloremque quisquam soluta.  Quis velit corrupti, aspernatur voluptatibus amet magnam, ab quisquam repellat illum accusantium tempora, praesentium sunt? Enim esse saepe doloribus, culpa optio aut in corrupti. Fugiat, ipsum numquam. Molestias quia eligendi neque ducimus sit est, aut nesciunt totam tempora, vitae illum alias soluta? Voluptatibus, obcaecati facere! Iure explicabo, assumenda praesentium odit voluptas libero alias quidem repellat laudantium doloribus voluptatum dignissimos pariatur possimus numquam optio esse! Et quam neque corporis aperiam natus voluptatem. Iure nulla odio officia repudiandae autem?</p>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cupiditate provident obcaecati magni, ipsam quae voluptatem fuga minus mollitia voluptates doloremque quisquam soluta. Quis velit corrupti, aspernatur voluptatibus amet magnam, ab quisquam repellat illum accusantium tempora, praesentium sunt? Enim esse saepe doloribus, culpa optio aut in corrupti. Fugiat, ipsum numquam. Molestias quia eligendi neque ducimus sit est, aut nesciunt totam tempora, vitae illum alias soluta? Voluptatibus, obcaecati facere! Iure explicabo, assumenda praesentium odit voluptas libero alias quidem repellat laudantium doloribus voluptatum dignissimos pariatur possimus numquam optio esse! Et quam neque corporis aperiam natus voluptatem. Iure nulla odio officia repudiandae autem?</p>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cupiditate provident obcaecati magni, ipsam quae voluptatem fuga minus mollitia voluptates doloremque quisquam soluta.  Quis velit corrupti, aspernatur voluptatibus amet magnam, ab quisquam repellat illum accusantium tempora, praesentium sunt? Enim esse saepe doloribus, culpa optio aut in corrupti. Fugiat, ipsum numquam. Molestias quia eligendi neque ducimus sit est, aut nesciunt totam tempora, vitae illum alias soluta? Voluptatibus, obcaecati facere! Iure explicabo, assumenda praesentium odit voluptas libero alias quidem repellat laudantium doloribus voluptatum dignissimos pariatur possimus numquam optio esse! Et quam neque corporis aperiam natus voluptatem. Iure nulla odio officia repudiandae autem?</p>
            </div>

        </div>
    )
}
