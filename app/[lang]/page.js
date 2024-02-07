import {getDictionary} from "./dictionaries/dictionaries";
import HomeSwiper from "@/app/components/LayoutAndHomeComponents/HomeSwiper/HomeSwiper";
import HomeCategories from "@/app/components/LayoutAndHomeComponents/HomeCategories/HomeCategories";
import LatestAds from "@/app/components/LayoutAndHomeComponents/LatestAds/LatestAds";
import RealEstate from "@/app/components/LayoutAndHomeComponents/RealEstate/RealEstate";
import CarsAndBikes from "@/app/components/LayoutAndHomeComponents/CarsAndBikes/CarsAndBikes";
import SmartPhones from "@/app/components/LayoutAndHomeComponents/SmartPhones/SmartPhones";
import SaveGoogleToken from "@/app/components/AuthenticationComponents/SaveGoogleToken/SaveGoogleToken";

export default async function Home({params: {lang}}) {
    const dictionary = await getDictionary(lang);

    if(!dictionary) return

    return (
        <>
            <SaveGoogleToken/>
            <HomeSwiper/>
            <HomeCategories dictionary={dictionary}/>
            <LatestAds dictionary={dictionary}/>
            <RealEstate dictionary={dictionary}/>
            <CarsAndBikes dictionary={dictionary}/>
            <SmartPhones dictionary={dictionary}/>
        </>
    );
}