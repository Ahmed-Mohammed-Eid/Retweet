"use client";
import classes from "./Storage.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";
import RadioComponent from "@/app/components/Listings/RadioComponent/RadioComponent";
import Location from "@/app/components/Listings/Forms/Globals/Location";
import Description from "@/app/components/Listings/Forms/Globals/Description";
import { useState } from "react";
import Price from "@/app/components/Listings/Forms/Globals/Price";
import ContactInformation from "@/app/components/Listings/Forms/Globals/ContactInformation";
import CategoryInfo from "@/app/components/Listings/Forms/Globals/CategoryInfo";

// JSON DATA
import StorageJson from "@/Json_Data/Laptops/Storage.json";

export default function Storage({
	lang,
	categoryName,
	subCategoryName,
	submit = () => {},
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		[String(StorageJson[0].labelEn).toLocaleLowerCase()]: {
			labelAr: StorageJson[0].labelAr,
			labelEn: StorageJson[0].labelEn,
			value: "",
		},
		[String(StorageJson[1].labelEn).toLocaleLowerCase()]: {
			labelAr: StorageJson[1].labelAr,
			labelEn: StorageJson[1].labelEn,
			value: "",
		},
		[String(StorageJson[2].labelEn).toLocaleLowerCase()]: {
			labelAr: StorageJson[2].labelAr,
			labelEn: StorageJson[2].labelEn,
			value: "",
		},
	});

	// LOCATION PART
	const [location, setLocation] = useState({
		city: "",
		neighborhood: "",
	});

	// DESCRIPTION PART
	const [description, setDescription] = useState({
		title: "",
		description: "",
	});

	// PRICE
	const [price, setPrice] = useState({
		price: "",
		currency: "",
	});

	// CONTACT PART
	const [contact, setContact] = useState({
		code: "",
		phone: "",
	});

	// SUBMIT FUNCTION
	const handleSubmit = () => {
		submit({
			listingDetails,
			location,
			description,
			price,
			contact,
		});
	};

	return (
		<div className={`${classes.SpareParts} rounded p-4`}>
			{/*  CATEGORY  */}
			<CategoryInfo
				lang={lang}
				categoryName={categoryName}
				subCategoryName={subCategoryName}
			/>

			{/*  LISTING DETAILS  */}
			<div
				className={`${classes.ListingDetailsPart} p-6 rounded bg-white`}
			>
				<h2 className={"uppercase"}>
					{lang === "en" ? "Listing Details" : "تفاصيل القائمة"}
				</h2>

				<Hint
					texts={
						lang === "en"
							? [
									"Attract more people to your listing by filling all information and being accurate",
							  ]
							: [
									"جذب المزيد من الناس إلى قائمتك من خلال ملء جميع المعلومات وكون دقيقًا",
							  ]
					}
				/>

				{/* condition */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? StorageJson[0].labelEn
							: StorageJson[0].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{StorageJson[0].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(StorageJson[0].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												StorageJson[0].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														StorageJson[0].labelEn
													).toLocaleLowerCase()
												],
												value: event.target.value,
											},
										});
									}}
								/>
							);
						})}
					</div>
				</div>

				{/* condition */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? StorageJson[1].labelEn
							: StorageJson[1].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{StorageJson[1].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(StorageJson[1].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												StorageJson[1].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														StorageJson[1].labelEn
													).toLocaleLowerCase()
												],
												value: event.target.value,
											},
										});
									}}
								/>
							);
						})}
					</div>
				</div>

				{/* condition */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? StorageJson[2].labelEn
							: StorageJson[2].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{StorageJson[2].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(StorageJson[2].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												StorageJson[2].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														StorageJson[2].labelEn
													).toLocaleLowerCase()
												],
												value: event.target.value,
											},
										});
									}}
								/>
							);
						})}
					</div>
				</div>
			</div>

			{/*  LOCATION  */}
			<Location
				lang={lang}
				setCity={(city) => setLocation({ ...location, city })}
				setNeighborhood={(neighborhood) =>
					setLocation({ ...location, neighborhood })
				}
				city={location.city}
				neighborhood={location.neighborhood}
			/>

			{/*  DESCRIPTION  */}
			<Description
				lang={lang}
				title={description.title}
				setTitle={(title) => setDescription({ ...description, title })}
				description={description.description}
				setDescription={(descriptionValue) =>
					setDescription({
						...description,
						description: descriptionValue,
					})
				}
			/>

			{/*  PRICE  */}
			<Price
				lang={lang}
				price={price.price}
				setPrice={(priceValue) =>
					setPrice({ ...price, price: priceValue })
				}
				currency={price.currency}
				setCurrency={(currency) => setPrice({ ...price, currency })}
			/>

			{/*  CONTACT INFORMATION  */}
			<ContactInformation
				lang={lang}
				cuntryCode={contact.code}
				setCountryCode={(code) => setContact({ ...contact, code })}
				phoneNumber={contact.phone}
				setPhoneNumber={(phoneNumber) =>
					setContact({ ...contact, phone: phoneNumber })
				}
			/>

			{/*  SUBMIT  */}
			<div className={`${classes.SubmitPart} rounded`}>
				<button
					className={
						"bg-primary text-white p-4 rounded w-full mr-auto button--effect-small flex justify-center items-center gap-2"
					}
					onClick={handleSubmit}
				>
					<span className={"uppercase"}>
						{lang === "en"
							? "Save and PUBLISH listing"
							: "حفظ ونشر القائمة"}
					</span>
					<span>{lang === "en" ? "→" : "←"}</span>
				</button>
			</div>
		</div>
	);
}
