"use client";
import classes from "./RealEstateForm.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";
import RadioComponent from "@/app/components/Listings/RadioComponent/RadioComponent";
import DropDown from "@/app/components/Listings/DropDown/DropDown";
import CheckBoxComponent from "@/app/components/Listings/CheckBoxComponent/CheckBoxComponent";
import {MultiSelect} from "primereact/multiselect";
import {useState} from "react";

export default function RealEstateForm({lang, categoryName, subCategoryName, submit = () => {}}) {

    // STATES
    const [files, setFiles] = useState([]);
    // LISTING DETAILS PART
    const [listingDetails, setListingDetails] = useState({
        rooms: null,
        bathrooms: null,
        furnished: null,
        surfaceArea: null,
        surfaceAreaUnit: null,
        floor: null,
        buildingAge: null,
        rentalPeriod: null,
        mainAmenities: [],
        additionalAmenities: [],
        nearbyLocations: [],
        facade: null,
    });
    // LOCATION PART
    const [location, setLocation] = useState({
        city: null,
        neighborhood: null,
    });
    // DESCRIPTION PART
    const [description, setDescription] = useState({
        title: null,
        description: null,
    });
    // PRICE
    const [price, setPrice] = useState({
        price: null,
        currency: null,
    });

    // CONTACT PART
    const [contact, setContact] = useState({
        code: null,
        phone: null,
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
        <div className={`${classes.RealEstateForm} rounded p-4`}>
            {/*  CATEGORY  */}
            <div className={`${classes.CategoryPart} p-12 rounded`}>
                <h2>
                    {lang === 'en' ? 'Category' : 'الفئة'}
                </h2>
                <p>
                    <span>{lang === 'en' ? `You are adding a ${categoryName} in the ${subCategoryName} category` : `أنت تضيف ${categoryName} في فئة ${subCategoryName}`}</span>
                    <span>{lang === 'en' ? 'Change' : 'تغيير'}</span>
                </p>
            </div>

            {/*  LISTING DETAILS  */}
            <div className={`${classes.ListingDetailsPart} p-6 rounded bg-white`}>
                <h2 className={'uppercase'}>
                    {lang === 'en' ? 'Listing Details' : 'تفاصيل القائمة'}
                </h2>

                <Hint
                    texts={lang === 'en' ? ['Attract more people to your listing by filling all information and being accurate'] : ['جذب المزيد من الناس إلى قائمتك من خلال ملء جميع المعلومات وكون دقيقًا']}
                />

                {/*  NUMBER OF ROOMS  */}
                <div className={`${classes.NumberOfRooms} rounded bg-white`}>
                    <h3>
                        {lang === 'en' ? 'Number of rooms' : 'عدد الغرف'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <RadioComponent
                            lang={lang}
                            name={'rooms'}
                            value={'studio'}
                            textEn={'Studio'}
                            textAr={'استديو'}
                            onChange={(e) => {
                                console.log(e);
                                setListingDetails({...listingDetails, rooms: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rooms'}
                            value={'1'}
                            textEn={'1'}
                            textAr={'1'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, rooms: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rooms'}
                            value={'2'}
                            textEn={'2'}
                            textAr={'2'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, rooms: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rooms'}
                            value={'3'}
                            textEn={'3'}
                            textAr={'3'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, rooms: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rooms'}
                            value={'4'}
                            textEn={'4'}
                            textAr={'4'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, rooms: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rooms'}
                            value={'5'}
                            textEn={'5'}
                            textAr={'5'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, rooms: e.target.value});
                            }}
                        />
                    </div>
                </div>

                {/*  NUMBER OF BATHROOMS  */}
                <div className={`${classes.NumberOfBathrooms} rounded bg-white`}>
                    <h3>
                        {lang === 'en' ? 'Number of bathrooms' : 'عدد الحمامات'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <RadioComponent
                            lang={lang}
                            name={'bathrooms'}
                            value={'1'}
                            textEn={'1'}
                            textAr={'1'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, bathrooms: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'bathrooms'}
                            value={'2'}
                            textEn={'2'}
                            textAr={'2'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, bathrooms: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'bathrooms'}
                            value={'3'}
                            textEn={'3'}
                            textAr={'3'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, bathrooms: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'bathrooms'}
                            value={'4'}
                            textEn={'4'}
                            textAr={'4'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, bathrooms: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'bathrooms'}
                            value={'5'}
                            textEn={'5'}
                            textAr={'5'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, bathrooms: e.target.value});
                            }}
                        />
                    </div>
                </div>

                {/*  Furnished/Unfurnished  */}
                <div className={`${classes.FurnishedUnfurnished} rounded bg-white`}>
                    <h3>
                        {lang === 'en' ? 'Furnished/Unfurnished' : 'مفروش/غير مفروش'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <RadioComponent
                            lang={lang}
                            name={'furnished'}
                            value={'furnished'}
                            textEn={'Furnished'}
                            textAr={'مفروش'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, furnished: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'furnished'}
                            value={'unfurnished'}
                            textEn={'Unfurnished'}
                            textAr={'غير مفروش'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, furnished: e.target.value});
                            }}
                        />
                    </div>
                </div>

                {/*  Surface Area  */}
                <div className={`${classes.SurfaceArea} rounded bg-white`}>
                    <h3>
                        {lang === 'en' ? 'Surface Area' : 'مساحة السطح'}
                    </h3>
                    <div className={'grid grid-cols-4 gap-4 items-start'}>
                        <DropDown
                            value={listingDetails?.surfaceAreaUnit || ''}
                            options={[
                                {label: 'm²', value: 'm²'},
                                {label: 'ft²', value: 'ft²'},
                            ]}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, surfaceAreaUnit: e.value})
                            }}
                            placeholder={lang === 'en' ? 'Select Unit' : 'حدد الوحدة'}
                        />
                        <input
                            type="number"
                            placeholder={'Surface Area'}
                            className={'col-span-3'}
                            value={listingDetails?.surfaceArea || ''}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, surfaceArea: e.target.value})
                            }}
                        />
                    </div>
                </div>

                {/* Floor  */}
                <div className={`${classes.Floor} rounded bg-white`}>
                    <h3>
                        {lang === 'en' ? 'Floor' : 'طابق'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'Basement Floor'}
                            textEn={'Basement Floor'}
                            textAr={'طابق القبو'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'Semi Ground Floor'}
                            textEn={'Semi Ground Floor'}
                            textAr={'طابق شبه الأرض'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'Ground Floor'}
                            textEn={'Ground Floor'}
                            textAr={'الطابق الأرضي'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'1'}
                            textEn={'1'}
                            textAr={'1'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'2'}
                            textEn={'2'}
                            textAr={'2'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'3'}
                            textEn={'3'}
                            textAr={'3'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'4'}
                            textEn={'4'}
                            textAr={'4'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'5'}
                            textEn={'5'}
                            textAr={'5'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'6'}
                            textEn={'6'}
                            textAr={'6'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'7'}
                            textEn={'7'}
                            textAr={'7'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'8'}
                            textEn={'8'}
                            textAr={'8'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'Last Floor With Floor'}
                            textEn={'Last Floor With Floor'}
                            textAr={'الطابق الأخير مع الطابق'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, floor: e.target.value});
                            }}
                        />
                    </div>
                </div>

                {/*  Building Age  */}
                <div className={`${classes.BuildingAge} rounded bg-white`}>
                    <h3>
                        {lang === 'en' ? 'Building Age' : 'عمر البناء'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <RadioComponent
                            lang={lang}
                            name={'buildingAge'}
                            value={'0-11 Months'}
                            textEn={'0-11 Months'}
                            textAr={'0-11 أشهر'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, buildingAge: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'buildingAge'}
                            value={'1-5 Years'}
                            textEn={'1-5 Years'}
                            textAr={'1-5 سنوات'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, buildingAge: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'buildingAge'}
                            value={'6-10 Years'}
                            textEn={'6-10 Years'}
                            textAr={'6-10 سنوات'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, buildingAge: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'buildingAge'}
                            value={'11-20 Years'}
                            textEn={'11-20 Years'}
                            textAr={'11-20 سنوات'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, buildingAge: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'buildingAge'}
                            value={'20+ Years'}
                            textEn={'20+ Years'}
                            textAr={'20+ سنوات'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, buildingAge: e.target.value});
                            }}
                        />
                    </div>
                </div>

                {/*  Rental period  */}
                <div className={`${classes.RentalPeriod} rounded bg-white`}>
                    <h3>
                        {lang === 'en' ? 'Rental period' : 'فترة الإيجار'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <RadioComponent
                            lang={lang}
                            name={'rentalPeriod'}
                            value={'Daily'}
                            textEn={'Daily'}
                            textAr={'يومي'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, rentalPeriod: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rentalPeriod'}
                            value={'Weekly'}
                            textEn={'Weekly'}
                            textAr={'أسبوعي'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, rentalPeriod: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rentalPeriod'}
                            value={'Monthly'}
                            textEn={'Monthly'}
                            textAr={'شهري'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, rentalPeriod: e.target.value});
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rentalPeriod'}
                            value={'Yearly'}
                            textEn={'Yearly'}
                            textAr={'سنوي'}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, rentalPeriod: e.target.value});
                            }}
                        />
                    </div>
                </div>

                {/*  Main Amenities  */}
                <div className={`${classes.MainAmenities} rounded bg-white`}>
                    <h3>
                        {lang === 'en' ? 'Main Amenities' : 'المرافق الرئيسية'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <MultiSelect
                            value={listingDetails?.mainAmenities || []}
                            onChange={(e) => {
                                setListingDetails({...listingDetails, mainAmenities: e.value});
                            }}
                            options={[
                                {name: lang === 'en' ? 'Air Conditioning' : 'تكييف', code: 'AC'},
                                {name: lang === 'en' ? 'Balcony' : 'شرفة', code: 'B'},
                                {name: lang === 'en' ? 'Built in Wardrobes' : 'خزائن مدمجة', code: 'BW'},
                                {name: lang === 'en' ? 'Central A/C' : 'تكييف مركزي', code: 'CAC'},
                                {name: lang === 'en' ? 'Concierge' : 'كونسيرج', code: 'C'},
                                {name: lang === 'en' ? 'Covered Parking' : 'موقف سيارات مغطى', code: 'CP'},
                                {name: lang === 'en' ? 'Kitchen Appliances' : 'أجهزة المطبخ', code: 'KA'},
                                {name: lang === 'en' ? 'Maid Service' : 'خدمة الغرف', code: 'MS'},
                                {name: lang === 'en' ? 'Networked' : 'متصل بالشبكة', code: 'N'},
                                {name: lang === 'en' ? 'Pets Allowed' : 'يسمح بالحيوانات الأليفة', code: 'PA'},
                                {name: lang === 'en' ? 'Security' : 'أمان', code: 'S'},
                                {name: lang === 'en' ? 'Shared Gym' : 'صالة رياضية مشتركة', code: 'SG'},
                                {name: lang === 'en' ? 'Shared Pool' : 'حمام سباحة مشترك', code: 'SP'},
                                {name: lang === 'en' ? 'View of Landmark' : 'إطلالة على معلم', code: 'VOL'},
                                {name: lang === 'en' ? 'View of Water' : 'إطلالة على الماء', code: 'VOW'},
                                {name: lang === 'en' ? 'Walk-in Closet' : 'خزانة ملابس', code: 'WC'},
                                {name: lang === 'en' ? 'Waste Disposal' : 'تخلص من النفايات', code: 'WD'},
                                {name: lang === 'en' ? 'Laundry Room' : 'غرفة غسيل', code: 'LR'},
                                {name: lang === 'en' ? 'Private Pool' : 'حمام سباحة خاص', code: 'PP'},
                                {name: lang === 'en' ? 'Private Gym' : 'صالة رياضية خاصة', code: 'PG'},
                                {name: lang === 'en' ? 'Private Garden' : 'حديقة خاصة', code: 'PG'},
                                {name: lang === 'en' ? 'Private Jacuzzi' : 'جاكوزي خاص', code: 'PJ'},
                                {name: lang === 'en' ? 'Private Sauna' : 'ساونا خاصة', code: 'PS'},
                                {name: lang === 'en' ? 'Private Steam Room' : 'غرفة بخار خاصة', code: 'PSR'},
                                {name: lang === 'en' ? 'Barbecue Area' : 'منطقة شواء', code: 'BA'},
                                {name: lang === 'en' ? 'Kids Play Area' : 'منطقة لعب الأطفال', code: 'KPA'},
                                {name: lang === 'en' ? 'Lawn or Garden' : 'عشب أو حديقة', code: 'LG'},
                                {name: lang === 'en' ? 'CCTV Security' : 'أمان CCTV', code: 'CS'},
                                {name: lang === 'en' ? 'Intercom' : 'التحدث الداخلي', code: 'I'},
                                {
                                    name: lang === 'en' ? 'Satellite/Cable TV' : 'تلفزيون الكابل / الأقمار الصناعية',
                                    code: 'SCTV'
                                },
                                {name: lang === 'en' ? 'Double Glazed Windows' : 'نوافذ مزدوجة الزجاج', code: 'DGW'},
                                {name: lang === 'en' ? 'Maintenance Staff' : 'طاقم الصيانة', code: 'MS'},
                                {name: lang === 'en' ? 'Cleaning Services' : 'خدمات التنظيف', code: 'CS'},
                                {name: lang === 'en' ? 'Marble' : 'رخام', code: 'M'},
                                {name: lang === 'en' ? 'Tiles' : 'بلاط', code: 'T'},
                                {name: lang === 'en' ? 'Wood Flooring' : 'أرضيات خشبية', code: 'WF'},
                                {name: lang === 'en' ? 'Balcony' : 'شرفة', code: 'B'},
                                {name: lang === 'en' ? 'Bar' : 'بار', code: 'B'},
                                {name: lang === 'en' ? 'Laundry Room' : 'غرفة غسيل', code: 'LR'},
                                {name: lang === 'en' ? 'Laundry in Building' : 'غسيل في المبنى', code: 'LIB'},
                                {name: lang === 'en' ? 'Service Elevators' : 'مصاعد الخدمة', code: 'SE'},
                                {name: lang === 'en' ? 'Prayer Room' : 'غرفة الصلاة', code: 'PR'},
                                {
                                    name: lang === 'en' ? 'Reception/Waiting Room' : 'غرفة الاستقبال / الانتظار',
                                    code: 'RWR'
                                },
                                {name: lang === 'en' ? 'Conference Room' : 'غرفة المؤتمرات', code: 'CR'},
                                {name: lang === 'en' ? 'Security Staff' : 'طاقم الأمان', code: 'SS'},
                                {name: lang === 'en' ? 'Cafeteria or Canteen' : 'كافتيريا أو منتزه', code: 'CC'},
                                {name: lang === 'en' ? 'Freehold' : 'ملكية حرة', code: 'F'},
                                {name: lang === 'en' ? 'Maids Room' : 'غرفة الخادمة', code: 'MR'},
                                {name: lang === 'en' ? 'Storage Areas' : 'مناطق التخزين', code: 'SA'},
                                {name: lang === 'en' ? 'Study Room' : 'غرفة دراسة', code: 'SR'},
                                {name: lang === 'en' ? 'Waste Disposal' : 'تخلص من النفايات', code: 'WD'},
                                {name: lang === 'en' ? 'Conference Room' : 'غرفة المؤتمرات', code: 'CR'},
                                {name: lang === 'en' ? 'Conference Room' : 'غرفة المؤتمرات', code: 'CR'},
                            ]}
                            optionLabel="name"
                            display="chip"
                            placeholder="Select Cities"
                            maxSelectedLabels={20}
                            className="w-full md:w-20rem"
                            style={{
                                width: "100%",
                                height: "50px",
                                border: "1px solid #EBF5F8",
                                borderRadius: "5px",
                                fontSize: "15px",
                                outline: "none",
                            }}
                        />
                    </div>
                </div>

                {/*  Additional Amenities  */}
                <div className={`${classes.AdditionalAmenities} rounded bg-white`}>
                    <h3>
                        {lang === 'en' ? 'Additional Amenities' : 'مرافق إضافية'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Air Conditioning'}
                            textEn={'Air Conditioning'}
                            textAr={'تكييف'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Balcony'}
                            textEn={'Balcony'}
                            textAr={'شرفة'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Built in Wardrobes'}
                            textEn={'Built in Wardrobes'}
                            textAr={'خزائن مدمجة'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Central A/C'}
                            textEn={'Central A/C'}
                            textAr={'تكييف مركزي'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Concierge'}
                            textEn={'Concierge'}
                            textAr={'كونسيرج'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Covered Parking'}
                            textEn={'Covered Parking'}
                            textAr={'موقف سيارات مغطى'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Kitchen Appliances'}
                            textEn={'Kitchen Appliances'}
                            textAr={'أجهزة المطبخ'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Maid Service'}
                            textEn={'Maid Service'}
                            textAr={'خدمة الغرف'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Networked'}
                            textEn={'Networked'}
                            textAr={'متصل بالشبكة'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Pets Allowed'}
                            textEn={'Pets Allowed'}
                            textAr={'يسمح بالحيوانات الأليفة'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Security'}
                            textEn={'Security'}
                            textAr={'أمان'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Shared Gym'}
                            textEn={'Shared Gym'}
                            textAr={'صالة رياضية مشتركة'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Shared Pool'}
                            textEn={'Shared Pool'}
                            textAr={'حمام سباحة مشترك'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'View of Landmark'}
                            textEn={'View of Landmark'}
                            textAr={'إطلالة على معلم'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'View of Water'}
                            textEn={'View of Water'}
                            textAr={'إطلالة على الماء'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Walk-in Closet'}
                            textEn={'Walk-in Closet'}
                            textAr={'خزانة ملابس'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'additionalAmenities'}
                            value={'Waste Disposal'}
                            textEn={'Waste Disposal'}
                            textAr={'تخلص من النفايات'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: [...listingDetails.additionalAmenities, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: listingDetails.additionalAmenities.filter((amenity) => amenity !== e.target.value)
                                    });
                                }
                            }}
                        />
                    </div>
                </div>

                {/*  Nearby Locations  */}
                <div className={`${classes.NearbyLocations} rounded bg-white`}>
                    <h3>
                        {lang === 'en' ? 'Nearby Locations' : 'المواقع القريبة'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <CheckBoxComponent
                            lang={lang}
                            name={'nearbyLocations'}
                            value={'Airport'}
                            textEn={'Airport'}
                            textAr={'مطار'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: [...listingDetails.nearbyLocations, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: listingDetails.nearbyLocations.filter((location) => location !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'nearbyLocations'}
                            value={'Hospital'}
                            textEn={'Hospital'}
                            textAr={'مستشفى'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: [...listingDetails.nearbyLocations, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: listingDetails.nearbyLocations.filter((location) => location !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'nearbyLocations'}
                            value={'Mall'}
                            textEn={'Mall'}
                            textAr={'مركز تجاري'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: [...listingDetails.nearbyLocations, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: listingDetails.nearbyLocations.filter((location) => location !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'nearbyLocations'}
                            value={'Metro'}
                            textEn={'Metro'}
                            textAr={'مترو'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: [...listingDetails.nearbyLocations, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: listingDetails.nearbyLocations.filter((location) => location !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'nearbyLocations'}
                            value={'Mosque'}
                            textEn={'Mosque'}
                            textAr={'مسجد'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: [...listingDetails.nearbyLocations, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: listingDetails.nearbyLocations.filter((location) => location !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'nearbyLocations'}
                            value={'Park'}
                            textEn={'Park'}
                            textAr={'حديقة'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: [...listingDetails.nearbyLocations, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: listingDetails.nearbyLocations.filter((location) => location !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'nearbyLocations'}
                            value={'Pharmacy'}
                            textEn={'Pharmacy'}
                            textAr={'صيدلية'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: [...listingDetails.nearbyLocations, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: listingDetails.nearbyLocations.filter((location) => location !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'nearbyLocations'}
                            value={'Restaurants'}
                            textEn={'Restaurants'}
                            textAr={'مطاعم'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: [...listingDetails.nearbyLocations, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: listingDetails.nearbyLocations.filter((location) => location !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'nearbyLocations'}
                            value={'School'}
                            textEn={'School'}
                            textAr={'مدرسة'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: [...listingDetails.nearbyLocations, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: listingDetails.nearbyLocations.filter((location) => location !== e.target.value)
                                    });
                                }
                            }}
                        />
                        <CheckBoxComponent
                            lang={lang}
                            name={'nearbyLocations'}
                            value={'Supermarket'}
                            textEn={'Supermarket'}
                            textAr={'سوبر ماركت'}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: [...listingDetails.nearbyLocations, e.target.value]
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: listingDetails.nearbyLocations.filter((location) => location !== e.target.value)
                                    });
                                }
                            }}
                        />
                    </div>
                </div>


                {/*  Facade  */}
                <div className={`${classes.Facade} rounded bg-white`}>
                    <h3>
                        {lang === 'en' ? 'Facade' : 'واجهة'}
                    </h3>
                    <div className={'flex justify-start gap-2 flex-wrap'}>
                        <RadioComponent
                            lang={lang}
                            name={'facade'}
                            value={'North'}
                            textEn={'North'}
                            textAr={'شمال'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    facade: e.target.value
                                })
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'facade'}
                            value={'South'}
                            textEn={'South'}
                            textAr={'جنوب'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    facade: e.target.value
                                })
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'facade'}
                            value={'East'}
                            textEn={'East'}
                            textAr={'شرق'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    facade: e.target.value
                                })
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'facade'}
                            value={'West'}
                            textEn={'West'}
                            textAr={'غرب'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    facade: e.target.value
                                })
                            }}
                        />
                    </div>
                </div>
            </div>

            {/*  LOCATION  */}
            <div className={`${classes.LocationPart} p-12 rounded bg-white`}>
                <h2>
                    {lang === 'en' ? 'Location' : 'موقع'}
                </h2>
                <Hint
                    texts={lang === 'en' ? ['Describe the listing in more details you want people to know', 'Details increase your chance of getting the right buyer'] : ['صف القائمة بمزيد من التفاصيل التي تريد أن يعرفها الناس', 'التفاصيل تزيد من فرصتك في الحصول على المشتري المناسب']}
                />

                {/*CITY*/}
                <div className={`${classes.City} rounded bg-white flex flex-col gap-2 mt-8`}>
                    <div className={'flex flex-col gap-2'}>
                        <label htmlFor={'city'}>{lang === 'en' ? 'City' : 'مدينة'}</label>
                        <input
                            type="text" id={'city'}
                            placeholder={lang === 'en' ? 'City' : 'مدينة'}
                            value={location.city}
                            onChange={(e) => {
                                setLocation({
                                    ...location,
                                    city: e.target.value
                                })
                            }}
                        />
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <label htmlFor={'Neighborhood'}>{lang === 'en' ? 'Neighborhood' : 'حي'}</label>
                        <input
                            type="text"
                            id={'Neighborhood'}
                            placeholder={lang === 'en' ? 'Neighborhood' : 'حي'}
                            value={location.neighborhood}
                            onChange={(e) => {
                                setLocation({
                                    ...location,
                                    neighborhood: e.target.value
                                })
                            }}
                        />
                    </div>
                </div>
            </div>

            {/*  DESCRIPTION  */}
            <div className={`${classes.DescriptionPart} p-12 rounded bg-white`}>
                <h2>
                    {lang === 'en' ? 'Description' : 'وصف'}
                </h2>
                <Hint
                    texts={lang === 'en' ? ['Describe the listing in more details you want people to know', 'Details increase your chance of getting the right buyer'] : ['صف القائمة بمزيد من التفاصيل التي تريد أن يعرفها الناس', 'التفاصيل تزيد من فرصتك في الحصول على المشتري المناسب']}
                />

                <div className={'flex flex-col gap-2 mt-8'}>
                    <div className={'flex flex-col gap-2'}>
                        <label htmlFor={'title'}>{lang === 'en' ? 'Listing Title' : 'عنوان القائمة'}</label>
                        <input
                            type="text"
                            id={'title'}
                            placeholder={lang === 'en' ? 'Listing Title' : 'عنوان القائمة'}
                            value={description.title}
                            onChange={(e) => {
                                setDescription({
                                    ...description,
                                    title: e.target.value
                                })
                            }}
                        />
                        <span className={'hint'}>0-100</span>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <label htmlFor={'description'}>{lang === 'en' ? 'Listing Description' : 'وصف القائمة'}</label>
                        <textarea
                            id={'description'}
                            placeholder={lang === 'en' ? 'Listing Description' : 'وصف القائمة'}
                            value={description.description}
                            onChange={(e) => {
                                setDescription({
                                    ...description,
                                    description: e.target.value
                                })
                            }}
                        />
                        <span className={'hint'}>0-5000</span>
                    </div>
                </div>
            </div>

            {/*  PRICE  */}
            <div className={`${classes.PricePart} p-12 rounded bg-white`}>
                <h2>
                    {lang === 'en' ? 'Price' : 'السعر'}
                </h2>
                <Hint
                    texts={lang === 'en' ? ['Set the price for your listing', 'Price should be reasonable'] : ['قم بتعيين السعر لقائمتك', 'يجب أن يكون السعر معقول']}
                />

                <div className={'grid grid-cols-4 gap-2 mt-8'}>
                    <div className={'flex flex-col gap-2'}>
                        <label htmlFor={'currency'}>{lang === 'en' ? 'Currency' : 'عملة'}</label>
                        <DropDown
                            value={price?.currency || ''}
                            options={[
                                {label: 'Kuwaiti Dinar', value: 'KWD'},
                                {label: 'UAE Dirham', value: 'AED'},
                                {label: 'Saudi Riyal', value: 'SAR'},
                                {label: 'Qatari Riyal', value: 'QAR'},
                                {label: 'Bahraini Dinar', value: 'BHD'},
                                {label: 'Jordanian Dinar', value: 'JOD'},
                                {label: 'Lebanese Pound', value: 'LBP'},
                                {label: 'Syrian Pound', value: 'SYP'},
                                {label: 'Yemeni Rial', value: 'YER'},
                                {label: 'Iraqi Dinar', value: 'IQD'},
                                {label: 'Libyan Dinar', value: 'LYD'},
                                {label: 'Algerian Dinar', value: 'DZD'},
                                {label: 'Tunisian Dinar', value: 'TND'},
                                {label: 'Moroccan Dirham', value: 'MAD'},
                                {label: 'Somali Shilling', value: 'SOS'},
                                {label: 'Sudanese Pound', value: 'SDG'},
                                {label: 'Mauritanian Ouguiya', value: 'MRU'},
                                {label: 'Omani Rial', value: 'OMR'},
                                {label: 'Egyptian Pound', value: 'EGP'},
                                {label: 'Euro', value: 'EUR'},
                                {label: 'US Dollar', value: 'USD'},
                                {label: 'British Pound', value: 'GBP'},
                                {label: 'Indian Rupee', value: 'INR'},
                                {label: 'Pakistani Rupee', value: 'PKR'},
                                {label: 'Bangladeshi Taka', value: 'BDT'},
                                {label: 'Sri Lankan Rupee', value: 'LKR'},
                                {label: 'Nepalese Rupee', value: 'NPR'},
                                {label: 'Philippine Peso', value: 'PHP'},
                                {label: 'Indonesian Rupiah', value: 'IDR'},
                            ]}
                            onChange={(e) => {
                                setPrice({
                                    ...price,
                                    currency: e.target.value
                                })
                            }}
                            placeholder={lang === 'en' ? 'Select Currency' : 'حدد العملة'}
                        />
                    </div>
                    <div className={'flex flex-col gap-2 col-span-3'}>
                        <label htmlFor={'price'}>{lang === 'en' ? 'Price' : 'السعر'}</label>
                        <input
                            type="number"
                            id={'price'}
                            placeholder={lang === 'en' ? 'Price' : 'السعر'}
                            value={price.price}
                            onChange={(e) => {
                                setPrice({
                                    ...price,
                                    price: e.target.value
                                })
                            }}
                        />
                    </div>
                </div>
            </div>

            {/*  CONTACT INFORMATION  */}
            <div className={`${classes.ContactInformationPart} p-12 rounded bg-white`}>
                <h2>
                    {lang === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
                </h2>
                <Hint
                    texts={lang === 'en' ? ['Set the contact information for your listing', 'Contact information should be accurate'] : ['قم بتعيين معلومات الاتصال لقائمتك', 'يجب أن تكون معلومات الاتصال دقيقة']}
                />

                <div className={'grid grid-cols-8 items-end gap-2 mt-8'}>
                    <div className={'flex flex-col'}>
                        <label htmlFor={'country_code'}>{lang === 'en' ? 'Country Code' : 'كود الدولة'}</label>
                        <input
                            type="text"
                            id={'country_code'}
                            value={contact.code}
                            onChange={(e) => {
                                setContact({
                                    ...contact,
                                    code: e.target.value
                                })
                            }}
                        />
                    </div>
                    <div className={'flex flex-col col-span-7'}>
                        <label htmlFor={'phone'}>{lang === 'en' ? 'Mobile number' : 'رقم الهاتف'}</label>
                        <input
                            type="text"
                            id={'phone'}
                            placeholder={lang === 'en' ? 'Mobile number' : 'رقم الهاتف'}
                            value={contact.phone}
                            onChange={(e) => {
                                setContact({
                                    ...contact,
                                    phone: e.target.value
                                })
                            }}
                        />
                    </div>
                </div>
            </div>

            {/*  SUBMIT  */}
            <div className={`${classes.SubmitPart} rounded`}>
                <button
                    className={'bg-primary text-white p-4 rounded w-full mr-auto button--effect-small flex justify-center items-center gap-2'}
                    onClick={handleSubmit}
                >
                    <span
                        className={'uppercase'}>{lang === 'en' ? 'Save and PUBLISH listing' : 'حفظ ونشر القائمة'}</span>
                    <span>{lang === 'en' ? '→' : '←'}</span>
                </button>
            </div>
        </div>
    )
}