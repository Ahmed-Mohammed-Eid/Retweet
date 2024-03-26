import React, {useState} from "react";
import {Dropdown} from 'primereact/dropdown';

import {ColorPicker} from "primereact/colorpicker";

export default function ColorDropDown({
                                         lang,
                                         selectedColor,
                                         setSelectedColor = (car) => {
                                         }
                                     }) {

    const selectedColorTemplate = (option, props) => {
        if (option) {
            return (
                <div className={'flex justify-start gap-2 items-center'}>
                    <ColorPicker value={option.hex} disabled={true} style={{width: '30px', height: '30px'}}/>
                    <span>{option.label}</span>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className={'flex justify-start gap-2 items-center'}>
                <ColorPicker value={option.hex} disabled={true} style={{width: '30px', height: "30px"}}/>
                <span>{option.label}</span>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.value)}
                options={[
                    {label: lang === 'en' ? 'White' : 'أبيض', value: 'White', hex: '#ffffff'},
                    {label: lang === 'en' ? 'Black' : 'أسود', value: 'Black', hex: '#000000'},
                    {label: lang === 'en' ? 'Gray' : 'رمادي', value: 'Gray', hex: '#808080'},
                    {label: lang === 'en' ? 'Silver' : 'فضي', value: 'Silver', hex: '#C0C0C0'},
                    {label: lang === 'en' ? 'Red' : 'أحمر', value: 'Red', hex: '#FF0000'},
                    {label: lang === 'en' ? 'Blue' : 'أزرق', value: 'Blue', hex: '#0000FF'},
                    {label: lang === 'en' ? 'Green' : 'أخضر', value: 'Green', hex: '#008000'},
                    {label: lang === 'en' ? 'Yellow' : 'أصفر', value: 'Yellow', hex: '#FFFF00'},
                    {label: lang === 'en' ? 'Brown' : 'بني', value: 'Brown', hex: '#A52A2A'},
                    {label: lang === 'en' ? 'Orange' : 'برتقالي', value: 'Orange', hex: '#FFA500'},
                    {label: lang === 'en' ? 'Purple' : 'أرجواني', value: 'Purple', hex: '#800080'},
                    {label: lang === 'en' ? 'Pink' : 'وردي', value: 'Pink', hex: '#FFC0CB'},
                    {label: lang === 'en' ? 'Gold' : 'ذهبي', value: 'Gold', hex: '#FFD700'},
                    {label: lang === 'en' ? 'Beige' : 'بيج', value: 'Beige', hex: '#F5F5DC'},
                    {label: lang === 'en' ? 'Cream' : 'كريمي', value: 'Cream', hex: '#FFFDD0'},
                    {label: lang === 'en' ? 'Turquoise' : 'تركواز', value: 'Turquoise', hex: '#40E0D0'},
                    {label: lang === 'en' ? 'Maroon' : 'مارون', value: 'Maroon', hex: '#800000'},
                    {label: lang === 'en' ? 'Lime' : 'ليموني', value: 'Lime', hex: '#00FF00'},
                    {label: lang === 'en' ? 'Teal' : 'أزرق مخضر', value: 'Teal', hex: '#008080'},
                    {label: lang === 'en' ? 'Indigo' : 'نيلي', value: 'Indigo', hex: '#4B0082'},
                    {label: lang === 'en' ? 'Magenta' : 'قرمزي', value: 'Magenta', hex: '#FF00FF'},
                    {label: lang === 'en' ? 'Salmon' : 'سلموني', value: 'Salmon', hex: '#FA8072'},
                    {label: lang === 'en' ? 'Coral' : 'مرجاني', value: 'Coral', hex: '#FF7F50'},
                    {label: lang === 'en' ? 'Olive' : 'زيتوني', value: 'Olive', hex: '#808000'},
                    {label: lang === 'en' ? 'Cyan' : 'سماوي', value: 'Cyan', hex: '#00FFFF'},
                    {label: lang === 'en' ? 'Azure' : 'أزرق سماوي', value: 'Azure', hex: '#007FFF'},
                    {label: lang === 'en' ? 'Aquamarine' : 'زمردي', value: 'Aquamarine', hex: '#7FFFD4'},
                    {label: lang === 'en' ? 'Khaki' : 'كاكي', value: 'Khaki', hex: '#F0E68C'},
                    {label: lang === 'en' ? 'Ivory' : 'عاجي', value: 'Ivory', hex: '#FFFFF0'},
                    {label: lang === 'en' ? 'Lavender' : 'لافندر', value: 'Lavender', hex: '#E6E6FA'},
                    {label: lang === 'en' ? 'Peach' : 'خوخي', value: 'Peach', hex: '#FFE5B4'},
                    {label: lang === 'en' ? 'Plum' : 'برقوقي', value: 'Plum', hex: '#DDA0DD'},
                    {label: lang === 'en' ? 'Slate' : 'صواني', value: 'Slate', hex: '#708090'},
                    {label: lang === 'en' ? 'Silver' : 'فضي', value: 'Silver', hex: '#C0C0C0'},
                    {label: lang === 'en' ? 'Tan' : 'بني فاتح', value: 'Tan', hex: '#D2B48C'},
                    {label: lang === 'en' ? 'Wheat' : 'قمحي', value: 'Wheat', hex: '#F5DEB3'},
                    {label: lang === 'en' ? 'Bisque' : 'بيسك', value: 'Bisque', hex: '#FFE4C4'},
                    {label: lang === 'en' ? 'Linen' : 'كتان', value: 'Linen', hex: '#FAF0E6'},
                    {label: lang === 'en' ? 'Periwinkle' : 'أزرق اللون', value: 'Periwinkle', hex: '#CCCCFF'},
                    {label: lang === 'en' ? 'Crimson' : 'قرمزي', value: 'Crimson', hex: '#DC143C'},
                    {label: lang === 'en' ? 'Fuchsia' : 'فوشيا', value: 'Fuchsia', hex: '#FF00FF'},
                    {label: lang === 'en' ? 'Mauve' : 'موف', value: 'Mauve', hex: '#E0B0FF'},
                    {label: lang === 'en' ? 'Puce' : 'بيوس', value: 'Puce', hex: '#CC8899'},
                    {label: lang === 'en' ? 'Buff' : 'بوف', value: 'Buff', hex: '#F0DC82'},
                    {label: lang === 'en' ? 'Celadon' : 'سيلادون', value: 'Celadon', hex: '#ACE1AF'},
                ]}
                optionLabel={'name'}
                placeholder="Select a Car Color"
                valueTemplate={selectedColorTemplate}
                itemTemplate={countryOptionTemplate}
                className="w-full border"
            />
        </div>
    )
}
