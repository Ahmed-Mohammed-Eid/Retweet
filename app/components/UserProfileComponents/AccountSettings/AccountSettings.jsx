import classes from './AccountSettings.module.scss'
import ProfileNavigation from "@/app/components/UserProfileComponents/ProfileNavigation/ProfileNavigation";
import AccountSettingsContent
    from "@/app/components/UserProfileComponents/AccountSettings/AccountSettingsContent/AccountSettingsContent";

export default function AccountHome({lang, user}) {
    return (
        <div className={`w-full min-h-screen ${classes.AccountSettings}`}>
            <ProfileNavigation lang={lang} user={user}/>
            {/*  CONTENT  */}
            <AccountSettingsContent lang={lang} user={user}/>
        </div>
    )
}