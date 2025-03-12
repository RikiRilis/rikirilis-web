import Discord from '@/icons/Discord.astro'
import GitHub from '@/icons/GitHub.astro'
import Instagram from '@/icons/Instagram.astro'
import WhatsApp from '@/icons/WhatsApp.astro'
import type { FooterLink } from '@/interfaces/footerLink'

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
