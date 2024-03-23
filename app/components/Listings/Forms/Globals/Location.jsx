"use client";

import classes from "@/app/components/Listings/Forms/RealEstateForm/RealEstateForm.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";

// REDUX
import {useDispatch, useSelector} from "react-redux";
import {Dropdown} from "primereact/dropdown";


export default function Location({
                                     lang,
                                     setCity = () => {},
                                     city,
                                     neighborhood,
                                     setNeighborhood = () => {},
}){

    // REDUX
    const userCountryInformation = useSelector(state => state.mainLayout.userCountryInformation);


    return (
        <div className={`${classes.LocationPart} p-12 rounded bg-white`}>
            <h2>
                {lang === 'en' ? 'Location' : 'موقع'}
            </h2>
            <Hint
                texts={lang === 'en' ? ['Describe the listing in more details you want people to know', 'Details increase your chance of getting the right buyer'] : ['صف القائمة بمزيد من التفاصيل التي تريد أن يعرفها الناس', 'التفاصيل تزيد من فرصتك في الحصول على المشتري المناسب']}
                lang={lang}
            />

            {/*CITY*/}
            <div className={`${classes.City} rounded bg-white flex flex-col gap-2 mt-8`}>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'city'}>{lang === 'en' ? 'City' : 'مدينة'}</label>
                    <Dropdown
                        filter={true}
                        id={'city'}
                        options={userCountryInformation?.cities || []}
                        value={city}
                        onChange={(e) => {
                            setCity(e.value);
                        }}
                        placeholder={lang === 'en' ? 'City' : 'مدينة'}
                    />
                </div>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'Neighborhood'}>{lang === 'en' ? 'Neighborhood' : 'حي'}</label>
                    <input
                        type="text"
                        id={'Neighborhood'}
                        placeholder={lang === 'en' ? 'Neighborhood' : 'حي'}
                        value={neighborhood || ''}
                        onChange={(e) => {
                            setNeighborhood(e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}