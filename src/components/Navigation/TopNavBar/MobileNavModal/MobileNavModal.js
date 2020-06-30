import React from 'react';
import classes from './MobileNavModal.css';
import NavigationItems from '../../NavigationItems/NavigationItems';


const mobileNavModal = (props) => {

    return(

        <div className={classes.MobileNavModal}>
            <nav className={classes.MobileOnlyNavItems}>
                <NavigationItems />
            </nav>   
        </div>
    );
}

export default mobileNavModal;