import type { Email } from '@/interfaces/email'
import { useState } from 'react'
import { getI18N } from '@/languages/index'

export function useEmail() {
	const [sending, setSending] = useState(false)
	const [error, setError] = useState(false)

	const sendEmail = async (
		{ user_name, user_email, message }: Email,
		currentLocale: string,
		callback: () => void
	) => {
		const i18n = getI18N({ currentLocale })

		setSending(true)
		setError(false)

		if (user_name?.trim() === '' || user_email?.trim() === '' || message?.trim() === '') {
			window.toast({
				dismissible: true,
				title: 'Fill the spaces!',
				location: 'bottom-center',
				type: 'warning',
				icon: true,
			})
			setSending(false)
			return
		}

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
			setSending(false)
			return
		}

		try {
			const response = await fetch('/api/email/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ user_name, user_email, message }),
			})

			if (response.ok) {
				setSending(false)
				setError(true)
				window.toast({
					dismissible: true,
					title: i18n.FORM_SEND_SUCCESS,
					location: 'bottom-center',
					type: 'success',
					icon: true,
				})
				setSending(false)
				setError(true)
				callback()
			}
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
			setSending(false)
			setError(true)
			console.log(e)
			throw new Error('Error sending form.')
		}
	}

	return { sending, setSending, error, setError, sendEmail }
}
