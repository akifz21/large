export interface User{
    id:string,
    email:string,
    first_name:string,
    last_name:string
}

export interface Blog{
    id:string
    title:string,
    sections : string[],
    image:string,
    published:boolean,
    authorId:string,
    tags:string[],
    comments:string[],
    likes:string[],
    createdAt:string,
    updatedAt:string,
    searchable_text:string,
    author:User
}