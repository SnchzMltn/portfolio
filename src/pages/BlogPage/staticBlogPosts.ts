import type { Posts } from "../../services/Posts";

export const STATIC_BLOG_POSTS: Array<Partial<Posts> & { id: string }> = [
  {
    id: "1",
    title: "How I got into programming",
    textContent: `I’ve always been drawn to how technology can turn ideas into something tangible. My first real exposure to programming came through Logo, where I learned that small instructions could create movement, patterns, and even simple games. That early experience made coding feel less like a mystery and more like a creative tool.

As I grew older, I became more interested in the people around me who were building interesting things with computers. That curiosity eventually led me to study computer science, and over time, programming became both a profession and a way of thinking. What started as curiosity turned into a long-term interest in solving problems, building useful things, and continuously learning.

Today, I still find that same spark in software development: the chance to turn an idea into something real, practical, and meaningful.`,
    readTime: 2,
    createdBy: "snchzmltn",
    createdTime: new Date(2026, 1, 1),
  },
  {
    id: "2",
    title: "How I built this site",
    textContent: `This site was built with React and TypeScript, with a focus on creating a simple, reliable experience rather than overcomplicating the design. The goal was to make it feel personal and approachable while still being robust enough to support future updates and new content.

I also wanted the project to reflect how I think about software more broadly: not just building features, but thinking about deployment, reliability, and maintainability. The site is hosted in the Google Cloud Platform, with infrastructure set up to support things like load balancing, SSL, and content delivery. That part of the project was as much about learning and experimentation as it was about the final result.

At its core, this site is meant to be a hub for my online presence, a place to share ideas, projects, notes, and the occasional reflection on what I’m learning.`,
    readTime: 2,
    createdBy: "snchzmltn",
    createdTime: new Date(2026, 5, 2),
  },
  {
    id: "3",
		  readTime: 2,
		  createdBy: "snchzmltn",
		  createdTime: new Date(2026, 9, 12),
		  title: "Agentic propgramming for software engineers",
		  textContent: `Just like any other technology released after 2010, the big industries behind the AI models have been releasing incredible stuff. However, work for software engineers hasnt changed a lot quite yet. That's about to change.

		  When I see the trends with the harness engineering (using agents in the development workflow, even as contributors) I can identify certain patterns too. Some of these results are quite impressive when joining together strategies that make agents be their own judges. These is not very different form software like Datadog that watches over a stream of data and sends notifications when certain thresholds are breached.

		  Another example is code reviewing, right now we have native capabilities to Github (GH Copilot), as well as third-party's with experience in the field like LinearB or Sonarqube. Hence, again there are a lot of new interfaces to achieve the same specialized objectives sometimes at a minor cost.

		  It is our job as Software Engineers to morally use these tools since governance is a work in progress for a lot of enterprises. Which by the way, should look out for cappabilities of agentic software on their products and services. Otherwise they might get a wild surprise when they get easily replaced.

		  MCP is the new API, if your organization is mature enough to understand governance over agentic AI, they might implement a gateway for AI agents and MCP servers by implementing liteLLM or using cloud services like Google's Agent Gateway.

		  We'll see what the future holds for us.
		  `
  }
];
