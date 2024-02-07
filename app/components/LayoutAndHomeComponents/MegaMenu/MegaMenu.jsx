"use client";
import React from 'react';
import {Menubar} from 'primereact/menubar';
import classes from "./MegaMenu.module.scss";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function MegaMenuComponent({lang}) {
    const router = useRouter();
    const items = [
        {
            label: 'Cars',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                },
                {
                    label: 'Used',
                    icon: 'pi pi-fw pi-trash',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                },
                {
                    label: 'Rent',
                    icon: 'pi pi-fw pi-refresh',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                }

            ]
        },
        {
            label: 'Bikes',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                },
                {
                    label: 'Used',
                    icon: 'pi pi-fw pi-trash',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                },
                {
                    label: 'Rent',
                    icon: 'pi pi-fw pi-refresh',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                }

            ]
        },
        {
            label: 'Boats',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                },
                {
                    label: 'Used',
                    icon: 'pi pi-fw pi-trash',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                },
                {
                    label: 'Rent',
                    icon: 'pi pi-fw pi-refresh',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                }

            ]
        },
        {
            label: 'Heavy Equipment',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                },
                {
                    label: 'Used',
                    icon: 'pi pi-fw pi-trash',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                },
                {
                    label: 'Rent',
                    icon: 'pi pi-fw pi-refresh',
                    items: [
                        {
                            label: 'BMW',
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                }

            ]
        },
        {
            label: 'Trucks',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'BMW',
                            command: () => router.push('/auth/login')
                        },
                        {
                            label: 'MERCEDES',
                        },
                        {
                            label: 'RENAULT',
                        }
                    ]
                }
            ]
        }
    ];
    return (
        <Menubar
            model={items}
            breakpoint="960px"
            className={classes.MegaMenu}
        />
    )
}
