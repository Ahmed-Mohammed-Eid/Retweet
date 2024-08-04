import {getDictionary} from "./dictionaries/dictionaries";
import axios from "axios";
import {console} from "next/dist/compiled/@edge-runtime/primitives";

// DYNAMICALLY IMPORT COMPONENTS
import dynamic from 'next/dynamic';
const HomeSwiper = dynamic(() => import('@/app/components/LayoutAndHomeComponents/HomeSwiper/HomeSwiper'));
const HomeCategories = dynamic(() => import('@/app/components/LayoutAndHomeComponents/HomeCategories/HomeCategories'));
const LatestAds = dynamic(() => import('@/app/components/LayoutAndHomeComponents/LatestAds/LatestAds'));
const RealEstate = dynamic(() => import('@/app/components/LayoutAndHomeComponents/RealEstate/RealEstate'));
const CarsAndBikes = dynamic(() => import('@/app/components/LayoutAndHomeComponents/CarsAndBikes/CarsAndBikes'));
const SmartPhones = dynamic(() => import('@/app/components/LayoutAndHomeComponents/SmartPhones/SmartPhones'));
const SaveGoogleToken = dynamic(() => import('@/app/components/AuthenticationComponents/SaveGoogleToken/SaveGoogleToken'));

export async function generateMetadata({params}) {
    // LANGUAGE
    const lang = params?.lang || 'en';

    // GET SEO DATA
    const seo = await getSEOData(lang);

    // RETURN METADATA
    return {
        title: lang === 'en' ? seo.pageTitleEn : seo.pageTitleAr,
        description: lang === 'en' ? seo.descriptionEn : seo.descriptionAr,
        keywords: lang === 'en' ? seo.keywordsEn : seo.keywordsAr,
        type: "website",
        url: `https://retweet.com/${lang}`,
        canonical: `https://retweet.com/${lang}`,
        author: "Retweet",
        lang: lang,
        openGraph: {
            type: "website",
            locale: lang === 'en' ? "en_US" : "ar_AR",
            localeAlternate: lang === 'en' ? "ar_AR" : "en_US",
            url: `https://retweet.com/${lang}`,
            title: lang === 'en' ? seo.pageTitleEn : seo.pageTitleAr,
            description: lang === 'en' ? seo.descriptionEn : seo.descriptionAr,
            image: seo.image,
            siteName: "Retweet",
            imageWidth: 1200,
            imageHeight: 630,
        },
        twitter: {
            handle: "@retweet",
            site: "@retweet",
            cardType: "summary_large_image",
            title: lang === 'en' ? seo.pageTitleEn : seo.pageTitleAr,
            description: lang === 'en' ? seo.descriptionEn : seo.descriptionAr,
            images: [{
                url: seo.image,
                width: 1200,
                height: 630
            }]
        },
    }
}

async function getSEOData() {
    return await axios.get(`${process.env.BASE_URL}/get/website/seo`)
        .then(response => {
            return response.data?.seo
        })
        .catch(error => {
            console.log(error)
        })
}

export default async function Home({params: {lang}}) {

    const dictionary = await getDictionary(lang);

    if (!dictionary) return

    return (
        <>
            <SaveGoogleToken/>
            <HomeSwiper/>
            <HomeCategories dictionary={dictionary} lang={lang}/>
            <LatestAds dictionary={dictionary} lang={lang}/>
            <RealEstate dictionary={dictionary} lang={lang}/>
            <CarsAndBikes dictionary={dictionary} lang={lang}/>
            <SmartPhones dictionary={dictionary} lang={lang}/>
        </>
    );
}

