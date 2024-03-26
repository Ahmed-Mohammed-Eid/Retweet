"use client"
import classes from './SelectSubcategory.module.scss';
import {useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";
import CategoryItem from "@/app/components/Listings/CategoryItem/CategoryItem";
import {useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function SelectSubcategory({lang}) {

    // INITIALIZE THE ROUTER
    const router = useRouter();
    const searchParams = useSearchParams();

    // STATES
    const [categoryIdFromUrl, setCategoryIdFromUrl] = useState('');
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [formType, setFormType] = useState('');

    // GET THE CATEGORIES FROM THE API
    useEffect(() => {
        // TOKEN
        const token = localStorage.getItem('retweet-token');

        // GET THE CATEGORY ID
        const categoryId = searchParams.get('category');
        // SET THE CATEGORY
        setCategoryIdFromUrl(categoryId);

        axios.get(`${process.env.BASE_URL}/user/subcategories`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                categoryId: categoryId
            }
        })
            .then(response => {
                const categories = response.data.subCategories;
                const formType = response.data.formType;

                if(categories.length === 0) {
                    router.push(`/listings/select-item?category=${categoryId}&subCategory=&formType=${formType}&item=`);
                }

                // SET THE CATEGORIES
                setCategories(categories || []);
                setFilteredCategories(categories || []);
                setFormType(formType || '')
            })
            .catch(error => {
                toast.error(lang === 'en' ? 'An error occurred' : 'حذث خطأ ما أثناء تحميل البيانات');
            })
    }, [lang]);


    return (
        <div className={`${classes.ContentContainer}`}>

            <h1 className={`${classes.Title}`}>
                {lang === 'en' ? 'What do you want to Sell or Advertise?' : 'ماذا تريد أن تبيع أو تعلن عنه؟'}
            </h1>

            <div className={`${classes.Content}`}>
                <div className={`${classes.CategoriesSearch}`}>
                    <Image src={'/assets/listings/search.svg'} alt={'Search Icon'} width={20} height={20}/>
                    <input
                        type="text"
                        placeholder={'Search for a category'}
                        className={`${classes.SearchInput}`}
                        onChange={(event) => {
                            // SEARCH FOR THE CATEGORY
                            const search = event.target.value;

                            if (search.length === 0) return setFilteredCategories(categories);

                            // FILTER THE CATEGORIES
                            const filteredCategories = categories.filter(category => {
                                return category.subCategoryName.toLowerCase().includes(search.toLowerCase()) ||
                                    category.subCategoryNameEn.toLowerCase().includes(search.toLowerCase());
                            })
                            // SET THE CATEGORIES
                            setFilteredCategories(filteredCategories);
                        }}
                    />
                </div>
                {
                    filteredCategories.map((category) => {
                        return (
                            <CategoryItem
                                key={category._id}
                                image={category.subCategoryImage}
                                category={
                                    lang === 'en' ? category.subCategoryNameEn : category.subCategoryName
                                }
                                icon={'/assets/listings/RightArrow.svg'}
                                clicked={() => {
                                    router.push(`/listings/select-item?category=${categoryIdFromUrl}&subCategory=${category._id}&formType=${formType}`)
                                }}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}