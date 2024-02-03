import { Posts } from '../../services/Posts';
import './BlogPage.css';
import { Link } from 'react-router-dom';

function BlogPage(posts: { blogItems: Posts[] }): JSX.Element {

  return (
    <div className='mainContainer'>
      <h1 className='header'>Blog Posts</h1>
      <table className='tableContainer'>
        <tbody>
		{Array.from(posts.blogItems).map((item) => {
		return (
			<tr key={item.id}>
				<th key={item.title} className='main'> {item.title} </th>
				<td key={item.id} className='sidebar'> {item.id} </td>
				<td key={item.id} className='link'>
					<Link to={`/blog/${item.id}`}>
						View
					</Link>
				</td>
			</tr>
		)
		})}
		</tbody>
      </table>
    </div>
  );
}

export default BlogPage;