import {combineReducers} from 'redux';
import MainPage from './MainPageReducers';
import Init from './InitReducer';
import Cities from './CitiesReducer';
import CitiesList from './CitiesListReducer';

import {routeReducer} from 'react-router-redux';

const appReducers = combineReducers({
    MainPage,
    Init,
    Cities,
    CitiesList,
    routing:routeReducer,
});

export default appReducers;
