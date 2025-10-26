/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {

  //  isr 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
    next: {
      revalidate: 30
    }
  });
  const { data: posts } = await res.json();
  // console.log(posts);
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>

      <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {
          posts?.data?.slice(0, 3).map((post: any) => (
            <BlogCard key={post.id} post={post} />
          ))
        }
      </div>
    </div>
  );
}
