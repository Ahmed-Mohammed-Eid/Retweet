"use client";
import React, { useState, useEffect } from 'react';
import ListingCard from "@/app/components/Listings/ListingCard/ListingCard";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import {useSearchParams} from 'next/navigation';
import axios from 'axios';

export default function ListingsPartContent({lang}){

    // STATES
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');

    // SEARCH PARAMS
    const searchParams = useSearchParams();

    // HANDLERS TO GET THE DATA
    function getListings(subCategoryId, item) {
        // GET THE DATA
        axios.get(`${process.env.BASE_URL}/item/listings?subCategoryId=${subCategoryId}&item=${item || ''}`)
        .then((response) => {
            setProducts(response.data?.data?.listings || []);
        })
        .catch((error) => {
            console.log(error);
        });
    }


    useEffect(() => {
        // GET THE SEARCH PARAMS
        const subCategoryId = searchParams.get('subcategoryId');
        const item = searchParams.get('item');

        // GET THE PRODUCTS
        getListings(subCategoryId, item);
    }, [searchParams]);


    const itemTemplate = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <ListingCard product={product} lang={lang} />
            </div>
        );
    };

    const listTemplate = (products) => {
        return <div className="grid grid-nogutter">{products.map((product) => itemTemplate(product))}</div>;
    };

    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions
                    layout={layout}
                    onChange={(e) => setLayout(e.value)}
                    options={[{icon: 'pi pi-th-large', value: 'grid'}, {icon: 'pi pi-bars', value: 'list'}]}
                    style={{marginLeft: 'auto'}}
                />
            </div>
        );
    };

    return (
        <div className="card">
            <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
        </div>
    );
}