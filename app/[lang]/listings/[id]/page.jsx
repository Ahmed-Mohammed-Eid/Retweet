import React from 'react';
import axios from "axios";
import MainDetails from "@/app/components/Listings/ListingsView/MainDetails/MainDetails";
import InfoDetails from "@/app/components/Listings/ListingsView/InfoDetails/InfoDetails";
import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";


// ASYNC FUNCTION WITH NO CACHE TO GET DATA FROM API BASED ON ID
async function getListing(id) {
    return await axios.get(`${process.env.BASE_URL}/view/listing?listingId=${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}

async function getSeo(id) {
    return await axios.get(`${process.env.BASE_URL}/listing/title/description?listingId=${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}

// CREATE DYNAMIC PAGE SEO OPTIMIZATION

export async function generateMetadata({params}) {
    // GET SEO DATA
    const seoData = await getSeo(params.id);
    const listing = seoData?.listing;
    // GET THE LANGUAGE
    const lang = params?.lang || "en";

    // KEYWORDS
    const keywords = ['retweet', 'social media', 'platform', 'buy', 'sell', 'rent', 'share', 'thoughts', 'world', 'global', 'community', 'connect', 'friends', 'family', 'business', 'network', 'networking', 'marketing', 'advertising', 'ad', 'ads', 'advertisement', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'cars', 'houses', 'apartments', 'rentals', 'rent', 'buy', 'sell', 'trade', 'exchange', 'swap', 'barter', 'goods', 'services', 'products', 'items', 'merchandise', 'clothes', 'fashion', 'accessories', 'electronics', 'appliances', 'furniture', 'home', 'garden', 'tools', 'equipment', 'materials', 'supplies', 'machinery', 'vehicles', 'automobiles', 'cars', 'trucks', 'vans', 'motorcycles', 'bicycles', 'boats', 'yachts', 'jetskis', 'airplanes', 'helicopters', 'real estate', 'property', 'land', 'commercial', 'residential', 'industrial', 'agricultural', 'recreational', 'investment', 'development', 'construction', 'renovation', 'remodeling', 'repair', 'maintenance', 'cleaning', 'landscaping', 'gardening', 'decorating', 'painting', 'flooring', 'roofing', 'plumbing', 'electrical', 'heating', 'cooling', 'ventilation', 'insulation', 'windows', 'doors', 'walls', 'ceilings', 'floors', 'stairs', 'ramps', 'driveways', 'walkways', 'patios', 'decks', 'porches', 'balconies', 'terraces', 'pools', 'spas', 'saunas', 'hot tubs', 'fountains', 'ponds', 'streams', 'lakes', 'rivers', 'oceans', 'seas', 'mountains', 'hills', 'valleys', 'plains', 'deserts', 'forests', 'jungles', 'swamps', 'marshes', 'wetlands', 'tundra', 'arctic', 'antarctic', 'islands', 'archipelagos', 'peninsulas', 'capes', 'bays', 'inlets', 'coves', 'harbors', 'ports', 'docks', 'piers', 'wharves', 'marinas', 'lighthouses', 'towers', 'castles', 'forts', 'barracks', 'bunkers', 'trenches', 'fortifications', 'walls', 'smartphone', 'tablet', 'laptop', 'desktop', 'computer', 'server', 'network', 'internet', 'intranet', 'extranet', 'website', 'webpage', 'webapp', 'webstore', 'webshop', 'webmarket', 'webmall', 'webportal', 'webforum', 'weblog', 'webblog', 'webjournal', 'webdiary', 'webzine', 'webmagazine', 'webnewspaper', 'webnewsletter', 'webbroadcast', 'webstream', 'webchannel', 'webstation', 'webnetwork', 'webcommunity', 'webgroup', 'webteam', 'webcompany', 'webcorporation', 'weborganization', 'webassociation', 'webfoundation', 'webinstitute', 'webcollege', 'webuniversity', 'webacademy', 'webseminary', 'webconference', 'webconvention', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'phone', 'smart', 'watch', 'farming', 'clothes', 'fashion', 'accessories', 'electronics', 'appliances', 'furniture', 'home', 'garden', 'tools', 'equipment', 'materials', 'supplies', 'machinery', 'vehicles', 'automobiles', 'cars', 'trucks', 'vans', 'motorcycles', 'bicycles', 'boats', 'yachts', 'jetskis', 'airplanes', 'helicopters', 'real estate', 'property', 'land', 'commercial', 'residential', 'industrial', 'agricultural', 'recreational', 'investment', 'development', 'construction', 'renovation', 'remodeling', 'repair', 'maintenance', 'cleaning', 'landscaping', 'gardening', 'decorating', 'painting', 'flooring', 'roofing', 'plumbing', 'electrical', 'heating', 'cooling', 'ventilation', 'insulation', 'windows', 'doors', 'walls', 'ceilings', 'floors', 'stairs', 'ramps', 'driveways', 'walkways', 'patios', 'decks', 'porches', 'balconies', 'terraces', 'pools', 'spas', 'saunas', 'hot tubs', 'fountains', 'ponds', 'streams', 'lakes', 'rivers', 'oceans', 'seas', 'mountains', 'hills', 'valleys', 'plains', 'deserts', 'forests', 'jungles', 'swamps', 'marshes', 'wetlands', 'tundra', 'arctic', 'antarctic', 'islands', 'archipelagos', 'peninsulas', 'capes', 'bays', 'inlets', 'coves', 'harbors', 'ports', 'docks', 'piers', 'wharves', 'marinas', 'lighthouses', 'towers', 'castles', 'forts', 'barracks', 'bunkers', 'trenches', 'fortifications', 'walls', 'smartphone', 'tablet', 'laptop', 'desktop', 'computer', 'server', 'network', 'internet', 'intranet', 'extranet', 'website', 'webpage', 'webapp', 'webstore', 'web'].join(', ');

    // RETURN METADATA
    return {
        title: listing?.listingTitle,
        description: listing?.listingDescription,
        keywords: listing?.listingTitle + ", " + listing?.listingDescription + ", " + keywords,
        type: "article",
        url: `https://retweet.com/${lang}/listing/${params.id}`,
        canonical: `https://retweet.com/${lang}/listing/${params.id}`,
        author: "Retweet",
        openGraph: {
            type: "article",
            locale: "en_US",
            url: `https://retweet.com/${lang}/listing/${params.id}`,
            title: listing?.listingTitle,
            description: listing?.listingDescription,
            image: listing?.listingImages[0],
            siteName: "Retweet",
            imageWidth: 1200,
            imageHeight: 630,
            // CANONICAL URL
            images: [
                {
                    url: listing?.listingImages[0],
                    width: 1200,
                    height: 630
                }
            ],
        },
        twitter: {
            handle: "@retweet",
            site: "@retweet",
            cardType: "summary_large_image",
            title: listing?.listingTitle,
            description: listing?.listingDescription,
            images: [{
                url: listing?.listingImages[0],
                width: 1200,
                height: 630
            }]
        },
        alternates: {
            canonical: `https://retweet.com/${lang}/listing/${params.id}`,
        }
    }
}


export default async function ListingsPage({params: {id, lang}}) {
    const data = await getListing(id);

    return (
        <>
            <div className={"mb-2"}>
                <SecondaryNavigation
                    arrayOfLinks={[
                        {
                            text: 'Home',
                            icon: '/assets/home/House.svg',
                            href: '/',
                            arrow: true,
                        },
                        {
                            href: '/listings',
                            text: 'Listings',
                            arrow: true,
                        },
                        {
                            text: data?.listing?.listingTitle,
                            href: `/listings/${id}`,
                        },
                    ]}
                />
            </div>
            <div>
                {/*Title*/}
                <h1 className={`text-3xl font-bold ${lang === "en" ? "text-left" : "text-right"} mt-8 mb-4`}>
                    {data?.listing?.listingTitle}
                </h1>
                {/*Main Details*/}
                <MainDetails listing={data?.listing} lang={lang}/>
                {/*MAIN DETAILS*/}
                <InfoDetails listing={data?.listing} lang={lang}/>
            </div>
        </>
    );
}