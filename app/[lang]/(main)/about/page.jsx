import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import AboutPage from "@/app/components/LayoutAndHomeComponents/AboutPage/AboutPage";

export default function VerifyEmailAddress(){
    return (
        <div className={'w-full'}>
            <SecondaryNavigation arrayOfLinks={[
                {
                    href: '/',
                    icon: '/assets/home/House.svg',
                    arrow: true
                },
                {
                    href: '/auth/login',
                    text: 'Sign In',
                    arrow: true
                },
                {
                    href: '/about',
                    text: 'About Us',
                    arrow: false
                },
            ]}/>
            <AboutPage  />
        </div>
    );
}