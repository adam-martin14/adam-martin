import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: -80, scrollDuration: 450})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
