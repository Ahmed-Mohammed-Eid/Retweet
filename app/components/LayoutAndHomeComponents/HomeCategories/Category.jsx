import Image from "next/image";
import classes from './HomeCategory.module.scss'

export default function HomeCategory() {
    return (
        <div className={classes.HomeCategory}>
            <div className={classes.HomeCategory__Img}>
                <Image src={'/assets/home/mobile.png'} alt={'category'} width={75} height={75}/>
            </div>
            <h1>Mobile</h1>
        </div>
    )
}