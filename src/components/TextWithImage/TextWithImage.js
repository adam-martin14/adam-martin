import React from 'react';
import classes from './TextWithImage.css';
import PrimarySectionHeading from '../PrimarySectionHeading/PrimarySectionHeading';
import ScrollableAnchor from 'react-scrollable-anchor'


const textWithImage = (props) => (

    <ScrollableAnchor id={'about'}>

        <div className={classes.TextWithImageContainer}>

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

    </ScrollableAnchor>

);

export default textWithImage;