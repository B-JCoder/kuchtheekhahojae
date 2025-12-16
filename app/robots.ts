import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://kuchtheekhahojae.com/sitemap.xml', // Replace with actual domain if known, or localhost for now
    }
}
