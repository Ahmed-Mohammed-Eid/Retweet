import {PrimeReactProvider} from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./globals.css";
import {defaultLocale} from "@/middleware";
import {Toaster} from 'react-hot-toast';
import {cookies} from "next/headers";


// CUSTOM COMPONENTS
import ClientLayout from "@/app/[lang]/ClientLayout";
import Footer from "@/app/components/LayoutAndHomeComponents/Footer/Footer";

// CUSTOM HOOKS
import useAuthentication from "@/hooks/useAuthentication";


// METADATA

export const metadata = {
        generator: "Retweet",
        title: "ريتويت | اعلانات مبوبة مجانية",
        description: "Retweet: Your gateway to a global community where you can connect, share thoughts, and explore endless possibilities. Buy, sell, rent, or trade goods and services effortlessly. From cars to real estate, electronics to fashion, Retweet connects you with friends, family, and businesses worldwide. Join us and experience the power of networking, marketing, and advertising in a dynamic social media platform. #Retweet #SocialMedia #GlobalCommunity",
        keywords: ['retweet', 'social media', 'platform', 'buy', 'sell', 'rent', 'share', 'thoughts', 'world', 'global', 'community', 'connect', 'friends', 'family', 'business', 'network', 'networking', 'marketing', 'advertising', 'ad', 'ads', 'advertisement', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'advertising', 'advertise', 'advertises', 'advertised', 'advertiser', 'advertisers', 'advertising', 'advertisements', 'cars', 'houses', 'apartments', 'rentals', 'rent', 'buy', 'sell', 'trade', 'exchange', 'swap', 'barter', 'goods', 'services', 'products', 'items', 'merchandise', 'clothes', 'fashion', 'accessories', 'electronics', 'appliances', 'furniture', 'home', 'garden', 'tools', 'equipment', 'materials', 'supplies', 'machinery', 'vehicles', 'automobiles', 'cars', 'trucks', 'vans', 'motorcycles', 'bicycles', 'boats', 'yachts', 'jetskis', 'airplanes', 'helicopters', 'real estate', 'property', 'land', 'commercial', 'residential', 'industrial', 'agricultural', 'recreational', 'investment', 'development', 'construction', 'renovation', 'remodeling', 'repair', 'maintenance', 'cleaning', 'landscaping', 'gardening', 'decorating', 'painting', 'flooring', 'roofing', 'plumbing', 'electrical', 'heating', 'cooling', 'ventilation', 'insulation', 'windows', 'doors', 'walls', 'ceilings', 'floors', 'stairs', 'ramps', 'driveways', 'walkways', 'patios', 'decks', 'porches', 'balconies', 'terraces', 'pools', 'spas', 'saunas', 'hot tubs', 'fountains', 'ponds', 'streams', 'lakes', 'rivers', 'oceans', 'seas', 'mountains', 'hills', 'valleys', 'plains', 'deserts', 'forests', 'jungles', 'swamps', 'marshes', 'wetlands', 'tundra', 'arctic', 'antarctic', 'islands', 'archipelagos', 'peninsulas', 'capes', 'bays', 'inlets', 'coves', 'harbors', 'ports', 'docks', 'piers', 'wharves', 'marinas', 'lighthouses', 'towers', 'castles', 'forts', 'barracks', 'bunkers', 'trenches', 'fortifications', 'walls', 'smartphone', 'tablet', 'laptop', 'desktop', 'computer', 'server', 'network', 'internet', 'intranet', 'extranet', 'website', 'webpage', 'webapp', 'webstore', 'webshop', 'webmarket', 'webmall', 'webportal', 'webforum', 'weblog', 'webblog', 'webjournal', 'webdiary', 'webzine', 'webmagazine', 'webnewspaper', 'webnewsletter', 'webbroadcast', 'webstream', 'webchannel', 'webstation', 'webnetwork', 'webcommunity', 'webgroup', 'webteam', 'webcompany', 'webcorporation', 'weborganization', 'webassociation', 'webfoundation', 'webinstitute', 'webcollege', 'webuniversity', 'webacademy', 'webseminary', 'webconference', 'webconvention', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'webcelebration', 'webceremony', 'webritual', 'webperformance', 'webpresentation', 'webdemonstration', 'webexhibition', 'webfair', 'webshow', 'webconcert', 'webfestival', 'webparty', 'phone', 'smart', 'watch', 'farming', 'clothes', 'fashion', 'accessories', 'electronics', 'appliances', 'furniture', 'home', 'garden', 'tools', 'equipment', 'materials', 'supplies', 'machinery', 'vehicles', 'automobiles', 'cars', 'trucks', 'vans', 'motorcycles', 'bicycles', 'boats', 'yachts', 'jetskis', 'airplanes', 'helicopters', 'real estate', 'property', 'land', 'commercial', 'residential', 'industrial', 'agricultural', 'recreational', 'investment', 'development', 'construction', 'renovation', 'remodeling', 'repair', 'maintenance', 'cleaning', 'landscaping', 'gardening', 'decorating', 'painting', 'flooring', 'roofing', 'plumbing', 'electrical', 'heating', 'cooling', 'ventilation', 'insulation', 'windows', 'doors', 'walls', 'ceilings', 'floors', 'stairs', 'ramps', 'driveways', 'walkways', 'patios', 'decks', 'porches', 'balconies', 'terraces', 'pools', 'spas', 'saunas', 'hot tubs', 'fountains', 'ponds', 'streams', 'lakes', 'rivers', 'oceans', 'seas', 'mountains', 'hills', 'valleys', 'plains', 'deserts', 'forests', 'jungles', 'swamps', 'marshes', 'wetlands', 'tundra', 'arctic', 'antarctic', 'islands', 'archipelagos', 'peninsulas', 'capes', 'bays', 'inlets', 'coves', 'harbors', 'ports', 'docks', 'piers', 'wharves', 'marinas', 'lighthouses', 'towers', 'castles', 'forts', 'barracks', 'bunkers', 'trenches', 'fortifications', 'walls', 'smartphone', 'tablet', 'laptop', 'desktop', 'computer', 'server', 'network', 'internet', 'intranet', 'extranet', 'website', 'webpage', 'webapp', 'webstore', 'web'],
        authors: [{name: 'Retweet', url: 'https://retweet.com'}, {name: 'Retweet Dev Team'}],
        canonical: "https://retweet.com",
        alternate: {
            canonical: "https://retweet.com",
            'en-US': '/en',
            'ar-EG': '/ar',
            'ar-SA': '/ar',
            'ar-SD': '/ar',
            'ar-TN': '/ar',
            'ar-DZ': '/ar',
            'ar-MA': '/ar',
            'ar-LY': '/ar',
            'ar-SS': '/ar',
            'ar-ER': '/ar',
            'ar-DJ': '/ar',
            'ar-KW': '/ar',
            'ar-BH': '/ar',
            'ar-IQ': '/ar',
            'ar-JO': '/ar',
            'ar-LB': '/ar',
            'ar-OM': '/ar',
            'ar-PS': '/ar',
            'ar-QA': '/ar',
            'ar-SY': '/ar',
            'ar-AE': '/ar',
            'ar-YE': '/ar',
            'en-GB': '/en',
            'en-CA': '/en',
            'en-AU': '/en',
            'en-NZ': '/en',
            'en-IE': '/en',
            'en-ZA': '/en',
            'en-JM': '/en',
            'en-BZ': '/en',
            'en-TT': '/en',
            'en-ZW': '/en',
            'en-PH': '/en',
            'en-MY': '/en',
            'en-SG': '/en',
            'en-HK': '/en',
            'en-IN': '/en',
        },
        robots: "index, follow",
        openGraph: {
            type: 'website',
            title: 'Retweet',
            url: 'https://retweet.com/',
            description: "Retweet: Your gateway to a global community where you can connect, share thoughts, and explore endless possibilities. Buy, sell, rent, or trade goods and services effortlessly. From cars to real estate, electronics to fashion, Retweet connects you with friends, family, and businesses worldwide. Join us and experience the power of networking, marketing, and advertising in a dynamic social media platform. #Retweet #SocialMedia #GlobalCommunity",
            images: ['/assets/home/logo.png'],
            ttl: 604800
        },
        icons: {
            icon: '/assets/home/favicon.ico',
        }
    }
;

export default async function RootLayout({children, params}) {

    // GET THE LANGUAGE FROM PARAMS
    const {lang} = params;

    // GET THE TOKEN FROM COOKIES
    const token = cookies().get('retweet-token')?.value;

    // CHECK IF THE USER IS AUTHENTICATED
    const {authenticated, error, userData} = await useAuthentication(token);

    return (
        <html lang={lang || defaultLocale}>
        <body>
        <PrimeReactProvider>
            <ClientLayout lang={lang} authenticated={authenticated} error={error} userData={userData}>
                {children}
            </ClientLayout>
            <Footer lang={lang}/>
            <Toaster position={'bottom-right'}/>
        </PrimeReactProvider>
        </body>
        </html>
    );
}
