"use client";
import classes from "./TrucksTrailers.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";
import RadioComponent from "@/app/components/Listings/RadioComponent/RadioComponent";
import DropDown from "@/app/components/Listings/DropDown/DropDown";
import Location from "@/app/components/Listings/Forms/Globals/Location";
import Description from "@/app/components/Listings/Forms/Globals/Description";
import { useState } from "react";
import Price from "@/app/components/Listings/Forms/Globals/Price";
import ContactInformation from "@/app/components/Listings/Forms/Globals/ContactInformation";
import CategoryInfo from "@/app/components/Listings/Forms/Globals/CategoryInfo";
import { Calendar } from "primereact/calendar";
import Spinner from "@/app/components/LayoutAndHomeComponents/Spinner/Spinner";

// JSON DATA
import TrucksTrailersJson from "@/Json_Data/Cars/TrucksTrailers.json";

export default function TrucksTrailers({
    lang,
    categoryName,
    subCategoryName,
    submit = () => {},
    loading = false,
}) {
    // LISTING DETAILS PART
    const [listingDetails, setListingDetails] = useState({
        [String(TrucksTrailersJson[0].labelEn).toLocaleLowerCase()]: {
            labelAr: TrucksTrailersJson[0].labelAr,
            labelEn: TrucksTrailersJson[0].labelEn,
            value: "",
        },
        [String(TrucksTrailersJson[1].labelEn).toLocaleLowerCase()]: {
            labelAr: TrucksTrailersJson[1].labelAr,
            labelEn: TrucksTrailersJson[1].labelEn,
            value: "",
        },
        [String(TrucksTrailersJson[2].labelEn).toLocaleLowerCase()]: {
            labelAr: TrucksTrailersJson[2].labelAr,
            labelEn: TrucksTrailersJson[2].labelEn,
            value: "",
        },
        [String(TrucksTrailersJson[3].labelEn).toLocaleLowerCase()]: {
            labelAr: TrucksTrailersJson[3].labelAr,
            labelEn: TrucksTrailersJson[3].labelEn,
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

    // CREATE BRAND OPTIONS FOR DROPDOWN
    const modelsOptions = TrucksTrailersJson[1].Values.map((value) => {
        return {
            label: lang === "en" ? value.labelEn : value.labelAr,
            value: value.labelEn,
        };
    });

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
                            ? TrucksTrailersJson[0].labelEn
                            : TrucksTrailersJson[0].labelAr}
                    </h3>
                    <div className={"flex justify-start gap-2 flex-wrap"}>
                        {TrucksTrailersJson[0].Values.map((value, index) => (
                            <RadioComponent
                                key={index}
                                lang={lang}
                                value={value.labelEn}
                                textAr={value.labelAr}
                                textEn={value.labelEn}
                                name={String(TrucksTrailersJson[0].labelEn)}
                                onChange={(event) => {
                                    setListingDetails({
                                        ...listingDetails,
                                        [String(
                                            TrucksTrailersJson[0].labelEn
                                        ).toLocaleLowerCase()]: {
                                            ...listingDetails[
                                                String(
                                                    TrucksTrailersJson[0]
                                                        .labelEn
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

                {/* MODEL */}
                <div className={`${classes.Size} rounded bg-white`}>
                    <h3 className={"uppercase"}>
                        {lang === "en"
                            ? TrucksTrailersJson[1].labelEn
                            : TrucksTrailersJson[1].labelAr}
                    </h3>
                    <div className={"flex justify-start gap-2 flex-wrap"}>
                        <DropDown
                            value={
                                listingDetails[
                                    String(
                                        TrucksTrailersJson[1].labelEn
                                    ).toLocaleLowerCase()
                                ].value
                            }
                            onChange={(value) => {
                                setListingDetails({
                                    ...listingDetails,
                                    [String(
                                        TrucksTrailersJson[1].labelEn
                                    ).toLocaleLowerCase()]: {
                                        ...listingDetails[
                                            String(
                                                TrucksTrailersJson[1].labelEn
                                            ).toLocaleLowerCase()
                                        ],
                                        value: value.value,
                                    },
                                });
                            }}
                            options={modelsOptions}
                            filter={true}
                            placeholder={
                                lang === "en"
                                    ? TrucksTrailersJson[1].labelEn
                                    : TrucksTrailersJson[1].labelAr
                            }
                        />
                    </div>
                </div>

                {/*  Delivery  */}
                <div className={`${classes.Delivery} rounded bg-white`}>
                    <h3 className={"uppercase"}>
                        {lang === "en"
                            ? TrucksTrailersJson[2].labelEn
                            : TrucksTrailersJson[2].labelAr}
                    </h3>

                    <Calendar
                        // 1970-01-01
                        minDate={new Date(0)}
                        value={
                            listingDetails[
                                String(
                                    TrucksTrailersJson[2].labelEn
                                ).toLocaleLowerCase()
                            ].value
                        }
                        style={{ width: "100%" }}
                        maxDate={new Date()}
                        onChange={(event) => {
                            setListingDetails({
                                ...listingDetails,
                                [String(
                                    TrucksTrailersJson[2].labelEn
                                ).toLocaleLowerCase()]: {
                                    ...listingDetails[
                                        String(
                                            TrucksTrailersJson[2].labelEn
                                        ).toLocaleLowerCase()
                                    ],
                                    value: event.value,
                                },
                            });
                        }}
                        showIcon
                        dateFormat={"yy-mm-dd"}
                        placeholder={
                            lang === "en"
                                ? TrucksTrailersJson[2].labelEn
                                : TrucksTrailersJson[2].labelAr
                        }
                    />
                </div>

                {/*  condition  */}
                <div className={`${classes.Condition} rounded bg-white`}>
                    <h3 className={"uppercase"}>
                        {lang === "en"
                            ? TrucksTrailersJson[3].labelEn
                            : TrucksTrailersJson[3].labelAr}
                    </h3>

                    <div className={"flex justify-start gap-2 flex-wrap"}>
                        {TrucksTrailersJson[3].Values.map((value, index) => (
                            <RadioComponent
                                key={index}
                                lang={lang}
                                value={value.labelEn}
                                textAr={value.labelAr}
                                textEn={value.labelEn}
                                name={String(TrucksTrailersJson[3].labelEn)}
                                onChange={(event) => {
                                    setListingDetails({
                                        ...listingDetails,
                                        [String(
                                            TrucksTrailersJson[3].labelEn
                                        ).toLocaleLowerCase()]: {
                                            ...listingDetails[
                                                String(
                                                    TrucksTrailersJson[3]
                                                        .labelEn
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
                    disabled={loading}
                >
                    {loading ? <Spinner /> : null}
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
