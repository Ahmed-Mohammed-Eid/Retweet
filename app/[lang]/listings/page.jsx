import FilterListingPart from "@/app/components/Listings/FilterListingPart/FilterListingPart";
import ListingsPartContent from "@/app/components/Listings/ListingsPartContent/ListingsPartContent";
import useAuthentication from "@/hooks/useAuthentication";
import classes from "./listings.module.scss";




import {cookies} from "next/headers";


export default async function Listings({params: {lang}}) {
    // GET THE TOKEN FROM COOKIES
    const token = cookies().get('retweet-token')?.value;

    // AUTHENTICATION
    const {authenticated, error, userData} = await useAuthentication(token);

    return (
        <div className={`${classes.ContentContainer}`}>
            <div className={`${classes.Filter}`}>
                <FilterListingPart lang={lang}/>
            </div>
            <div className={`${classes.Cards}`}>
                <ListingsPartContent lang={lang} authenticated={authenticated}/>
            </div>
        </div>
    )
}