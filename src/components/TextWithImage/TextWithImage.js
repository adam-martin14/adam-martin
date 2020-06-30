import React from 'react';
import classes from './TextWithImage.css';
import PrimarySectionHeading from '../PrimarySectionHeading/PrimarySectionHeading';


const textWithImage = (props) => (

    <div id="about" className={classes.TextWithImageContainer}>

        <PrimarySectionHeading primaryHeadingText="About Me" />

        <div className={classes.TextWithImageContentContainer}>

            <div className={classes.TextColumn}>
                <p>{props.text}</p>
            </div>

            {/* <div className={classes.ImageColumn}>
                <img src={props.imageSource}></img>
            </div> */}

        </div>

    </div>

);

export default textWithImage;