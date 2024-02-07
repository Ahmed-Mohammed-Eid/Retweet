import classes from "./AccountNotificationsContent.module.scss";
import NotYet
    from "@/app/components/UserProfileComponents/AccountNotifications/AccountNotificationsContent/NotYet/NotYet";
import NotificationsList
    from "@/app/components/UserProfileComponents/AccountNotifications/AccountNotificationsContent/NotificationsList/NotificationsList";

export default function AccountNotificationsContent() {

    // SHOW THE NOTIFICATIONS IF THERE ARE ANY
    const showNotifications = true

    return (
        <div className={classes.AccountNotificationsContent}>
            {/*  NOTIFICATIONS  */}
            {showNotifications ? (<NotificationsList/>) : (<NotYet/>)}
        </div>
    );
}