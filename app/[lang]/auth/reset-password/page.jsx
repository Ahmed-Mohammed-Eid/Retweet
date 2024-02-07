import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import ResetPassword from "@/app/components/AuthenticationComponents/ResetPassword/ResetPassword";

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
                    arrow: true
                },
                {
                    href: '/auth/reset-password',
                    text: 'Reset Password',
                    arrow: false
                }
            ]}/>
            <ResetPassword/>
        </div>
    );
}