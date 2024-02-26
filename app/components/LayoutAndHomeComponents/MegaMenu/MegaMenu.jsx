"use client";

import React, {useEffect, useState} from 'react';
import {Menubar} from 'primereact/menubar';
import classes from "./MegaMenu.module.scss";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function MegaMenuComponent({lang}) {
    // STATES
    const [categories, setCategories] = useState([]);

    // EFFECTS
    useEffect(() => {
        axios.get(`${process.env.BASE_URL}/home/categories`)
            .then(response => {
                setCategories(response.data?.categories || []);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const router = useRouter();
    const parentCategories = categories.slice(0, 4);
    const otherCategories = categories.slice(4);

    const items = parentCategories.map((category) => {
        return {
            label: lang === 'en' ? category.categoryNameEn : category.categoryName,
            items: category.subCategories.map(subCategory => {
                return {
                    label: lang === 'en' ? subCategory.subCategoryNameEn : subCategory.subCategoryName,
                    items: lang === 'en' ? subCategory.itemsEn.map(item => {
                        return {
                            label: item,
                        };
                    }) : subCategory.items.map(item => {
                        return {
                            label: item,
                        };
                    }),
                };
            }),
        };
    });

    if (otherCategories.length > 0) {
        items.push({
            label: lang === "en" ? "More" : "المزيد",
            items: otherCategories.map(category => {
                return {
                    label: lang === 'en' ? category.categoryNameEn : category.categoryName,
                    items: category.subCategories.map(subCategory => {
                        return {
                            label: lang === 'en' ? subCategory.subCategoryNameEn : subCategory.subCategoryName,
                            items: lang === 'en' ? subCategory.itemsEn.map(item => {
                                return {
                                    label: item,
                                };
                            }) : subCategory.items.map(item => {
                                return {
                                    label: item,
                                }
                            }),
                        };
                    }),
                };
            }),
        });
    }

    return (
        <Menubar
            model={items}
            className={classes.MegaMenu}
        />
    );
}
