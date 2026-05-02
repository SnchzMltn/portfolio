import { useParams } from "react-router-dom";
import type { Posts } from "../../services/Posts";
import { fetchPostsById } from "../../services/PostsApiHelper";
import { useEffect, useState, type JSX } from "react";
import { Paper, Typography } from "@mui/material";
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
  }, [id]);

  // Fallback to static posts if API call fails or returns empty
  if (!currentPost || Object.keys(currentPost).length === 0) {
    const staticPost = STATIC_BLOG_POSTS.find((post) => post.id === id);
    if (staticPost) setCurrentPost(staticPost);
  };

  if (!currentPost && !blogItems) return <p>Loading...</p>;

  const blogPost = (
    <div>
      <h1>{currentPost?.title}</h1>
      <Paper elevation={3} style={{ padding: "10px", margin: "auto", marginBottom: "20px", maxWidth: "fit-content" }}>
        <Typography variant="body2">
        <strong>Read time:</strong> {currentPost?.readTime}min
      </Typography>
      </Paper>
      <div>
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="body1">{currentPost?.textContent}</Typography>
        </Paper>
      </div>
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
