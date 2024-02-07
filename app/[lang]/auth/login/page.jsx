import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SignUpSignIn from "@/app/components/AuthenticationComponents/SignUpSignIn/SignUpSignIn";

export default function Login({params: {lang}}) {
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
                    text: 'Login',
                },
            ]}/>
            <SignUpSignIn lang={lang}/>
        </div>
    );
}