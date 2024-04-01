"use client"
import React from "react";
import classes from "./Navbar.module.scss";
import subClasses from "./Sidebar.module.scss";
import Link from "next/link";
import Image from "next/image";
import {Button} from "primereact/button";
import LanguageSwitcher from "@/app/components/LayoutAndHomeComponents/LanguageSwitcher/LanguageSwitcher";
import SelectedArea from "@/app/components/LayoutAndHomeComponents/SelectedArea/SelectedArea";
import AuthenticatedProfile from "@/app/components/LayoutAndHomeComponents/AuthenticatedProfile/AuthenticatedProfile";
import {useRouter} from "next/navigation";
import {Sidebar} from 'primereact/sidebar';

// REDUX
import {useSelector, useDispatch} from "react-redux";
import {updateUserInformation, updateUserCountryInformation} from "@/redux/Slices/mainLayoutSlice";

function Navbar({lang, auth, country, userData}) {

    // STATE
    const [showSidebar, setShowSidebar] = React.useState(false);

    // ROUTER
    const router = useRouter();

    // REDUX
    const dispatch = useDispatch();

    // UPDATE USER INFORMATION
    dispatch(updateUserInformation(userData));

    // UPDATE USER COUNTRY INFORMATION
    dispatch(updateUserCountryInformation(country));

    // LOGOUT
    const onLogout = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();

        // CLEAR LOCAL STORAGE
        localStorage.clear();
        // CLEAR COOKIES
        document.cookie = `retweet-verify-email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-reset-email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-user-id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-user-email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-user-name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-user-phone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-has-profile=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        // REDIRECT TO HOME PAGE
        router.push('/?redirected=true');
    }


    return (
        <>
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
                    {auth && (<div className={classes.Navbar__icons}>
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
                    </div>)}


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

                <div className={classes.Navbar__burger}>
                    <button
                        className={classes.Navbar__burger__btn}
                        onClick={() => setShowSidebar(true)}
                    >
                        <Image src={'/assets/home/menu.svg'} alt={'menu'} width={24} height={24}/>
                    </button>
                </div>
            </nav>

            <Sidebar
                onHide={() => setShowSidebar(false)}
                visible={showSidebar}
                position="right"
                className={subClasses.Sidebar}
                header={
                    <div>
                        <div>
                            <Link href="/">
                                <Image src={'/assets/home/logo.png'} alt={'retweet logo'} width={100} height={36}
                                       priority/>
                            </Link>
                        </div>
                    </div>
                }
            >
                <div className={`${subClasses.Sidebar_group} mb-4`}>
                    {auth && (<div className={subClasses.Sidebar__icons}>
                        <Button className={subClasses.Sidebar__icons__icon} onClick={() => {
                            router.push('/profile/favourites')
                        }}>
                            <Image src={'/assets/home/Heart.svg'} alt={'Heart'} width={18} height={18}/>
                            <span>{lang === 'en' ? 'Favourite' : 'المفضلة'}</span>
                        </Button>

                        <span className={subClasses.Sidebar__breaker}></span>

                        <Button className={subClasses.Sidebar__icons__icon}>
                            <Image src={'/assets/home/bx_chat.svg'} alt={'bx_chat'} width={18} height={18}/>
                            <span>{lang === 'en' ? 'Messages' : 'الرسائل'}</span>
                        </Button>

                        <span className={subClasses.Sidebar__breaker}></span>

                        <Button className={subClasses.Sidebar__icons__icon} onClick={() => {
                            router.push('/profile/notifications')
                        }}>
                            <Image src={'/assets/home/notification.svg'} alt={'notification'} width={18} height={18}/>
                            <span>{lang === 'en' ? 'Notifications' : 'الإشعارات'}</span>
                        </Button>
                    </div>)}
                </div>

                <div className={`${subClasses.Sidebar__lang} mb-4`}>
                    <LanguageSwitcher className={subClasses.Sidebar__lang__select} lang={lang}/>
                </div>

                <div className={`${subClasses.Sidebar__Add} mb-4`}>
                    <Button className={subClasses.Sidebar__Add__btn} onClick={() => {
                        auth ? router.push('/listings/select-category') : router.push('/auth/login')
                    }}>
                        <Image src={'/assets/home/solar_camera-add-bold.svg'} alt={'camera'} width={19} height={19}/>
                        <span>
                            {lang === 'en' ? 'Add New Listing' : 'إضافة إعلان جديد'}
                        </span>
                    </Button>
                </div>

                <div className={`${subClasses.Sidebar__sign} mb-4`}>
                    {!auth && (<Button className={subClasses.Sidebar__sign__btn}>
                        <Image src={'/assets/home/user.svg'} alt={'user'} width={19} height={19}/>
                        <Link href={"/auth/login"}>
                            <span>{lang === 'en' ? 'Sign Up/Sign In' : 'تسجيل الدخول/التسجيل'}</span>
                        </Link>
                    </Button>)}
                    {auth && <div className={subClasses.Sidebar__sign__profile}>
                        <Link href={'/profile/account'} passHref>
                            <div className={subClasses.Sidebar__sign__profile__img}>
                                <Image src={userData?.userImage} alt={'user'} width={80} height={80}
                                       style={{borderRadius: "50%", objectPosition: "center", objectFit: "cover"}}/>
                            </div>
                        </Link>
                        <div className={subClasses.Sidebar__sign__profile__info}>
                            <Link href={'/profile/account'} passHref>
                                <span>{userData?.fullName}</span>
                            </Link>
                            {/*  EMAIL  */}
                            <span>{userData?.email}</span>
                            {/*  LOCATION  */}
                            <span>
                                <Image src={'/assets/home/Location.svg'} alt={'location'} width={18} height={18}/>
                                <span>{country?.country}</span>
                            </span>
                        </div>
                    </div>}
                </div>

                {/* DASHBOARD */}
                {auth && (<div className={`${subClasses.Sidebar__dashboard} mb-4`}>
                    <Button onClick={() => {
                        router.push('/profile/account')
                    }}>
                        <Image src={'/assets/home/dashboard.svg'} alt={'dashboard'} width={19} height={19}/>
                        <span>{lang === 'en' ? 'Dashboard' : 'لوحة التحكم'}</span>
                    </Button>
                </div>)}

                {/* LOGOUT */}
                {auth && (<div className={`${subClasses.Sidebar__logout} mb-4`}>
                    <Button onClick={onLogout}>
                        <Image src={'/assets/home/logout.svg'} alt={'logout'} width={19} height={19}/>
                        <span>{lang === 'en' ? 'Logout' : 'تسجيل الخروج'}</span>
                    </Button>
                </div>)}
            </Sidebar>
        </>
    );
}

export default Navbar;
