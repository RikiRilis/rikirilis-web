export interface Article {
	author: string
	category: string
	content: Content[]
	cover: string
	description: string
	lang: string
	pageTitle: string
	tags: string[]
	timestamp: string
	title: string
}

interface Content {
	title?: string
	paragraphs: string[]
}
