import { resolveLocalizedPath } from "@/locales/index"
import type { CollectionEntry } from "astro:content"

const SITE_URL = "https://rixel.dev"

const MONTH_MAP: Record<string, string> = {
	Jan: "01",
	Feb: "02",
	Mar: "03",
	Apr: "04",
	May: "05",
	Jun: "06",
	Jul: "07",
	Aug: "08",
	Sep: "09",
	Oct: "10",
	Nov: "11",
	Dec: "12",
}

export const parseArticleTimestamp = (timestamp: string): number => {
	const match = timestamp.match(/(\d+)\/(\w+)\/(\d+)/)
	if (!match) return 0

	const [, day, month, year] = match
	const monthNum = MONTH_MAP[month.slice(0, 3)] ?? "01"
	return Date.parse(`${year}-${monthNum}-${day.padStart(2, "0")}`)
}

export const formatArticleIsoDate = (timestamp: string): string => {
	const match = timestamp.match(/(\d+)\/(\w+)\/(\d+)/)
	if (!match) return new Date().toISOString().split("T")[0]

	const [, day, month, year] = match
	const monthNum = MONTH_MAP[month.slice(0, 3)] ?? "01"
	return `${year}-${monthNum}-${day.padStart(2, "0")}`
}

export const sortArticlesByDate = (articles: CollectionEntry<"articles">[]) => {
	return [...articles].sort(
		(a, b) => parseArticleTimestamp(b.data.timestamp) - parseArticleTimestamp(a.data.timestamp)
	)
}

export const buildArticlesIndexJsonLd = ({
	articles,
	locale,
	title,
	description,
	canonical,
}: {
	articles: CollectionEntry<"articles">[]
	locale: string
	title: string
	description: string
	canonical: string
}) => {
	const inLanguage = locale === "es" ? "es-ES" : "en-US"

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": `${SITE_URL}/#organization`,
				name: "RixelDev",
				url: SITE_URL,
				sameAs: [
					"https://github.com/rixeldev",
					"https://www.linkedin.com/in/rixeldev",
					"https://x.com/rixel_dev",
				],
			},
			{
				"@type": "WebSite",
				"@id": `${SITE_URL}/#website`,
				url: SITE_URL,
				name: "Rixel",
				publisher: { "@id": `${SITE_URL}/#organization` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${canonical}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: locale === "es" ? "Inicio" : "Home",
						item: SITE_URL,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: locale === "es" ? "Artículos" : "Articles",
						item: canonical,
					},
				],
			},
			{
				"@type": "CollectionPage",
				"@id": `${canonical}#webpage`,
				url: canonical,
				name: title,
				description,
				isPartOf: { "@id": `${SITE_URL}/#website` },
				inLanguage,
				breadcrumb: { "@id": `${canonical}#breadcrumb` },
				mainEntity: {
					"@type": "ItemList",
					numberOfItems: articles.length,
					itemListElement: articles.map((article, index) => ({
						"@type": "ListItem",
						position: index + 1,
						url: `${SITE_URL}${resolveLocalizedPath(`/articles/${article.data.pageTitle}/`, locale)}`,
						name: article.data.title,
					})),
				},
			},
			...articles.map((article) => {
				const articleUrl = `${SITE_URL}${resolveLocalizedPath(`/articles/${article.data.pageTitle}/`, locale)}`

				return {
					"@type": "BlogPosting",
					"@id": `${articleUrl}#article`,
					headline: article.data.title,
					description: article.data.description,
					image: article.data.cover,
					author: {
						"@type": "Person",
						name: article.data.author,
					},
					datePublished: formatArticleIsoDate(article.data.timestamp),
					inLanguage: article.data.lang,
					keywords: article.data.tags.join(", "),
					url: articleUrl,
					mainEntityOfPage: articleUrl,
					publisher: { "@id": `${SITE_URL}/#organization` },
				}
			}),
		],
	}
}
