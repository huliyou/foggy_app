//// 入口文件
//import React from 'react';
//import MainPage from './components/MainPage/MainPage';
//
//let rootElement = document.getElementById('app');
//
//React.render(<MainPage></MainPage>,rootElement);
//
//import App from './containers/app';
//
//import {render} from 'react-dom';
//import {Router,Route,Link,IndexRoute,Redirect} from 'react-router';
//
//import AppSettingsView from './components/AppSettings';
//import CitiesSettignsView from './components/CitiesSettings';
//
////import createBrowserHistory from 'history/lib/createBrowserHistory';
//import createMemoryHistory from 'history/lib/createMemoryHistory';
//
////
////render((
////    <Router history={createMemoryHistory()}>
////        <Route path="/" component={App}>
////            <Route path="appSettings" component={AppSettingsView}></Route>
////            <Route path="citiesSettings" component={CitiesSettignsView}></Route>
////        </Route>
////    </Router>
////), rootElement);
//

import React from 'react';
import {render} from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/reducers';

import Apps from './containers/app.js';

let rootElement = document.getElementById('app');

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers);


render(
    <Provider store={store}>
        <Apps />
    </Provider>,
    rootElement
);
