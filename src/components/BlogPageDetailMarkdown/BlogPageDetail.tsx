import { useParams } from "react-router-dom";
import { Posts } from "../../services/Posts";
import findPostById from "../../services/Util";
import { Typography } from '@material-ui/core';
import { fetchPostsById } from '../../services/PostsApiHelper';
import { useEffect, useState } from 'react';

function BlogPageDetail(props: { blogItems: Posts[] }): JSX.Element {
	const { id } = useParams();
	const [currentPost, setCurrentPost] = useState<Posts>([]);

	useEffect(() => {
		try {
			fetchPostsById(id).then(post => setCurrentPost(post));
		} catch (errror) {
			console.log(error);
		}
	}, []);

	return (
	<>
		<br />
		<br />
		<br />
		<h1>{currentPost.title}</h1>
		<Typography variant="body2">
			readtime: {currentPost.readTime}min
		</Typography>
		<div>
			{currentPost.textContent}
		</div>
	</>
	);
}

export default BlogPageDetail;