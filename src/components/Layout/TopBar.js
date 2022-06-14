import React from 'react';

import packageInfo from "../../../package.json";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";



const TopBar = () => {
    return (
        <>        
            <AppBar id={"topBar"} position="static">
            <Toolbar>
                <Typography variant="h6">
                {`${packageInfo.name} - ${packageInfo.version}`}
                </Typography>
            </Toolbar>
            </AppBar>        
        </>        
    )
};

export default TopBar;