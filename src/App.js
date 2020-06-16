import React, { Component } from 'react';
import NavigationContainer from './components/Navigation/NavigationContainer/NavigationContainer';
import MainHeader from './components/MainHeader/MainHeader';


class App extends Component {

  render() {

    return (

      <div className="App">

        <NavigationContainer />
        <MainHeader />

      </div>

    );
  }
}

export default App;
