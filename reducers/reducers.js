import {combineReducers} from 'redux';
import MainPage from './MainPageReducers';
import Init from './InitReducer';
import Cities from './CitiesReducer';


const appReducers = combineReducers({
    MainPage,
    Init,
    Cities
});

export default appReducers;
