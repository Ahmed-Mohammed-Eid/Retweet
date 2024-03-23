export default function sitemap() {
    const langs = ['en', 'ar'];
    const staticPages = ['/', '/about', '/contact', '/404', '/auth/login', '/auth/forgot-password', '/listings/select-category'];

    // SITEMAP MULTI-LANGUAGE PAGES FOR EACH LANGUAGE AND STATIC PAGES
    const staticSiteMap = langs.map((lang) => {
        return staticPages.map((page) => {
            return {
                url: `https://retweet.com/${lang}${page}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8
            }
        })
    })

    // FLATTEN THE ARRAY OF ARRAYS INTO A SINGLE ARRAY OF OBJECTS
    const flatSiteMap = [].concat.apply([], staticSiteMap);


    return [
        ...flatSiteMap
    ]
}