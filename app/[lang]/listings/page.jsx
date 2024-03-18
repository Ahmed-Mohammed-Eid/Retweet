import FilterListingPart from "@/app/components/Listings/FilterListingPart/FilterListingPart";
import ListingsPartContent from "@/app/components/Listings/ListingsPartContent/ListingsPartContent";

export default function Listings({params: {lang}}) {
    return (
        <div className={`grid grid-cols-7 gap-2 mb-12`}>
            <div className={`col-span-2`}>
                <FilterListingPart lang={lang}/>
            </div>
            <div className={`col-span-5`}>
                <ListingsPartContent lang={lang}/>
            </div>
        </div>
    )
}