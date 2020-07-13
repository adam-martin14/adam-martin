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
import accordion from '../../assets/images/accordion.png';
import blogIndex from '../../assets/images/blog-index.png';


export default class PortfolioCarousel extends Component {

    render() {

        function PrevArrow(props) {
            const {onClick} = props;
            
            return (
                <img onClick={onClick} className={classes.previousArrow} src={back} alt="prev-arrow"></img>       
            );
        }

        function NextArrow(props) {
            const {onClick} = props;
 
            return (
                <img onClick={onClick} className={classes.nextArrow} src={next} alt="next-arrow"></img>
            );
        }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    
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
                            <a href="https://www.hillgatepr.co.uk/" target="_blank" rel="noopener noreferrer">
                                <img src={hillgate} alt="project-screenshot"></img>
                            </a>
                            <p>Shortly after starting my most recent role, the company urgently required a Wordpress developer for a recently-acquired project with a London media agency - and I was on-hand to help! Working alongside another developer, I built various responsive components, including a header, footer, navigation, carousel, image grid, text block, Google Map, and more. With time scarce, I ensured that, where possible, components were reusable. User-friendly client content population capabilities were implemented using the 'Advanced Custom Fields' plugin.</p>
                        </div>
                    </div>

                    <div>
                        <div className={classes.CarouselSlideContentContainer}>
                            <h2>React Unit Converter</h2>
                            <a href="https://adam-martin14.github.io/react-unit-converter/" target="_blank" rel="noopener noreferrer">
                                <img src={reactUnitConverter} alt="project-screenshot"></img>
                            </a>                
                            <p>My first React project posed 2 significant challenges: how to efficiently structure/ split the app into components, and how to allow for user-friendly conversion from/ to multiple unit values. After navigating these challenges, I was happy with the result, which allows users to quickly convert a wide range of temperature, weight, length and speed units.</p>
                        </div>
                    </div>

                    <div>
                        <div className={classes.CarouselSlideContentContainer}>
                            <h2>JavaScript Filtered Blog Index</h2>
                            <a href="https://codepen.io/a-martin/pen/NWqRdWX" target="_blank" rel="noopener noreferrer">
                                <img src={blogIndex} alt="project-screenshot"></img>
                            </a>                
                            <p>When browsing blogs, users need to be able to locate desired content quickly. This HTML, CSS and JavaScript blog index page addresses this need, featuring simple post category filters and a useful 'Load More' button. Responsive design was achieved using the Bootstrap grid system.</p>
                        </div>
                    </div>

                    <div>
                        <div className={classes.CarouselSlideContentContainer}>
                            <h2>JavaScript Accordion</h2>
                            <a href="https://codepen.io/a-martin/pen/rNNrMEe" target="_blank" rel="noopener noreferrer">
                                <img src={accordion} alt="project-screenshot"></img>
                            </a>                
                            <p>Accordions are great for displaying categorized information on a web page. This simple component, built with HTML, CSS and JavaScript, shows and hides information in a fluid, user-friendly way.</p>
                        </div>
                    </div>

                    <div>
                        <div className={classes.CarouselSlideContentContainer}>
                            <h2>JavaScript To-Do List</h2>
                            <a href="https://codepen.io/a-martin/pen/WBRPNa" target="_blank" rel="noopener noreferrer">
                                <img src={toDoList} alt="project-screenshot"></img>
                            </a>                 
                            <p>No JavaScript portfolio is complete without a 'To Do List' app! Built using HTML, CSS and JavaScript, this simple, responsively-designed app allows users to add and delete list items on an attractive user interface.</p>
                        </div>
                    </div>

                    <div>
                        <div className={classes.CarouselSlideContentContainer}>
                            <h2>JavaScript Unit Converter</h2>
                            <a href="https://codepen.io/a-martin/pen/WBppQj" target="_blank" rel="noopener noreferrer">
                                <img src={unitConverter} alt="project-screenshot"></img>
                            </a>                
                            <p>Built with HTML, CSS and JavaScript, this simple, effective tool converts temperature, distance and weight values. Conversions are calculated and updated in real-time, so there's no need to click a button or refresh the page.</p>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>

    );
  }
}




    