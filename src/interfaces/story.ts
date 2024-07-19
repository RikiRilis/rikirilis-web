export interface Story {
	author: string;
	category: string;
	content: {
		title: string;
		paragraphs: string[];
	}[];
	description: string;
	lang: string;
	pageTitle: string;
	tags: string[];
	timestamp: string;
	title: string;
}
