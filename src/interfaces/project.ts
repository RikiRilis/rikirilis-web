export interface Project {
	id: string;
	title: string;
	description: string;
	imgUrl: string;
	projectUrl: string;
	tags: {
		name: string;
		class: string;
		iconColor: string;
		icon: any;
	}[];
	gitCodeUrl: string;
	alt: string;
}
