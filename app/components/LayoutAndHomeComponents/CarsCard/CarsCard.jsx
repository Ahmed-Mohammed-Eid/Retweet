"use client";
import Image from "next/image";
import classes from './CarsCard.module.scss';
import {formatePrice} from "@/helpers/formatePrice";

export default function CarsCard({dictionary, data}) {

    if (!data) return null;

    return (
        <div className={classes.Card}>
            <div className={classes.Card__Img}>
                <Image src={data?.listingImages[0] || '/assets/listings/no-image.jpeg'} alt={'brands'} width={200} height={200}/>
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
                    {data.listingTitle}
                </h3>
                <p className={classes.Card__Info_Model}>{data.model}</p>
                <p className={classes.Card__Info_Price}>{data?.listingPrice && formatePrice(data?.listingPrice || '')} {data?.listingCurrency || ''}</p>
            </div>
        </div>
    )
}