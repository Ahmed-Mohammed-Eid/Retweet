"use client";
import classes from "./Wear.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";
import RadioComponent from "@/app/components/Listings/RadioComponent/RadioComponent";
import DropDown from "@/app/components/Listings/DropDown/DropDown";
import Location from "@/app/components/Listings/Forms/Globals/Location";
import Description from "@/app/components/Listings/Forms/Globals/Description";
import { MultiSelect } from "primereact/multiselect";
import { useEffect, useState } from "react";
import Price from "@/app/components/Listings/Forms/Globals/Price";
import ContactInformation from "@/app/components/Listings/Forms/Globals/ContactInformation";
import CategoryInfo from "@/app/components/Listings/Forms/Globals/CategoryInfo";
import CarsDropdown from "@/app/components/Listings/Forms/Globals/CarsDropdown";
import ColorDropDown from "@/app/components/Listings/Forms/Globals/ColorDropDown";
import { Calendar } from "primereact/calendar";

// JSON DATA
import WearJson from "@/Json_Data/BabyAndKids/Wear.json";

export default function BabyAndDidsWear({
	lang,
	categoryName,
	subCategoryName,
	submit = () => {},
}) {
	const [modelOptionsOptions, setModelOptionsOptions] = useState([]);
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		[String(WearJson[0].labelEn).toLocaleLowerCase()]: {
			labelAr: WearJson[0].labelAr,
			labelEn: WearJson[0].labelEn,
			value: "",
		},
		[String(WearJson[1].labelEn).toLocaleLowerCase()]: {
			labelAr: WearJson[1].labelAr,
			labelEn: WearJson[1].labelEn,
			value: "",
		},
		[String(WearJson[2].labelEn).toLocaleLowerCase()]: {
			labelAr: WearJson[2].labelAr,
			labelEn: WearJson[2].labelEn,
			value: "",
		},
		[String(WearJson[3].labelEn).toLocaleLowerCase()]: {
			labelAr: WearJson[3].labelAr,
			labelEn: WearJson[3].labelEn,
			value: "",
		},
		[String(WearJson[4].labelEn).toLocaleLowerCase()]: {
			labelAr: WearJson[4].labelAr,
			labelEn: WearJson[4].labelEn,
			value: "",
		},
		[String(WearJson[5].labelEn).toLocaleLowerCase()]: {
			labelAr: WearJson[5].labelAr,
			labelEn: WearJson[5].labelEn,
			value: "",
		},
		[String(WearJson[6].labelEn).toLocaleLowerCase()]: {
			labelAr: WearJson[6].labelAr,
			labelEn: WearJson[6].labelEn,
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

	const modelsOptions = WearJson[0].Values.map((value) => {
		return {
			label: lang === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	// GET THE LISTING DETAILS[0] KEY AND VALUEs

	useEffect(() => {
		if (
			listingDetails[String(WearJson[0].labelEn).toLocaleLowerCase()]?.value
		) {
			WearJson[0].Values.map((value) => {
				if (
					value.labelEn ===
					listingDetails[String(WearJson[0].labelEn).toLocaleLowerCase()]
						?.value
				) {
					const options = [
						...value.options.map((value) => {
							return {
								label:
									lang === "en" ? value.labelEn : value.labelAr,
								value: value.labelEn,
							};
						}),
					];

					setModelOptionsOptions(options);
				}
			});
		}
	}, [listingDetails]);


	const modelsOptions3 = WearJson[2].Values.map((value) => {
		return {
			label: lang === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions4 = WearJson[3].Values.map((value) => {
		return {
			label: lang === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions5 = WearJson[4].Values.map((value) => {
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
							? WearJson[0].labelEn
							: WearJson[0].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										WearJson[0].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										WearJson[0].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												WearJson[0].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
									[String(WearJson[1].labelEn).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												WearJson[1].labelEn
											).toLocaleLowerCase()
										],
										value: "",
									},
								});
							}}
							options={modelsOptions}
							filter={true}
							placeholder={
								lang === "en"
									? WearJson[0].labelEn
									: WearJson[0].labelAr
							}
						/>
					</div>
				</div>

				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? WearJson[1].labelEn
							: WearJson[1].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										WearJson[1].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										WearJson[1].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												WearJson[1].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelOptionsOptions || []}
							filter={true}
							placeholder={
								lang === "en"
									? WearJson[1].labelEn
									: WearJson[1].labelAr
							}
						/>
					</div>
				</div>

				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? WearJson[2].labelEn
							: WearJson[2].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										WearJson[2].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										WearJson[2].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												WearJson[2].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions3}
							filter={true}
							placeholder={
								lang === "en"
									? WearJson[2].labelEn
									: WearJson[2].labelAr
							}
						/>
					</div>
				</div>

				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? WearJson[3].labelEn
							: WearJson[3].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										WearJson[3].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										WearJson[3].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												WearJson[3].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions4}
							filter={true}
							placeholder={
								lang === "en"
									? WearJson[3].labelEn
									: WearJson[3].labelAr
							}
						/>
					</div>
				</div>

				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? WearJson[4].labelEn
							: WearJson[4].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										WearJson[4].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										WearJson[4].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												WearJson[4].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions5}
							filter={true}
							placeholder={
								lang === "en"
									? WearJson[4].labelEn
									: WearJson[4].labelAr
							}
						/>
					</div>
				</div>

				{/* condition */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{lang === "en"
							? WearJson[5].labelEn
							: WearJson[5].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{WearJson[5].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(WearJson[5].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												WearJson[5].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														WearJson[5].labelEn
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
							? WearJson[6].labelEn
							: WearJson[6].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{WearJson[6].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									lang={lang}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(WearJson[6].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												WearJson[6].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														WearJson[6].labelEn
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
