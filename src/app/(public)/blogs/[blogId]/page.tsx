import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";


export const generateMetadata = async ({ params }: {
    params: Promise<{ blogId: string }>
}) => {
    const { blogId } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogId}`);
    const blog = await res.json();

    return {
        title: blog?.data?.title
    }
};


async function BlogDetailsPage({ params }: {
    params: Promise<{ blogId: string }>
}) {

    const { blogId } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogId}`);
    const blog = await res.json();
    console.log(blog);

    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
            <BlogDetailsCard blog={blog.data} />
        </div>
    )
}

export default BlogDetailsPage