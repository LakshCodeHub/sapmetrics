import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import {Typography} from "@mui/material";

export default function Header() {
    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0} sx={{bgcolor: '#232f3e'}}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Typography>Stability Analysis Performance</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}