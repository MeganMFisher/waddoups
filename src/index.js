import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </MuiThemeProvider>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
