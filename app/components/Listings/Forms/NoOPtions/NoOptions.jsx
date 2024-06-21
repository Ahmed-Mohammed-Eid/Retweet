"use client";
import classes from "./NoOptions.module.scss";
import Location from "@/app/components/Listings/Forms/Globals/Location";
import Description from "@/app/components/Listings/Forms/Globals/Description";
import {useState} from "react";
import Price from "@/app/components/Listings/Forms/Globals/Price";
import ContactInformation from "@/app/components/Listings/Forms/Globals/ContactInformation";
import CategoryInfo from "@/app/components/Listings/Forms/Globals/CategoryInfo";

export default function NoOptions({
                                       lang,
                                       categoryName,
                                       subCategoryName,
                                       submit = () => {
                                       }
                                   }) {

    // LISTING DETAILS PART
    const [listingDetails, setListingDetails] = useState({

    });
    // LOCATION PART
    const [location, setLocation] = useState({
        city: '',
        neighborhood: '',
    });
    // DESCRIPTION PART
    const [description, setDescription] = useState({
        title: '',
        description: '',
    });
    // PRICE
    const [price, setPrice] = useState({
        price: '',
        currency: '',
    });

    // CONTACT PART
    const [contact, setContact] = useState({
        code: '',
        phone: '',
    });

    // SUBMIT FUNCTION
    const handleSubmit = () => {
        submit({
            listingDetails,
            location,
            description,
            price,
            contact
        });
    }

    return (
        <div className={`${classes.GeneralForm} rounded p-4`}>
            {/*  CATEGORY  */}
            <CategoryInfo
                lang={lang}
                categoryName={categoryName}
                subCategoryName={subCategoryName}
            />

            {/*  LISTING DETAILS  */}

            {/*  LOCATION  */}
            <Location
                lang={lang}
                setCity={(city) => setLocation({...location, city})}
                setNeighborhood={(neighborhood) => setLocation({...location, neighborhood})}
                city={location.city}
                neighborhood={location.neighborhood}
            />

            {/*  DESCRIPTION  */}
            <Description
                lang={lang}
                title={description.title}
                setTitle={(title) => setDescription({...description, title})}
                description={description.description}
                setDescription={(descriptionValue) => setDescription({
                    ...description,
                    description: descriptionValue
                })}
            />

            {/*  PRICE  */}
            <Price
                lang={lang}
                price={price.price}
                setPrice={(priceValue) => setPrice({...price, price: priceValue})}
                currency={price.currency}
                setCurrency={(currency) => setPrice({...price, currency})}
            />

            {/*  CONTACT INFORMATION  */}
            <ContactInformation
                lang={lang}
                cuntryCode={contact.code}
                setCountryCode={(code) => setContact({...contact, code})}
                phoneNumber={contact.phone}
                setPhoneNumber={(phoneNumber) => setContact({...contact, phone: phoneNumber})}
            />

            {/*  SUBMIT  */}
            <div className={`${classes.SubmitPart} rounded`}>
                <button
                    className={'bg-primary text-white p-4 rounded w-full mr-auto button--effect-small flex justify-center items-center gap-2'}
                    onClick={handleSubmit}
                >
                    <span
                        className={'uppercase'}>{lang === 'en' ? 'Save and PUBLISH listing' : 'حفظ ونشر القائمة'}</span>
                    <span>{lang === 'en' ? '→' : '←'}</span>
                </button>
            </div>
        </div>
    )
}