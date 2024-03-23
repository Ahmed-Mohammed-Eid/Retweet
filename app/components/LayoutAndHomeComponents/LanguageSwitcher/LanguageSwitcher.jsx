"use client";

import React, {useEffect, useState} from "react";
import {Dropdown} from 'primereact/dropdown';
import {ChevronDownIcon} from 'primereact/icons/chevrondown';
import {ChevronRightIcon} from 'primereact/icons/chevronright';
import {useRouter, usePathname} from "next/navigation";
import Image from "next/image";

function LanguageSwitcher({className, lang}) {
    const router = useRouter();
    const pathname = usePathname();

    const [selectedLanguage, setSelectedLanguage] = useState();
    const languages = [
        {name: 'عربي', nameEn: 'Arabic', code: 'ar'},
        {name: 'إنجليزي', nameEn: 'English', code: 'en'}
    ];

    useEffect(() => {
        setSelectedLanguage(languages.find(l => l.code === lang));
    }, [lang]);

    const selectedLanguageTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center" style={{display: "flex", alignItems: 'center', gap: '5px'}}>
                    <Image src={`/assets/home/${option.code}.svg`} alt={option.name} width={18} height={18}/>
                    <div>
                        {lang === 'ar' ? option.name : option.nameEn}
                    </div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center" style={{display: "flex", alignItems: 'center', gap: "5px"}}>
                <Image src={`/assets/home/${option.code}.svg`} alt={option.name} width={18} height={18}/>
                <div>
                    {lang === 'ar' ? option.name : option.nameEn}
                </div>
            </div>
        );
    };

    const handleLanguageChange = (lang) => {
        // set the cookie to the new language
        document.cookie = `lang=${lang}; path=/;`;
        // get the path without the language
        const parts = pathname.split("/");
        parts[1] = lang;
        // redirect to the new path
        router.push(parts.join("/"));
        const timer = setTimeout(() => {
            window.location.reload();
            clearTimeout(timer)
        }, 500);
    };


    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={selectedLanguage}
                onChange={(e) => {
                    handleLanguageChange(e.value.code);
                    setSelectedLanguage(e.value)
                }}
                options={languages}
                optionLabel="name"
                placeholder="Select a Country"
                valueTemplate={selectedLanguageTemplate}
                itemTemplate={countryOptionTemplate}
                className={className}
                dropdownIcon={(opts) => {
                    return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> :
                        <ChevronDownIcon {...opts.iconProps} />;
                }}/>
        </div>
    )
}

export default LanguageSwitcher;