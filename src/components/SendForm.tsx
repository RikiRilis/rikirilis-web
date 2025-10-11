import { getI18N } from '@/languages/index'
import { useEmail } from '@/hooks/useEmail'
import { useEffect, useRef, useState } from 'react'
import { Loading } from '@/icons/Loading'

export const SendForm = () => {
	const { sending, sendEmail } = useEmail()
	const formRef = useRef<HTMLFormElement | null>(null)
	const [locale, setlocale] = useState('en')
	const i18n = getI18N({ currentLocale: locale })

	useEffect(() => {
		setlocale(window.navigator.language.split('-')[0])
	}, [])

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (sending) return

		const { elements } = event.currentTarget
		const userNameInput = elements.namedItem('user_name') as HTMLInputElement
		const userEmailInput = elements.namedItem('user_email') as HTMLInputElement
		const messageInput = elements.namedItem('message') as HTMLInputElement

		sendEmail(
			{
				user_name: userNameInput.value,
				user_email: userEmailInput.value,
				message: messageInput.value,
			},
			locale,
			() => {
				if (formRef.current) {
					formRef.current.reset()
				}
			}
		)
	}

	return (
		<form ref={formRef} onSubmit={handleSubmit} className='flex-1 pt-6 sm:w-full sm:pt-0'>
			<span className='text-sm font-light italic text-secondary'>{i18n.CONTACT_TXT_6}</span>

			<div className='mt-2 flex flex-col gap-2'>
				<label className='mb-1 inline-flex flex-col text-slate-400'>
					{i18n.NAME}*
					<input
						required
						autoComplete='name'
						className='h-10 rounded-lg bg-accent/10 p-2 text-primary outline-none transition-all placeholder:text-slate-500 focus:outline-1 focus:outline-main'
						type='text'
						name='user_name'
						placeholder='Jane Doe'
					/>
				</label>

				<label className='mb-1 inline-flex flex-col text-slate-400'>
					{i18n.EMAIL}*
					<input
						required
						autoComplete='email'
						className='h-10 rounded-lg bg-accent/10 p-2 text-primary outline-none transition-all placeholder:text-slate-500 focus:outline-1 focus:outline-main'
						type='email'
						name='user_email'
						placeholder='your@email.com'
					/>
				</label>

				<label className='mb-1 inline-flex flex-col text-slate-400'>
					{i18n.MESSAGE}*
					<textarea
						required
						className='h-28 rounded-lg bg-accent/10 p-2 text-primary outline-none transition-all placeholder:text-slate-500 focus:outline-1 focus:outline-main'
						name='message'
						placeholder={i18n.MESSAGE_PLACEHOLDER}
					></textarea>
				</label>
			</div>

			<button
				type='submit'
				{...(!sending ? {} : { disabled: true })}
				className={`mt-4 flex w-full flex-row items-center justify-center gap-2 ${!sending ? 'cursor-pointer bg-accent text-primary' : 'cursor-not-allowed bg-main text-secondary'} ${sending ? '' : 'active:border-accent active:bg-transparent active:text-main sm:hover:border-main sm:hover:bg-transparent sm:hover:text-accent'} rounded-xl border border-transparent px-3 py-2 text-lg font-bold transition`}
			>
				{!sending ? (
					<svg
						className='size-5'
						width='800px'
						height='800px'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
						<path d='M10 14l11 -11'></path>
						<path d='M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5'></path>
					</svg>
				) : (
					<Loading classes='size-5' />
				)}
				{i18n.SEND}
			</button>
		</form>
	)
}
