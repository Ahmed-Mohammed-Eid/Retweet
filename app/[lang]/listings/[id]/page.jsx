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


export default async function ListingsPage({params: {id, lang}}) {
    const data = await getListing(id);

    return (
        <div>
            {/*Title*/}
            <h1
                className={`text-3xl font-bold ${lang === "en" ? "text-left" : "text-right"} mt-8 mb-4`}
            >
                {data?.listing?.listingTitle}
            </h1>
            {/*Main Details*/}
            <MainDetails listing={data?.listing} lang={lang}/>
            {/*MAIN DETAILS*/}
            <InfoDetails listing={data?.listing} lang={lang}/>
        </div>
    );
}