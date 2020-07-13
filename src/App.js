import React, { Component } from 'react';
import NavigationContainer from './components/Navigation/NavigationContainer/NavigationContainer';
import MainHeader from './components/MainHeader/MainHeader';
import TextWithImage from './components/TextWithImage/TextWithImage';
import CardGrid from './components/CardGrid/CardGrid';
import Carousel from './components/Carousel/Carousel';
import ContactBlock from './components/ContactBlock/ContactBlock';
import Footer from './components/Footer/Footer';


class App extends Component {

  render() {

    return (

      <div className="App">

        <NavigationContainer />
        <MainHeader />

        <TextWithImage 
          text={"I am an experienced Web Developer committed to adopting cutting-edge technologies and industry-standard workflow tools. I am especially enthusiastic about front-end development, and have applied this in fast-paced digital media agencies, where I have worked on multiple projects for various clients. When I'm not coding, I participate in sports, including soccer and running. I also enjoy traveling to new places, which I pursued while working/ volunteering as an English teacher for 2 years in East Asia and South America."}
        />

        <CardGrid />
        <Carousel />
        <ContactBlock />
        <Footer />

      </div>
    );
  }
}

export default App;
