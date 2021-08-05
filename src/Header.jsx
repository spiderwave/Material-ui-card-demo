import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex:1
    }
})) ;
const Header = () => {
    const classes =useStyles();
    return ( 
    <AppBar position='static'>
        <Toolbar>
            <Typography className={classes.typographyStyles}>
               Medico
             </Typography>
             <FormatAlignJustifyIcon/>
        </Toolbar>
    </AppBar> 
    );
};

export default Header;