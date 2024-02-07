import classes from "./SmartPhones.module.scss";
import Card from "@/app/components/LayoutAndHomeComponents/Card/Card";

export default function SmartPhones({dictionary}) {
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
    ];


    return (
        <section className={classes.RealEstate}>
            <div className={classes.RealEstate__Top}>
                <div>
                    <h2>Smart Phones</h2>
                </div>
                <div>
                    <button>View All <span>&rarr;</span></button>
                </div>
            </div>
            <div className={classes.RealEstate__Container}>
                {
                    data.map((item, index) => {
                        return (
                            <Card key={index} dictionary={dictionary} data={item}/>
                        )
                    })
                }
            </div>
        </section>
    )
}
