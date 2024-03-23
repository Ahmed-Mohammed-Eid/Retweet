// Add 'use client' directive for Client Component
'use client';

import React from 'react';

import ProgressBarClientContainer
    from "@/app/components/LayoutAndHomeComponents/ProgressBarClientContainer/ProgressBarClientContainer";
import Navbar from "../components/LayoutAndHomeComponents/Navbar/Navbar";
import MegaMenu from "@/app/components/LayoutAndHomeComponents/MegaMenu/MegaMenu";
import MainSearchBox from "@/app/components/LayoutAndHomeComponents/MainSearchBox/MainSearchBox";

// INIT REDUX
import {Provider} from "react-redux";
import {store} from "@/redux/store";


function ClientLayout({children, lang, authenticated, error, country, userData}) {

    return (
        <Provider store={store}>
            <div className="container">
                <ProgressBarClientContainer/>
                <Navbar lang={lang} auth={authenticated} authError={error} country={country} userData={userData}/>
                <MegaMenu lang={lang}/>
                <MainSearchBox lang={lang}/>
                {children}
            </div>
        </Provider>
    );
}

export default ClientLayout;
