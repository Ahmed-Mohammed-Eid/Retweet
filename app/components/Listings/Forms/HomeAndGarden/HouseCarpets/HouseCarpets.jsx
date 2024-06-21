"use client";
import classes from "./HouseCarpets.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";
import RadioComponent from "@/app/components/Listings/RadioComponent/RadioComponent";
import Location from "@/app/components/Listings/Forms/Globals/Location";
import Description from "@/app/components/Listings/Forms/Globals/Description";
import { useState } from "react";
import Price from "@/app/components/Listings/Forms/Globals/Price";
import ContactInformation from "@/app/components/Listings/Forms/Globals/ContactInformation";
import CategoryInfo from "@/app/components/Listings/Forms/Globals/CategoryInfo";

// JSON DATA
import HouseCarpetsJson from "@/Json_Data/HouseAndGarden/HouseCarpets.json";

export default function HouseCarpets({
    lang,
    categoryName,
    subCategoryName,
    submit = () => {},
}) {
    // LISTING DETAILS PART
    const [listingDetails, setListingDetails] = useState({
        [String(HouseCarpetsJson[0].labelEn).toLocaleLowerCase()]: {
            labelAr: HouseCarpetsJson[0].labelAr,
            labelEn: HouseCarpetsJson[0].labelEn,
            value: "",
        },
        [String(HouseCarpetsJson[1].labelEn).toLocaleLowerCase()]: {
            labelAr: HouseCarpetsJson[1].labelAr,
            labelEn: HouseCarpetsJson[1].labelEn,
            value: "",
        },
    });
    // LOCATION PART
    const [location, setLocation] = useState({
        city: "",
        neighborhood: "",
    });
    // DESCRIPTION PART
    const [description, setDescription] = useState({
        title: "",
        description: "",
    });
    // PRICE
    const [price, setPrice] = useState({
        price: "",
        currency: "",
    });

    // CONTACT PART
    const [contact, setContact] = useState({
        code: "",
        phone: "",
    });

    // SUBMIT FUNCTION
    const handleSubmit = () => {
        submit({
            listingDetails,
            location,
            description,
            price,
            contact,
        });
    };

    return (
        <div className={`${classes.SpareParts} rounded p-4`}>
            {/*  CATEGORY  */}
            <CategoryInfo
                lang={lang}
                categoryName={categoryName}
                subCategoryName={subCategoryName}
            />

            {/*  LISTING DETAILS  */}
            <div
                className={`${classes.ListingDetailsPart} p-6 rounded bg-white`}
            >
                <h2 className={"uppercase"}>
                    {lang === "en" ? "Listing Details" : "تفاصيل القائمة"}
                </h2>

                <Hint
                    texts={
                        lang === "en"
                            ? [
                                  "Attract more people to your listing by filling all information and being accurate",
                              ]
                            : [
                                  "جذب المزيد من الناس إلى قائمتك من خلال ملء جميع المعلومات وكون دقيقًا",
                              ]
                    }
                />

                {/*  CAR TYPE  */}
                <div className={`${classes.Type} rounded bg-white mt-4`}>
                    <h3>
                        {lang === "en"
                            ? HouseCarpetsJson[0].labelEn
                            : HouseCarpetsJson[0].labelAr}
                    </h3>
                    <div className={"flex justify-start gap-2 flex-wrap"}>
                        {HouseCarpetsJson[0].Values.map((value, index) => (
                            <RadioComponent
                                key={index}
                                lang={lang}
                                value={value.labelEn}
                                textAr={value.labelAr}
                                textEn={value.labelEn}
                                name={String(HouseCarpetsJson[0].labelEn)}
                                onChange={(event) => {
                                    setListingDetails({
                                        ...listingDetails,
                                        [String(
                                            HouseCarpetsJson[0].labelEn
                                        ).toLocaleLowerCase()]: {
                                            ...listingDetails[
                                                String(
                                                    HouseCarpetsJson[0].labelEn
                                                ).toLocaleLowerCase()
                                            ],
                                            value: event.target.value,
                                        },
                                    });
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/*  Delivery  */}
                <div className={`${classes.Delivery} rounded bg-white`}>
                    <h3 className={"uppercase"}>
                        {lang === "en"
                            ? HouseCarpetsJson[1].labelEn
                            : HouseCarpetsJson[1].labelAr}
                    </h3>

                    <div className={"flex justify-start gap-2 flex-wrap"}>
                        {HouseCarpetsJson[1].Values.map((value, index) => (
                            <RadioComponent
                                key={index}
                                lang={lang}
                                value={value.labelEn}
                                textAr={value.labelAr}
                                textEn={value.labelEn}
                                name={String(HouseCarpetsJson[1].labelEn)}
                                onChange={(event) => {
                                    setListingDetails({
                                        ...listingDetails,
                                        [String(
                                            HouseCarpetsJson[1].labelEn
                                        ).toLocaleLowerCase()]: {
                                            ...listingDetails[
                                                String(
                                                    HouseCarpetsJson[1].labelEn
                                                ).toLocaleLowerCase()
                                            ],
                                            value: event.target.value,
                                        },
                                    });
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/*  LOCATION  */}
            <Location
                lang={lang}
                setCity={(city) => setLocation({ ...location, city })}
                setNeighborhood={(neighborhood) =>
                    setLocation({ ...location, neighborhood })
                }
                city={location.city}
                neighborhood={location.neighborhood}
            />

            {/*  DESCRIPTION  */}
            <Description
                lang={lang}
                title={description.title}
                setTitle={(title) => setDescription({ ...description, title })}
                description={description.description}
                setDescription={(descriptionValue) =>
                    setDescription({
                        ...description,
                        description: descriptionValue,
                    })
                }
            />

            {/*  PRICE  */}
            <Price
                lang={lang}
                price={price.price}
                setPrice={(priceValue) =>
                    setPrice({ ...price, price: priceValue })
                }
                currency={price.currency}
                setCurrency={(currency) => setPrice({ ...price, currency })}
            />

            {/*  CONTACT INFORMATION  */}
            <ContactInformation
                lang={lang}
                cuntryCode={contact.code}
                setCountryCode={(code) => setContact({ ...contact, code })}
                phoneNumber={contact.phone}
                setPhoneNumber={(phoneNumber) =>
                    setContact({ ...contact, phone: phoneNumber })
                }
            />

            {/*  SUBMIT  */}
            <div className={`${classes.SubmitPart} rounded`}>
                <button
                    className={
                        "bg-primary text-white p-4 rounded w-full mr-auto button--effect-small flex justify-center items-center gap-2"
                    }
                    onClick={handleSubmit}
                >
                    <span className={"uppercase"}>
                        {lang === "en"
                            ? "Save and PUBLISH listing"
                            : "حفظ ونشر القائمة"}
                    </span>
                    <span>{lang === "en" ? "→" : "←"}</span>
                </button>
            </div>
        </div>
    );
}
