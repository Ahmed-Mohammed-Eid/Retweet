import {PrimeReactProvider} from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./globals.css";
import {defaultLocale} from "@/middleware";
import { Toaster } from 'react-hot-toast';
import {cookies} from "next/headers";


import ProgressBarClientContainer from "@/app/components/LayoutAndHomeComponents/ProgressBarClientContainer/ProgressBarClientContainer";
import Navbar from "../components/LayoutAndHomeComponents/Navbar/Navbar";
import MegaMenu from "@/app/components/LayoutAndHomeComponents/MegaMenu/MegaMenu";
import MainSearchBox from "@/app/components/LayoutAndHomeComponents/MainSearchBox/MainSearchBox";
import Footer from "@/app/components/LayoutAndHomeComponents/Footer/Footer";

export const metadata = {
    title: "Retweet",
    description: "Retweet is a social media platform that allows you to share your thoughts with the world.",
};

export default function RootLayout({children, params: {lang}}) {

    // GET THE TOKEN FROM COOKIES
    const token = cookies().get('retweet-token')?.value;

    return (
        <html lang={lang || defaultLocale}>
        <body>
        <PrimeReactProvider>
            <div className={"container"}>
                <ProgressBarClientContainer/>
                <Navbar lang={lang} auth={!!token}/>
                <MegaMenu lang={lang}/>
                <MainSearchBox lang={lang}/>
                {children}
            </div>
            <Footer lang={lang}/>
            <Toaster position={'bottom-right'}/>
        </PrimeReactProvider>
        </body>
        </html>
    );
}
