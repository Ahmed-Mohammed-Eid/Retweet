import FilterListingPart from "@/app/components/Listings/FilterListingPart/FilterListingPart";
import ListingsPartContent from "@/app/components/Listings/ListingsPartContent/ListingsPartContent";
import useAuthentication from "@/hooks/useAuthentication";

import {cookies} from "next/headers";


export default async function Listings({params: {lang}}) {

    
    // GET THE TOKEN FROM COOKIES
    const token = cookies().get('retweet-token')?.value;

    // AUTHENTICATION
    const {authenticated, error, userData} = await useAuthentication(token);

    return (
        <div className={`grid grid-cols-7 gap-2 mb-12`}>
            <div className={`col-span-2`}>
                <FilterListingPart lang={lang}/>
            </div>
            <div className={`col-span-5`}>
                <ListingsPartContent lang={lang} authenticated={authenticated}/>
            </div>
        </div>
    )
}