import { NextRequest } from "next/server";

export const blogs = [
    {
        "id": 7,
        "title": "server actions",
        "content": "Magni esse omnis id",
        "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
        "isFeatured": true,
        "tags": [
            "Nihil exercitation l"
        ],
        "views": 0,
        "authorId": 1,
        "createdAt": "2025-10-26T05:20:32.243Z",
        "updatedAt": "2025-10-26T05:20:32.243Z",
        "author": {
            "id": 1,
            "name": "Dev nayeem",
            "email": "nayeem@gmail.com",
            "role": "USER"
        }
    },
    {
        "id": 6,
        "title": "This is new blogs",
        "content": "Aute voluptatum ex i",
        "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
        "isFeatured": true,
        "tags": [
            "Incididunt omnis max"
        ],
        "views": 1,
        "authorId": 1,
        "createdAt": "2025-10-26T04:30:55.485Z",
        "updatedAt": "2025-10-26T04:31:04.433Z",
        "author": {
            "id": 1,
            "name": "Dev nayeem",
            "email": "nayeem@gmail.com",
            "role": "USER"
        }
    },
    {
        "id": 5,
        "title": "Omnis quis consectet",
        "content": "Omnis sunt harum quo",
        "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
        "isFeatured": true,
        "tags": [
            "Maiores laboriosam"
        ],
        "views": 0,
        "authorId": 1,
        "createdAt": "2025-10-26T04:29:20.498Z",
        "updatedAt": "2025-10-26T04:29:20.498Z",
        "author": {
            "id": 1,
            "name": "Dev nayeem",
            "email": "nayeem@gmail.com",
            "role": "USER"
        }
    },
    {
        "id": 4,
        "title": "Getting Started with Next.js",
        "content": "Redux.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
        "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
        "isFeatured": true,
        "tags": [
            "Redux.js",
            "React",
            "Web Development"
        ],
        "views": 0,
        "authorId": 1,
        "createdAt": "2025-10-26T04:28:14.325Z",
        "updatedAt": "2025-10-26T04:28:14.325Z",
        "author": {
            "id": 1,
            "name": "Dev nayeem",
            "email": "nayeem@gmail.com",
            "role": "USER"
        }
    },
    {
        "id": 3,
        "title": "Getting Started with Next.js",
        "content": "Redux.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
        "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
        "isFeatured": true,
        "tags": [
            "Redux.js",
            "React",
            "Web Development"
        ],
        "views": 1,
        "authorId": 1,
        "createdAt": "2025-10-26T04:27:55.640Z",
        "updatedAt": "2025-10-26T04:28:48.083Z",
        "author": {
            "id": 1,
            "name": "Dev nayeem",
            "email": "nayeem@gmail.com",
            "role": "USER"
        }
    },
    {
        "id": 2,
        "title": "Getting Started with Next.js",
        "content": "Redux.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
        "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
        "isFeatured": true,
        "tags": [
            "Redux.js",
            "React",
            "Web Development"
        ],
        "views": 0,
        "authorId": 3,
        "createdAt": "2025-10-26T04:27:52.390Z",
        "updatedAt": "2025-10-26T04:27:52.390Z",
        "author": {
            "id": 3,
            "name": "Dev Tanin",
            "email": "tanin@gmail.com",
            "role": "USER"
        }
    },
    {
        "id": 1,
        "title": "Getting Started with REdux.js",
        "content": "Redux.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
        "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
        "isFeatured": true,
        "tags": [
            "Redux.js",
            "React",
            "Web Development"
        ],
        "views": 0,
        "authorId": 1,
        "createdAt": "2025-10-26T04:27:26.409Z",
        "updatedAt": "2025-10-26T04:27:26.409Z",
        "author": {
            "id": 1,
            "name": "Dev nayeem",
            "email": "nayeem@gmail.com",
            "role": "USER"
        }
    }
]

export const GET = async () => {
    return Response.json({
        message: "blogs data get success",
        data: blogs
    })
};


export const POST = async (request: Request) => {
    const blog = await request.json();
    const newBlog = {
        ...blog,
        id: blogs.length + 1
    };

    blogs.push(newBlog);

    return new NextRequest(JSON.stringify(newBlog), {
        headers: {
            "Content-Type": "application/json"
        }
    })
};