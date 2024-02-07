import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import AccountHome from "@/app/components/UserProfileComponents/AccountHome/AccountHome";

export default function Ads({params: {lang}}) {
    console.log(lang)
    return (
        <div className={'w-full min-h-screen'}>
            <SecondaryNavigation arrayOfLinks={[
                {
                    href: '/',
                    icon: '/assets/home/House.svg',
                    arrow: true
                },
                {
                    href: '/profile/ads',
                    text: 'Ads',
                    arrow: false
                },
            ]}/>
            {/*  CONTENT  */}
            <AccountHome lang={lang}/>
        </div>
    )
}