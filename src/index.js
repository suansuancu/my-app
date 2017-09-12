import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'
import App from '../src/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
