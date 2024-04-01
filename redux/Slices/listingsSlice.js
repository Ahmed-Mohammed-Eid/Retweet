"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listings: [],
    pagination: {
        currentPage: null,
        hasNextPage: false,
        hasPreviousPage: false,
        itemsPerPage: 20,
        lastPage: 2,
        maxPrice: 300000,
        nextPage: null,
        previousPage: null,
        totalListings: 22,
    },
};

export const listingsSlice = createSlice({
    name: "listings",
    initialState,
    reducers: {
        setListings: (state, action) => {
            state.listings = action.payload;
        },
        setPagination: (state, action) => {
            state.pagination = action.payload;
        },
        setPaginationKey: (state, action) => {
            state.pagination[action.payload.key] = action.payload.value;
        }
    },
});

export const { setListings, setPagination, setPaginationKey } = listingsSlice.actions

export default listingsSlice.reducer;