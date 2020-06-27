import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MobileNavToggle from './MobileNavToggle/MobileNavToggle';
import classes from './TopNavBar.css';
import ScrollableAnchor from 'react-scrollable-anchor'


const topNavBar = (props) => {

    return (

        <ScrollableAnchor id={'home'}>

            <div className={classes.TopNavBarContainer}>

                <header className={classes.TopNavBar}>

                    <Logo />

                    <nav className={classes.DesktopOnlyNavItems}>
                        <NavigationItems />
                    </nav>

                    <MobileNavToggle 
                        clicked={props.hamburgerIconClicked} 
                    />
                                        
                </header>     
        
            </div>

        </ScrollableAnchor>

    )
};


export default topNavBar;