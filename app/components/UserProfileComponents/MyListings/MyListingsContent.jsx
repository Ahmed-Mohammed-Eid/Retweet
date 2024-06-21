"use client";
import React, { useEffect, useState } from 'react'

// IMPORTS
import ListingCard from "../../Listings/ListingCard/ListingCard"

// Helpers
import axios from "axios";
import toast from 'react-hot-toast';

export default function MyListingContent({lang, authenticated}) {

    const [myListings, setMyListings] = useState([]);

    // Effect to fetch user's myListings
    useEffect(() => {
        // Fetch user's myListings
        fetchmyListings()
        // setMyListings(response.data)
    }, []);

    // GET request to fetch user's myListings from the server
    async function fetchmyListings() {
        // GET THE TOKEN FROM LOCAL STORAGE
        const token = localStorage.getItem('retweet-token')

        await axios.get(`${process.env.BASE_URL}/get/user/listings`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setMyListings(response.data?.listings || [])
        })
        .catch(error => {
            console.log(error)
            toast.error(lang === 'en' ? 'An error occurred while fetching your myListings' : 'حدث خطأ أثناء جلب المفضلة الخاصة بك')
        })
    }


    return (
        <div className={'w-full min-h-screen bg-white flex flex-col gap-2 py-6'}>
            {/*  CONTENT  */}
            {myListings.length > 0 && myListings.map((product, index) => {
                return (
                    <ListingCard key={index} product={product} authenticated={authenticated} removeOnly={true} lang={lang}/>
                )
            })}
        </div>
    )
}