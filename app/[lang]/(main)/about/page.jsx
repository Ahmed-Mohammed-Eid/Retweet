import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import AboutPage from "@/app/components/LayoutAndHomeComponents/AboutPage/AboutPage";


// SEO OPTIMIZATION
export async function generateMetadata({params}) {
    // LANGUAGE
    const lang = params.lang;

    const descriptionEn = "Retweet is a classified ads platform offering services for buying, selling, and renting all kinds of products and services. Find cars for sale, properties for rent, houses for sale, new jobs, and various services. Browse ads easily and communicate with sellers and buyers effortlessly on Retweet.";
    const descriptionAr = "ريتويت هي منصة إعلانات مبوبة توفر خدمات البيع والشراء والتأجير لجميع أنواع المنتجات والخدمات. ابحث عن سيارات للبيع، عقارات للإيجار، منازل للبيع، وظائف جديدة، وخدمات متنوعة. تصفح الإعلانات بسهولة وتواصل مع البائعين والمشترين بكل يسر على ريتويت.";



    // RETURN METADATA
    return {
        title: lang === "en" ? "Retweet: Your Go-To Classified Ads Platform for Buying, Selling, and Renting" : "ريتويت: منصتك المفضلة للإعلانات المبوبة للبيع والشراء والتأجير",
        description: lang === "en" ? descriptionEn : descriptionAr,
        canonical: `https://retweet.com/${lang}/about`,
        alternates: {
            en: `https://retweet.com/en/about`,
            ar: `https://retweetapp.com/ar/about`,
        },

        // OPEN GRAPH
        openGraph: {
            title: lang === "en" ? "Retweet: Your Go-To Classified Ads Platform for Buying, Selling, and Renting" : "ريتويت: منصتك المفضلة للإعلانات المبوبة للبيع والشراء والتأجير",
            description: lang === "en" ? descriptionEn : descriptionAr,
            url: `https://retweet.com/${lang}/about`,
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