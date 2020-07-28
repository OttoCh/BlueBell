import React from 'react';
import {
    Box,
    Grid,
    GridList
} from '@material-ui/core';
import './navbar.css';
import NavbarItem from './navbarItem';

function renderer(itemName, handleClick, typeOfButton) {
    return React.createElement(
        NavbarItem,
        {itemName, handleClick, typeOfButton},
        {}
    )
}

function Navbar(props) {
    return(
        <Box className="navbarBody">
            <GridList
            container 
            direction="column" 
            justify="center" 
            // alignItems="stretch"
            cols={1}
            className="navbarTaskList">
                {props.navbarList.task.map(task  => renderer(task, props.handleClick, "task") )}
                {/* <NavbarItem itemName={props.navbarList.task[0]} handleClick={props.handleClick} typeOfButton="task"></NavbarItem> */}
            </GridList>
            <br/>
            <GridList 
            container
            direction="column" 
            justify="center" 
            // alignItems="stretch"
            cols={1}
            className="navbarNotesList">
                {props.navbarList.notes.map(notes  => renderer(notes, props.handleClick, "note") )}
                {/* <NavbarItem itemName="Notes1"></NavbarItem> */}
            </GridList>
            <br/>
            {/* <Grid 
            container
            direction="column" 
            justify="center" 
            alignItems="stretch"  
            className="navbarShopList">
                <NavbarItem itemName="Shop"></NavbarItem>
            </Grid> */}
            <Box className="navbarShopList">
                <NavbarItem itemName="Shop"></NavbarItem>
            </Box>
        </Box>
    );
}

export default Navbar;