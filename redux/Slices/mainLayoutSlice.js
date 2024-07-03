
"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInformation: {
        fullName: '',
        phoneNumber: '',
        email: '',
        image: '',
        userId: '',
        hasProfile: false,
    },
    userCountryInformation: {

    },
    isAuthenticated: false,
};

export const counterSlice = createSlice({
    name: "mainLayout",
    initialState,
    reducers: {
        updateUserInformation: (state, action) => {
            state.userInformation = action.payload;
        },
        updateUserCountryInformation: (state, action) => {
            state.userCountryInformation = action.payload;
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        }
    },
});

export const { updateUserInformation, updateUserCountryInformation, setIsAuthenticated } = counterSlice.actions

export default counterSlice.reducer;