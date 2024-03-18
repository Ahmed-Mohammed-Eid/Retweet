"use client";

import classes from "./LatestAds.module.scss";
import Card from "@/app/components/LayoutAndHomeComponents/Card/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import Image from "next/image";

export default function LatestAds({dictionary, lang}) {

    // State
    const [ads, setAds] = useState([]);
    const [latestAds, setLatestAds] = useState([]); // [img, title, price

    // Fetch latest ads from server
    function getLatestAds() {
        ///latest/listings
        try {
            axios.get(`${process.env.BASE_URL}/latest/listings`)
                .then(response => {
                    const data = response.data.latest;
                    setLatestAds(data);
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }
    function getBottomAd() {
        // Fetch data from server
        axios.get(`${process.env.BASE_URL}/all/home/ads`)
            .then(response => {
                const ads = response.data.homeAds.secondAd;
                setAds(ads);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Fetch latest ads on component mount
    useEffect(() => {
        getBottomAd();
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
                    latestAds.map((item, index) => {
                        return (
                            <Card key={index} dictionary={dictionary} data={item} lang={lang} />
                        )
                    })
                }
            </div>
            <div className={classes.LatestAds__Bottom}>
                <Image src={ads} alt={'Ads Banner'} width={1920} height={300}/>
            </div>
        </section>
    )
}
