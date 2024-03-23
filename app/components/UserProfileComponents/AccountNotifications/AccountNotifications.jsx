"use client";

import classes from './AccountNotifications.module.scss';
import ProfileNavigation from "@/app/components/UserProfileComponents/ProfileNavigation/ProfileNavigation";
import AccountNotificationsContent
    from "@/app/components/UserProfileComponents/AccountNotifications/AccountNotificationsContent/AccountNotificationsContent";

// REDUX
import {useSelector} from "react-redux";

export default function AccountNotifications({lang}) {

    // REDUX
    const userInformation = useSelector(state => state.mainLayout.userInformation);

    return (
        <div className={`w-full min-h-screen ${classes.AccountNotifications}`}>
            <ProfileNavigation
                user={userInformation}
            />
            <AccountNotificationsContent/>
        </div>
    )
}