"use client"
import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import {Button} from "primereact/button";
import LanguageSwitcher from "@/app/components/LayoutAndHomeComponents/LanguageSwitcher/LanguageSwitcher";
import SelectedArea from "@/app/components/LayoutAndHomeComponents/SelectedArea/SelectedArea";
import AuthenticatedProfile from "@/app/components/LayoutAndHomeComponents/AuthenticatedProfile/AuthenticatedProfile";
import {useRouter} from "next/navigation";

// REDUX
import {useSelector, useDispatch} from "react-redux";
import {updateUserInformation, updateUserCountryInformation} from "@/redux/Slices/mainLayoutSlice";

function Navbar({lang, auth, country, userData}) {

    // ROUTER
    const router = useRouter();

    // REDUX
    const dispatch = useDispatch();

    // UPDATE USER INFORMATION
    dispatch(updateUserInformation(userData));

    // UPDATE USER COUNTRY INFORMATION
    dispatch(updateUserCountryInformation(country));


    return (
        <nav className={classes.Navbar}>
            <div className={classes.Navbar__logo}>
                <Link href="/">
                    <Image src={'/assets/home/logo.png'} alt={'retweet logo'} width={200} height={36} priority/>
                </Link>
            </div>
            <div className={classes.Navbar__select__wrapper}>
                <SelectedArea className={classes.Navbar__select} country={country || {}}/>
            </div>
            <div className={classes.Navbar_group}>
                <div className={classes.Navbar__icons}>
                    <Button className={classes.Navbar__icons__icon} tooltip={"Favourite"} onClick={() => {
                        router.push('/profile/favourites')
                    }}>
                        <Image src={'/assets/home/Heart.svg'} alt={'Heart'} width={18} height={18}/>
                    </Button>

                    <span className={classes.Navbar__breaker}></span>

                    <Button className={classes.Navbar__icons__icon} tooltip={"Messages"}>
                        <Image src={'/assets/home/bx_chat.svg'} alt={'bx_chat'} width={18} height={18}/>
                    </Button>

                    <span className={classes.Navbar__breaker}></span>

                    <Button className={classes.Navbar__icons__icon} tooltip={"Notifications"} onClick={() => {
                        router.push('/profile/notifications')
                    }}>
                        <Image src={'/assets/home/notification.svg'} alt={'notification'} width={18} height={18}/>
                    </Button>

                    <span className={classes.Navbar__breaker}></span>
                </div>


                <div className={classes.Navbar__sign}>
                    {!auth && (<Button className={classes.Navbar__sign__btn}>
                        <Image src={'/assets/home/user.svg'} alt={'user'} width={19} height={19}/>
                        <Link href={"/auth/login"}>
                            <span>{lang === 'en' ? 'Sign Up/Sign In' : 'تسجيل الدخول/التسجيل'}</span>
                        </Link>
                    </Button>)}
                    {auth && <AuthenticatedProfile lang={lang} userData={userData}/>}
                </div>
            </div>

            <div className={classes.Navbar__Add}>
                <Button className={classes.Navbar__Add__btn} onClick={() => {
                    auth ? router.push('/listings/select-category') : router.push('/auth/login')
                }}>
                    <Image src={'/assets/home/solar_camera-add-bold.svg'} alt={'camera'} width={19} height={19}/>
                    <span>
                        {lang === 'en' ? 'Add New Listing' : 'إضافة إعلان جديد'}
                    </span>
                </Button>
            </div>

            <div className={classes.Navbar__lang}>
                <LanguageSwitcher className={classes.Navbar__lang__select} lang={lang}/>
            </div>
        </nav>
    );
}

export default Navbar;
