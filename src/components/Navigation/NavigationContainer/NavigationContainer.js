import React, {Component} from 'react';
import TopNavBar from '../TopNavBar/TopNavBar';
import MobileNavModal from '../TopNavBar/MobileNavModal/MobileNavModal';


class NavigationContainer extends Component {
  
    render() {

        return (
            <div>
                <TopNavBar />
                <MobileNavModal />      
            </div>               
        )
    }   
};

export default NavigationContainer;