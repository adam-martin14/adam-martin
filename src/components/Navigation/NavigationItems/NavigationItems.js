import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (

    <ul className={classes.NavigationItems}>
        <NavigationItem link="#home"> Home </NavigationItem>
        <NavigationItem link="#about"> About</NavigationItem>
        <NavigationItem link="#skills"> Skills</NavigationItem>
        <NavigationItem link="#work"> Work</NavigationItem>
        <NavigationItem link="#contact"> Contact</NavigationItem>
    </ul>
);

export default navigationItems;