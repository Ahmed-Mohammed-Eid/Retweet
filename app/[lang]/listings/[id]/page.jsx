import React from 'react';
import axios from "axios";
import MainDetails from "@/app/components/Listings/ListingsView/MainDetails/MainDetails";
import InfoDetails from "@/app/components/Listings/ListingsView/InfoDetails/InfoDetails";


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
    
    // RETURN METADATA
    return {
        title: listing?.listingTitle,
        description: listing?.listingDescription,
        keywords: listing?.listingTitle + " " + listing?.listingDescription,
        type: "article",
        url: `https://retweet.com/en/listing/${params.id}`,
        site_name: "retweet",
        openGraph: {
            type: "website",
            locale: "en_US",
            url: `https://retweet.com/en/listing/${params.id}`,
            title: listing?.listingTitle,
            description: listing?.listingDescription,
            image: listing?.listingImages[0],
            site_name: "retweet",
            imageWidth: 1200,
            imageHeight: 630,
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
    }
}



export default async function ListingsPage({params: {id, lang}}) {
    const data = await getListing(id);

    return (
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
    );
}