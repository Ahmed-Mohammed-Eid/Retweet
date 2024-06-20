"use client";
import classes from "./Accessories.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";
import RadioComponent from "@/app/components/Listings/RadioComponent/RadioComponent";
import DropDown from "@/app/components/Listings/DropDown/DropDown";
import Location from "@/app/components/Listings/Forms/Globals/Location";
import Description from "@/app/components/Listings/Forms/Globals/Description";
import { MultiSelect } from "primereact/multiselect";
import { useState } from "react";
import Price from "@/app/components/Listings/Forms/Globals/Price";
import ContactInformation from "@/app/components/Listings/Forms/Globals/ContactInformation";
import CategoryInfo from "@/app/components/Listings/Forms/Globals/CategoryInfo";
import CarsDropdown from "@/app/components/Listings/Forms/Globals/CarsDropdown";
import ColorDropDown from "@/app/components/Listings/Forms/Globals/ColorDropDown";
import { Calendar } from "primereact/calendar";

// JSON DATA
import MotrocyclesAccessoriesJson from "@/Json_Data/Motorcycles/Accessories.json";

export default function JobsSeekers({
	lang,
	categoryName,
	subCategoryName,
	submit = () => {},
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		[String(MotrocyclesAccessoriesJson[0].labelEn).toLocaleLowerCase()]: {
			labelAr: MotrocyclesAccessoriesJson[0].labelAr,
			labelEn: MotrocyclesAccessoriesJson[0].labelEn,
			value: "",
		},
		[String(MotrocyclesAccessoriesJson[1].labelEn).toLocaleLowerCase()]: {
			labelAr: MotrocyclesAccessoriesJson[1].labelAr,
			labelEn: MotrocyclesAccessoriesJson[1].labelEn,
			value: "",
		},
		[String(MotrocyclesAccessoriesJson[2].labelEn).toLocaleLowerCase()]: {
			labelAr: MotrocyclesAccessoriesJson[2].labelAr,
			labelEn: MotrocyclesAccessoriesJson[2].labelEn,
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

	const modelsOptions = MotrocyclesAccessoriesJson[0].Values.map((value) => {
		return {
			label: lang === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

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

				{/*  CAR TYPE  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? MotrocyclesAccessoriesJson[0].labelEn
							: MotrocyclesAccessoriesJson[0].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{MotrocyclesAccessoriesJson[0].Values.map(
							(value, index) => {
								return (
									<RadioComponent
										key={index}
										lang={lang}
										value={value.labelEn}
										textAr={value.labelAr}
										textEn={value.labelEn}
										name={String(MotrocyclesAccessoriesJson[0].labelEn)}
										onChange={(event) => {
											setListingDetails({
												...listingDetails,
												[String(
													MotrocyclesAccessoriesJson[0].labelEn
												).toLocaleLowerCase()]: {
													...listingDetails[
														String(
															MotrocyclesAccessoriesJson[0].labelEn
														).toLocaleLowerCase()
													],
													value: event.target.value,
												},
											});
										}}
									/>
								);
							}
						)}
					</div>
				</div>

				{/*  Category  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? MotrocyclesAccessoriesJson[1].labelEn
							: MotrocyclesAccessoriesJson[1].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{MotrocyclesAccessoriesJson[1].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(MotrocyclesAccessoriesJson[1].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												MotrocyclesAccessoriesJson[1].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														MotrocyclesAccessoriesJson[1].labelEn
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

				{/*  Year  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? MotrocyclesAccessoriesJson[2].labelEn
							: MotrocyclesAccessoriesJson[2].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
					{MotrocyclesAccessoriesJson[2].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(MotrocyclesAccessoriesJson[2].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												MotrocyclesAccessoriesJson[2].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														MotrocyclesAccessoriesJson[2].labelEn
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
