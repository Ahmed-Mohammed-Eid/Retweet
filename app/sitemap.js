import axios from "axios";

export default async function sitemap() {
    const langs = ['en', 'ar'];
    const staticPages = ['/', '/about', '/contact', '/404', '/auth/login', '/auth/forgot-password', '/listings/select-category'];

    // SITEMAP MULTI-LANGUAGE PAGES FOR EACH LANGUAGE AND STATIC PAGES
    const staticSiteMap = langs.map((lang) => {
        return staticPages.map((page) => {
            return {
                url: `https://retweet.com/${lang}${page}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8
            }
        })
    })

    // FLATTEN THE ARRAY OF ARRAYS INTO A SINGLE ARRAY OF OBJECTS
    const flatSiteMap = [].concat.apply([], staticSiteMap);

    // GET THE IDS OF ALL LISTINGS
    const getListings = async function (){
        return await axios.get(`${process.env.BASE_URL}/last/month/listings`)
            .then((response) => {
                const listings = response.data?.listings || [];
                return listings.map((listing) => {
                    return listing._id;
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const listingSiteMap = await getListings();

    // SITEMAP FOR LISTINGS BASED ON IDS AND LANGUAGES
    const listingSiteMapUrls = langs.map((lang) => {
        return listingSiteMap.map((listing) => {
            return {
                url: `https://retweet.com/${lang}/listings/${listing}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8
            }
        })
    })

    // FLATTEN THE ARRAY OF ARRAYS INTO A SINGLE ARRAY OF OBJECTS
    const flatListingSiteMap = [].concat.apply([], listingSiteMapUrls);


    return [
        ...flatSiteMap,
        ...flatListingSiteMap
    ]
}