import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";

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
                    href: '/profile/favourites',
                    text: 'Favourites',
                    arrow: false
                },
            ]}/>
            {/*  CONTENT  */}
        </div>
    )
}