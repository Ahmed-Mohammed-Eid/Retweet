"use client";
import React, {useEffect, useState} from "react";
import classes from "./FilterListingPart.module.scss";
import {Dropdown} from "primereact/dropdown";
import PriceRange from "@/app/components/Listings/PriceRange/PriceRange";
import FilterRadio from "./FilterRadio/FilterRadio";
import {useSearchParams, useRouter} from "next/navigation";

// REDUX
import {useSelector} from "react-redux";
import axios from "axios";

export default function FilterListingPart({lang}) {

    // ROUTER
    const router = useRouter();
    const searchParams = useSearchParams();

    // REDUX
    const maxPrice = useSelector((state) => state.listings.pagination.maxPrice);

    // STATES
    const [priceRange, setPriceRange] = useState([]);
    // SHOW MORE CATEGORIES STATE
    const [showMoreCategories, setShowMoreCategories] = useState(false);

    // CATEGORIES AND SUBCATEGORIES STATE
    const [categories, setCategories] = useState([]);
    const [categoriesDropdown, setCategoriesDropdown] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [subCategoryId, setSubCategoryId] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');

    // REDUX
    const userCountryInformation = useSelector((state) => state.mainLayout.userCountryInformation);
    let cities = userCountryInformation?.cities || [];

    // HANDLER
    function getCategories(categoryId, subcategoryId) {
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
                // SET THE SUBCATEGORY ID
                setSubCategoryId(subcategoryId);

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
        // SET THE PRICE RANGE
        setPriceRange([0, maxPrice]);

        // GET THE CATEGORY ID FROM THE URL
        const categoryId = searchParams.get("categoryId");
        // GET THE SUBCATEGORY ID FROM THE URL
        const subcategoryId = searchParams.get("subcategoryId");

        // GET THE CATEGORIES
        getCategories(categoryId, subcategoryId);
    }, []);
    
    // EFFECT TO UPDATE THE URL SEARCH PARAMS
    useEffect(() => {
        // GET THE ITEM
        const item = searchParams.get("item");

        // GET THE PAGE
        const page = searchParams.get("page");

        let locationSearch = selectedLocation === "All Cities" ? "" : (selectedLocation || '');

        // GO TO THE PAGE
        router.push(`/listings?categoryId=${categoryId || ''}&subcategoryId=${subCategoryId || ''}&item=${item || ''}&page=${page || 1}&minPrice=${priceRange[0] || ''}&maxPrice=${priceRange[1] || ''}&location=${locationSearch}`);

    }, [categoryId, subCategoryId, priceRange, selectedLocation, searchParams, router]);

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
                        // SET THE SUBCATEGORY ID
                        setSubCategoryId('');
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
                            key={category._id}
                            name="OptionselectedCategory"
                            text={lang === "en" ? category.subCategoryNameEn : category.subCategoryName}
                            value={category._id}
                            change={(e) => {
                                // SET THE SUBCATEGORY ID
                                setSubCategoryId(e.target.value);
                            }}
                            checked={subCategoryId === category._id}
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
                    max={maxPrice}
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
                            if (e.target.value < 0) {
                                setPriceRange([0, priceRange[1]])
                                return;
                            }
                            // SET THE MIN PRICE AND IF THE MIN PRICE IS GREATER THAN MAX PRICE THEN SET THE MAX PRICE TO MIN PRICE
                            setPriceRange([e.target.value, priceRange[1] <= e.target.value ? e.target.value : priceRange[1]]);
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Max"
                        className={`${classes.Input} w-full p-2 border border-zinc-300 rounded-md`}
                        value={priceRange?.[1]}
                        onInput={(e) => {
                            if(e.target.value > maxPrice) {
                                setPriceRange([priceRange[0], maxPrice])
                                return;
                            }
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
                        checked={priceRange[0] === 0 && priceRange[1] === maxPrice}
                        change={() => {
                            setPriceRange([0, maxPrice]);
                        }}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`Under 20 ${userCountryInformation?.currency || ''}`}
                        value={2}
                        checked={priceRange[0] === 0 && priceRange[1] <= 20}
                        change={() => {
                            setPriceRange([0, 20]);
                        }}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`20 ${userCountryInformation?.currency || ''} to 100 ${userCountryInformation?.currency || ''}`}
                        value={3}
                        checked={priceRange[0] === 20 && priceRange[1] <= 100}
                        change={() => {
                            setPriceRange([20, 100]);
                        }}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`100 ${userCountryInformation?.currency || ''} to 300 ${userCountryInformation?.currency || ''}`}
                        value={4}
                        checked={priceRange[0] === 100 && priceRange[1] <= 300}
                        change={(e) => {
                            setPriceRange([100, 300]);
                        }}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`300 ${userCountryInformation?.currency || ''} to 500 ${userCountryInformation?.currency || ''}`}
                        value={5}
                        checked={priceRange[0] === 300 && priceRange[1] <= 500}
                        change={() => {
                            setPriceRange([300, 500]);
                        }}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`500 ${userCountryInformation?.currency || ''} to 1000 ${userCountryInformation?.currency || ''}`}
                        value={6}
                        checked={priceRange[0] === 500 && priceRange[1] <= 1000}
                        change={() => {
                            setPriceRange([500, 1000]);
                        }}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`1000 ${userCountryInformation?.currency || ''} to 10000 ${userCountryInformation?.currency || ''}`}
                        value={7}
                        checked={priceRange[0] === 1000 && priceRange[1] <= 10000}
                        change={() => {
                            setPriceRange([1000, 10000]);
                        }}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text={`Over 10000 ${userCountryInformation?.currency || ''}`}
                        value={8}
                        checked={priceRange[0] === 10000 && priceRange[1] <= maxPrice}
                        change={() => {
                            setPriceRange([10000, maxPrice]);
                        }}
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
                    options={["All Cities", ...cities]}
                    className="w-full"
                    filter={true}
                    value={selectedLocation}
                    onChange={(e) => {
                        setSelectedLocation(e.value);
                    }}
                />

                {/*<button className={`${classes.Button} button--effect`}>*/}
                {/*    {lang === "en" ? "Apply" : "تطبيق"}*/}
                {/*</button>*/}
            </div>
        </div>
    );
}
