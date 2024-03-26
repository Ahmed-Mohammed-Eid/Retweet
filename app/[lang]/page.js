import {getDictionary} from "./dictionaries/dictionaries";
import HomeSwiper from "@/app/components/LayoutAndHomeComponents/HomeSwiper/HomeSwiper";
import HomeCategories from "@/app/components/LayoutAndHomeComponents/HomeCategories/HomeCategories";
import LatestAds from "@/app/components/LayoutAndHomeComponents/LatestAds/LatestAds";
import RealEstate from "@/app/components/LayoutAndHomeComponents/RealEstate/RealEstate";
import CarsAndBikes from "@/app/components/LayoutAndHomeComponents/CarsAndBikes/CarsAndBikes";
import SmartPhones from "@/app/components/LayoutAndHomeComponents/SmartPhones/SmartPhones";
import SaveGoogleToken from "@/app/components/AuthenticationComponents/SaveGoogleToken/SaveGoogleToken";


export const metadata = {
    title: 'ريتويت : إعلانات : سيارات للبيع : عقارات : بيوت : للبيع : خدمات : وظائف',
    description: 'ريتويت : إعلانات : سيارات للبيع : عقارات : بيوت : للبيع : خدمات : وظائف',
    keywords: 'ريتويت : إعلانات : سيارات للبيع : عقارات : بيوت : للبيع : خدمات : وظائف, ريتويت, سوق, سيارات للبيع, عقارات, بيوت, للبيع, خدمات, وظائف',
};

export default async function Home({params: {lang}}) {

    const dictionary = await getDictionary(lang);

    if(!dictionary) return

    return (
        <>
            <SaveGoogleToken/>
            <HomeSwiper/>
            <HomeCategories dictionary={dictionary} lang={lang}/>
            <LatestAds dictionary={dictionary} lang={lang}/>
            <RealEstate dictionary={dictionary} lang={lang}/>
            <CarsAndBikes dictionary={dictionary} lang={lang}/>
            <SmartPhones dictionary={dictionary} lang={lang}/>
        </>
    );
}

