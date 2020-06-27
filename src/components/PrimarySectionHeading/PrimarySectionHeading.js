import React from 'react';
import classes from './PrimarySectionHeading.css';


const primarySectionHeading = (props) => (
    <h1 className={classes.PrimarySectionHeading}>{props.primaryHeadingText}</h1>
);

export default primarySectionHeading;