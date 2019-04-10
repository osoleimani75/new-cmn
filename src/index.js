import React from 'react';
import ReactDOM from 'react-dom';
import './theme/css/index.css';
import App from './App';
import Head from './Head';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Head />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('body'));

serviceWorker.unregister();
