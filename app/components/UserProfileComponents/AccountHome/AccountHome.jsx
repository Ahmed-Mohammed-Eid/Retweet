"use client";

import classes from './AccountHome.module.scss';
import ProfileNavigation from "@/app/components/UserProfileComponents/ProfileNavigation/ProfileNavigation";
import AccountHomeContent
    from "@/app/components/UserProfileComponents/AccountHome/AccountHomeContent/AccountHomeContent";
import AccountHomeFooter from "@/app/components/UserProfileComponents/AccountHome/AccountHomeFooter/AccountHomeFooter";

// REDUX
import {useSelector} from "react-redux";

export default function AccountHome() {

    // REDUX
    const userInformation = useSelector(state => state.mainLayout.userInformation);

    return (
        <div className={`w-full min-h-screen ${classes.AccountHome}`}>
            <ProfileNavigation
                user={userInformation}
            />
            <AccountHomeContent
                user={userInformation}
            />
            <AccountHomeFooter/>
        </div>
    )
}