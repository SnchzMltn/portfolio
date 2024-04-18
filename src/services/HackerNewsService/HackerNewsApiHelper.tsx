import { HackerNewsPost } from "./HackerNewsPost";

const BASE_URL = `https://hacker-news.firebaseio.com/v0`;
const TOP_STORIES_ENDPOINT = `/topstories.json`;
const STORY_DETAILS_ENDPOINT = `/item`;

async function fetchTopStories(): Promise<number[]> {
	return await fetch(`${BASE_URL}${TOP_STORIES_ENDPOINT}`)
		.then(response => {
			if(response.ok) {
				return response.json();
			}
		}).catch(error => {
			console.debug(error);
		});
}

async function fetchStoryDetailsById(id:number): Promise<HackerNewsPost> {
	return await fetch(`${BASE_URL}${STORY_DETAILS_ENDPOINT}/${id}.json`)
		.then(response => {
			if(response.ok) {
				return response.json();
			}
		}).catch(error => {
			console.debug(error);
		});
}

export { fetchTopStories, fetchStoryDetailsById };
