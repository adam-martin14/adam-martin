import React from 'react';
import classes from './ContactBlock.css';
import PrimarySectionHeading from '../PrimarySectionHeading/PrimarySectionHeading';
import mailIcon from '../../assets/icons/mail.png';
import linkedinLogo from '../../assets/icons/linkedin-logo2.png';
import locationPin from '../../assets/icons/location-pin.png';


const contactBlock = (props) => (

    <div id="contact" className={classes.ContactBlockContainer}>

        <PrimarySectionHeading primaryHeadingText="Contact" />

        <div className={classes.ContactBlockContentContainer}>

            <div className={classes.IconAndText}>
                <a href="mailto:example@example.com">
                    <img src={mailIcon} alt="mail"></img>
                    <p>example@example.com</p>
                </a>
            </div>

            <div className={classes.IconAndText}>
                <a href="https://www.linkedin.com/in/adam-martin14/" target="_blank" rel="noopener noreferrer">
                    <img className={classes.LinkedinIcon} src={linkedinLogo} alt="linkedin-logo"></img>
                    <p>Message me on LinkedIn</p>
                </a>
            </div>

            <div className={classes.ContactBlockLocationContainer}>
                <img className={classes.ContactBlockLocationPinImage} src={locationPin} alt="location-pin"></img>
                <h3>Sacramento, CA, USA</h3>
                <p>(I am also available for remote work).</p>
            </div>
    
        </div>
    </div>

);

export default contactBlock;

