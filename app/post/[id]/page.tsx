import { getGist } from "@/app/gist/queries"; // Ensure the getGist function is correctly imported
import Navigation from "@/components/Navigation";
import Explore from "@/components/Explore";
import Link from "next/link";


type Params = {
  id: string; // Replace with the actual structure of `params`
};

export default async function PostPage({ params }: {params : Params}) {
  const { id } = params;

  // Fetch the post by ID using the getGist function
  const { data: posts, error } = await getGist(); // You can pass currentUserId if needed

  if (error || !posts) {
    return <div className="text-center text-white">Post not found!</div>;
  }

  // Find the post with the matching ID
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div className="text-center text-white">Post not found!</div>;
  }

  return (
    <div className="w-full h-full flex justify-between items-start bg-background text-foreground">
      {/* Left Sidebar: Explore */}
      <div className="hidden lg:block w-1/5 h-full p-4 bg-[#0b1121]">
        <Navigation />
      </div>

      {/* Center: Post Content */}
      <div className="flex-1 min-h-screen bg-[#020617] text-white p-6 max-w-[70%] mx-auto">
        
        {/* navigate back  */}
        <div className="items-center space-x-2 mb-4 cursor-pointer group flex">
          <Link href={"/protected"}>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="text-md text-gray-300 group-hover:text-white font-bold">post</span>
          </Link>
        </div>

        {/* Post Container */}
        <div className="border-t-[0.1px] py-4 px-6 bg-[#0b1121] rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <div>
              <div className="font-bold">{post.full_name}</div>
              <div className="text-gray-500">@{post.username}</div>
            </div>
          </div>
          <div className="mt-4 whitespace-pre-wrap break-words">{post.text}</div>
          <div className="text-gray-500 mt-2">
            Posted {new Date(post.created_at).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Right Sidebar: Navigation */}
      <div className="hidden lg:block w-1/5 h-full p-4 bg-[#0b1121]">
        <Explore />
      </div>
    </div>
  );
}
