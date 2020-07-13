import React, {Component} from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MobileNavToggle from './MobileNavToggle/MobileNavToggle';
import classes from './TopNavBar.css';


class TopNavBar extends Component {

    toggleMobileNavModalHandler = () => {

        var mobileNavModal = document.getElementsByClassName('MobileNavModal__MobileNavModal__3oAvG')[0];

        if (mobileNavModal.classList.contains('MobileNavModal__Open__hvyCb')) {
            mobileNavModal.classList.remove('MobileNavModal__Open__hvyCb');
            
        } else {
            mobileNavModal.classList.add('MobileNavModal__Open__hvyCb');
        }
    }

    render() {

        return (

            <div id="top-nav-bar" className={classes.TopNavBarContainer}>

                <header className={classes.TopNavBar}>

                    <Logo link="/adam-martin" />

                    <nav className={classes.DesktopOnlyNavItems}>
                        <NavigationItems />
                    </nav>

                    <MobileNavToggle 
                        clicked={this.toggleMobileNavModalHandler} 
                    />
                                        
                </header>     
        
            </div>

        )
    }   
};


export default TopNavBar;