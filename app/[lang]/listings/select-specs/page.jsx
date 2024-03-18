import SecondaryNavigation from "@/app/components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SelectSpecs from "@/app/components/Listings/SelectSpecs/SelectSpecs";
export default function SelectSpecsPage({params: {lang}}) {
    return (
        <div className={'w-full'}>
            <SecondaryNavigation arrayOfLinks={[
                {
                    href: '/',
                    icon: '/assets/home/House.svg',
                    arrow: true
                },
                {
                    href: '/listings/select-specs',
                    text: 'Select Specs',
                    arrow: false
                },
            ]}/>
            <SelectSpecs lang={lang}/>
        </div>
    )
}