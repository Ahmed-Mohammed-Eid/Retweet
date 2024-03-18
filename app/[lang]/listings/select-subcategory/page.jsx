import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SelectSubcategory from "@/app/components/Listings/SelectSubcategory/SelectSubcategory";

export default function SelectCategoryPage({params: {lang}}) {
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
                    text: 'Category',
                    arrow: true
                },
                {
                    href: '/listings/select-subcategory',
                    text: 'Select Subcategory',
                    arrow: false
                },
            ]}/>
            <SelectSubcategory lang={lang}/>
        </div>
    )
}