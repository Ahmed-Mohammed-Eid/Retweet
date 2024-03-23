"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import mainLayoutSlice from "@/redux/Slices/mainLayoutSlice";

const rootReducer = combineReducers({
    mainLayout: mainLayoutSlice,
    //add all your reducers here
},);

export const store = configureStore({
    reducer: rootReducer,
});