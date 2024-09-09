import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import ContactPage from "@/app/components/LayoutAndHomeComponents/ContactPage/ContactPage";


// SEO OPTIMIZATION
export async function generateMetadata({params}) {
    // LANGUAGE
    const lang = params.lang;

    const descriptionEn = "Get in touch with us at Retweet for any inquiries, support, or feedback. We're here to help you with your buying, selling, and renting needs. Contact us today through our website.";
    const descriptionAr = "تواصل معنا في ريتويت لأي استفسارات أو دعم أو ملاحظات. نحن هنا لمساعدتك في احتياجاتك للبيع والشراء والتأجير. تواصل معنا اليوم عبر موقعنا الإلكتروني.";


    // RETURN METADATA
    return {
        title: lang === "en" ? "Contact Us | Retweet Classified Ads Platform" : "تواصل معنا | منصة الإعلانات المبوبة ريتويت",
        description: lang === "en" ? descriptionEn : descriptionAr,
        canonical: `https://retweet.com/${lang}/contact`,
        alternates: {
            en: `https://retweet.com/en/contact`,
            ar: `https://retweet.com/ar/contact`,
        },
        openGraph: {
            title: lang === "en" ? "Contact Us | Retweet Classified Ads Platform" : "تواصل معنا | منصة الإعلانات المبوبة ريتويت",
            description: lang === "en" ? descriptionEn : descriptionAr,
            url: `https://retweet.com/${lang}/contact`,
            type: 'website',
            locale: lang === "en" ? "en_US" : "ar_AR",
            siteName: lang === "en" ? "Retweet" : "ريتويت",
            images: [
                {
                    url: "https://retweet.com/assets/home/logo.png",
                    width: 800,
                    height: 600,
                    alt: "Retweet Logo",
                }
            ]
        },
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