"use server";
import { getGist } from "@/app/gist/queries";
import Navigation from "@/components/Navigation";
import Explore from "@/components/Explore";
import AddCommentClient from "@/components/AddComment"; // Client component for adding comments
import Link from "next/link";
import CommentForm from "@/app/addComment/create-form";

type Params = {
  id: string;
};

export default async function PostPage({ params }: { params: Params }) {
  const { id } = params;

  // Fetch the post by ID using the getGist function
  const { data: posts, error } = await getGist();
  console.log("location: app/post/id/page.tsx", error);
  if (error || !posts) {
    return <div className="text-center text-white">Post not found!</div>;
  }

  // Find the post with the matching ID
  const post = posts.find((p) => p.gists.id === id);
  /*if (!post) {
    return <div className="text-center text-white">Post not found!</div>;
  }*/
  console.log("location : app/post/[id]/page.tsx", error);

  return (
    <div className="w-full h-full flex justify-between items-start bg-background text-foreground">
      {/* Left Sidebar */}
      <div className="hidden lg:block w-1/5 h-full p-4 bg-[#0b1121]">
        <Navigation />
      </div>

      {/* Center: Post Content */}
      <div className="flex-1 min-h-screen bg-[#020617] text-white p-6 max-w-[70%] mx-auto">
        {/* Back Navigation */}
        <Link href={"/protected"}>
          <div className="items-center space-x-1 mb-4 cursor-pointer group flex flex-row">
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
            <div className="text-md  group-hover:text-white font-bold">
              Back
            </div>
          </div>
        </Link>

        {/* Post Container */}
        <div className="border-t-[0.1px] py-4 px-6 bg-[#0b1121] rounded-lg shadow-lg">
          <div className="flex space-x-4">
            <div className="h-10 w-10 rounded-full bg-gray-600"></div>
            <div className="flex flex-row items-center">
              <div className="font-bold">{post?.profiles.fullName}</div>
              <div className="text-gray-500">@{post?.profiles.username}</div>
            </div>
          </div>
          <div className="mt-4 whitespace-pre-wrap break-words">
            {post?.gists.text}
          </div>
          <div className="text-gray-500 mt-2">
            {/* Posted {new Date(post?.profiles.createdAt).toLocaleString()} */}
          </div>
          {/* comments */}
          <div className="flex flex-row items-center space-x-2 bg-[#0b1121] rounded-lg shadow-md p-4">
            {/* Profile Picture Placeholder */}
            <div className="h-10 w-10 rounded-full bg-gray-600"></div>

            {/* Input Box */}
            <CommentForm />
          </div>

          {/* comment section */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-4">Comments</h2>
            <div className="border-b-[0.1px] border-gray-600 py-2">
              <div className="text-sm">
                <span className="font-bold"> full name</span>
                <span className="text-gray-500 ml-2"> @username</span>
              </div>
              <div className="text-gray-300 mt-1">user comment</div>
            </div>
            {/* add reaction here */}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block w-1/5 h-full p-4 bg-[#0b1121]">
        <Explore />
      </div>
    </div>
  );
}

{
  ``;
  /* Comments Section */
}
{
  /*
        <div className="mt-6">
        <h2 className="text-lg font-bold mb-4">Comments</h2>
         {comments?.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="border-b-[0.1px] border-gray-600 py-2"
            >
              <div className="text-sm">
                <span className="font-bold">{comment.full_name}</span>
                <span className="text-gray-500 ml-2">@{comment.username}</span>
              </div>
              <div className="text-gray-300 mt-1">{comment.text}</div>
            </div>
          ))
        ) : ( 
          <div className="text-gray-500">No comments yet.</div>
        )}
      </div> 
    </div>*/
}
