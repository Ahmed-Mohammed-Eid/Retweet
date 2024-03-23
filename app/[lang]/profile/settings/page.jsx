import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import AccountSettings from "@/app/components/UserProfileComponents/AccountSettings/AccountSettings";

export default async function Settings({params: {lang}}) {

    return (
        <div className={'w-full min-h-screen'}>
            <SecondaryNavigation arrayOfLinks={[
                {
                    href: '/',
                    icon: '/assets/home/House.svg',
                    arrow: true
                },
                {
                    href: '/profile/account',
                    text: 'My Account',
                    arrow: false
                },
            ]}/>
            {/*  CONTENT  */}
            <AccountSettings lang={lang}/>
        </div>
    )
}
