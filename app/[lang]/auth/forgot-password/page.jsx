import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import ForgotPassword from "@/app/components/AuthenticationComponents/ForgotPassword/ForgotPassword";

export default function Login() {
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
                    href: '/auth/forgot-password',
                    text: 'Forgot Password',
                }
            ]}/>
            <ForgotPassword/>
        </div>
    );
}