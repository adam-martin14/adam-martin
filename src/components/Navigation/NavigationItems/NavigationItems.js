import React, {Component} from 'react';
import classes from './NavigationItems.css';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class NavigationItems extends Component {

    hideMobileNavModalHandler = () => {
        var navModal = document.getElementsByClassName('MobileNavModal__MobileNavModal__3oAvG')[0];
        navModal.classList.remove('MobileNavModal__Open__hvyCb')
    }
  
    render() {
  
        return (

            <div className={classes.NavigationItems}>

                <Link className={classes.NavigationItem} onClick={this.hideMobileNavModalHandler} to="top-nav-bar" smooth={true} duration={500} tabIndex="1">
                    Home
                </Link>

                <Link className={classes.NavigationItem} onClick={this.hideMobileNavModalHandler} to="about" smooth={true} offset={-75} duration={500} tabIndex="2">
                    About
                </Link>

                <Link className={classes.NavigationItem} onClick={this.hideMobileNavModalHandler} to="skills" smooth={true} offset={-75} duration={500} tabIndex="3">
                    Skills
                </Link>

                <Link className={classes.NavigationItem} onClick={this.hideMobileNavModalHandler} to="work" smooth={true} offset={-75} duration={500} tabIndex="4">
                    Work
                </Link>

                <Link className={classes.NavigationItem} onClick={this.hideMobileNavModalHandler} to="contact" smooth={true} offset={-75} duration={500} tabIndex="5">
                    Contact
                </Link>

            </div>
        )
    }   
};


export default NavigationItems;