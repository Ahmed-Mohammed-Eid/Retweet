import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SignUpSignIn from "@/app/components/AuthenticationComponents/SignUpSignIn/SignUpSignIn";


// CREATE DYNAMIC PAGE SEO OPTIMIZATION

export async function generateMetadata({params}) {
    const lang = params.lang;
    return {
        title: lang === "en" ? "Login" : "تسجيل الدخول",
        description: lang === "en" ? "Login to your account" : "تسجيل الدخول إلى حسابك",
        keywords: lang === "en" ? "Login" : "تسجيل الدخول",
    }
}


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