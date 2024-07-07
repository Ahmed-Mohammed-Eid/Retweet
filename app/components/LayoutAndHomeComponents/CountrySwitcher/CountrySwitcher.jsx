"use client";

import React, {useEffect, useState} from "react";
import {Dropdown} from 'primereact/dropdown';
import {ChevronDownIcon} from 'primereact/icons/chevrondown';
import {ChevronRightIcon} from 'primereact/icons/chevronright';
import {useRouter, usePathname, useSearchParams} from "next/navigation";
import Image from "next/image";

import countries from "@/Json_Data/country-flag.json";
import axios from "axios";
import toast from "react-hot-toast";


function CountrySwitcher({className, lang}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [selectedCountry, setSelectedCountry] = useState();

    const selectedCountryTemplate = (option, props) => {
        if (selectedCountry) {
            return (
                <div className="flex align-items-center" style={{display: "flex", alignItems: 'center', gap: '5px'}}>
                    <Image src={selectedCountry?.flag} alt={""} width={18} height={18}/>
                    <div>
                        {selectedCountry?.country}
                    </div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center" style={{display: "flex", alignItems: 'center', gap: "5px"}}>
                <Image src={option?.flag} alt={""} width={18} height={18}/>
                <div>
                    {option.country}
                </div>
            </div>
        );
    };

    const handleCountryChange = (country) => {
        if (country) {
            // SEND THE REQUEST TO CHANGE THE COUNTRY
            axios.post(`${process.env.BASE_URL}/set/user/country`,{
                country: country
            })
                .then((res) => {
                    toast.success(res.data?.message);
                })
                .then((_) => {
                    window.location.reload();
                })
                .catch((err) => {
                    toast.error(err.response.data?.message);
                    console.log(err);
                });
        }
    };

    // GET BROWSING COUNTRY
    const getCountry = async () => {
        const country = await axios.get(`${process.env.BASE_URL}/browsing/country`)
            .then((res) => {
                return res.data?.country;
            })
            .catch((err) => {
                console.log(err);
            });

        return country;
    }

    useEffect(() => {
        getCountry().then((country) => {
            if(!country) {
                return;
            }
            setSelectedCountry(countries.find((lang) => lang.code === country));
        });
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={selectedCountry}
                onChange={(e) => {
                    //VALIDATE THE COUNTRY
                    if(!e.value) {
                        return;
                    }
                    handleCountryChange(e.value?.code);
                    setSelectedCountry(e.value)
                }}
                options={countries}
                optionLabel="country"
                placeholder="Select a Country"
                valueTemplate={selectedCountryTemplate}
                itemTemplate={countryOptionTemplate}
                className={className}
                filter={true}
                dropdownIcon={(opts) => {
                    return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> :
                        <ChevronDownIcon {...opts.iconProps} />;
                }}/>
        </div>
    )
}

export default CountrySwitcher;