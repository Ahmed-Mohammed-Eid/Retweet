"use client";
import Image from "next/image";
import classes from './Card.module.scss';
import {formatePrice} from "@/helpers/formatePrice";
import Link from "next/link";

export default function Card({dictionary, data, lang}) {
    if (!data) return null;
    console.log(data);
    return (
        <div className={classes.Card}>
            <div className={classes.Card__Img}>
                <Link href={`/listings/${data?._id}`} passHref>
                    <Image src={data?.listingImages[0] || '/assets/listings/no-image.jpeg'} alt={'brands'} width={200}
                           height={200}/>
                </Link>
                <div className={classes.Card__buttons}>
                    <button>
                        <Image src={'/assets/home/addToFavourite.svg'} alt={'add to fav'} width={24} height={24}/>
                    </button>
                    <button>
                        <Image src={'/assets/home/View.svg'} alt={'view'} width={24} height={24}/>
                    </button>
                </div>
            </div>
            <div className={classes.Card__Info}>
                <h3 title={data.listingTitle}>
                    <Link href={`/listings/${data?._id}`} passHref
                          className={`text-lg font-bold leading-6 text-zinc-900 max-md:max-w-full`}>
                        {data.listingTitle}
                    </Link>
                </h3>
                <p>{data?.listingPrice && formatePrice(data?.listingPrice || '')} {data?.listingCurrency || ''}</p>
            </div>
        </div>
    )
}