"use client";
import Image from "next/image";
import {Dropdown} from "primereact/dropdown";
import React, {useState} from "react";

export default function SelectedArea({className}) {
    const [selectedCity, setSelectedCity] = useState({name: 'Kuwait- All Cites', code: 'Ku'});
    const cities = [
        {name: 'Kuwait- All Cites', code: 'Ku'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];


    return (
        <>
            <Image src={'/assets/home/Location.svg'} alt={'location'} width={18} height={18}/>
            <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a Place"
                className={className}
            />
        </>
    );
}