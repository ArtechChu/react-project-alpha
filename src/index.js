import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';
const MyApp = (
    <Provider store = {store}>
        <App></App>
    </Provider> 
)

ReactDOM.render(MyApp, document.getElementById('root'));
registerServiceWorker();
