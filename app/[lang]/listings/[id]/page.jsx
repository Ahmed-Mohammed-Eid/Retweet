import React from 'react';
import axios from "axios";
import MainDetails from "@/app/components/Listings/ListingsView/MainDetails/MainDetails";




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
            <MainDetails listing={data?.listing}/>
        </div>
    );
}