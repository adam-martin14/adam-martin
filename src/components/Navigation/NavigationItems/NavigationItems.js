import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (

    <ul className={classes.NavigationItems}>
        <NavigationItem link="/"> Home </NavigationItem>
        <NavigationItem link="/"> About</NavigationItem>
        <NavigationItem link="/"> Skills</NavigationItem>
        <NavigationItem link="/"> Work</NavigationItem>
        <NavigationItem link="/"> Contact</NavigationItem>
    </ul>
);

export default navigationItems;