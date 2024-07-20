/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Project {
	id: string
	title: string
	description: string
	imgUrl: string
	projectUrl: string
	tags: Tags[]
	gitCodeUrl: string
	alt: string
}

interface Tags {
	name: string
	class: string
	iconColor: string
	icon: any
}
