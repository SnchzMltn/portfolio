interface HackerNewsPost {
	by: string,
	descendants: number,
	id: number,
	kids: Array,
	score: number,
	text: string,
	time: Date,
	title: string,
	type: string,
	url: string,
}

export type { HackerNewsPost };