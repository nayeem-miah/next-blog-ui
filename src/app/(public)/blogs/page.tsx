/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";

const AllBlogsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`);
  const { data: blogs } = await res.json();


  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>

      <div className="grid md:grid-cols-3 gap-5 my-5 max-w-6xl mx-auto">
        {
          blogs?.data?.map((blog: any) => (
            <BlogCard key={blog.id} post={blog} />
          ))
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
