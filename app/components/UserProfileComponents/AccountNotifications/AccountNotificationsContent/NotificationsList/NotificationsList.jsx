import classes from './NotificationsList.module.scss';
import NotificationItem from "@/app/components/UserProfileComponents/AccountNotifications/AccountNotificationsContent/NotificationsList/NotificationItem/NotificationItem";


export default function NotificationsList() {
    return (
        <div className={classes.NotificationsList}>
            {/*  NOTIFICATIONS  */}
            {Array.from({length: 50}, (_, i) => <NotificationItem key={i}/>)}
        </div>
    );
}