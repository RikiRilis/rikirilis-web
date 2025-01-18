import { type Project } from '@/interfaces/project'
import AstroBrand from '@/icons/AstroBrand.astro'
import Angular from '@/icons/Angular.astro'
import Tailwind from '@/icons/Tailwind.astro'
import Kotlin from '@/icons/Kotlin.astro'
import Firebase from '@/icons/Firebase.astro'
import Android from '@/icons/Android.astro'
import { getI18N } from '@/languages/index'

const TAGS = {
	ASTRO: {
		name: 'Astro',
		class: 'bg-orange-950 text-slate-200',
		iconColor: 'text-orange-600',
		icon: AstroBrand,
	},
	ANGULAR: {
		name: 'Angular',
		class: 'bg-red-950 text-slate-200',
		iconColor: 'text-red-600',
		icon: Angular,
	},
	TAILWIND: {
		name: 'Tailwind CSS',
		class: 'bg-[#003159] text-slate-200',
		iconColor: 'text-[#73bcf6]',
		icon: Tailwind,
	},
	KOTLIN: {
		name: 'Kotlin',
		class: 'bg-indigo-950 text-slate-200',
		iconColor: 'text-indigo-600',
		icon: Kotlin,
	},
	FIREBASE: {
		name: 'Firebase',
		class: 'bg-yellow-950 text-slate-200',
		iconColor: 'text-yellow-600',
		icon: Firebase,
	},
	ANDROID: {
		name: 'Android',
		class: 'bg-green-950 text-slate-200',
		iconColor: 'text-green-600',
		icon: Android,
	},
}

export const projectsService = (currentLocale?: string): Project[] => {
	const i18n = getI18N({ currentLocale })
	return [
		{
			id: 'easy-short',
			title: 'Easy Short',
			description: i18n.EASY_SHORT_DESCRIPTION,
			imgUrl: 'https://rikirilis.xyz/assets/easy-short.webp',
			projectUrl: 'https://rikirilis.xyz/projects/easy-short',
			tags: [TAGS.ASTRO, TAGS.TAILWIND],
			gitCodeUrl: 'https://github.com/RikiRilis/easy-short',
			alt: 'Easy Short Url shortener Website',
		},
		{
			id: 'fire-reservations',
			title: 'Fire Reservations',
			description: i18n.FIRE_RESERVATIONS_DESCRIPTION,
			imgUrl:
				'https://ynbjmptmmmbaspzfxzdu.supabase.co/storage/v1/object/sign/portfolio/src/Fire_Reservations.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vc3JjL0ZpcmVfUmVzZXJ2YXRpb25zLndlYnAiLCJpYXQiOjE3MjMzNzc0NTYsImV4cCI6MTc0OTEzNzc0NTZ9.thU9DiGzTXkT-zU2Y6fXj2Ye_UE2qFtgKvjdi-Ccblc&t=2024-08-11T11%3A56%3A53.272Z',
			projectUrl: 'https://firereservations.vercel.app/',
			tags: [TAGS.ASTRO, TAGS.TAILWIND],
			gitCodeUrl: 'https://github.com/RikiRilis/firereservations-official',
			alt: 'Fire Reservations website image',
		},
		{
			id: 'stop-trivia',
			title: 'Stop Trivia',
			description: i18n.STOPT_TRIVIA_DESCRIPTION,
			imgUrl:
				'https://ynbjmptmmmbaspzfxzdu.supabase.co/storage/v1/object/sign/portfolio/src/Stop_Trivia.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vc3JjL1N0b3BfVHJpdmlhLndlYnAiLCJpYXQiOjE3MjAxOTY4NjQsImV4cCI6NDg3Mzc5Njg2NH0.Ns0_bYwlbTpcLfgtfAsBMo-w8hwPMWZol4kPSWoFYbI&t=2024-07-05T16%3A27%3A44.948Z',
			projectUrl:
				'https://play.google.com/store/apps/details?id=com.rilisentertainment.stoptriviaonline',
			tags: [TAGS.KOTLIN, TAGS.FIREBASE, TAGS.ANDROID],
			gitCodeUrl: 'https://github.com/RikiRilis/stop-trivia',
			alt: 'Stop Trivia Android Game',
		},
		{
			id: 'anjocc-oficial',
			title: 'ANJOCC Oficial',
			description: i18n.ANJOCC_OFICIAL_DESCRIPTION,
			imgUrl: 'https://rikirilis.xyz/assets/anjocc-oficial.webp',
			projectUrl: 'https://anjocc.com',
			tags: [TAGS.ASTRO, TAGS.TAILWIND],
			gitCodeUrl: 'https://github.com/RikiRilis/anjocc-oficial',
			alt: 'ANJOCC Oficial Web Page',
		},
	]
}
