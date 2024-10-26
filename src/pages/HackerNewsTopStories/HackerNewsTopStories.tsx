import { Button, Divider, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Paper, Typography } from '@material-ui/core';
import { useEffect, useState } from "react";
import { fetchStoryDetailsById, fetchTopStories } from '../../services/HackerNewsService/HackerNewsApiHelper';
import { HackerNewsPost } from '../../services/HackerNewsService/HackerNewsPost';
import './HackerNewsTopStories.css';

function HackerNewsTopStories(): JSX.Element {
	const [postsOutput, setOutput] = useState<HackerNewsPost[]>([]);

	useEffect(() => {
		fetchTopStories().then(values => {
			return Array.from(values).sort().slice(0, 20);
		}).then(values => {
			for (let i = 0; i < 20; i++) {
				if (values[i] != null) {
					fetchStoryDetailsById(values[i]).then(storyDetailsObject => {
						setOutput(prev => {
								prev.push(storyDetailsObject);
								return prev;
							});
					});
				}
			}
		});
	}, []);

	return (
		<div className='mainContainer'>
			<Stack justifyContent='center' direction={'column'} spacing={6} >
				<Typography variant='h2' className='header'>
					Top Hacker News Posts
				</Typography>
				<Typography variant='h6'>
					<Paper style={{ paddingLeft: '1%', paddingRight: '1%' }} elevation={2}>
						Collection of top 20 posts in Y Combinator news section ordered by score (desc)
					</Paper>
				</Typography>
				<Stack direction={'row'} spacing={10}>
					{postsOutput && postsOutput.length > 0? 
						<table className='tableContainer'>
							<tbody>
								<TableRow postsSet={postsOutput} />
							</tbody>
						</table>
					:
					<>
						<Typography variant='body2'>
							Loading...
						</Typography>
					</>}
				</Stack>
			</Stack>
		</div>
	);
}

function TableRow(props: { postsSet: HackerNewsPost[] }): JSX.Element {
	return (
		<>
			{Array.from(props.postsSet).sort((item1, item2) => item2.score - item1.score).map((post, setId) => {
				return (
					<tr key={setId}>
						<td className='row'>
							<Typography variant='body1'>
								<i>Score:</i> {post.score}
							</Typography>
						</td>
						<Divider variant='inset' />
						<td className='row'>
							<Typography variant='body1'>
								{post.title}
							</Typography>
						</td>
						<Divider variant='inset' />
						<td className='link'>
							<Button variant='outlined'>
								<Link to={post.url}>
									<strong>
										Go to post
									</strong>
								</Link>
							</Button>
						</td>
					</tr>
				);
			})}
		</>
	)
}

export default HackerNewsTopStories;
