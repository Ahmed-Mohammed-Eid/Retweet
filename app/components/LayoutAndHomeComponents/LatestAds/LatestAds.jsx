"use client";

import classes from "./LatestAds.module.scss";
import Card from "@/app/components/LayoutAndHomeComponents/Card/Card";
import {useEffect, useState} from "react";
import axios from "axios";

export default function LatestAds({dictionary, lang}) {

    // Dummy data
    const data = [
        {
            img: '/assets/home/testImg.png',
            title: 'CANON EOS DSLR Camera',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
    ];

    // State
    const [ads, setAds] = useState([]);

    // Fetch latest ads from server
    function getLatestAds() {
        // Fetch data from server
        axios.get(`${process.env.BASE_URL}/all/home/ads`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Fetch latest ads on component mount
    useEffect(() => {
        getLatestAds();
    }, []);

    return (
        <section className={classes.LatestAds}>
            <div className={classes.LatestAds__Top}>
                <div>
                    <h2>Latest Advertisements</h2>
                    <p>Explore Our Advertisements</p>
                </div>
                <div>
                    <button>View All <span>&rarr;</span></button>
                </div>
            </div>
            <div className={classes.LatestAds__Container}>
                {
                    data.map((item, index) => {
                        return (
                            <Card key={index} dictionary={dictionary} data={item}/>
                        )
                    })
                }
            </div>
            <div className={classes.LatestAds__Bottom}>
            </div>
        </section>
    )
}
