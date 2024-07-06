"use client";

import classes from "./SmartPhones.module.scss";
import Card from "@/app/components/LayoutAndHomeComponents/Card/Card";

// REDUX
import {useSelector} from "react-redux";

export default function SmartPhones({dictionary}) {

    // REDUX
    const data = useSelector(state => state.home.advertisements.mobiles) || [];

    return (
        <section className={classes.RealEstate}>
            <div className={classes.RealEstate__Top}>
                <div>
                    <h2>Smart Phones</h2>
                </div>
                <div>
                    {/*<button>View All <span>&rarr;</span></button>*/}
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
