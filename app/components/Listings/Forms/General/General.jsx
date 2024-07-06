"use client";
import classes from "./General.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";
import RadioComponent from "@/app/components/Listings/RadioComponent/RadioComponent";
import Location from "@/app/components/Listings/Forms/Globals/Location";
import Description from "@/app/components/Listings/Forms/Globals/Description";
import {useState} from "react";
import Price from "@/app/components/Listings/Forms/Globals/Price";
import ContactInformation from "@/app/components/Listings/Forms/Globals/ContactInformation";
import CategoryInfo from "@/app/components/Listings/Forms/Globals/CategoryInfo";
import ColorDropDown from "@/app/components/Listings/Forms/Globals/ColorDropDown";
import Spinner from "@/app/components/LayoutAndHomeComponents/Spinner/Spinner";

export default function General({
                                    lang,
                                    categoryName,
                                    subCategoryName,
                                    submit = () => {
                                    },
                                    loading = false,
                                }) {

    // LISTING DETAILS PART
    const [listingDetails, setListingDetails] = useState({
        brand: {
            labelAr: 'الماركة',
            labelEn: 'Brand',
            value: '',
        },
        model: {
            labelAr: 'الموديل',
            labelEn: 'Model',
            value: '',
        },
        color: {
            labelAr: 'اللون',
            labelEn: 'Color',
            value: '',
        },
        status: {
            labelAr: 'الحالة',
            labelEn: 'Status',
            value: '',
        },
        warranty: {
            labelAr: 'الضمان',
            labelEn: 'Warranty',
            value: '',
        },
        attachedAccessories: {
            labelAr: 'الملحقات المرفقة',
            labelEn: 'Attached VideoGames',
            value: '',
        },
        deviceAge: {
            labelAr: 'عمر الجهاز',
            labelEn: 'Device Age',
            value: '',
        },
        delivery: {
            labelAr: "التوصيل",
            labelEn: "Delivery",
            value: '',
        }
    });
    // LOCATION PART
    const [location, setLocation] = useState({
        city: '',
        neighborhood: '',
    });
    // DESCRIPTION PART
    const [description, setDescription] = useState({
        title: '',
        description: '',
    });
    // PRICE
    const [price, setPrice] = useState({
        price: '',
        currency: '',
    });

    // CONTACT PART
    const [contact, setContact] = useState({
        code: '',
        phone: '',
    });

    // SUBMIT FUNCTION
    const handleSubmit = () => {
        submit({
            listingDetails,
            location,
            description,
            price,
            contact
        });
    }

    return (
        <div className={`${classes.GeneralForm} rounded p-4`}>
            {/*  CATEGORY  */}
            <CategoryInfo
                lang={lang}
                categoryName={categoryName}
                subCategoryName={subCategoryName}
            />

            {/*  LISTING DETAILS  */}
            <div className={`${classes.ListingDetailsPart} p-6 rounded bg-white`}>
                <h2 className={'uppercase'}>
                    {lang === 'en' ? 'Listing Details' : 'تفاصيل القائمة'}
                </h2>

                <Hint
                    texts={lang === 'en' ? ['Attract more people to your listing by filling all information and being accurate'] : ['جذب المزيد من الناس إلى قائمتك من خلال ملء جميع المعلومات وكون دقيقًا']}
                />

                {/*  BRAND TEXT  */}
                <div className={`${classes.Brand} rounded bg-white mt-4`}>
                    <h3>
                        {lang === 'en' ? 'Brand' : 'الماركة'}
                    </h3>
                    <input
                        type={'text'}
                        placeholder={lang === 'en' ? 'Brand' : 'الماركة'}
                        value={listingDetails.brand.value}
                        onChange={(e) => {
                            setListingDetails({
                                ...listingDetails,
                                brand: {...listingDetails.brand, value: e.target.value}
                            });
                        }}
                    />
                </div>

                {/*  MODEL  */}
                <div className={`${classes.Model} rounded bg-white mt-4`}>
                    <h3>
                        {lang === 'en' ? 'Model' : 'الموديل'}
                    </h3>
                    <input
                        type={'text'}
                        placeholder={lang === 'en' ? 'Model' : 'الموديل'}
                        value={listingDetails.model.value}
                        onChange={(e) => {
                            setListingDetails({
                                ...listingDetails,
                                model: {...listingDetails.model, value: e.target.value}
                            });
                        }}
                    />
                </div>


                {/*  COLOR  */}
                <div className={`${classes.Color} rounded bg-white mt-4`}>
                    <h3>
                        {lang === 'en' ? 'Color' : 'اللون'}
                    </h3>
                    <ColorDropDown
                        value={listingDetails.color.value || ''}
                        lang={lang}
                        setSelectedColor={(color) => {
                            setListingDetails({...listingDetails, color: {...listingDetails.color, value: color}});
                        }}
                        selectedColor={listingDetails.color.value}
                    />
                </div>

                {/*  STATUS  */}
                <div className={`${classes.Status} rounded bg-white mt-4`}>
                    <h3>
                        {lang === 'en' ? 'Status' : 'الحالة'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <RadioComponent
                            textAr={'جديد'}
                            textEn={'New'}
                            lang={lang}
                            value={'new'}
                            name={'status'}
                            checked={listingDetails.status.value === 'new'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    status: {...listingDetails.status, value: 'new'}
                                });
                            }}
                        />
                        <RadioComponent
                            textAr={'مستعمل'}
                            textEn={'Used'}
                            lang={lang}
                            value={'used'}
                            name={'status'}
                            checked={listingDetails.status.value === 'used'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    status: {...listingDetails.status, value: 'used'}
                                });
                            }}
                        />
                    </div>
                </div>

                {/*  WARRANTY  */}
                <div className={`${classes.Warranty} rounded bg-white mt-4`}>
                    <h3>
                        {lang === 'en' ? 'Warranty' : 'الضمان'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <RadioComponent
                            textAr={'متاح'}
                            textEn={'Available'}
                            lang={lang}
                            value={'available'}
                            name={'warranty'}
                            checked={listingDetails.warranty.value === 'available'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    warranty: {...listingDetails.warranty, value: 'available'}
                                });
                            }}
                        />
                        <RadioComponent
                            textAr={'غير متاح'}
                            textEn={'Not Available'}
                            lang={lang}
                            value={'not-available'}
                            name={'warranty'}
                            checked={listingDetails.warranty.value === 'not-available'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    warranty: {...listingDetails.warranty, value: 'not-available'}
                                });
                            }}
                        />
                    </div>
                </div>

                {/*  ATTACHED ACCESSORIES  */}
                <div className={`${classes.AttachedAccessories} rounded bg-white mt-4`}>
                    <h3>
                        {lang === 'en' ? 'Attached VideoGames' : 'الملحقات المرفقة'}
                    </h3>
                    <textarea
                        placeholder={lang === 'en' ? 'Attached VideoGames' : 'الملحقات المرفقة'}
                        value={listingDetails.attachedAccessories.value}
                        onChange={(e) => {
                            setListingDetails({
                                ...listingDetails,
                                attachedAccessories: {...listingDetails.attachedAccessories, value: e.target.value}
                            });
                        }}
                    />
                </div>

                {/*  DEVICE AGE  */}
                <div className={`${classes.Age} rounded bg-white mt-4`}>
                    <h3>
                        {lang === 'en' ? 'Device Age' : 'عمر الجهاز'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <RadioComponent
                            textAr={'جديد'}
                            textEn={'New'}
                            lang={lang}
                            value={'new'}
                            name={'deviceAge'}
                            checked={listingDetails.deviceAge.value === 'new'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    deviceAge: {...listingDetails.deviceAge, value: 'new'}
                                });
                            }}
                        />
                        <RadioComponent
                            textAr={'أقل من سنة'}
                            textEn={'Less than a year'}
                            lang={lang}
                            value={'less-than-a-year'}
                            name={'deviceAge'}
                            checked={listingDetails.deviceAge.value === 'less-than-a-year'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    deviceAge: {...listingDetails.deviceAge, value: 'less-than-a-year'}
                                });
                            }}
                        />
                        <RadioComponent
                            textAr={'سنة'}
                            textEn={'1 year'}
                            lang={lang}
                            value={'1-year'}
                            name={'deviceAge'}
                            checked={listingDetails.deviceAge.value === '1-year'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    deviceAge: {...listingDetails.deviceAge, value: '1-year'}
                                });
                            }}
                        />
                        <RadioComponent
                            textAr={'2 سنة'}
                            textEn={'2 years'}
                            lang={lang}
                            value={'2-years'}
                            name={'deviceAge'}
                            checked={listingDetails.deviceAge.value === '2-years'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    deviceAge: {...listingDetails.deviceAge, value: '2-years'}
                                });
                            }}
                        />
                        <RadioComponent
                            textAr={'3 سنوات'}
                            textEn={'3 years'}
                            lang={lang}
                            value={'3-years'}
                            name={'deviceAge'}
                            checked={listingDetails.deviceAge.value === '3-years'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    deviceAge: {...listingDetails.deviceAge, value: '3-years'}
                                });
                            }}
                        />
                        <RadioComponent
                            textAr={'4 سنوات'}
                            textEn={'4 years'}
                            lang={lang}
                            value={'4-years'}
                            name={'deviceAge'}
                            checked={listingDetails.deviceAge.value === '4-years'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    deviceAge: {...listingDetails.deviceAge, value: '4-years'}
                                });
                            }}
                        />

                        <RadioComponent
                            textAr={'5 سنوات'}
                            textEn={'5 years'}
                            lang={lang}
                            value={'5-years'}
                            name={'deviceAge'}
                            checked={listingDetails.deviceAge.value === '5-years'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    deviceAge: {...listingDetails.deviceAge, value: '5-years'}
                                });
                            }}
                        />
                        <RadioComponent
                            textAr={'6 سنوات'}
                            textEn={'6 years'}
                            lang={lang}
                            value={'6-years'}
                            name={'deviceAge'}
                            checked={listingDetails.deviceAge.value === '6-years'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    deviceAge: {...listingDetails.deviceAge, value: '6-years'}
                                });
                            }}
                        />
                        <RadioComponent
                            textAr={'7 سنوات'}
                            textEn={'7 years'}
                            lang={lang}
                            value={'7-years'}
                            name={'deviceAge'}
                            checked={listingDetails.deviceAge.value === '7-years'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    deviceAge: {...listingDetails.deviceAge, value: '7-years'}
                                });
                            }}
                        />
                        <RadioComponent
                            textAr={'أكثر من 7 سنوات'}
                            textEn={'More than 7 years'}
                            lang={lang}
                            value={'more-than-7-years'}
                            name={'deviceAge'}
                            checked={listingDetails.deviceAge.value === 'more-than-7-years'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    deviceAge: {...listingDetails.deviceAge, value: 'more-than-7-years'}
                                });
                            }}
                        />
                    </div>
                </div>

                {/*  DELIVERY  */}
                <div className={`${classes.Delivery} rounded bg-white mt-4`}>
                    <h3>
                        {lang === 'en' ? 'Delivery' : 'التوصيل'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <RadioComponent
                            textAr={'متاح'}
                            textEn={'Available'}
                            lang={lang}
                            value={'available'}
                            name={'delivery'}
                            checked={listingDetails.delivery.value === 'available'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    delivery: {...listingDetails.delivery, value: 'available'}
                                });
                            }}
                        />
                        <RadioComponent
                            textAr={'غير متاح'}
                            textEn={'Not Available'}
                            lang={lang}
                            value={'not-available'}
                            name={'delivery'}
                            checked={listingDetails.delivery.value === 'not-available'}
                            onChange={() => {
                                setListingDetails({
                                    ...listingDetails,
                                    delivery: {...listingDetails.delivery, value: 'not-available'}
                                });
                            }}
                        />
                    </div>
                </div>
            </div>

            {/*  LOCATION  */}
            <Location
                lang={lang}
                setCity={(city) => setLocation({...location, city})}
                setNeighborhood={(neighborhood) => setLocation({...location, neighborhood})}
                city={location.city}
                neighborhood={location.neighborhood}
            />

            {/*  DESCRIPTION  */}
            <Description
                lang={lang}
                title={description.title}
                setTitle={(title) => setDescription({...description, title})}
                description={description.description}
                setDescription={(descriptionValue) => setDescription({
                    ...description,
                    description: descriptionValue
                })}
            />

            {/*  PRICE  */}
            <Price
                lang={lang}
                price={price.price}
                setPrice={(priceValue) => setPrice({...price, price: priceValue})}
                currency={price.currency}
                setCurrency={(currency) => setPrice({...price, currency})}
            />

            {/*  CONTACT INFORMATION  */}
            <ContactInformation
                lang={lang}
                cuntryCode={contact.code}
                setCountryCode={(code) => setContact({...contact, code})}
                phoneNumber={contact.phone}
                setPhoneNumber={(phoneNumber) => setContact({...contact, phone: phoneNumber})}
            />

            {/*  SUBMIT  */}
            <div className={`${classes.SubmitPart} rounded`}>
                <button
                    className={'bg-primary text-white p-4 rounded w-full mr-auto button--effect-small flex justify-center items-center gap-2'}
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? <Spinner/> : null}
                    <span
                        className={'uppercase'}>{lang === 'en' ? 'Save and PUBLISH listing' : 'حفظ ونشر القائمة'}</span>
                    <span>{lang === 'en' ? '→' : '←'}</span>
                </button>
            </div>
        </div>
    )
}