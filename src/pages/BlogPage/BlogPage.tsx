import { Button, Divider } from '@mui/material';
import { Posts } from '../../services/Posts';
import './BlogPage.css';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

function BlogPage(posts: { blogItems: Posts[] }): JSX.Element {

  return (
    <div className='mainContainer'>
      <Typography variant='h2' className='header'>Blog Posts</Typography>
      <table className='tableContainer'>
        <tbody>
		{Array.from(posts.blogItems).map((item) => {
		return (
			<tr key={item.id}>
				<td key={item.id} className='sidebar'>
					<Typography variant='body2'>
						{item.id}
					</Typography>
				</td>
				<Divider variant='inset' />
				<th key={item.title} className='main'>
					<Typography variant='h5'>
						{item.title}
					</Typography>
				</th>
				<Divider variant='inset' />
				<td key={item.id} className='link'>
					<Button variant='contained'>
						<Link to={`/blog/${item.id}`}>
							View
						</Link>
					</Button>
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