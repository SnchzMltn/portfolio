import { useParams } from "react-router-dom";
import type { Posts } from "../../services/Posts";
import { fetchPostsById } from "../../services/PostsApiHelper";
import { useEffect, useState, type JSX } from "react";
import { Typography } from "@mui/material";
import { STATIC_BLOG_POSTS } from "../../pages/BlogPage/staticBlogPosts";

function BlogPageDetail({ blogItems }: { blogItems: Array<Partial<Posts> & { id: string }> }): JSX.Element {
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState<Partial<Posts> & { id: string }>();

  useEffect(() => {
    try {
      if (id !== undefined) {
        fetchPostsById(id).then((post) => setCurrentPost(post));
      }
    } catch (error) {
      console.log(error);
    }
  });

  if (!currentPost) {
    const staticPost = STATIC_BLOG_POSTS.find((post) => post.id === id);
    console.debug('empty blog items, looking for statics: ', staticPost, id);
    if (staticPost) setCurrentPost(staticPost);
  };


  if (!currentPost && !blogItems) return <p>Loading...</p>;

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
