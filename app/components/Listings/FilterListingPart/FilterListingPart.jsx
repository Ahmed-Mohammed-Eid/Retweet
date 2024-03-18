"use client";
import React, { useState } from "react";
import classes from "./FilterListingPart.module.scss";
import { Dropdown } from "primereact/dropdown";
import PriceRange from "@/app/components/Listings/PriceRange/PriceRange";
import FilterRadio from "./FilterRadio/FilterRadio";

const DUMMYCATEGORIES = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
    { id: 5, name: "Category 5" },
    { id: 6, name: "Category 6" },
    { id: 7, name: "Category 7" },
    { id: 8, name: "Category 8" },
    { id: 9, name: "Category 9" },
    { id: 10, name: "Category 10" },
    { id: 11, name: "Category 11" },
    { id: 12, name: "Category 12" },
    { id: 13, name: "Category 13" },
    { id: 14, name: "Category 14" },
    { id: 15, name: "Category 15" },
    { id: 16, name: "Category 16" },
    { id: 17, name: "Category 17" },
    { id: 18, name: "Category 18" },
    { id: 19, name: "Category 19" },
    { id: 20, name: "Category 20" },
];

export default function FilterListingPart({lang}) {
    // STATES
    const [priceRange, setPriceRange] = useState([0, 100]);
    // SHOW MORE CATEGORIES STATE
    const [showMoreCategories, setShowMoreCategories] = useState(false);

    return (
        <div className={`${classes.FilterListingPart} p-8 rounded`}>
            <div className={`${classes.SearchBar} flex flex-col gap-5`}>
                <h2 className="text-xl font-bold leading-6 text-zinc-800 uppercase">
                    Categories
                </h2>
                <Dropdown
                    optionLabel="name"
                    optionValue="id"
                    placeholder="Select a Category"
                    options={[
                        { id: 1, name: "Category 1" },
                        { id: 2, name: "Category 2" },
                        { id: 3, name: "Category 3" },
                    ]}
                    className="w-full"
                />
            </div>

            <span className={`${classes.border__bottom} my-4`}></span>

            {/* CATEGORY */}
            <div className={`${classes.Categories} flex flex-col gap-2`}>
                <h3 className="text-l font-bold leading-6 text-zinc-800 uppercase">
                    Subcategories
                </h3>

                {/* CATEGORIES */}
                <div className="flex flex-col gap-2">
                    {DUMMYCATEGORIES.slice(
                        0,
                        showMoreCategories ? DUMMYCATEGORIES.length : 5
                    ).map((category) => (
                        <FilterRadio
                            key={category.id}
                            name="OptionselectedCategory"
                            text={category.name}
                            value={category.id}
                        />
                    ))}
                </div>

                {/* SHOW MORE CATEGORIES */}
                <button
                    className="text-orange-400"
                    onClick={() => setShowMoreCategories(!showMoreCategories)}
                >
                    {showMoreCategories ? "Show Less" : "Show More"}
                </button>
            </div>

            <span className={`${classes.border__bottom} my-4`}></span>

            {/*  PRICE RANGE  */}

            <div className={`${classes.PriceRange} flex flex-col gap-5`}>
                <h3 className="text-l font-bold leading-6 text-zinc-800 uppercase">
                    Price Range
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
                        text="All Price"
                        value={1}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text="Under $20"
                        value={2}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text="$20 to $100"
                        value={3}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text="$100 to $300"
                        value={4}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text="$300 to $500"
                        value={5}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text="$500 to $1000"
                        value={6}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text="$1000 to $10000"
                        value={7}
                    />

                    <FilterRadio
                        name="OptionselectedRange"
                        text="Over $10000"
                        value={8}
                    />
                </div>
            </div>
        </div>
    );
}
