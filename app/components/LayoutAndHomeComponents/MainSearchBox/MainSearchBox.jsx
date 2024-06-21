"use client";

import React from "react";

import { Button } from "primereact/button";
import classes from "./MainSearchBox.module.scss";
import toast from "react-hot-toast";
import axios from "axios";

// REDUX
import {useDispatch} from 'react-redux';
import {setListings} from "@/redux/Slices/listingsSlice";

// ROUTER
import {useRouter} from 'next/navigation';

export default function MainSearchBox({ lang }) {

    // ROUTER
    const router = useRouter();

    // REDUX
    const dispatch = useDispatch();

    // STATES
	const [searchQuery, setSearchQuery] = React.useState("");

	function handleSearch() {
		// GET THE TOKEN FROM LOCAL STORAGE
		const token = localStorage.getItem("retweet-token");

		// VALIDATE THE SEARCH QUERY
		if (searchQuery === "") {
			return toast.error(
				lang === "en"
					? "Please enter a search query"
					: "الرجاء إدخال مصطلح بحث"
			);
		}

		// MAKE THE SEARCH REQUEST
		axios
			.get(`${process.env.BASE_URL}/search?searchTerm=${searchQuery}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				const listings = response.data?.data?.listings || [];

                new Promise((resolve, reject) => {
                    router.push('/listings/search')
                    resolve()
                }).then(() =>{
                    dispatch(setListings(listings));
                })
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div className={classes.SearchBox}>
			<input
				type={"search"}
				placeholder={
					lang === "en" ? "Search for anything" : "ابحث عن أي شيء"
				}
				className={classes.SearchBox__input}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						handleSearch();
					}
				}}
			/>
			<Button className={classes.SearchBox__button} onClick={handleSearch}>
				{lang === "en" ? "Search" : "بحث"}
			</Button>
		</div>
	);
}
