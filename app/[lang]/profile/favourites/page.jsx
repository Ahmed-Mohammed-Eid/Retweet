import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import FavouriteContent from "@/app/components/UserProfileComponents/FavouriteContent/FavouriteContent";
import useAuthentication from "@/hooks/useAuthentication";
import {cookies} from "next/headers";

export default async function Ads({params: {lang}}) {

    // GET THE TOKEN FROM COOKIES
    const token = cookies().get('retweet-token')?.value;

    // AUTHENTICATION
    const {authenticated, error, userData} = await useAuthentication(token);


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
            <FavouriteContent authenticated={authenticated} lang={lang} />
        </div>
    )
}