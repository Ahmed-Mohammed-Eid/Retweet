"use client";
import classes from "./Fridges.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";
import RadioComponent from "@/app/components/Listings/RadioComponent/RadioComponent";
import DropDown from "@/app/components/Listings/DropDown/DropDown";
import Location from "@/app/components/Listings/Forms/Globals/Location";
import Description from "@/app/components/Listings/Forms/Globals/Description";
import { useState } from "react";
import Price from "@/app/components/Listings/Forms/Globals/Price";
import ContactInformation from "@/app/components/Listings/Forms/Globals/ContactInformation";
import CategoryInfo from "@/app/components/Listings/Forms/Globals/CategoryInfo";
import Spinner from "@/app/components/LayoutAndHomeComponents/Spinner/Spinner";

// JSON DATA
import FridgesJson from "@/Json_Data/Electronics/Fridges.json";

export default function Fridges({
	lang,
	categoryName,
	subCategoryName,
	submit = () => {},
	loading = false,
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		[String(FridgesJson[0].labelEn).toLocaleLowerCase()]: {
			labelAr: FridgesJson[0].labelAr,
			labelEn: FridgesJson[0].labelEn,
			value: "",
		},
		[String(FridgesJson[1].labelEn).toLocaleLowerCase()]: {
			labelAr: FridgesJson[1].labelAr,
			labelEn: FridgesJson[1].labelEn,
			value: "",
		},
		[String(FridgesJson[2].labelEn).toLocaleLowerCase()]: {
			labelAr: FridgesJson[2].labelAr,
			labelEn: FridgesJson[2].labelEn,
			value: "",
		},
		[String(FridgesJson[3].labelEn).toLocaleLowerCase()]: {
			labelAr: FridgesJson[3].labelAr,
			labelEn: FridgesJson[3].labelEn,
			value: "",
		},
		[String(FridgesJson[4].labelEn).toLocaleLowerCase()]: {
			labelAr: FridgesJson[4].labelAr,
			labelEn: FridgesJson[4].labelEn,
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

	const modelsOptions = FridgesJson[0].Values.map((value) => {
		return {
			label: lang === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions2 = FridgesJson[1].Values.map((value) => {
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
							? FridgesJson[0].labelEn
							: FridgesJson[0].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										FridgesJson[0].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										FridgesJson[0].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												FridgesJson[0].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions}
							filter={true}
							placeholder={
								lang === "en"
									? FridgesJson[0].labelEn
									: FridgesJson[0].labelAr
							}
						/>
					</div>
				</div>

				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? FridgesJson[1].labelEn
							: FridgesJson[1].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										FridgesJson[1].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										FridgesJson[1].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												FridgesJson[1].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions2}
							filter={true}
							placeholder={
								lang === "en"
									? FridgesJson[1].labelEn
									: FridgesJson[1].labelAr
							}
						/>
					</div>
				</div>

				{/*  Category  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? FridgesJson[2].labelEn
							: FridgesJson[2].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<input
							type="text"
							value={
								listingDetails[
									String(
										FridgesJson[2].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									[String(
										FridgesJson[2].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												FridgesJson[2].labelEn
											).toLocaleLowerCase()
										],
										value: e.target.value,
									},
								});
							}}
							placeholder={
								lang === "en"
									? FridgesJson[2].labelEn
									: FridgesJson[2].labelAr
							}
						/>
					</div>
				</div>

				{/* condition */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? FridgesJson[3].labelEn
							: FridgesJson[3].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{FridgesJson[3].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(FridgesJson[3].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												FridgesJson[3].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														FridgesJson[3].labelEn
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
							? FridgesJson[4].labelEn
							: FridgesJson[4].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{FridgesJson[4].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(FridgesJson[4].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												FridgesJson[4].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														FridgesJson[4].labelEn
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
					disabled={loading}
				>
					{loading && <Spinner />}
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
