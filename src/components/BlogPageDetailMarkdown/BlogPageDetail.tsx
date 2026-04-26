import { useParams } from "react-router-dom";
import type { Posts } from "../../services/Posts";
import { fetchPostsById } from "../../services/PostsApiHelper";
import { useEffect, useState, type JSX } from "react";
import { Typography } from "@mui/material";

function BlogPageDetail({ blogItems }: { blogItems: Posts[] }): JSX.Element {
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState<Posts>();

  useEffect(() => {
    try {
      if (id !== undefined) {
        fetchPostsById(id).then((post) => setCurrentPost(post));
      }
    } catch (error) {
      console.log(error);
    }
  });

  if (!blogItems) return <p>No blog items available...</p>;

  const blogPost = (
    <div>
      <h1>{currentPost?.title}</h1>
      <Typography variant="body2">
        readtime: {currentPost?.readTime}min
      </Typography>
      <div>{currentPost?.textContent}</div>
    </div>
  );

  return (
    <>
      <br />
      <br />
      <br />
      {currentPost ? blogPost : <p>Loading...</p>}
    </>
  );
}

export default BlogPageDetail;
