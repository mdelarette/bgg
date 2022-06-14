import React from 'react';

import packageInfo from "../../../package.json";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


import Breakpoint from "../Breakpoint";

const TopBar = () => {
    return (
        <>        
            <AppBar id={"topBar"} position="static">
                <Toolbar>

                        <Typography sx={{ flexGrow: 1 }} variant="h6">
                            {`${packageInfo.name} - ${packageInfo.version}`}
                        </Typography>
                    <Breakpoint />
                </Toolbar>
            </AppBar>        
        </>        
    )
};

export default TopBar;