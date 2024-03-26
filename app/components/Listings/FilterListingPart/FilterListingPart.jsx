"use client";
import React, {useEffect, useState} from "react";
import classes from "./FilterListingPart.module.scss";
import {Dropdown} from "primereact/dropdown";
import PriceRange from "@/app/components/Listings/PriceRange/PriceRange";
import FilterRadio from "./FilterRadio/FilterRadio";
import {useSearchParams} from "next/navigation";

// REDUX
import {useSelector} from "react-redux";
import axios from "axios";

export default function FilterListingPart({lang}) {

    // ROUTER
    const searchParams = useSearchParams();

    // STATES
    const [priceRange, setPriceRange] = useState([0, 100]);
    // SHOW MORE CATEGORIES STATE
    const [showMoreCategories, setShowMoreCategories] = useState(false);

    // CATEGORIES AND SUBCATEGORIES STATE
    const [categories, setCategories] = useState([]);
    const [categoriesDropdown, setCategoriesDropdown] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [subCategoryId, setSubCategoryId] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState({});

    // REDUX
    const userCountryInformation = useSelector((state) => state.mainLayout.userCountryInformation);

    // HANDLER
    function getCategories(categoryId) {
        axios.get(`${process.env.BASE_URL}/home/categories`)
            .then((response) => {
                // SET THE CATEGORIES IN VARIABLE
                const mainCategories = response.data?.categories || [];
                // SET THE CATEGORIES STATE
                setCategories(mainCategories);
                // LOOP THROUGH THE CATEGORIES TO GET THE CATEGORY NAME AND NAME EN AND _ID
                const categoriesForDropDown = response.data?.categories.map((category) => {
                    return {
                        label: lang === "en" ? category.categoryNameEn : category.categoryName,
                        value: category._id,
                    };
                });
                setCategoriesDropdown(categoriesForDropDown);
                // SET THE CATEGORY ID
                setCategoryId(categoryId);
                // SET THE SUBCATEGORIES
                const selectedCategory = mainCategories.find((category) => category._id === categoryId);
                // SET THE SUBCATEGORIES
                setSubCategories(selectedCategory?.subCategories || []);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // EFFECT TO GET THE CATEGORY LIST FROM THE API
    useEffect(() => {
        // GET THE CATEGORY ID FROM THE URL
        const categoryId = searchParams.get("categoryId");
        // GET THE CATEGORIES
        getCategories(categoryId);
    }, []);

    // EFFECT TO LISTEN ON THE URL SEARCH PARAMS CHANGES
    useEffect(() => {
        // GET THE CATEGORY ID FROM THE URL
        const categoryId = searchParams.get("categoryId");
        // GET THE CATEGORIES
        getCategories(categoryId);

        //REDUX LOGIC TO GET THE CARDS AND SET THEM IN THE STATE #TODOs
    }, [searchParams]);

    return (
        <div className={`${classes.FilterListingPart} p-8 rounded`}>
            <div className={`${classes.SearchBar} flex flex-col gap-5`}>
                <h2 className="text-xl font-bold leading-6 text-zinc-800 uppercase">
                    {lang === "en" ? "Category" : "الفئة"}
                </h2>
                <Dropdown
                    optionLabel="label"
                    optionValue="value"
                    placeholder={lang === "en" ? "Select a Category" : "اختر الفئة"}
                    options={categoriesDropdown || []}
                    className="w-full"
                    value={categoryId || ""}
                    onChange={(e) => {
                        // SET THE CATEGORY ID
                        setCategoryId(e.value);
                        // SET THE SUBCATEGORIES
                        const selectedCategory = categories.find((category) => category._id === e.value);
                        setSubCategories(selectedCategory?.subCategories || []);
                    }}
                />
            </div>

            <span className={`${classes.border__bottom} my-4`}></span>

            {/* CATEGORY */}
            {subCategories.length > 0 && (<div className={`${classes.Categories} flex flex-col gap-2`}>
                <h3 className="text-l font-bold leading-6 text-zinc-800 uppercase">
                    {lang === "en" ? "Sub Categories" : "الفئات الفرعية"}
                </h3>

                {/* CATEGORIES */}
                <div className="flex flex-col gap-2">
                    {subCategories && subCategories.slice(
                        0,
                        showMoreCategories ? subCategories.length : 5
                    ).map((category) => (
                        <FilterRadio
                            key={category.id}
                            name="OptionselectedCategory"
                            text={lang === "en" ? category.subCategoryNameEn : category.subCategoryName}
                            value={category.id}
                            change={(e) => {
                                setSubCategoryId(e);
                            }}
                        />
                    ))}
                </div>

                {/* SHOW MORE CATEGORIES */}
                {/*  SHOW THE BUTTON OF SHOWING MORE CATEGORIES IF THE NUMBER IS >  */}
                {subCategories.length > 5 && (
                    <button
                        className="text-orange-400"
                        onClick={() => setShowMoreCategories(!showMoreCategories)}
                    >
                        {showMoreCategories ? "Show Less" : "Show More"}
                    </button>
                )}
            </div>)}

            {subCategories.length > 0 && (<span className={`${classes.border__bottom} my-4`}></span>)}

            {/*  PRICE RANGE  */}

            <div className={`${classes.PriceRange} flex flex-col gap-5`}>
                <h3 className="text-l font-bold leading-6 text-zinc-800 uppercase">
                    {lang === "en" ? "Price Range" : "نطاق السعر"}
                </h3>

                <PriceRange
                    range={priceRange}
                    change={(e) => {
                        setPriceRange(e);
                    }}
                />

                {/* PRICE MIN MAX */}
                <div className="flex gap-5">
                    <input
                        type="text"
                        placeholder="Min"
                        className={`${classes.Input} w-full p-2 border border-zinc-300 rounded-md`}
                        value={priceRange?.[0]}
                        onInput={(e) => {
                            // SET THE MIN PRICE AND IF THE MIN PRICE IS GREATER THAN MAX PRICE THEN SET THE MAX PRICE TO MIN PRICE
                            setPriceRange([e.target.value, priceRange[1] > e.target.value ? priceRange[1] : e.target.value + 1]);
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Max"
                        className={`${classes.Input} w-full p-2 border border-zinc-300 rounded-md`}
                        value={priceRange?.[1]}
                        onInput={(e) => {
                            setPriceRange([priceRange[0], e.target.value]);
                        }}
                    />
                </div>

                {/* RANGES OPTIONS */}
                <div className={`flex flex-col gap-2`}>
                    <FilterRadio
                        name="OptionselectedRange"
                        text={`All Price`}
                        value={1}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`Under 20 ${userCountryInformation?.currency || ''}`}
                        value={2}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`20 ${userCountryInformation?.currency || ''} to 100 ${userCountryInformation?.currency || ''}`}
                        value={3}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`100 ${userCountryInformation?.currency || ''} to 300 ${userCountryInformation?.currency || ''}`}
                        value={4}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`300 ${userCountryInformation?.currency || ''} to 500 ${userCountryInformation?.currency || ''}`}
                        value={5}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`500 ${userCountryInformation?.currency || ''} to 1000 ${userCountryInformation?.currency || ''}`}
                        value={6}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`1000 ${userCountryInformation?.currency || ''} to 10000 ${userCountryInformation?.currency || ''}`}
                        value={7}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`Over 10000 ${userCountryInformation?.currency || ''}`}
                        value={8}
                    />
                </div>
            </div>

            <span className={`${classes.border__bottom} my-4`}></span>

            {/*  LOCATION  */}
            <div className={`${classes.Location} flex flex-col gap-5`}>
                <h3 className="text-l font-bold leading-6 text-zinc-800 uppercase">
                    {lang === "en" ? "Location" : "الموقع"}
                </h3>

                <Dropdown
                    placeholder={lang === "en" ? "Select a Location" : "اختر الموقع"}
                    options={userCountryInformation?.cities || []}
                    className="w-full"
                    value={selectedLocation}
                    onChange={(e) => {
                        setSelectedLocation(e.value);
                    }}
                />
            </div>
        </div>
    );
}
