import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import AboutPage from "@/app/components/LayoutAndHomeComponents/AboutPage/AboutPage";


// SEO OPTIMIZATION
export async function generateMetadata({params}) {
    // LANGUAGE
    const lang = params.lang;
    // RETURN METADATA
    return {
        title: lang === "en" ? "About Retweet" : "اعرف المزيد عن ريتويت",
        description: lang === "en" ? "About Retweet" : "اعرف المزيد عن ريتويت",
        keywords: lang === "en" ? "About Retweet" : "اعرف المزيد عن ريتويت"
    }
}

export default function VerifyEmailAddress() {
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
            <AboutPage/>
        </div>
    );
}