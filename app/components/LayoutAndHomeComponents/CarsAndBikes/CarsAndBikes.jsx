import classes from "./CarsAndBikes.module.scss";
import CarsCard from "@/app/components/LayoutAndHomeComponents/CarsCard/CarsCard";

export default function CarsAndBikes({dictionary}) {
    const data = [
        {
            img: '/assets/home/testImg.png',
            title: 'CANON EOS DSLR Camera',
            price: '$500',
            model: 'BMW 2019',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
            model: 'SUV 2019',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
            model: 'BMW 2019',
        },
        {
            img: '/assets/home/testImg.png',
            title: 'Lorem Ipsum',
            price: '$500',
            model: 'BMW 2019',
        },
    ];


    return (
        <section className={classes.RealEstate}>
            <div className={classes.RealEstate__Top}>
                <div>
                    <h2>Cars And Bikes</h2>
                </div>
                <div>
                    <button>View All <span>&rarr;</span></button>
                </div>
            </div>
            <div className={classes.RealEstate__Container}>
                {
                    data.map((item, index) => {
                        return (
                            <CarsCard key={index} dictionary={dictionary} data={item}/>
                        )
                    })
                }
            </div>
        </section>
    )
}
