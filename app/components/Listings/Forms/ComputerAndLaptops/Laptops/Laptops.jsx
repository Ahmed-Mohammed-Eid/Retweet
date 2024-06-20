"use client";
import classes from "./Laptops.module.scss";
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
import LaptopsJson from "@/Json_Data/Laptops/Laptops.json";

export default function Laptops({
	lang,
	categoryName,
	subCategoryName,
	submit = () => {},
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		[String(LaptopsJson[0].labelEn).toLocaleLowerCase()]: {
			labelAr: LaptopsJson[0].labelAr,
			labelEn: LaptopsJson[0].labelEn,
			value: "",
		},
		[String(LaptopsJson[1].labelEn).toLocaleLowerCase()]: {
			labelAr: LaptopsJson[1].labelAr,
			labelEn: LaptopsJson[1].labelEn,
			value: "",
		},
		[String(LaptopsJson[2].labelEn).toLocaleLowerCase()]: {
			labelAr: LaptopsJson[2].labelAr,
			labelEn: LaptopsJson[2].labelEn,
			value: "",
		},
		[String(LaptopsJson[3].labelEn).toLocaleLowerCase()]: {
			labelAr: LaptopsJson[3].labelAr,
			labelEn: LaptopsJson[3].labelEn,
			value: "",
		},
		[String(LaptopsJson[4].labelEn).toLocaleLowerCase()]: {
			labelAr: LaptopsJson[4].labelAr,
			labelEn: LaptopsJson[4].labelEn,
			value: "",
		},
		[String(LaptopsJson[5].labelEn).toLocaleLowerCase()]: {
			labelAr: LaptopsJson[5].labelAr,
			labelEn: LaptopsJson[5].labelEn,
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

	const modelsOptions = LaptopsJson[0].Values.map((value) => {
		return {
			label: lang === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions2 = LaptopsJson[1].Values.map((value) => {
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
							? LaptopsJson[0].labelEn
							: LaptopsJson[0].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										LaptopsJson[0].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										LaptopsJson[0].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												LaptopsJson[0].labelEn
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
									? LaptopsJson[0].labelEn
									: LaptopsJson[0].labelAr
							}
						/>
					</div>
				</div>

				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? LaptopsJson[1].labelEn
							: LaptopsJson[1].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										LaptopsJson[1].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										LaptopsJson[1].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												LaptopsJson[1].labelEn
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
									? LaptopsJson[1].labelEn
									: LaptopsJson[1].labelAr
							}
						/>
					</div>
				</div>

				{/*  Category  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? LaptopsJson[2].labelEn
							: LaptopsJson[2].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<input
							type="text"
							value={
								listingDetails[
									String(
										LaptopsJson[2].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									[String(
										LaptopsJson[2].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												LaptopsJson[2].labelEn
											).toLocaleLowerCase()
										],
										value: e.target.value,
									},
								});
							}}
							placeholder={
								lang === "en"
									? LaptopsJson[2].labelEn
									: LaptopsJson[2].labelAr
							}
						/>
					</div>
				</div>

				{/*  Year  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? LaptopsJson[3].labelEn
							: LaptopsJson[3].labelAr}
					</h3>
					<div className={"flex justify-start gap-3 flex-wrap"}>
						<input
							type="text"
							value={
								listingDetails[
									String(
										LaptopsJson[3].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									[String(
										LaptopsJson[3].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												LaptopsJson[3].labelEn
											).toLocaleLowerCase()
										],
										value: e.target.value,
									},
								});
							}}
							placeholder={
								lang === "en"
									? LaptopsJson[3].labelEn
									: LaptopsJson[3].labelAr
							}
						/>
					</div>
				</div>

				{/* condition */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? LaptopsJson[4].labelEn
							: LaptopsJson[4].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{LaptopsJson[4].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(LaptopsJson[4].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												LaptopsJson[4].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														LaptopsJson[4].labelEn
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
							? LaptopsJson[5].labelEn
							: LaptopsJson[5].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{LaptopsJson[5].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(LaptopsJson[5].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												LaptopsJson[5].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														LaptopsJson[5].labelEn
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
