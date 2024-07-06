"use client";

import classes from "./CarsAndBikes.module.scss";
import CarsCard from "@/app/components/LayoutAndHomeComponents/CarsCard/CarsCard";

// REDUX
import {useSelector} from "react-redux";

export default function CarsAndBikes({dictionary}) {

    // REDUX
    const data = useSelector(state => state.home.advertisements.cars) || [];

    return (
        <section className={classes.RealEstate}>
            <div className={classes.RealEstate__Top}>
                <div>
                    <h2>Cars And Bikes</h2>
                </div>
                <div>
                    {/*<button>View All <span>&rarr;</span></button>*/}
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
