import React from 'react';

import { useLocation, useNavigate } from "react-router-dom";

import { AppBar, BottomNavigation, BottomNavigationAction } from "@mui/material";


import HomeIcon from "@mui/icons-material/Home";
import OwnersIcon from "@mui/icons-material/People";
import GamesIcon from "@mui/icons-material/Casino";
import PartyIcon from "@mui/icons-material/SupervisedUserCircle";


const BottomBar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = (event, value) => {
        navigate(value);
    };    

    return (

        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <BottomNavigation
                value={location.pathname ?? '/'}
                onChange={handleChange}
                showLabels
            >
                <BottomNavigationAction label="Home"      value="/" icon={<HomeIcon />} />
                <BottomNavigationAction label="Players"   value="/owners"  icon={<OwnersIcon />} />
                <BottomNavigationAction label="Games"     value="/games"   icon={<GamesIcon />} />
                <BottomNavigationAction label="Party"     value="/party"   icon={<PartyIcon />} />
            </BottomNavigation>
        </AppBar>


    )
};

export default BottomBar;