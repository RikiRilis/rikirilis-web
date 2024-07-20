export interface Story {
	author: string
	category: string
	content: Content[]
	description: string
	lang: string
	pageTitle: string
	tags: string[]
	timestamp: string
	title: string
}

interface Content {
	title: string
	paragraphs: string[]
}
