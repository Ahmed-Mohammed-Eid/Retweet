"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
// IMPORTS ###
import RealEstateForm from "@/app/components/Listings/Forms/RealEstateForm/RealEstateForm";
// CARS
import CarsForm from "@/app/components/Listings/Forms/Cars/CarsForSale/Cars";
import SpareParts from "@/app/components/Listings/Forms/Cars/SpareParts/SpareParts";
import Accessories from "@/app/components/Listings/Forms/Cars/Accessories/Accessories";
import WheelRims from "@/app/components/Listings/Forms/Cars/WheelRims/WheelRims";
import TrucksTrailers from "../Forms/Cars/TrucksTrailers/TrucksTrailers";

// MOBILE
import MobileForm from "@/app/components/Listings/Forms/Mobile/MobilesAndTablets/Mobile";
import SmartWatches from "@/app/components/Listings/Forms/Mobile/SmartWatches/SmartWatches";
import PhoneNumbers from "@/app/components/Listings/Forms/Mobile/PhoneNumbers/PhoneNumbers";
import Headphones from "@/app/components/Listings/Forms/Mobile/Headphones/Headphones";
import CoversAndProtectors from "@/app/components/Listings/Forms/Mobile/CoversAndProtectors/CoversAndProtectors";
import ChargersAndCables from "@/app/components/Listings/Forms/Mobile/ChargersAndCables/ChargersAndCables";
import SparePartsMobile from "@/app/components/Listings/Forms/Mobile/SpareParts/SpareParts";

// VIDEO GAMES
import Consoles from "@/app/components/Listings/Forms/VideoGames/Consoles/Consoles";
import VideoGames from "@/app/components/Listings/Forms/VideoGames/VideoGames/VideoGames";
import VideoGamesAccessories from "@/app/components/Listings/Forms/VideoGames/Accessories/Accessories";
import GiftCards from "@/app/components/Listings/Forms/VideoGames/GiftCards/GiftCards";
import AccountsAndCharacters
    from "@/app/components/Listings/Forms/VideoGames/AccountsAndCharacters/AccountsAndCharacters";
import Figures from "@/app/components/Listings/Forms/VideoGames/Figures/Figures ";

// GENERAL AND NO OPTIONS
import General from "@/app/components/Listings/Forms/General/General";
import NoOptions from "@/app/components/Listings/Forms/NoOPtions/NoOptions";

// STYLES
// import classes from "./SelectSpecs.module.scss";

// TOAST
import toast from "react-hot-toast";

// AXIOS
import axios from "axios";

