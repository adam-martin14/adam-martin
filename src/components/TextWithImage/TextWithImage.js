import React from 'react';
import classes from './TextWithImage.css';


const textWithImage = (props) => (

    <div className={classes.TextWithImageContainer}>

        <h1>About Me</h1>

        <div className={classes.TextWithImageContentContainer}>

            <div className={classes.TextColumn}>
                <p>{props.text}</p>
            </div>

            <div className={classes.ImageColumn}>
                <img src={props.imageSource}></img>
            </div>

        </div>

    </div>

);

export default textWithImage;