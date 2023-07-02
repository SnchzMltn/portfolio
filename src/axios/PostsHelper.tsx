import axios from 'axios';
import { Posts } from './Posts.d';

const REQUEST_TIMEOUT = 5000;
const BASE_URL = `http://localhost:9202`;
const POSTS_ENDPOINT = `/api/posts`;

async function fetchPosts(): Promise<Posts[]> {
  try {
    const response = await axios.get<Posts[]>(`${BASE_URL}${POSTS_ENDPOINT}`, {
      timeout: REQUEST_TIMEOUT,
    });
    return response.data;
  } catch(error) {
    //TODO: handleRequestError(error);
    throw new Error('Failed to fetch Posts');
  };
}

export { fetchPosts };