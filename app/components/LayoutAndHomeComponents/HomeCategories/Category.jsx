import Image from "next/image";
import Link from "next/link";
import classes from './HomeCategory.module.scss'

export default function HomeCategory({category, lang}) {
    return (
        <Link className={classes.HomeCategory} href={`/listings?categoryId=${category._id}&subcategoryId=&item=&location=&minPrice=&maxPrice=&page=`}>
            <div className={classes.HomeCategory__Img}>
                <Image src={category.categoryImage} alt={'category'} width={75} height={75}/>
            </div>
            <h2>{lang === 'en'? category.categoryNameEn: category.categoryName}</h2>
        </Link>
    )
}