// React related imports
import React from 'react';
import ReactDOM from 'react-dom';

// Redux related imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

// CSS related imports
import './index.css';

// Import reusable components
import App from './App';

// Miscellaneous imports
import * as serviceWorker from './serviceWorker';

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
