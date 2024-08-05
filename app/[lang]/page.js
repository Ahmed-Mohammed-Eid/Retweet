import {getDictionary} from "./dictionaries/dictionaries";
import axios from "axios";

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

    // KEYWORDS
    const keywords = ['retweet', 'social media', 'platform', 'buy', 'sell', 'rent', 'share', 'thoughts', 'world', 'global', 'community', 'connect', 'friends', 'family', 'business', 'network', 'networking', 'marketing', 'advertising', 'ad', 'ads', 'advertisement', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'cars', 'houses', 'apartments', 'rentals', 'rent', 'buy', 'sell', 'trade', 'exchange', 'swap', 'barter', 'goods', 'services', 'products', 'items', 'merchandise', 'clothes', 'fashion', 'accessories', 'electronics', 'appliances', 'furniture', 'home', 'garden', 'tools', 'equipment', 'materials', 'supplies', 'machinery', 'vehicles', 'automobiles', 'cars', 'trucks', 'vans', 'motorcycles', 'bicycles', 'boats', 'yachts', 'jetskis', 'airplanes', 'helicopters', 'real estate', 'property', 'land', 'commercial', 'residential', 'industrial', 'agricultural', 'recreational', 'investment', 'development', 'construction', 'renovation', 'remodeling', 'repair', 'maintenance', 'cleaning', 'landscaping', 'gardening', 'decorating', 'painting', 'flooring', 'roofing', 'plumbing', 'electrical', 'heating', 'cooling', 'ventilation', 'insulation', 'windows', 'doors', 'walls', 'ceilings', 'floors', 'stairs', 'ramps', 'driveways', 'walkways', 'patios', 'decks', 'porches', 'balconies', 'terraces', 'pools', 'spas', 'saunas', 'hot tubs', 'fountains', 'ponds', 'streams', 'lakes', 'rivers', 'oceans', 'seas', 'mountains', 'hills', 'valleys', 'plains', 'deserts', 'forests', 'jungles', 'swamps', 'marshes', 'wetlands', 'tundra', 'arctic', 'antarctic', 'islands', 'archipelagos', 'peninsulas', 'capes', 'bays', 'inlets', 'coves', 'harbors', 'ports', 'docks', 'piers', 'wharves', 'marinas', 'lighthouses', 'towers', 'castles', 'forts', 'barracks', 'bunkers', 'trenches', 'fortifications', 'walls', 'smartphone', 'tablet', 'laptop', 'desktop', 'computer', 'server', 'network', 'internet', 'intranet', 'extranet', 'website', 'webpage', 'webapp', 'webstore', 'webshop', 'webmarket', 'webmall', 'webportal', 'webforum', 'weblog', 'webblog', 'webjournal', 'webdiary', 'webzine', 'webmagazine', 'webnewspaper', 'webnewsletter', 'webbroadcast', 'webstream', 'webchannel', 'webstation', 'webnetwork', 'webcommunity', 'webgroup', 'webteam', 'webcompany', 'webcorporation', 'weborganization', 'webassociation', 'webfoundation', 'webinstitute', 'webcollege', 'webuniversity', 'webacademy', 'webseminary', 'webconference', 'webconvention', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'phone', 'smart', 'watch', 'farming', 'clothes', 'fashion', 'accessories', 'electronics', 'appliances', 'furniture', 'home', 'garden', 'tools', 'equipment', 'materials', 'supplies', 'machinery', 'vehicles', 'automobiles', 'cars', 'trucks', 'vans', 'motorcycles', 'bicycles', 'boats', 'yachts', 'jetskis', 'airplanes', 'helicopters', 'real estate', 'property', 'land', 'commercial', 'residential', 'industrial', 'agricultural', 'recreational', 'investment', 'development', 'construction', 'renovation', 'remodeling', 'repair', 'maintenance', 'cleaning', 'landscaping', 'gardening', 'decorating', 'painting', 'flooring', 'roofing', 'plumbing', 'electrical', 'heating', 'cooling', 'ventilation', 'insulation', 'windows', 'doors', 'walls', 'ceilings', 'floors', 'stairs', 'ramps', 'driveways', 'walkways', 'patios', 'decks', 'porches', 'balconies', 'terraces', 'pools', 'spas', 'saunas', 'hot tubs', 'fountains', 'ponds', 'streams', 'lakes', 'rivers', 'oceans', 'seas', 'mountains', 'hills', 'valleys', 'plains', 'deserts', 'forests', 'jungles', 'swamps', 'marshes', 'wetlands', 'tundra', 'arctic', 'antarctic', 'islands', 'archipelagos', 'peninsulas', 'capes', 'bays', 'inlets', 'coves', 'harbors', 'ports', 'docks', 'piers', 'wharves', 'marinas', 'lighthouses', 'towers', 'castles', 'forts', 'barracks', 'bunkers', 'trenches', 'fortifications', 'walls', 'smartphone', 'tablet', 'laptop', 'desktop', 'computer', 'server', 'network', 'internet', 'intranet', 'extranet', 'website', 'webpage', 'webapp', 'webstore', 'web'].join(', ');

    // GET SEO DATA
    const seo = await getSEOData(lang);

    // RETURN METADATA
    return {
        title: lang === 'en' ? seo.pageTitleEn : seo.pageTitleAr,
        description: lang === 'en' ? seo.descriptionEn : seo.descriptionAr,
        // keywords: lang === 'en' ? seo.keywordsEn : seo.keywordsAr,
        keywords: lang === 'en' ? `${seo.keywordsEn}, ${keywords}` : `${seo.keywordsAr}, ${keywords}`,
        type: "website",
        url: `https://retweet.com/${lang}`,
        canonical: `https://retweet.com/${lang}`,
        author: "Retweet",
        lang: lang,
        alternates:{
            canonical: `https://retweet.com/${lang}`,
            languages: {
                ar: `https://retweet.com/ar`,
                en: `https://retweet.com/en`
            }
        },
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

