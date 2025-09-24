import type { Images } from '@/interfaces/images'
import { getI18N } from '@/languages/index'
import { getImagesWithSize } from '@/libs/getImageSizes'

export const getImages = (): Images[] => {
	return getImagesWithSize('portraits')
}
