import classes from "./HomeCategories.module.scss";
import HomeCategory from "@/app/components/LayoutAndHomeComponents/HomeCategories/Category";
import Image from "next/image";

export default function HomeCategories() {
    return (
        <section className={classes.HomeCategories}>
            <div className={classes.HomeCategories__Top}>
                <div>
                    <h2>CATEGORIES</h2>
                    <p>Browse By Category</p>
                </div>
                <div>
                    <button>View All <span>&rarr;</span></button>
                </div>
            </div>
            <div className={classes.HomeCategories__Container}>
                <HomeCategory/>
                <HomeCategory/>
                <HomeCategory/>
                <HomeCategory/>
                <HomeCategory/>
                <HomeCategory/>
                <HomeCategory/>
                <HomeCategory/>
                <HomeCategory/>
            </div>
            <div className={classes.HomeCategories__Bottom}>
                <div className={classes.HomeCategories__Bottom__Left}>
                    <div className={classes.HomeCategories__Bottom__Left__Img}>
                        <Image src={'/assets/home/logo.png'} alt={'brands'} width={200} height={36}/>
                    </div>
                    <h2>Get More Listings & Sell More Fast</h2>
                    <ul>
                        <li>Get discounts for bulk listings</li>
                        <li>Sell more items</li>
                    </ul>
                    <button>View All Products <span>&rarr;</span></button>
                </div>
                <div className={classes.HomeCategories__Bottom__Right}>
                    <Image src={'/assets/home/viewAllProducts.png'} alt={'brands'} width={505} height={427}/>
                </div>
            </div>
        </section>
    )
}
