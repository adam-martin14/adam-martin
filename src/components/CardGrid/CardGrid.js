import React from 'react';
import classes from './CardGrid.css';
import PrimarySectionHeading from '../PrimarySectionHeading/PrimarySectionHeading';
import ScrollableAnchor from 'react-scrollable-anchor'


const cardGrid = (props) => (

    <ScrollableAnchor id={'skills'}>

        <div className={classes.CardGridContainer}>

            <PrimarySectionHeading primaryHeadingText="What I Do" />

            <div className={classes.CardGridContentContainer}>

                <div className={classes.Card}>

                    <h2>THING I DO</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                </div>

                <div className={classes.Card}>

                    <h2>THING I DO</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                </div>

                <div className={classes.Card}>

                    <h2>THING I DO</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                </div>

            </div>

        </div>

    </ScrollableAnchor>

);

export default cardGrid;