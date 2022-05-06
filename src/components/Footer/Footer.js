import React from 'react';
import classes from './Footer.css';


const footer = (props) => (

    <div className={classes.FooterContainer}>

        <div className={classes.FooterContentContainer}>

            <p>Adam Martin, {new Date().getFullYear()}</p>

        </div>
    </div>
);

export default footer;