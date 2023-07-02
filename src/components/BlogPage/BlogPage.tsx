import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../../axios/PostsHelper';
import { Posts } from '../../axios/Posts.d';
import './BlogPage.css';

function BlogPage(): JSX.Element {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    async function getPosts() {
      try {
        fetchPosts().then(postsArray => {
          setPosts(postsArray);
        })
      } catch (error) {
        console.error('Error:', error);
      }
    }

    getPosts();
  }, []);

  return (
    <div className='mainContainer'>
      <h1 className='header'>Blog Posts</h1>
      <table className='tableContainer'>
        {posts && Array.from(posts).map(item => {
          return (
            <>
                <tr>
                  <th key={item.id} className='main'> {item.title} </th>
                  <td key={item.id} className='sidebar' >{item.id}</td>
                </tr>
            </>
            )
        })}
      </table>
    </div>
  );
}

export default BlogPage;
