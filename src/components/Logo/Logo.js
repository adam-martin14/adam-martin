import React from 'react';
import classes from './Logo.css';
import myLogo from '../../assets/images/logo.jpg';

const logo = (props) => (
    <div className={classes.logo}>
        <a href={props.link}>
            <img src={myLogo} alt="MyLogo" />            
        </a>
    </div>
);

export default logo;