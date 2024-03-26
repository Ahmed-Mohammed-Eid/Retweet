"use client";
import classes from "./LoadingPageContent.module.scss";
import Script from "next/script";
import Image from "next/image";

const LoadingPageContent = () => {
    return (
        <div className={`${classes.LoadingPageContent} bg-white w-full h-screen`}>
            <Image src="/assets/retweet.gif" alt="Loading" width={300} height={300} />
        </div>
    );
};

export default LoadingPageContent;
