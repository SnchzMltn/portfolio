import { Button, Divider, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Paper, Typography } from '@material-ui/core';
import { useEffect, useState } from "react";
import { fetchDetailsById, fetchTopStories } from '../../services/HackerNewsService/HackerNewsApiHelper';
import { HackerNewsPost } from '../../services/HackerNewsService/HackerNewsPost';
import './HackerNewsTopStories.css';

function HackerNewsTopStories(): JSX.Element {
	const [postsOutput, setOutput] = useState<Set<HackerNewsPost>>(() => new Set());

	useEffect(() => {
		let storySet: Set<HackerNewsPost> = new Set();
		fetchTopStories().then(values => {
			return values;
		}).then(values => {
			for (let i = 0; i < 20; i++) {
				if (values[i] != null) {
					fetchDetailsById(values[i]).then(storyDetailsObject => {
						setOutput(prev => new Set(prev).add(storyDetailsObject));
						return storySet.add(storyDetailsObject);
					});
				}
			}
		});
	}, []);

	return (
		<div className='mainContainer'>
			<Stack justifyContent='center' direction={'column'} spacing={6} >
				<Typography variant='h2' className='header'>Top Hacker News Posts</Typography>
				<Typography variant='h6'>
					<Paper elevation={2}>
						Collection of top 20 posts in Y Combinator news section ordered by score (desc)
					</Paper>
				</Typography>
				<Stack direction={'row'} spacing={10}>
					{postsOutput.size > 0? 
						<table className='tableContainer'>
							<tbody>
								<TableRow postsSet={postsOutput} />
							</tbody>
						</table>
					:
					<>
						<Typography variant='body2'>
							Nothing to see here!
						</Typography>
					</>}
				</Stack>
			</Stack>
		</div>
	);
}

function TableRow(props: { postsSet: Set<HackerNewsPost>; }): JSX.Element {
	return (
		<>
			{Array.from(props.postsSet).sort((item1, item2) => item2.score - item1.score).map(post => {
				return (
					<>
						<tr key={post.id}>
							<td key={post.id} className='row'>
								<Typography variant='body1'>
									<i>Score:</i> {post.score}
								</Typography>
							</td>
							<Divider variant='inset' />
							<td key={post.id} className='row'>
								<Typography variant='body1'>
									<i>Title:</i> {post.title}
								</Typography>
							</td>
							<Divider variant='inset' />
							<td key={post.id} className='link'>
								<Button variant='outlined'>
									<Link to={post.url}>
										Go to post
									</Link>
								</Button>
							</td>
						</tr>
					</>
				);
			})}
		</>
	)
}

export default HackerNewsTopStories;