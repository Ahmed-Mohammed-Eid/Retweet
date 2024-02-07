import Image from "next/image";
import classes from "./NotYet.module.scss";
import Link from "next/link";

export default function NotYet() {
    return (
        <div className={classes.NotYet}>
            <Image src={'/assets/profile/NoNotificationsIllustration.svg'} width={800} height={600}
                   alt={'No Notifications yet'}/>
            <div className={classes.NotYet__text}>
                <p>No Notification Yet</p>
                <Link href={'/'}>Go to Home</Link>
            </div>
        </div>
    );
}