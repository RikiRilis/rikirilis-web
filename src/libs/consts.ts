import Blog from '@/icons/Blog.astro'
import Chat from '@/icons/Chat.astro'
import Discord from '@/icons/Discord.astro'
import GitHub from '@/icons/GitHub.astro'
import Instagram from '@/icons/Instagram.astro'
import Timeline from '@/icons/Timeline.astro'
import WhatsApp from '@/icons/WhatsApp.astro'
import WWW from '@/icons/WWW.astro'
import type { FooterLink } from '@/interfaces/footerLink'
import type { Header } from '@/interfaces/header'
import { getI18N } from '@/languages/index'

export const footerLinks = (): FooterLink[] => {
	return [
		{
			href: 'https://github.com/RikiRilis',
			icon: GitHub,
		},
		{
			href: 'https://instagram.com/rikirilis',
			icon: Instagram,
		},
		{
			href: 'https://discord.gg/VDk8tprcH2',
			icon: Discord,
		},
		{
			href: 'https://whatsapp.com/channel/0029Va8erNPAojYouLjOuG0Y',
			icon: WhatsApp,
		},
	]
}

export const navItems = (currentLocale: string = 'en'): Header[] => {
	const i18n = getI18N({ currentLocale })

	return [
		{
			title: i18n.HOME,
			label: 'web',
			url: '/',
			icon: WWW,
		},
		{
			title: 'Blog',
			label: 'blog',
			url: '/blog',
			icon: Blog,
		},
		{
			title: i18n.PORTFOLIO,
			label: 'about',
			url: '/portfolio#about',
			icon: Timeline,
		},
		{
			title: i18n.CONTACT,
			label: 'contact',
			url: '#contact',
			icon: Chat,
		},
	]
}
