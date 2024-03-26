"use client";

import {useState} from "react";
import Image from "next/image";
import { formatePrice } from "@/helpers/formatePrice";
import classes from "./ListingCard.module.scss";

function ListingCard({ product, lang }) {

    // STATES
    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <article className="px-6 py-5 bg-white rounded-md border border-gray-200 border-solid max-md:pr-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                    <Image
                        src={product?.listingImages[0] || "/assets/listings/no-image.jpeg"}
                        alt={product?.listingDescription || product?.listingTitle}
                        width={207}
                        height={201}
                        className="grow shrink-0 max-w-full border border-gray-400 border-solid aspect-[1.03] w-[207px] max-md:mt-10"
                    />
                </div>
                <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 text-xl font-medium leading-5 text-zinc-900 max-md:flex-wrap max-md:max-w-full">
                            <h2 className="flex-auto max-md:max-w-full uppercase mt-2">
                                {product?.listingTitle}
                            </h2>
                            <svg
                                width="30"
                                height="28"
                                viewBox="0 0 30 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer button--effect"
                                onClick={() => setIsFavourite(!isFavourite)}
                            >
                                <g>
                                    <path
                                        d="M15 18.25C15 18.25 5.625 13 5.625 6.62501C5.625 5.49803 6.01546 4.40585 6.72996 3.53431C7.44445 2.66277 8.43884 2.0657 9.54393 1.84468C10.649 1.62366 11.7966 1.79235 12.7913 2.32204C13.7861 2.85174 14.5665 3.70972 15 4.75001C15.4335 3.70972 16.2139 2.85174 17.2087 2.32204C18.2034 1.79235 19.351 1.62366 20.4561 1.84468C21.5612 2.0657 22.5555 2.66277 23.27 3.53431C23.9845 4.40585 24.375 5.49803 24.375 6.62501C24.375 13 15 18.25 15 18.25Z"
                                        stroke="#FF4444"
                                        fill={isFavourite ? "#FF4444" : "none"}
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        shapeRendering="crispEdges"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d_87_920"
                                        x="0.625"
                                        y="0.75"
                                        width="28.75"
                                        height="26.5"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood
                                            floodOpacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite
                                            in2="hardAlpha"
                                            operator="out"
                                        />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_87_920"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_87_920"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <p className={`${classes.listingDescription} mt-2 text-sm capitalize font-medium leading-5 text-zinc-800 max-md:max-w-full`}>
                            {product?.listingDescription}
                        </p>
                        <p className="mt-7 text-sm capitalize font-medium leading-5 text-zinc-600 max-md:max-w-full">
                            {(product?.neighbourhood ? product?.neighbourhood + ' - ' : '' ) + product?.listingCity}
                        </p>
                        <div className="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-5 text-xl font-medium leading-6 whitespace-nowrap">
                                <ContactButton phone={product?.contactPhone} />
                                <ChatButton id={product?._id} />
                            </div>
                            <div className="my-auto text-xl font-bold leading-6 text-sky-500">
                                {product?.listingCurrency} {formatePrice(product?.listingPrice)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

function ContactButton({ phone }) {
    return (
        <a
            href={`https://wa.me/${phone}`}
            target={"_blank"}
            className="flex gap-2.5 justify-center px-8 py-4 bg-amber-400 rounded-md text-neutral-50 max-md:px-5 button--effect"
        >
            <Image
                src="/assets/listings/logos_whatsapp-icon.svg"
                alt="Phone icon"
                width={24}
                height={24}
                className="shrink-0 w-6 aspect-square"
            />
            <span>{phone}</span>
        </a>
    );
}

function ChatButton({ id}) {
    return (
        <button className="flex gap-3 justify-center px-5 py-4 text-amber-400 rounded-md border border-amber-400 border-solid max-md:px-5 button--effect">
            <Image
                src="/assets/listings/fluent_chat-12-regular.svg"
                alt="Chat icon"
                width={24}
                height={24}
                className="shrink-0 w-6 aspect-square"
            />
            <span className="my-auto">Chat</span>
        </button>
    );
}

export default ListingCard;
