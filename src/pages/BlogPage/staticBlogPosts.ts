import type { Posts } from "../../services/Posts";

export const STATIC_BLOG_POSTS: Array<Partial<Posts> & { id: string }> = [
	{
		id: "1",
		title: "How did I get into programming?",
		textContent: `I've always been interested in technology, I started programming in Logo (https://en.wikipedia.org/wiki/Logo_(programming_language)). Growing up, the most brilliant and succesful people I've knew were all into the computer science field, so naturally I decided to pursue a degree in computer science and have been building software since then.`,
		readTime: 1,
		createdBy: "snchzmltn",
		createdTime: new Date(2026, 1, 1),
	},
	{
		id: "2",
		title: "How did I build this site?",
		textContent: "This site was built using React and TypeScript, not focusing a lot on the styling or layout but more on the infrastructure and functionality. This site is hosted in the cloud (trying to avoid platform specifics i.e Vercel, Netlify) I myself configured all the hosting in Google Cloud Platform. The site features and application load balancer (ALB), SSL certificates, and a Content Delivery Network (CDN). The idea is for this to be the hub of my online presence, where I can just write and share my thoughts, projects, ideas, and more.",
		readTime: 1,
		createdBy: "snchzmltn",
		createdTime: new Date(2026, 5, 2),
	},
];