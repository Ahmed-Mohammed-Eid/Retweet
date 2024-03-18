import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SelectCategory from "@/app/components/Listings/SelectCategory/SelectCategory";

export default function SelectSubCategoryPage({params: {lang}}) {
    return (
        <div className={'w-full'}>
            <SecondaryNavigation arrayOfLinks={[
                {
                    href: '/',
                    icon: '/assets/home/House.svg',
                    arrow: true
                },
                {
                    href: '/listings/select-category',
                    text: 'Select Category',
                    arrow: false
                },
            ]}/>
            <SelectCategory lang={lang}/>
        </div>
    )
}