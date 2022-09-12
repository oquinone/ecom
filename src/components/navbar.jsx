import React from 'react'
import '../styling/navbar.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';


export const NavBar = () => {
    return(
        <div id="navbarContainer">
            <div id="logo">OQ</div>
            <div>Shop Drop</div>
            <div id="actionBtns">
                <span><LoginIcon/></span>
                <span><ShoppingCartIcon/></span>
            </div>
        </div>
    );
}