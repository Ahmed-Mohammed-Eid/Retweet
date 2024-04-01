"use client";

import React, {useEffect, useRef, useState} from 'react';
import classes from './MainDetails.module.scss';
import Image from 'next/image';


export default function MainDetails({listing}) {
    const [mainImage, setMainImage] = useState();

    // EFFECT TO SET MAIN IMAGE
    useEffect(() => {
        if (listing) {
            console.log(listing);
            setMainImage(listing.listingImages[0]);
        }
    }, [listing]);

    // HANDLE MAIN IMAGE CHANGE
    const handleMainImageChange = (image) => {
        setMainImage(image);
    };

    return (
        <>
            <div className={classes.swipersContainer}>
                <div className={classes.mainImageContainer}>
                    <Image
                        className={classes.mainImage}
                        src={mainImage}
                        alt="Main Image"
                        width={600}
                        height={400}
                        style={{
                            borderRadius: '10px',
                            border: `2px solid #379db8`

                        }}
                    />
                </div>

                {/*  VERTICAL SWIPER AS A THUMBS  */}
                <div className={classes.thumbsContainer}>
                    <div className={classes.thumbs}>
                        {listing?.listingImages.map((image, index) => (
                            <div
                                key={index}
                                className={classes.thumb}
                                onClick={() => handleMainImageChange(image)}
                            >
                                <Image
                                    src={image}
                                    alt="Thumb Image"
                                    width={100}
                                    height={100}
                                    style={{
                                        borderRadius: '10px',
                                        border: `2px solid ${mainImage === image ? '#379db8' : 'transparent'}`
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    {/*  ARROWS TO NAVIGATE  */}
                    <div className={classes.arrowLeft}>
                        Left Arrow
                    </div>
                    <div className={classes.arrowRight}>
                        Right Arrow
                    </div>
                </div>
            </div>
        </>
    );
}
