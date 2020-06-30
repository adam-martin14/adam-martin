import React, { Component } from "react";
import Slider from "react-slick";
import classes from './Carousel.css';
import PrimarySectionHeading from '../PrimarySectionHeading/PrimarySectionHeading';
import back from '../../assets/icons/back.png';
import next from '../../assets/icons/next.png';
import hillgate from '../../assets/images/hillgate.png';
import reactUnitConverter from '../../assets/images/react-unit-converter.png';
import unitConverter from '../../assets/images/unit-converter.png';
import toDoList from '../../assets/images/to-do-list.png';
import accordian from '../../assets/images/accordian.png';
import blogIndex from '../../assets/images/blog-index.png';


export default class PortfolioCarousel extends Component {

  render() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <img className={classes.previousArrow} src={back}></img>,
        nextArrow: <img className={classes.nextArrow} src={next}></img>,
    
        responsive: [{
            breakpoint:992,

            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]   
    };


    return (

        <div id="work" className={classes.CarouselContainer}>

            <div className={classes.CarouselContentContainer}>

                <PrimarySectionHeading primaryHeadingText="Recent Projects" />

                <Slider {...settings}>

                    <div>
                        <div className={classes.CarouselSlideContentContainer}>
                            <h2>Hillgate PR</h2>
                            <a href="https://www.hillgatepr.co.uk/" target="_blank">
                                <img src={hillgate}></img>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div>
                        <div className={classes.CarouselSlideContentContainer}>
                            <h2>React Unit Converter</h2>
                            <a href="https://adam-martin14.github.io/react-unit-converter/" target="_blank">
                                <img src={reactUnitConverter}></img>
                            </a>                
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div>
                        <div className={classes.CarouselSlideContentContainer}>
                            <h2>JavaScript To-Do List</h2>
                            <a href="https://codepen.io/a-martin/pen/WBRPNa" target="_blank">
                                <img src={toDoList}></img>
                            </a>                 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div>
                        <div className={classes.CarouselSlideContentContainer}>
                            <h2>JavaScript Filtered Blog Index</h2>
                            <a href="https://codepen.io/a-martin/pen/NWqRdWX" target="_blank">
                                <img src={blogIndex}></img>
                            </a>                
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div>
                        <div className={classes.CarouselSlideContentContainer}>
                            <h2>JavaScript Accordian</h2>
                            <a href="https://codepen.io/a-martin/pen/rNNrMEe" target="_blank">
                                <img src={accordian}></img>
                            </a>                
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div>
                        <div className={classes.CarouselSlideContentContainer}>
                            <h2>JavaScript Unit Converter</h2>
                            <a href="https://codepen.io/a-martin/pen/WBppQj" target="_blank">
                                <img src={unitConverter}></img>
                            </a>                
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>

    );
  }
}




    