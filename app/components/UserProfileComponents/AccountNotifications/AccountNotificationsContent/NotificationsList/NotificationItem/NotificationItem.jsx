import classes from "./NotificationItem.module.scss";
import Image from "next/image";


export default function NotificationItem() {
    return (
        <div className={classes.NotificationItem}>
            {/*  NOTIFICATION  */}
            <div className={classes.NotificationItem__BellAndTitle}>
                <span className={classes.NotificationItem__Bell}>
                    <Image src={'/assets/profile/bell.svg'} alt={'House'} width={24} height={24}/>
                </span>
                <h3 className={classes.NotificationItem__Title}>
                    20 Hours left
                </h3>
            </div>
            <p className={classes.NotificationItem__Text}>
                New Search Results - There are 51 new Ads for your saved search in All cat egories, check them now!
            </p>
        </div>
    );
}