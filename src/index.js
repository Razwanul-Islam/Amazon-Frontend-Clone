import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import unregisterServiceWorker from './registerServiceWorker';
import "./bootstrap.min.css"
ReactDOM.render(<App />, document.getElementById('root'));
unregisterServiceWorker();
