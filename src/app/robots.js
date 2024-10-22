export default function robots() {
    // LANGUAGE
    const localeuages = ['en', 'ar'];

    // DISALLOWED PAGES
    const disallowedPages = [
        localeuages.map(locale => `/${locale}/listings/select-category`),
        localeuages.map(locale => `/${locale}/listings/select-subcategory`),
        localeuages.map(locale => `/${locale}/listings/select-item`),
        localeuages.map(locale => `/${locale}/listings/select-images`),
        localeuages.map(locale => `/${locale}/profile/account`),
        localeuages.map(locale => `/${locale}/profile/notifications`),
        localeuages.map(locale => `/${locale}/profile/settings`),
        localeuages.map(locale => `/${locale}/profile/favourites`),
        localeuages.map(locale => `/${locale}/profile/ads`),
        localeuages.map(locale => `/${locale}/profile/messages`),
        localeuages.map(locale => `/${locale}/dictionaries`),
        localeuages.map(locale => `/${locale}/auth/reset-password`),
        localeuages.map(locale => `/${locale}/auth/verify`)
    ];

    // FLATTEN THE ARRAY
    const disallowedPagesArray = disallowedPages.flat();

    // ALLOWED PAGES
    const allowedPages = [
        localeuages.map(locale => `/${locale}/`),
        localeuages.map(locale => `/${locale}/about`),
        localeuages.map(locale => `/${locale}/contact`),
        localeuages.map(locale => `/${locale}/listings/ads/all`),
        localeuages.map(locale => `/${locale}/listings/[id]`),
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