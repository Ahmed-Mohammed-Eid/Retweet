"use client";
import classes from "./RealEstateForm.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";
import RadioComponent from "@/app/components/Listings/RadioComponent/RadioComponent";
import DropDown from "@/app/components/Listings/DropDown/DropDown";
import CheckBoxComponent from "@/app/components/Listings/CheckBoxComponent/CheckBoxComponent";
import Location from "@/app/components/Listings/Forms/Globals/Location";
import Description from "@/app/components/Listings/Forms/Globals/Description";
import {MultiSelect} from "primereact/multiselect";
import {useState} from "react";
import Price from "@/app/components/Listings/Forms/Globals/Price";
import ContactInformation from "@/app/components/Listings/Forms/Globals/ContactInformation";
import CategoryInfo from "@/app/components/Listings/Forms/Globals/CategoryInfo";
import Spinner from "@/app/components/LayoutAndHomeComponents/Spinner/Spinner";

export default function RealEstateForm({
                                           lang,
                                           categoryName,
                                           subCategoryName,
                                           submit = () => {
                                           },
                                           loading = false,
                                       }) {


    // LISTING DETAILS PART
    const [listingDetails, setListingDetails] = useState({
        rooms: {
            labelAr: 'الغرف',
            labelEn: 'Rooms',
            value: '',
        },
        bathrooms: {
            labelAr: 'الحمامات',
            labelEn: 'HouseLighting',
            value: '',
        },
        furnished: {
            labelAr: 'مفروش/غير مفروش',
            labelEn: 'Furnished/Unfurnished',
            value: '',
        },
        surfaceArea: {
            labelAr: 'مساحة السطح',
            labelEn: 'Surface Area',
            value: '',
        },
        surfaceAreaUnit: {
            labelAr: 'وحدة السطح',
            labelEn: 'Surface Area Unit',
            value: '',
        },
        floor: {
            labelAr: 'طابق',
            labelEn: 'Floor',
            value: '',
        },
        buildingAge: {
            labelAr: 'عمر البناء',
            labelEn: 'Building Age',
            value: '',
        },
        rentalPeriod: {
            labelAr: 'فترة الإيجار',
            labelEn: 'Rental Period',
            value: '',
        },
        mainAmenities: {
            labelAr: 'المرافق الرئيسية',
            labelEn: 'Main Amenities',
            value: [],
        },
        additionalAmenities: {
            labelAr: 'مرافق إضافية',
            labelEn: 'Additional Amenities',
            value: [],
        },
        nearbyLocations: {
            labelAr: 'المواقع القريبة',
            labelEn: 'Nearby Locations',
            value: [],
        },
        facade: {
            labelAr: 'واجهة',
            labelEn: 'Facade',
            value: '',
        },
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

    // MAIN AMENITIES OPTIONS


    return (
        <div className={`${classes.RealEstateForm} rounded p-4`}>
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
                            checked={listingDetails.rooms.value === 'studio'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    rooms: {...listingDetails.rooms, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rooms'}
                            value={'1'}
                            textEn={'1'}
                            textAr={'1'}
                            checked={listingDetails.rooms.value === '1'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    rooms: {...listingDetails.rooms, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rooms'}
                            value={'2'}
                            textEn={'2'}
                            textAr={'2'}
                            checked={listingDetails.rooms.value === '2'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    rooms: {...listingDetails.rooms, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rooms'}
                            value={'3'}
                            textEn={'3'}
                            textAr={'3'}
                            checked={listingDetails.rooms.value === '3'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    rooms: {...listingDetails.rooms, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rooms'}
                            value={'4'}
                            textEn={'4'}
                            textAr={'4'}
                            checked={listingDetails.rooms.value === '4'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    rooms: {...listingDetails.rooms, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rooms'}
                            value={'5'}
                            textEn={'5'}
                            textAr={'5'}
                            checked={listingDetails.rooms.value === '5'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    rooms: {...listingDetails.rooms, value: e.target.value}
                                });
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
                            checked={listingDetails.bathrooms.value === '1'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    bathrooms: {...listingDetails.bathrooms, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'bathrooms'}
                            value={'2'}
                            textEn={'2'}
                            textAr={'2'}
                            checked={listingDetails.bathrooms.value === '2'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    bathrooms: {...listingDetails.bathrooms, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'bathrooms'}
                            value={'3'}
                            textEn={'3'}
                            textAr={'3'}
                            checked={listingDetails.bathrooms.value === '3'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    bathrooms: {...listingDetails.bathrooms, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'bathrooms'}
                            value={'4'}
                            textEn={'4'}
                            textAr={'4'}
                            checked={listingDetails.bathrooms.value === '4'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    bathrooms: {...listingDetails.bathrooms, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'bathrooms'}
                            value={'5'}
                            textEn={'5'}
                            textAr={'5'}
                            checked={listingDetails.bathrooms.value === '5'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    bathrooms: {...listingDetails.bathrooms, value: e.target.value}
                                });
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
                            checked={listingDetails.furnished.value === 'furnished'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    furnished: {...listingDetails.furnished, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'furnished'}
                            value={'unfurnished'}
                            textEn={'Unfurnished'}
                            textAr={'غير مفروش'}
                            checked={listingDetails.furnished.value === 'unfurnished'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    furnished: {...listingDetails.furnished, value: e.target.value}
                                });
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
                            value={listingDetails?.surfaceAreaUnit.value || ''}
                            options={[
                                {label: 'm²', value: 'm²'},
                                {label: 'ft²', value: 'ft²'},
                            ]}
                            placeholder={lang === 'en' ? 'Select Unit' : 'حدد الوحدة'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    surfaceAreaUnit: {...listingDetails.surfaceAreaUnit, value: e.value}
                                });
                            }}
                        />
                        <input
                            type="number"
                            placeholder={'Surface Area'}
                            className={'col-span-3'}
                            value={listingDetails?.surfaceArea.value || ''}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    surfaceArea: {...listingDetails.surfaceArea, value: e.target.value}
                                });
                            }}
                            autoComplete={'off'}
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
                            checked={listingDetails.floor.value === 'Basement Floor'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'Semi Ground Floor'}
                            textEn={'Semi Ground Floor'}
                            textAr={'طابق شبه الأرض'}
                            checked={listingDetails.floor.value === 'Semi Ground Floor'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'Ground Floor'}
                            textEn={'Ground Floor'}
                            textAr={'الطابق الأرضي'}
                            checked={listingDetails.floor.value === 'Ground Floor'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'1'}
                            textEn={'1'}
                            textAr={'1'}
                            checked={listingDetails.floor.value === '1'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'2'}
                            textEn={'2'}
                            textAr={'2'}
                            checked={listingDetails.floor.value === '2'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'3'}
                            textEn={'3'}
                            textAr={'3'}
                            checked={listingDetails.floor.value === '3'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'4'}
                            textEn={'4'}
                            textAr={'4'}
                            checked={listingDetails.floor.value === '4'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'5'}
                            textEn={'5'}
                            textAr={'5'}
                            checked={listingDetails.floor.value === '5'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'6'}
                            textEn={'6'}
                            textAr={'6'}
                            checked={listingDetails.floor.value === '6'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'7'}
                            textEn={'7'}
                            textAr={'7'}
                            checked={listingDetails.floor.value === '7'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'8'}
                            textEn={'8'}
                            textAr={'8'}
                            checked={listingDetails.floor.value === '8'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'floor'}
                            value={'Last Floor With Floor'}
                            textEn={'Last Floor With Floor'}
                            textAr={'الطابق الأخير مع الطابق'}
                            checked={listingDetails.floor.value === 'Last Floor With Floor'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    floor: {...listingDetails.floor, value: e.target.value}
                                });
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
                            checked={listingDetails.buildingAge.value === '0-11 Months'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    buildingAge: {...listingDetails.buildingAge, value: e.target.value}
                                });
                            }}
                        />

                        <RadioComponent
                            lang={lang}
                            name={'buildingAge'}
                            value={'1-5 Years'}
                            textEn={'1-5 Years'}
                            textAr={'1-5 سنوات'}
                            checked={listingDetails.buildingAge.value === '1-5 Years'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    buildingAge: {...listingDetails.buildingAge, value: e.target.value}
                                });
                            }}
                        />

                        <RadioComponent
                            lang={lang}
                            name={'buildingAge'}
                            value={'6-10 Years'}
                            textEn={'6-10 Years'}
                            textAr={'6-10 سنوات'}
                            checked={listingDetails.buildingAge.value === '6-10 Years'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    buildingAge: {...listingDetails.buildingAge, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'buildingAge'}
                            value={'11-20 Years'}
                            textEn={'11-20 Years'}
                            textAr={'11-20 سنوات'}
                            checked={listingDetails.buildingAge.value === '11-20 Years'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    buildingAge: {...listingDetails.buildingAge, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'buildingAge'}
                            value={'20+ Years'}
                            textEn={'20+ Years'}
                            textAr={'20+ سنوات'}
                            checked={listingDetails.buildingAge.value === '20+ Years'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    buildingAge: {...listingDetails.buildingAge, value: e.target.value}
                                });
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
                            checked={listingDetails.rentalPeriod.value === 'Daily'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    rentalPeriod: {...listingDetails.rentalPeriod, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rentalPeriod'}
                            value={'Weekly'}
                            textEn={'Weekly'}
                            textAr={'أسبوعي'}
                            checked={listingDetails.rentalPeriod.value === 'Weekly'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    rentalPeriod: {...listingDetails.rentalPeriod, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rentalPeriod'}
                            value={'Monthly'}
                            textEn={'Monthly'}
                            textAr={'شهري'}
                            checked={listingDetails.rentalPeriod.value === 'Monthly'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    rentalPeriod: {...listingDetails.rentalPeriod, value: e.target.value}
                                });
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'rentalPeriod'}
                            value={'Yearly'}
                            textEn={'Yearly'}
                            textAr={'سنوي'}
                            checked={listingDetails.rentalPeriod.value === 'Yearly'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    rentalPeriod: {...listingDetails.rentalPeriod, value: e.target.value}
                                });
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
                            value={listingDetails?.mainAmenities.value || []}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    mainAmenities: {...listingDetails.mainAmenities, value: e.value}
                                });
                            }}
                            options={[
                                lang === 'en' ? 'Air Conditioning' : 'تكييف',
                                lang === 'en' ? 'Balcony' : 'شرفة',
                                lang === 'en' ? 'Built in Wardrobes' : 'خزائن مدمجة',
                                lang === 'en' ? 'Central A/C' : 'تكييف مركزي',
                                lang === 'en' ? 'Concierge' : 'كونسيرج',
                                lang === 'en' ? 'Covered Parking' : 'موقف سيارات مغطى',
                                lang === 'en' ? 'Kitchen Appliances' : 'أجهزة المطبخ',
                                lang === 'en' ? 'Maid Service' : 'خدمة الغرف',
                                lang === 'en' ? 'Networked' : 'متصل بالشبكة',
                                lang === 'en' ? 'Pets Allowed' : 'يسمح بالحيوانات الأليفة',
                                lang === 'en' ? 'Security' : 'أمان',
                                lang === 'en' ? 'Shared Gym' : 'صالة رياضية مشتركة',
                                lang === 'en' ? 'Shared Pool' : 'حمام سباحة مشترك',
                                lang === 'en' ? 'View of Landmark' : 'إطلالة على معلم',
                                lang === 'en' ? 'View of Water' : 'إطلالة على الماء',
                                lang === 'en' ? 'Walk-in Closet' : 'خزانة ملابس',
                                lang === 'en' ? 'Waste Disposal' : 'تخلص من النفايات',
                                lang === 'en' ? 'Laundry Room' : 'غرفة غسيل',
                                lang === 'en' ? 'Private Pool' : 'حمام سباحة خاص',
                                lang === 'en' ? 'Private Gym' : 'صالة رياضية خاصة',
                                lang === 'en' ? 'Private Garden' : 'حديقة خاصة',
                                lang === 'en' ? 'Private Jacuzzi' : 'جاكوزي خاص',
                                lang === 'en' ? 'Private Sauna' : 'ساونا خاصة',
                                lang === 'en' ? 'Private Steam Room' : 'غرفة بخار خاصة',
                                lang === 'en' ? 'Barbecue Area' : 'منطقة شواء',
                                lang === 'en' ? 'Kids Play Area' : 'منطقة لعب الأطفال',
                                lang === 'en' ? 'Lawn or Garden' : 'عشب أو حديقة',
                                lang === 'en' ? 'CCTV Security' : 'أمان CCTV',
                                lang === 'en' ? 'Intercom' : 'التحدث الداخلي',
                                lang === 'en' ? 'Satellite/Cable TV' : 'تلفزيون الكابل / الأقمار الصناعية',
                                lang === 'en' ? 'Double Glazed Windows' : 'نوافذ مزدوجة الزجاج',
                                lang === 'en' ? 'Maintenance Staff' : 'طاقم الصيانة',
                                lang === 'en' ? 'Cleaning Services' : 'خدمات التنظيف',
                                lang === 'en' ? 'Marble' : 'رخام',
                                lang === 'en' ? 'Tiles' : 'بلاط',
                                lang === 'en' ? 'Wood Flooring' : 'أرضيات خشبية',
                                lang === 'en' ? 'Balcony' : 'شرفة',
                                lang === 'en' ? 'Bar' : 'بار',
                                lang === 'en' ? 'Laundry Room' : 'غرفة غسيل',
                                lang === 'en' ? 'Laundry in Building' : 'غسيل في المبنى',
                                lang === 'en' ? 'Service Elevators' : 'مصاعد الخدمة',
                                lang === 'en' ? 'Prayer Room' : 'غرفة الصلاة',
                                lang === 'en' ? 'Reception/Waiting Room' : 'غرفة الاستقبال / الانتظار',
                                lang === 'en' ? 'Conference Room' : 'غرفة المؤتمرات',
                                lang === 'en' ? 'Security Staff' : 'طاقم الأمان',
                                lang === 'en' ? 'Cafeteria or Canteen' : 'كافتيريا أو منتزه',
                                lang === 'en' ? 'Freehold' : 'ملكية حرة',
                                lang === 'en' ? 'Maids Room' : 'غرفة الخادمة',
                                lang === 'en' ? 'Storage Areas' : 'مناطق التخزين',
                                lang === 'en' ? 'Study Room' : 'غرفة دراسة',
                                lang === 'en' ? 'Waste Disposal' : 'تخلص من النفايات',
                                lang === 'en' ? 'Conference Room' : 'غرفة المؤتمرات',
                                lang === 'en' ? 'Conference Room' : 'غرفة المؤتمرات',
                            ]}
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
                            checked={listingDetails.additionalAmenities.value.includes('Air Conditioning')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Balcony')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Built in Wardrobes')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Central A/C')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Concierge')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Covered Parking')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Kitchen Appliances')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Maid Service')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Networked')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Pets Allowed')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Security')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Shared Gym')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Shared Pool')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('View of Landmark')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('View of Water')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Walk-in Closet')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.additionalAmenities.value.includes('Waste Disposal')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: [...listingDetails.additionalAmenities.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        additionalAmenities: {
                                            ...listingDetails.additionalAmenities,
                                            value: listingDetails.additionalAmenities.value.filter((amenity) => amenity !== e.target.value)
                                        }
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
                            checked={listingDetails.nearbyLocations.value.includes('Airport')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: [...listingDetails.nearbyLocations.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: listingDetails.nearbyLocations.value.filter((location) => location !== e.target.value)
                                        }
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
                            checked={listingDetails.nearbyLocations.value.includes('Hospital')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: [...listingDetails.nearbyLocations.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: listingDetails.nearbyLocations.value.filter((location) => location !== e.target.value)
                                        }
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
                            checked={listingDetails.nearbyLocations.value.includes('Mall')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: [...listingDetails.nearbyLocations.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: listingDetails.nearbyLocations.value.filter((location) => location !== e.target.value)
                                        }
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
                            checked={listingDetails.nearbyLocations.value.includes('Metro')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: [...listingDetails.nearbyLocations.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: listingDetails.nearbyLocations.value.filter((location) => location !== e.target.value)
                                        }
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
                            checked={listingDetails.nearbyLocations.value.includes('Mosque')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: [...listingDetails.nearbyLocations.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: listingDetails.nearbyLocations.value.filter((location) => location !== e.target.value)
                                        }
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
                            checked={listingDetails.nearbyLocations.value.includes('Park')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: [...listingDetails.nearbyLocations.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: listingDetails.nearbyLocations.value.filter((location) => location !== e.target.value)
                                        }
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
                            checked={listingDetails.nearbyLocations.value.includes('Pharmacy')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: [...listingDetails.nearbyLocations.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: listingDetails.nearbyLocations.value.filter((location) => location !== e.target.value)
                                        }
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
                            checked={listingDetails.nearbyLocations.value.includes('Restaurants')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: [...listingDetails.nearbyLocations.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: listingDetails.nearbyLocations.value.filter((location) => location !== e.target.value)
                                        }
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
                            checked={listingDetails.nearbyLocations.value.includes('School')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: [...listingDetails.nearbyLocations.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: listingDetails.nearbyLocations.value.filter((location) => location !== e.target.value)
                                        }
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
                            checked={listingDetails.nearbyLocations.value.includes('Supermarket')}
                            onChange={(e) => {
                                // CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
                                if (e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: [...listingDetails.nearbyLocations.value, e.target.value]
                                        }
                                    });
                                }
                                if (!e.target.checked) {
                                    setListingDetails({
                                        ...listingDetails,
                                        nearbyLocations: {
                                            ...listingDetails.nearbyLocations,
                                            value: listingDetails.nearbyLocations.value.filter((location) => location !== e.target.value)
                                        }
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
                            checked={listingDetails.facade.value === 'North'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    facade: {...listingDetails.facade, value: e.target.value}
                                })
                            }
                            }
                        />
                        <RadioComponent
                            lang={lang}
                            name={'facade'}
                            value={'South'}
                            textEn={'South'}
                            textAr={'جنوب'}
                            checked={listingDetails.facade.value === 'South'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    facade: {...listingDetails.facade, value: e.target.value}
                                })
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'facade'}
                            value={'East'}
                            textEn={'East'}
                            textAr={'شرق'}
                            checked={listingDetails.facade.value === 'East'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    facade: {...listingDetails.facade, value: e.target.value}
                                })
                            }}
                        />
                        <RadioComponent
                            lang={lang}
                            name={'facade'}
                            value={'West'}
                            textEn={'West'}
                            textAr={'غرب'}
                            checked={listingDetails.facade.value === 'West'}
                            onChange={(e) => {
                                setListingDetails({
                                    ...listingDetails,
                                    facade: {...listingDetails.facade, value: e.target.value}
                                })
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
                setDescription={(descriptionValue) => setDescription({...description, description: descriptionValue})}
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
                    {loading && <Spinner/>}
                    <span
                        className={'uppercase'}>{lang === 'en' ? 'Save and PUBLISH listing' : 'حفظ ونشر القائمة'}</span>
                    <span>{lang === 'en' ? '→' : '←'}</span>
                </button>
            </div>
        </div>
    )
}