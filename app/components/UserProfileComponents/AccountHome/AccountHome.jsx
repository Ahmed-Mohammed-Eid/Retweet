import classes from './AccountHome.module.scss';
import ProfileNavigation from "@/app/components/UserProfileComponents/ProfileNavigation/ProfileNavigation";
import AccountHomeContent
    from "@/app/components/UserProfileComponents/AccountHome/AccountHomeContent/AccountHomeContent";
import AccountHomeFooter from "@/app/components/UserProfileComponents/AccountHome/AccountHomeFooter/AccountHomeFooter";

export default function AccountHome() {
    return (
        <div className={`w-full min-h-screen ${classes.AccountHome}`}>
            <ProfileNavigation/>
            <AccountHomeContent/>
            <AccountHomeFooter/>
        </div>
    )
}