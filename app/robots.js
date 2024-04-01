export default function robots() {
    // LANGUAGE
    const languages = ['en', 'ar'];

    // DISALLOWED PAGES
    const disallowedPages = [
        languages.map(lang => `/${lang}/listings/select-category`),
        languages.map(lang => `/${lang}/listings/select-subcategory`),
        languages.map(lang => `/${lang}/listings/select-item`),
        languages.map(lang => `/${lang}/listings/select-images`),
        languages.map(lang => `/${lang}/profile/account`),
        languages.map(lang => `/${lang}/profile/notifications`),
        languages.map(lang => `/${lang}/profile/settings`),
        languages.map(lang => `/${lang}/profile/favourites`),
        languages.map(lang => `/${lang}/profile/ads`),
        languages.map(lang => `/${lang}/profile/messages`),
        languages.map(lang => `/${lang}/dictionaries`),
        languages.map(lang => `/${lang}/auth/reset-password`),
        languages.map(lang => `/${lang}/auth/verify`)
    ];

    // FLATTEN THE ARRAY
    const disallowedPagesArray = disallowedPages.flat();

    // ALLOWED PAGES
    const allowedPages = [
        languages.map(lang => `/${lang}/`),
        languages.map(lang => `/${lang}/about`),
        languages.map(lang => `/${lang}/contact`),
        languages.map(lang => `/${lang}/listings`),
        languages.map(lang => `/${lang}/listings/[id]`),
    ];

    // FLATTEN THE ARRAY
    const allowedPagesArray = allowedPages.flat();

    // return the robots.txt file
    return {
        rules: [
            {
                userAgent: '*',
                disallow: disallowedPagesArray,
            },
            {
                userAgent: '*',
                allow: allowedPagesArray,
            },
        ],
        sitemap: 'https://retweet.com/sitemap.xml',
    }
}