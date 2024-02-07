import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import VerifyEmail from "@/app/components/AuthenticationComponents/VerifyEmail/VerifyEmail";

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
                    href: '/auth/verify',
                    text: 'Email Verification',
                    arrow: false
                },
            ]}/>
            <VerifyEmail />
        </div>
    );
}