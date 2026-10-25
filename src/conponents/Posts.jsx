"use client";
import { use } from "react";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  console.log(posts);
  return (
    <div>
      <h1>Post {posts.length}</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h1 className="border-2 m-5 p-5 text-center">{post.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Posts;
