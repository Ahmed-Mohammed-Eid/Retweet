import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import ContactPage from "@/app/components/LayoutAndHomeComponents/ContactPage/ContactPage";


// SEO OPTIMIZATION
export async function generateMetadata({params}) {
    // LANGUAGE
    const lang = params.lang;
    // RETURN METADATA
    return {
        title: lang === "en" ? "Contact Us" : "تواصل معنا",
        description: lang === "en" ? "Contact Us" : "تواصل معنا",
        keywords: lang === "en" ? "Contact Us" : "تواصل معنا"
    }
}

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
                    href: '/contact',
                    text: 'Contact Us',
                    arrow: false
                },
            ]}/>
            <ContactPage  />
        </div>
    );
}