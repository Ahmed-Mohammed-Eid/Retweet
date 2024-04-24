import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import ForgotPassword from "@/app/components/AuthenticationComponents/ForgotPassword/ForgotPassword";

// CREATE DYNAMIC PAGE SEO OPTIMIZATION
export async function  generateMetadata({params}) {
    const lang = params.lang;
    return {
        title: lang === "en" ? "Forgot Password" : "نسيت كلمة المرور",
        description: lang === "en" ? "Forgot your password? No problem! Enter your email and we'll send you a link to reset it." : "هل نسيت كلمة المرور؟ لا مشكلة! أدخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيينها.",
        keywords: lang === "en" ? "Forgot Password" : "نسيت كلمة المرور",
    }
}

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