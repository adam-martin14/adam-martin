import React from 'react';
import classes from './MainHeader.css';
import adamPic from '../../assets/images/me-bw-cropped.jpg';
import linkedinLogo from '../../assets/icons/linkedin-logo.jpg';
import codepenLogo from '../../assets/icons/codepen-logo.png';
import locationPin from '../../assets/icons/location-pin.png';
import downArrow from '../../assets/icons/down-arrow.png';


const mainHeader = (props) => (

    <div className={classes.HeaderContainer}>

        <div className={classes.HeaderContentContainer}>

            <div className={classes.MobileHeaderIntroContainer}>
                <h1>Hi, I'm Adam</h1>
                <h2>I'm a Web Developer based in California.</h2>
            </div>

            <div className={classes.HeaderImageContainer}>
                <img className={classes.AdamImage} src={adamPic}></img>
            </div>

            <div className={classes.MobileHeaderLocationContainer}>
                <img className={classes.LocationPinImage} src={locationPin}></img>
                <h3>Sacramento, CA</h3>
            </div>
                        
            {/* MAKE OWN COMPONENT */}
            <div className={classes.MobileHeaderIconStrip}>
                <a href="https://www.linkedin.com/in/adam-martin14/" target="_blank">
                    <img className={classes.IconImage} src={linkedinLogo}></img>
                </a>

                <a href="https://codepen.io/a-martin" target="_blank">
                    <img className={classes.IconImage} src={codepenLogo}></img>
                </a>
            </div>


            <div className={classes.DesktopHeaderIntroLocationIconsContainer}>

                <div className={classes.DesktopHeaderIntroContainer}>
                    <h1>Hi, I'm Adam</h1>
                    <h2>I'm a Web Developer based in California.</h2>
                </div>

                <div className={classes.DesktopLocationIconsContainer}>

                    <div className={classes.DesktopHeaderLocationContainer}>
                        <img className={classes.LocationPinImage} src={locationPin}></img>
                        <h3>Sacramento, CA</h3>
                    </div>
                                
                    {/* MAKE OWN COMPONENT */}
                    <div className={classes.DesktopHeaderIconStrip}>
                        <a href="https://www.linkedin.com/in/adam-martin14/" target="_blank">
                            <img className={classes.IconImage} src={linkedinLogo}></img>
                        </a>

                        <a href="https://codepen.io/a-martin" target="_blank">
                            <img className={classes.IconImage} src={codepenLogo}></img>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <div className={classes.HeaderDownArrowContainer}>
            <p>What can I do?</p>

            <a href="#skills">
                <img src={downArrow}></img>
            </a>
        </div>

    </div>

);

export default mainHeader;