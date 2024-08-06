import { getI18N } from '@/languages/index'
import { type Experience } from '../interfaces/experience'

export const experiencesService = (currentLocale?: string): Experience[] => {
	const i18n = getI18N({ currentLocale })

	return [
		{
			title: i18n.EXPERIENCE_TITLE_3,
			date: 'Actually',
			description: i18n.EXPERIENCE_DESC_3,
		},
		{
			title: i18n.EXPERIENCE_TITLE_2,
			date: 'May 2023',
			description: i18n.EXPERIENCE_DESC_2,
		},
		{
			title: i18n.EXPERIENCE_TITLE_1,
			date: 'Feb 2019',
			description: i18n.EXPERIENCE_DESC_1,
		},
	]
}
