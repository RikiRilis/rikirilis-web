import type { Images } from '@/interfaces/images'
import { getI18N } from '@/languages/index'
import { getImagesWithSize } from '@/libs/getImageSizes'

export const getImages = (currentLocale: string = 'en'): Images[] => {
	const i18n = getI18N({ currentLocale })

	return getImagesWithSize('portraits')
}
