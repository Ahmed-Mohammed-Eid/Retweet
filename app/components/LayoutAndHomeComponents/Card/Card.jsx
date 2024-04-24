"use client";
import React, { useState } from "react";
import Image from "next/image";
import classes from "./Card.module.scss";
import { formatePrice } from "@/helpers/formatePrice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Card({ dictionary, data, lang }) {
    // ROUTER
    const router = useRouter();

    // STATES
    const [isFavourite, setIsFavourite] = useState(false);

    if (!data) return null;

    // HANDLER FUNCTION TO TOGGLE FAVOURITE
    const toggleFavouriteHandler = () => {
        // GET THE TOKEN FROM LOCAL STORAGE
        const token = localStorage.getItem("retweet-token");

        // URLS ADD AND REMOVE FAVOURITE
        const addUrl = `${process.env.BASE_URL}/add/favorite`;
        const removeUrl = `${process.env.BASE_URL}/remove/favorite`;

        // SEND THE REQUEST TO ADD OR REMOVE FAVOURITE
        if (!isFavourite) {
            axios
                .post(
                    addUrl,
                    {
                        listingId: data?._id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                .then((response) => {
                    console.log(response);
                    setIsFavourite(true);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            axios
                .delete(removeUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        listingId: data?._id,
                    },
                })
                .then((response) => {
                    console.log(response);
                    setIsFavourite(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className={classes.Card}>
            <div className={classes.Card__Img}>
                <Link href={`/listings/${data?._id}`} passHref>
                    <Image
                        src={
                            data?.listingImages[0] ||
                            "/assets/listings/no-image.jpeg"
                        }
                        alt={"brands"}
                        width={200}
                        height={200}
                    />
                </Link>
                <div className={classes.Card__buttons}>
                    <button
                        onClick={toggleFavouriteHandler}
                    >
                        <Image
                            src={isFavourite ? "/assets/home/addedToFavourite.svg" : "/assets/home/addToFavourite.svg"}
                            alt={"add to fav"}
                            width={24}
                            height={24}
                        />
                    </button>
                    <button
                        onClick={() => router.push(`/listings/${data?._id}`)}
                    >
                        <Image
                            src={"/assets/home/View.svg"}
                            alt={"view"}
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
            <div className={classes.Card__Info}>
                <h3 title={data.listingTitle}>
                    <Link
                        href={`/listings/${data?._id}`}
                        passHref
                        className={`text-lg font-bold leading-6 text-zinc-900 max-md:max-w-full`}
                    >
                        {data.listingTitle}
                    </Link>
                </h3>
                <p>
                    {data?.listingPrice &&
                        formatePrice(data?.listingPrice || "")}{" "}
                    {data?.listingCurrency || ""}
                </p>
            </div>
        </div>
    );
}
