"use client";
import Image from "next/image";
import classes from './CarsCard.module.scss';

export default function CarsCard({dictionary, data}) {
    return (
        <div className={classes.Card}>
            <div className={classes.Card__Img}>
                <Image src={data.img} alt={'brands'} width={200} height={200}/>
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
                <h3>{data.title}</h3>
                <p className={classes.Card__Info_Model}>{data.model}</p>
                <p className={classes.Card__Info_Price}>{data.price}</p>
            </div>
        </div>
    )
}