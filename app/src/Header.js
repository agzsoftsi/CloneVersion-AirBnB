import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { /*Avatar, */IconButton } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



function Header() {
    return (
        <div className="header">
            <img className="header_icon" src="https://i.imgur.com/IuJphjX.png" alt=""/>
            
            <div className="header_center">
                <input type="text" placeholder="Start your search"/>
                <IconButton style={{background:"#FF5B60", color:'white'}}>
                    <SearchIcon />
                </IconButton>
            </div>

            <div className="header_right">
            
                <p>Become a host</p>
                <IconButton>
                    <LanguageIcon />
                </IconButton>
                <div className="header_right_2">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <IconButton>
                  {/*  <Avatar />*/}
                  <AccountCircleIcon />
                </IconButton>
                </div>
                
            </div>
        </div>

        
    )
}

export default Header;
