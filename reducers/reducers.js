import {combineReducers} from 'redux';
import MainPage from './MainPageReducers';
import Init from './InitReducer';
import Cities from './CitiesReducer';

import {routeReducer} from 'react-router-redux';

const appReducers = combineReducers({
    MainPage,
    Init,
    Cities,
    routing: routeReducer
});

export default appReducers;
