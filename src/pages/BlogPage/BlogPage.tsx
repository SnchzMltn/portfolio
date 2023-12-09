import { useEffect, useState } from 'react';
import './BlogPage.css';
import { fetchPosts } from '../../services/PostsApiHelper';
import { Posts } from '../../services/Posts';

function BlogPage(): JSX.Element {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
	try {
		fetchPosts().then(postsArray => {
		  setPosts(postsArray);
		})
	} catch (error) {
		console.error('Error:', error);
	}
  }, []);

  return (
    <div className='mainContainer'>
      <h1 className='header'>Blog Posts</h1>
      <table className='tableContainer'>
        <tbody>
		{posts && Array.from(posts).map((item) => {
		return (
			<tr key={item.id}>
				<th key={item.title} className='main'> {item.title} </th>
				<td key={item.id} className='sidebar' >{item.id}</td>
			</tr>
		)
		})}
	</tbody>
      </table>
    </div>
  );
}

export default BlogPage;