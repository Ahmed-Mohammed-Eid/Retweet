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
    const items = categories.map(category => {
        return {
            label: category.categoryName,
            items: category.subCategories.map(subCategory => {
                return {
                    label: subCategory.subCategoryName,
                    items: subCategory.items.map(subSubCategory => {
                        return {
                            label: subSubCategory.subSubCategoryName,
                        }
                    })
                }
            })
        }
    });
    return (
        <Menubar
            model={items}
            breakpoint="960px"
            className={classes.MegaMenu}
        />
    )
}
