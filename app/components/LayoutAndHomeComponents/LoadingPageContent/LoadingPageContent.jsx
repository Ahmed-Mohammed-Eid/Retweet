"use client";
import classes from "./LoadingPageContent.module.scss";
import Script from "next/script";

const LoadingPageContent = () => {
    return (
        <div className={classes.LoadingPageContent}>
            <lottie-player
                src={'/assets/jsonFiles/retweet.json'}
                speed="1"
                style={{width: '300px', height: '300px'}}
                direction="1"
                mode="normal"
                loop
                autoplay
            >
            </lottie-player>
        </div>
    );
};

export default LoadingPageContent;
