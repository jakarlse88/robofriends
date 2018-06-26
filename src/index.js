import './index.css';
import 'tachyons';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { searchRobots } from './reducers/reducers';
import thunk from 'redux-thunk';
import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';

if (process.env.NODE_ENV !== 'production') {
    const { whyDidYouUpdate } = require('why-did-you-update');
    whyDidYouUpdate(React);
}

const store = createStore(
    searchRobots,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();