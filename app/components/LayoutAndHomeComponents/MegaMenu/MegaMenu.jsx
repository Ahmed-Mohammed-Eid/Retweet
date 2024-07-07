"use client";
import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import classes from './MegaMenu.module.scss';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// REDUX
import {useDispatch} from 'react-redux';
import {updateFilterStates} from "@/redux/Slices/filterSlice";

export default function MegaMenuComponent({ lang }) {

    // REDUX
    const dispatch = useDispatch();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${process.env.BASE_URL}/home/categories`);
                setCategories(response.data?.categories || []);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const router = useRouter();

    const getMenuItems = (category) => {
        return category.subCategories.map((subCategory) => ({
            label: lang === 'en' ? subCategory.subCategoryNameEn : subCategory.subCategoryName,
            items: (lang === 'en' ? subCategory.itemsEn : subCategory.items).map((item) => ({
                label: item,
                command: () => {
                    dispatch(updateFilterStates({
                        categoryId: category._id,
                        subCategoryId: subCategory._id,
                        item,
                    }));

                    router.push('/listings');
                },
            })),
            command: () => {
                dispatch(updateFilterStates({
                    categoryId: category._id,
                    subCategoryId: subCategory._id,
                }));
                router.push('/listings');
            },
        }));
    };

    const parentCategories = categories.slice(0, 4);
    const otherCategories = categories.slice(4);

    const items = parentCategories.map((category) => ({
        label: lang === 'en' ? category.categoryNameEn : category.categoryName,
        items: getMenuItems(category),
    }));

    if (otherCategories.length > 0) {
        items.push({
            label: lang === 'en' ? 'More' : 'المزيد',
            items: otherCategories.map((category) => ({
                label: lang === 'en' ? category.categoryNameEn : category.categoryName,
                items: getMenuItems(category),
            })),
        });
    }

    return <Menubar model={items} className={classes.MegaMenu} />;
}
