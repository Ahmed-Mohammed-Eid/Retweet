"use client"

import classes from "./RealEstate.module.scss";
import Card from "@/app/components/LayoutAndHomeComponents/Card/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import Image from "next/image";

export default function RealEstate({dictionary}) {
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
    ];
    // State
    const [ads, setAds] = useState([]);

    // Fetch latest ads from server
    function getRealAds() {

    }
    function getBottomAd() {
        // Fetch data from server
        axios.get(`${process.env.BASE_URL}/all/home/ads`)
            .then(response => {
                const ads = response.data.homeAds.thirdAd;
                setAds(ads);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Fetch latest ads on component mount
    useEffect(() => {
        getBottomAd();
        getRealAds();
    }, []);



    return (
        <section className={classes.RealEstate}>
            <div className={classes.RealEstate__Top}>
                <div>
                    <h2>Real Estate for Rent</h2>
                </div>
                <div>
                    <button>View All <span>&rarr;</span></button>
                </div>
            </div>
            <div className={classes.RealEstate__Container}>
                {
                    data.map((item, index) => {
                        return (
                            <Card key={index} dictionary={dictionary} data={item}/>
                        )
                    })
                }
            </div>
            <div className={classes.RealEstate__Bottom}>
                <Image src={ads} alt={'Ads Banner'} width={1920} height={300}/>
            </div>
        </section>
    )
}
