"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import mainLayoutSlice from "@/redux/Slices/mainLayoutSlice";
import homeSlice from "@/redux/Slices/homeSlice";
import listingsSlice from "@/redux/Slices/listingsSlice";
import filterSlice from "@/redux/Slices/filterSlice";

const rootReducer = combineReducers({
    mainLayout: mainLayoutSlice,
    home: homeSlice,
    listings: listingsSlice,
    filter: filterSlice,
    //add all your reducers here
},);

export const store = configureStore({
    reducer: rootReducer,
});