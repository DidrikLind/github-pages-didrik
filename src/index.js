import React from 'react'
import { render } from 'react-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


render(<App />, document.getElementById('root'));
registerServiceWorker();
