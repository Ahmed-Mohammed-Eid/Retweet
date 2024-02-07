import classes from "./LatestAds.module.scss";
import Image from "next/image";
import Card from "@/app/components/LayoutAndHomeComponents/Card/Card";

export default function LatestAds({dictionary}) {
    const data = [
        {
            img: '/assets/home/testImg.png',
            title: 'CANON EOS DSLR Camera',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
        },
    ];


    return (
        <section className={classes.LatestAds}>
            <div className={classes.LatestAds__Top}>
                <div>
                    <h2>Latest Advertisements</h2>
                    <p>Explore Our Advertisements</p>
                </div>
                <div>
                    <button>View All <span>&rarr;</span></button>
                </div>
            </div>
            <div className={classes.LatestAds__Container}>
                {
                    data.map((item, index) => {
                        return (
                            <Card key={index} dictionary={dictionary} data={item}/>
                        )
                    })
                }
            </div>
            <div className={classes.LatestAds__Bottom}>
            </div>
        </section>
    )
}
