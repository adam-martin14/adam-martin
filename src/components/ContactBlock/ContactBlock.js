import React from 'react';
import classes from './ContactBlock.css';
import mailIcon from '../../assets/icons/mail.png';
import linkedinLogo from '../../assets/icons/linkedin-logo2.png';


const contactBlock = (props) => (

    <div className={classes.ContactBlockContainer}>

        <h1>Contact</h1>

        <div className={classes.ContactBlockContentContainer}>

            <div className={classes.IconAndText}>
                <a href="mailto:example@example.com">
                    <img src={mailIcon}></img>
                    <p>example@example.com</p>
                </a>
            </div>

            <div className={classes.Icon}>
                <a href="https://www.linkedin.com/in/adam-martin14/" target="_blank">
                    <img className={classes.LinkedinIcon} src={linkedinLogo}></img>
                </a>
            </div>
     
        </div>
    </div>
);

export default contactBlock;