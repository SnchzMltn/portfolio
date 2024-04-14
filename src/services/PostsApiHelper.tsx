import { Posts } from "./Posts";

const BASE_URL = `http://localhost:9202`;
const POSTS_ENDPOINT = `/api/posts`;


async function fetchPosts(): Promise<Posts[]> {
	return await fetch(`${BASE_URL}${POSTS_ENDPOINT}`)
		.then(response => {
			if (response.ok) {
				return response.json();
			}
		})
		.catch(error => {
			console.debug(error);
			return Promise.resolve([]);
		});
      }

async function fetchPostsById(id: string): Promise<Posts> {
	return await fetch(`${BASE_URL}${POSTS_ENDPOINT}/${id}`)
		.then(response => {
			if (response.ok) {
				return response.json();
			}
		})
		.catch(error => {
			console.debug(error);
			return Promise.resolve([]);
		});
      }
      
export { fetchPosts, fetchPostsById };