export default function SelectSpecs({ lang }) {
    // STATIC EXISTS FORM TYPES
    const formTypes = [
        "real-estate",
        "cars",
        "mobiles-tablets",
        "carsSale",
        "carsSpareParts",
        "carsAccessories",
        "carsWheelRims",
        "trucks-trailers",
        "smartWatches",
        "phoneNumbers",
    ];

    // ROUTER
    const searchParams = useSearchParams();

    // STATES
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchParamsValue, setSearchParamsValue] = useState({});

    // EFFECT TO SET THE SELECTED CATEGORY
    useEffect(() => {
        // GET THE imagesId AND category AND THE subCategory AND THE formType FROM THE searchParams
        const imagesId = searchParams.get("imagesId");
        const category = searchParams.get("category");
        const subCategory = searchParams.get("subCategory");
        const item = searchParams.get("item");
        const formType = searchParams.get("formType");

        // SET THE SELECTED CATEGORY
        setSearchParamsValue({
            imagesId,
            category,
            subCategory,
            item,
        });

        // SET THE SELECTED CATEGORY
        if (formType) {
            setSelectedCategory(formType);
        }
    }, []);

    // HANDLER TO SUBMIT THE FORM
    const handleSubmit = (
        listingTitle,
        listingItem,
        listingDescription,
        categoryId,
        subCategoryId,
        listingSpecs,
        listingCity,
        listingNeighborhood,
        listingPrice,
        currency,
        contactPhone,
        imagesId
    ) => {
        // GET THE TOKEN
        const token = localStorage.getItem("retweet-token");

        // VALIDATE THE FORM
        if (
            !listingTitle ||
            !listingDescription ||
            !categoryId ||
            !subCategoryId ||
            !listingSpecs ||
            !listingCity ||
            !listingNeighborhood ||
            !listingPrice ||
            !currency ||
            !contactPhone ||
            !imagesId
        ) {
            return toast.error(
                lang === "en"
                    ? "Please Fill All The Fields"
                    : "الرجاء ملء جميع الحقول"
            );
        }

        // SEND THE FORM
        axios
            .post(
                `${process.env.BASE_URL}/create/listing`,
                {
                    listingTitle,
                    listingItem,
                    listingDescription,
                    categoryId,
                    subCategoryId,
                    listingSpecs: JSON.stringify(listingSpecs),
                    listingCity,
                    neighbourhood: listingNeighborhood,
                    listingPrice,
                    listingCurrency: currency,
                    contactPhone,
                    imagesId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                if (response.data.success) {
                    toast.success(
                        lang === "en"
                            ? "Your Listing Has Been Created"
                            : "تم إنشاء القائمة الخاصة بك"
                    );
                } else {
                    toast.error(
                        lang === "en" ? "An Error Occurred" : "حدث خطأ"
                    );
                }
            })
            .catch((_) => {
                toast.error(lang === "en" ? "An Error Occurred" : "حدث خطأ");
            });
    };


    return (
        <div className={"my-8"}>
            {/* REAL ESTATE */}
            {/* #SELL AND RENT */}
            {selectedCategory === "real-estate" && (
                <RealEstateForm
                    lang={lang}
                    categoryName={"Real Estate"}
                    subCategoryName={"Apartments"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}
            {/* CARS */}
            {/* #SELL AND RENT */}
            {selectedCategory === "carsSale" && (
                <CarsForm
                    lang={lang}
                    categoryName={"Cars"}
                    subCategoryName={"Cars"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* SPARE PARTS */}
            {selectedCategory === "carsSpareParts" && (
                <SpareParts
                    lang={lang}
                    categoryName={"Cars"}
                    subCategoryName={"Spare Parts"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* ACCESSORIES */}
            {selectedCategory === "carsAccessories" && (
                <Accessories
                    lang={lang}
                    categoryName={"Cars"}
                    subCategoryName={"VideoGames"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* WHEEL RIMS */}
            {selectedCategory === "carsWheelRims" && (
                <WheelRims
                    lang={lang}
                    categoryName={"Cars"}
                    subCategoryName={"Wheel Rims"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* TRUCKS && TRAILERS */}
            {selectedCategory === "trucks-trailers" && (
                <TrucksTrailers
                    lang={lang}
                    categoryName={"Cars"}
                    subCategoryName={"Trucks & Trailers"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}
            
            {/* MOBILES */}
            {selectedCategory === "mobiles-tablets" && (
                <MobileForm
                    lang={lang}
                    categoryName={"Mobile"}
                    subCategoryName={"Mobile"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* SMART WATCHES */}
            {selectedCategory === "smartWatches" && (
                <SmartWatches
                    lang={lang}
                    categoryName={"Mobile"}
                    subCategoryName={"Smart Watches"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* PHONE NUMBERS */}
            {selectedCategory === "phoneNumbers" && (
                <PhoneNumbers
                    lang={lang}
                    categoryName={"Mobile"}
                    subCategoryName={"Phone Numbers"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* HEADPHONES */}
            {selectedCategory === "headphones" && (
                <Headphones
                    lang={lang}
                    categoryName={"Mobile"}
                    subCategoryName={"VideoGames"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* COVERS AND PROTECTORS */}
            {selectedCategory === "coversAndProtectors" && (
                <CoversAndProtectors
                    lang={lang}
                    categoryName={"Mobile"}
                    subCategoryName={"VideoGames"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* CHARGERS AND CABLES */}
            {selectedCategory === "chargersAndCables" && (
                <ChargersAndCables
                    lang={lang}
                    categoryName={"Mobile"}
                    subCategoryName={"VideoGames"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* SPARE PARTS */}
            {(selectedCategory === "mobileSpareParts" || selectedCategory === "mobileAccessories") && (
                <SparePartsMobile
                    lang={lang}
                    categoryName={"Mobile"}
                    subCategoryName={"VideoGames"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* VIDEO GAMES */}
            {/* #CONSOLES */}
            {selectedCategory === "consoles" && (
                <Consoles
                    lang={lang}
                    categoryName={"Video Games"}
                    subCategoryName={"VideoGames"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* #VIDEO GAMES */}
            {selectedCategory === "videoGames" && (
                <VideoGames
                    lang={lang}
                    categoryName={"Video Games"}
                    subCategoryName={"VideoGames"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* #VIDEO GAMES ACCESSORIES */}
            {selectedCategory === "videoGamesAccessories" && (
                <VideoGamesAccessories
                    lang={lang}
                    categoryName={"Video Games"}
                    subCategoryName={"Accessories"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* #GIFT CARDS */}
            {selectedCategory === "giftCards" && (
                <GiftCards
                    lang={lang}
                    categoryName={"Video Games"}
                    subCategoryName={"Gift Cards"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* #ACCOUNTS AND CHARACTERS */}
            {selectedCategory === "accountsAndCharacters" && (
                <AccountsAndCharacters
                    lang={lang}
                    categoryName={"Video Games"}
                    subCategoryName={"Accounts & Characters"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* FIGURES */}
            {selectedCategory === "figures" && (
                <Figures
                    lang={lang}
                    categoryName={"Video Games"}
                    subCategoryName={"Figures"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}


            {/* GENERAL*/}
            {selectedCategory === "general" && (
                <General
                    lang={lang}
                    categoryName={"NoOptions"}
                    subCategoryName={"NoOptions"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

            {/* ELSE AND NO OPTIONS */}
            {((!selectedCategory || !formTypes.includes(selectedCategory)) || selectedCategory === "noOptions") && (
                <NoOptions
                    lang={lang}
                    categoryName={"NoOptions"}
                    subCategoryName={"NoOptions"}
                    submit={(values) => {
                        handleSubmit(
                            values.description.title,
                            searchParamsValue.item,
                            values.description.description,
                            searchParamsValue.category,
                            searchParamsValue.subCategory,
                            values.listingDetails,
                            values.location.city,
                            values.location.neighborhood,
                            values.price.price,
                            values.price.currency,
                            `${values.contact.code}${values.contact.phone}`,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}

        </div>
    );
}
