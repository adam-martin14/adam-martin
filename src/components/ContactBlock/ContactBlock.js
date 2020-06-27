import React from 'react';
import classes from './ContactBlock.css';
import PrimarySectionHeading from '../PrimarySectionHeading/PrimarySectionHeading';
import mailIcon from '../../assets/icons/mail.png';
import linkedinLogo from '../../assets/icons/linkedin-logo2.png';
import locationPin from '../../assets/icons/location-pin.png';
import ScrollableAnchor from 'react-scrollable-anchor';


const contactBlock = (props) => (

    <ScrollableAnchor id={'contact'}>

        <div className={classes.ContactBlockContainer}>

            <PrimarySectionHeading primaryHeadingText="Contact" />

            <div className={classes.ContactBlockContentContainer}>

                <div className={classes.IconAndText}>
                    <a href="mailto:example@example.com">
                        <img src={mailIcon}></img>
                        <p>example@example.com</p>
                    </a>
                </div>

                <div className={classes.IconAndText}>
                    <a href="https://www.linkedin.com/in/adam-martin14/" target="_blank">
                        <img className={classes.LinkedinIcon} src={linkedinLogo}></img>
                        <p>Message me on LinkedIn</p>
                    </a>
                </div>

                <div className={classes.ContactBlockLocationContainer}>
                    <img className={classes.ContactBlockLocationPinImage} src={locationPin}></img>
                    <h3>Sacramento, CA</h3>
                    <p>(I am also available for remote work).</p>
                </div>
        
            </div>
        </div>

    </ScrollableAnchor>
    
);

export default contactBlock;

