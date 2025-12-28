import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(() => {
    return [
        { loc: 'https://red-angels.ru', _sitemap: 'pages' },
        { loc: 'https://red-angels.ru/autopark', _sitemap: 'pages' },
        { loc: 'https://red-angels.ru/rules', _sitemap: 'pages' },
        { loc: 'https://red-angels.ru/contacts', _sitemap: 'pages' },
        { loc: 'https://red-angels.ru/certificates', _sitemap: 'pages' },
        { loc: 'https://red-angels.ru/partners', _sitemap: 'pages' },
    ] satisfies SitemapUrlInput[]
})