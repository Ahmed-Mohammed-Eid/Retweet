import classes from './AccountNotifications.module.scss';
import ProfileNavigation from "@/app/components/UserProfileComponents/ProfileNavigation/ProfileNavigation";
import AccountNotificationsContent
    from "@/app/components/UserProfileComponents/AccountNotifications/AccountNotificationsContent/AccountNotificationsContent";

export default function AccountNotifications() {
    return (
        <div className={`w-full min-h-screen ${classes.AccountNotifications}`}>
            <ProfileNavigation/>
            <AccountNotificationsContent/>
        </div>
    )
}