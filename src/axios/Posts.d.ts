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
	updatedBy: string,
	updatedTime: Date,
}

// {
//   "id": 1,
//   "createdTime": "2023-06-21T20:03:19.043693-05:00",
//   "status": {
//     "id": 1,
//     "status": "DRAFT"
//   },
//   "createdBy": "msanchez",
//   "readTime": 5,
//   "title": "How to build a personal blog REST API",
//   "htmlContent": "<title>How to build a personal blog REST API</title><body>Hi!!!</body>",
//   "textContent": "Hi!!!",
//   "updatedBy": "msanchez",
//   "updatedTime": "2023-06-21T20:03:19.043693-05:00"
// }

export type { Posts };