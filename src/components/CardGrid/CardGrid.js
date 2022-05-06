import React from 'react';
import classes from './CardGrid.css';
import PrimarySectionHeading from '../PrimarySectionHeading/PrimarySectionHeading';


const cardGrid = (props) => (

    <div id="skills" className={classes.CardGridContainer}>

        <PrimarySectionHeading primaryHeadingText="What I Do" />

        <div className={classes.CardGridContentContainer}>

            <div className={classes.Card}>

                <h2>Front End Web Development</h2>
                <p>Using clean, maintainable <strong>HTML, CSS</strong> (including the <strong>BEM</strong> methodology and preprocessors such as <strong>SASS</strong>), <strong>JavaScript</strong>, and libraries such as <strong>jQuery</strong> and <strong>Bootstrap</strong>, I build attractive user interfaces, that comply with designs, wireframes, and client needs. My structured, component-based approach to web development reduces code reuse and enhances project maintainability.</p>

            </div>

            <div className={classes.Card}>

                <h2>Content Management System Web Development</h2>
                <p>My substantial experience building and maintaining <strong>Wordpress</strong> sites has rendered me skilled at developing page templates using <strong>PHP</strong> (and PHP templating engines such as <strong>Twig and Blade</strong>), and selectively utilizing plugins such as <strong>Advanced Custom Fields</strong> to add CMS/ website functionality. In a previous role, I gained an introductory understanding of the <strong>Drupal</strong> CMS, and used this to perform various maintenance and support tasks on existing client websites.</p>
            </div>

            <div className={classes.Card}>

                <h2>Apply Industry-Standard Tools and Work Practices</h2>
                <p>The success of any development project depends on more than just the code. I am comfortable with <strong>Git</strong> version control (through both the command line and user interfaces such as <strong>Sourcetree and Tower</strong>), and also a proficient user of <strong>Github and Bitbucket</strong>. I have experience adopting <strong>Agile</strong> working approaches, and have extensively used <strong>JIRA</strong> for both internal project management, and client-facing communications. I can also use design tools such as <strong>Sketch and InVision</strong> to view wireframes and export assets.</p>

            </div>
        </div>
    </div>

);

export default cardGrid;