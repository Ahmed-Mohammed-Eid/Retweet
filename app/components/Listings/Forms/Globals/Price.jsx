"use client";


import classes from "@/app/components/Listings/Forms/RealEstateForm/RealEstateForm.module.scss";

import Hint from "@/app/components/Listings/Hint/Hint";
import DropDown from "@/app/components/Listings/DropDown/DropDown";

// REDUX
import {useSelector} from "react-redux";

export default function Price({
                                    lang,
                                    price,
                                    setPrice = () => {},
                                    currency,
                                    setCurrency = () => {},
                              }) {

    // REDUX
    const userCountryInformation = useSelector(state => state.mainLayout.userCountryInformation);

    return (
        <div className={`${classes.PricePart} p-12 rounded bg-white`}>
            <h2>
                {lang === 'en' ? 'Price' : 'السعر'}
            </h2>
            <Hint
                texts={lang === 'en' ? ['Set the price for your listing', 'Price should be reasonable'] : ['قم بتعيين السعر لقائمتك', 'يجب أن يكون السعر معقول']}
                lang={lang}
            />

            <div className={'grid grid-cols-4 gap-2 mt-8'}>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'currency'}>{lang === 'en' ? 'Currency' : 'عملة'}</label>
                    <DropDown
                        value={userCountryInformation.currency || ''}
                        disabled={true}
                        options={[{label: userCountryInformation.currency, value: userCountryInformation.currency}]}
                        onChange={(e) => {
                            setCurrency(e.value);
                        }}
                        placeholder={lang === 'en' ? 'Select Currency' : 'حدد العملة'}
                    />
                </div>
                <div className={'flex flex-col gap-2 col-span-3'}>
                    <label htmlFor={'price'}>{lang === 'en' ? 'Price' : 'السعر'}</label>
                    <input
                        type="number"
                        id={'price'}
                        placeholder={lang === 'en' ? 'Price' : 'السعر'}
                        value={price || ''}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>)
}