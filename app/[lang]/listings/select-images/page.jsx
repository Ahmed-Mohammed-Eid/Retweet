import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SelectImages from "@/app/components/Listings/SelectImages/SelectImages";

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
                    href: '/listings/select-images',
                    text: 'Select Images',
                    arrow: false
                },
            ]}/>
            <SelectImages lang={lang} />
        </div>
    )
}