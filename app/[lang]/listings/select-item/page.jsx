import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SelectSubcategoryItem from "@/app/components/Listings/SelectSubcategoryItem/SelectSubcategoryItem";

export default function SelectCategoryItemPage({params: {lang}}) {
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
                    href: '/listings/select-item',
                    text: 'Select Item',
                    arrow: false
                },
            ]}/>
            <SelectSubcategoryItem lang={lang}/>
        </div>
    )
}