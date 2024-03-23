import {Button} from "primereact/button";
import classes from "./MainSearchBox.module.scss"

export default function MainSearchBox({lang}) {
    return (
        <div className={classes.SearchBox}>
            <input type={'search'} placeholder={lang === 'en' ? 'Search for anything' : 'ابحث عن أي شيء'} className={classes.SearchBox__input}/>
            <Button className={classes.SearchBox__button}>
                {lang === 'en' ? 'Search' : 'بحث'}
            </Button>
        </div>
    );
}