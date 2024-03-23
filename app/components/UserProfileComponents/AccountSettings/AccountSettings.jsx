"use client";

import classes from './AccountSettings.module.scss'
import ProfileNavigation from "@/app/components/UserProfileComponents/ProfileNavigation/ProfileNavigation";
import AccountSettingsContent
    from "@/app/components/UserProfileComponents/AccountSettings/AccountSettingsContent/AccountSettingsContent";

// REDUX
import {useSelector} from "react-redux";

export default function AccountHome({lang}) {

    // REDUX
    const userInformation = useSelector(state => state.mainLayout.userInformation)

    return (
        <div className={`w-full min-h-screen ${classes.AccountSettings}`}>
            <ProfileNavigation lang={lang} user={userInformation}/>
            {/*  CONTENT  */}
            <AccountSettingsContent lang={lang} user={userInformation}/>
        </div>
    )
}