"use client";
import classes from "./Bikes.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";
import RadioComponent from "@/app/components/Listings/RadioComponent/RadioComponent";
import DropDown from "@/app/components/Listings/DropDown/DropDown";
import Location from "@/app/components/Listings/Forms/Globals/Location";
import Description from "@/app/components/Listings/Forms/Globals/Description";
import { useState } from "react";
import Price from "@/app/components/Listings/Forms/Globals/Price";
import ContactInformation from "@/app/components/Listings/Forms/Globals/ContactInformation";
import CategoryInfo from "@/app/components/Listings/Forms/Globals/CategoryInfo";
import { Calendar } from "primereact/calendar";

// JSON DATA
import BikesJson from "@/Json_Data/Motorcycles/Bikes.json";

export default function JobsSeekers({
	lang,
	categoryName,
	subCategoryName,
	submit = () => {},
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		[String(BikesJson[0].labelEn).toLocaleLowerCase()]: {
			labelAr: BikesJson[0].labelAr,
			labelEn: BikesJson[0].labelEn,
			value: "",
		},
		[String(BikesJson[1].labelEn).toLocaleLowerCase()]: {
			labelAr: BikesJson[1].labelAr,
			labelEn: BikesJson[1].labelEn,
			value: "",
		},
		[String(BikesJson[2].labelEn).toLocaleLowerCase()]: {
			labelAr: BikesJson[2].labelAr,
			labelEn: BikesJson[2].labelEn,
			value: "",
		},
		[String(BikesJson[3].labelEn).toLocaleLowerCase()]: {
			labelAr: BikesJson[3].labelAr,
			labelEn: BikesJson[3].labelEn,
			value: "",
		},
		[String(BikesJson[4].labelEn).toLocaleLowerCase()]: {
			labelAr: BikesJson[4].labelAr,
			labelEn: BikesJson[4].labelEn,
			value: "",
		},
		[String(BikesJson[5].labelEn).toLocaleLowerCase()]: {
			labelAr: BikesJson[5].labelAr,
			labelEn: BikesJson[5].labelEn,
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

	const modelsOptions = BikesJson[0].Values.map((value) => {
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
							? BikesJson[0].labelEn
							: BikesJson[0].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										BikesJson[0].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										BikesJson[0].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												BikesJson[0].labelEn
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
									? BikesJson[0].labelEn
									: BikesJson[0].labelAr
							}
						/>
					</div>
				</div>

				{/*  Category  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? BikesJson[1].labelEn
							: BikesJson[1].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<input
							type="text"
							value={
								listingDetails[
									String(
										BikesJson[1].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									[String(
										BikesJson[1].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												BikesJson[1].labelEn
											).toLocaleLowerCase()
										],
										value: e.target.value,
									},
								});
							}}
							placeholder={
								lang === "en"
									? BikesJson[1].labelEn
									: BikesJson[1].labelAr
							}
						/>
					</div>
				</div>

				{/*  Year  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? BikesJson[2].labelEn
							: BikesJson[2].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<Calendar
							style={{ width: "100%" }}
							value={
								listingDetails[
									String(
										BikesJson[2].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									[String(
										BikesJson[2].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												BikesJson[2].labelEn
											).toLocaleLowerCase()
										],
										value: e.value,
									},
								});
							}}
							placeholder={
								lang === "en"
									? BikesJson[2].labelEn
									: BikesJson[2].labelAr
							}
						/>
					</div>
				</div>

				{/*  Kilometers  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? BikesJson[3].labelEn
							: BikesJson[3].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<input
							type="text"
							value={
								listingDetails[
									String(
										BikesJson[3].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									[String(
										BikesJson[3].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												BikesJson[3].labelEn
											).toLocaleLowerCase()
										],
										value: e.target.value,
									},
								});
							}}
							placeholder={
								lang === "en"
									? BikesJson[3].labelEn
									: BikesJson[3].labelAr
							}
						/>
					</div>
				</div>

				{/* Engine Capacity */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? BikesJson[4].labelEn
							: BikesJson[4].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<input
							type="text"
							value={
								listingDetails[
									String(
										BikesJson[4].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									[String(
										BikesJson[4].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												BikesJson[4].labelEn
											).toLocaleLowerCase()
										],
										value: e.target.value,
									},
								});
							}}
							placeholder={
								lang === "en"
									? BikesJson[4].labelEn
									: BikesJson[4].labelAr
							}
						/>
					</div>
				</div>

				{/* condition */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? BikesJson[5].labelEn
							: BikesJson[5].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{BikesJson[5].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(BikesJson[5].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												BikesJson[5].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														BikesJson[5].labelEn
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
