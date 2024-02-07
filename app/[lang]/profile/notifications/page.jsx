import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import AccountNotifications from "@/app/components/UserProfileComponents/AccountNotifications/AccountNotifications";


export default function Ads({params: {lang}}) {
    return (
        <div className={'w-full min-h-screen'}>
            <SecondaryNavigation arrayOfLinks={[
                {
                    href: '/',
                    icon: '/assets/home/House.svg',
                    arrow: true
                },
                {
                    href: '/profile/notifications',
                    text: 'Notifications',
                    arrow: false
                },
            ]}/>
            {/*  CONTENT  */}
            <AccountNotifications/>
        </div>
    )
}