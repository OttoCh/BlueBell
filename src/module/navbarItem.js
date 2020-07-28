import React from 'react'
import {
    Grid,
    Button
} from '@material-ui/core';

function NavbarItem(props) {
    return(
        <Grid item xs={12}>
            <Button value={props.typeOfButton} className="navbarItemButton" onClick={props.handleClick}>{props.itemName}</Button>
        </Grid>
    );
}

export default NavbarItem;