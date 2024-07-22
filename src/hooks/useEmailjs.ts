import type { Email } from '@/interfaces/email'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { getI18N } from '@/languages/index'

export function useEmailjs() {
	const [sending, setSending] = useState(false)
	const [error, setError] = useState(false)

	const sendEmail = ({ user_name, user_email, message }: Email, currentLocale: string): boolean => {
		const i18n = getI18N({ currentLocale })

		if (user_name?.trim() === '' || user_email?.trim() === '' || message?.trim() === '')
			return false
		if (
			user_email === 'rikirilis15@gmail.com' ||
			user_email === 'rikirilis@gmail.com' ||
			user_email === 'thewhitzip@gmail.com' ||
			user_email === 'rikelvicapellan15@gmail.com' ||
			user_email === 'rrgnetflix@gmail.com'
		) {
			window.toast({
				dismissible: true,
				title: i18n.EMAIL_WRONG,
				location: 'bottom-center',
				type: 'error',
				icon: true,
			})
			return false
		}

		setSending(true)
		setError(false)

		try {
			emailjs.init({
				publicKey: import.meta.env.EMAILJS_KEY,
				blockHeadless: true,
				limitRate: {
					id: 'app',
					throttle: 120000,
				},
			})

			emailjs
				.send(import.meta.env.EMAILJS_SERVICE_ID, import.meta.env.EMAILJS_TEMPLATE_ID, {
					from_name: user_name,
					to_name: 'RikiRilis',
					from_email: user_email,
					subject: 'Email from contact form | RikiRilis',
					message: message,
				})
				.then(() => {
					setSending(false)
					window.toast({
						dismissible: true,
						title: i18n.FORM_SEND_SUCCESS,
						location: 'bottom-center',
						type: 'success',
						icon: true,
					})
					return true
				})
				.catch(() => {
					setSending(false)
					setError(true)
					window.toast({
						dismissible: true,
						title: i18n.FORM_SEND_ERROR,
						location: 'bottom-center',
						type: 'error',
						icon: true,
					})
					return false
				})
		} catch (e) {
			setSending(false)
			setError(true)
			window.toast({
				dismissible: true,
				title: i18n.FORM_SEND_ERROR,
				location: 'bottom-center',
				type: 'error',
				icon: true,
			})
			throw new Error('Error sending form.')
		}

		return false
	}

	return { sending, setSending, error, setError, sendEmail }
}
