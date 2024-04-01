"use client";
import React, {useState, useEffect} from 'react';
import ListingCard from "@/app/components/Listings/ListingCard/ListingCard";
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import {Paginator} from 'primereact/paginator';
import {useSearchParams, useRouter} from 'next/navigation';
import axios from 'axios';

// REDUX
import {useSelector, useDispatch} from 'react-redux';
import {setListings, setPagination, setPaginationKey} from "@/redux/Slices/listingsSlice";

export default function ListingsPartContent({lang}) {

    // ROUTER
    const router = useRouter();

    // REDUX
    const dispatch = useDispatch();
    const listings = useSelector((state) => state.listings.listings);
    const {
        currentPage,
        itemsPerPage,
        totalListings,
    } = useSelector((state) => state.listings.pagination);

    // STATES
    const [layout, setLayout] = useState('grid');

    // SEARCH PARAMS
    const searchParams = useSearchParams();

    // HANDLERS TO GET THE DATA
    function getListings(categoryId, subCategoryId, item, location, minPrice, maxPrice, page) {
        // GET THE DATA
        axios.get(`${process.env.BASE_URL}/filtered/listings?categoryId=${categoryId || ''}&subCategoryId=${subCategoryId || ''}&minPrice=${minPrice || ''}&maxPrice=${maxPrice || ''}&city=${location || ''}&page=${page || 1}&item=${item || ''}`)
            .then((response) => {
                // SET THE DATA
                dispatch(setListings(response.data?.data?.listings || []));
                dispatch(setPagination({
                    currentPage: response.data?.data?.currentPage,
                    hasNextPage: response.data?.data?.hasNextPage,
                    hasPreviousPage: response.data?.data?.hasPreviousPage,
                    itemsPerPage: response.data?.data?.itemsPerPage,
                    lastPage: response.data?.data?.lastPage,
                    maxPrice: response.data?.data?.maxPrice,
                    nextPage: response.data?.data?.nextPage,
                    previousPage: response.data?.data?.previousPage,
                    totalListings: response.data?.data?.totalListings,
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    }


    useEffect(() => {
        // GET THE SEARCH PARAMS
        const categoryId = searchParams.get('categoryId');
        const subCategoryId = searchParams.get('subcategoryId');
        const item = searchParams.get('item');
        const location = searchParams.get('location');
        const minPrice = searchParams.get('minPrice');
        const maxPrice = searchParams.get('maxPrice');
        const page = searchParams.get('page');

        // GET THE PRODUCTS
        getListings(categoryId, subCategoryId, item, location, minPrice, maxPrice, page);
    }, [searchParams]);


    const itemTemplate = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <ListingCard product={product} lang={lang}/>
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
            <DataView value={listings} listTemplate={listTemplate} layout={layout} header={header()}/>
            <Paginator
                first={currentPage || 0}
                rows={itemsPerPage}
                totalRecords={totalListings}
                rowsPerPageOptions={[itemsPerPage]}
                // Next and Previous Buttons are disables if there is no next or previous page
                alwaysShow={false}
                onPageChange={(e) => {
                    // CHANGE THE SEARCH PARAMS ADD THE PAGE NUMBER
                    // GET ALL THE SEARCH PARAMS
                    const categoryId = searchParams.get('categoryId');
                    const subcategoryId = searchParams.get('subcategoryId');
                    const item = searchParams.get('item');
                    const location = searchParams.get('location');
                    const minPrice = searchParams.get('minPrice');
                    const maxPrice = searchParams.get('maxPrice');
                    const page = e.page + 1;
                    // UPDATE THE SEARCH PARAMS IN THE URL
                    router.push(`/listings?categoryId=${categoryId}&subcategoryId=${subcategoryId}&item=${item}&location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}`);
                }}
            />
        </div>
    );
}