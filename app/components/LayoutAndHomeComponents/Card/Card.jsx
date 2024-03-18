"use client";
import Image from "next/image";
import classes from './Card.module.scss';
import { formatePrice } from "@/helpers/formatePrice";

export default function Card({dictionary, data, lang}) {
    return (
        <div className={classes.Card}>
            <div className={classes.Card__Img}>
                <Image src={data?.img || '/assets/listings/no-image.jpeg'} alt={'brands'} width={200} height={200}/>
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
                <h3>
                    {lang === 'en' ? data.listingTitle : data.listingTitleEn}
                </h3>
                <p>{data?.listingPrice && formatePrice(data?.listingPrice || '')}</p>
            </div>
        </div>
    )
}