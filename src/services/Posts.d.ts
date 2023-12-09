interface Posts {
	id: number,
	createdTime: Date,
	title: string,
	status: {
		id: number,
		status: string
	},
	createdBy: string,
	readTime: number,
	htmlContent: string,
	textContent: string,
	markdownContent: string,
	updatedBy: string,
	updatedTime: Date,
}

export type { Posts };