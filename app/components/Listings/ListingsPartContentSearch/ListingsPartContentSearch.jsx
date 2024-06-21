"use client";
import React, { useState } from "react";
import ListingCard from "@/app/components/Listings/ListingCard/ListingCard";
import { Paginator } from "primereact/paginator";
import { useSearchParams, useRouter } from "next/navigation";
// import classes from "./ListingsPartContentSearch.module.scss";

// REDUX
import { useSelector } from "react-redux";

export default function ListingsPartContentSearch({ lang, authenticated }) {
	// ROUTER
	const router = useRouter();

	// REDUX
	const listings = useSelector((state) => state.listings.listings);
	const { currentPage, itemsPerPage, totalListings } = useSelector(
		(state) => state.listings.pagination
	);

	// SEARCH PARAMS
	const searchParams = useSearchParams();

	return (
		<div className="card">
			<div className="grid grid-nogutter">
				{listings.map((product) => (
					<div
						className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2"
						key={product.id}
					>
						<ListingCard
							product={product}
							lang={lang}
							authenticated={authenticated}
						/>
					</div>
				))}
			</div>

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
					const categoryId = searchParams.get("categoryId");
					const subcategoryId = searchParams.get("subcategoryId");
					const item = searchParams.get("item");
					const location = searchParams.get("location");
					const minPrice = searchParams.get("minPrice");
					const maxPrice = searchParams.get("maxPrice");
					const page = e.page + 1;
					// UPDATE THE SEARCH PARAMS IN THE URL
					router.push(
						`/listings?categoryId=${categoryId}&subcategoryId=${subcategoryId}&item=${item}&location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}`
					);
				}}
			/>
		</div>
	);
}
