import React from 'react';
import { Outlet } from "react-router-dom";


import { ModalContext } from "../../contexts/modal-context.js";

import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

import { Page } from "../../constants/pages.ts";

import ModalGame from "../ModalGame";




const Layout = () => {

    const [modalGameId, setModalGameId] = React.useState("0");
    const [page, setPage] = React.useState(Page.Home);
    
    

    return (        
        <ModalContext.Provider value={{ modalGameId, setModalGameId }}>

            <TopBar />
                
            <Outlet />

            <BottomBar page={page} setPage={setPage}/>


            <ModalGame />

        </ModalContext.Provider>
    )
};

export default Layout;
