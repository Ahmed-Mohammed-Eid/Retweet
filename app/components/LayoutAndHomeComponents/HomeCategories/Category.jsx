import Image from "next/image";
import Link from "next/link";
import classes from './HomeCategory.module.scss'

export default function HomeCategory({category, lang}) {
    return (
        <Link className={classes.HomeCategory} href={`/listings?category=${lang === 'en'? category.categoryNameEn: category.categoryName}`}>
            <div className={classes.HomeCategory__Img}>
                <Image src={category.categoryImage} alt={'category'} width={75} height={75}/>
            </div>
            <h2>{lang === 'en'? category.categoryNameEn: category.categoryName}</h2>
        </Link>
    )
}