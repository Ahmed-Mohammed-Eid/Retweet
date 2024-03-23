
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

    }
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
        }
    },
});

export const { updateUserInformation, updateUserCountryInformation } = counterSlice.actions

export default counterSlice.reducer;