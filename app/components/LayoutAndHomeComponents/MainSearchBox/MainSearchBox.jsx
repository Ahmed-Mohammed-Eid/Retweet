import {Button} from "primereact/button";
import classes from "./MainSearchBox.module.scss"

export default function MainSearchBox({lang}) {
    return (
        <div className={classes.SearchBox}>
            <input type={'search'} placeholder={'Search in Retweet'} className={classes.SearchBox__input}/>
            <Button className={classes.SearchBox__button}>Search</Button>
        </div>
    );
}