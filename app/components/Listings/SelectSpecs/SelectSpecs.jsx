"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import RealEstateForm from "@/app/components/Listings/Forms/RealEstateForm/RealEstateForm";
import classes from "./SelectSpecs.module.scss";
import toast from "react-hot-toast";
import axios from "axios";

export default function SelectSpecs({ lang }) {
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
        listingPrice,
        contactPhone,
        imagesId
    ) => {

        // GET THE TOKEN
        const token = localStorage.getItem("retweet-token");
    
        // VALIDATE THE FORM
        if (
            !listingTitle ||
            !listingItem ||
            !listingDescription ||
            !categoryId ||
            !subCategoryId ||
            !listingSpecs ||
            !listingCity ||
            !listingPrice ||
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
            .post(`${process.env.BASE_URL}/create/listing`, {
                listingTitle,
                listingItem,
                listingDescription,
                categoryId,
                subCategoryId,
                listingSpecs: JSON.stringify(listingSpecs),
                listingCity,
                listingPrice,
                contactPhone,
                imagesId,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
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
            .catch((error) => {
                toast.error(lang === "en" ? "An Error Occurred" : "حدث خطأ");
            });
    };

    return (
        <div className={"my-8"}>
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
                            values.contact.phone,
                            searchParamsValue.imagesId
                        );
                    }}
                />
            )}
            {!selectedCategory && (
                <p className={"text-center text-gray-500"}>
                    This Category Form is Under Development
                </p>
            )}
        </div>
    );
}
