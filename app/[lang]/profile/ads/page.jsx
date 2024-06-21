import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import MyListingContent from "@/app/components/UserProfileComponents/MyListings/MyListingsContent";

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
                    href: '/profile/ads',
                    text: 'Ads',
                    arrow: false
                },
            ]}/>
            {/*  CONTENT  */}
            <MyListingContent lang={lang}/>
        </div>
    )
}