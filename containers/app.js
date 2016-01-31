import React from 'react';
import {connect} from 'react-redux';
// import actions
// import components
import AppSettings from '../components/AppSettings';
//import MainPageContainer from '../components/MainPage/MainPageContainer';


//import {Router,Route,Link} from 'react-router';
import {toggle_left,Left_View_Toggle} from '../actions/MainPageActions'

import styles from '../asset/styles/App.css'

import MainPageContainer from './MainPageContainer';
import CitiesSettingsContainer from './CitiesSettingsContainer'

class App extends React.Component {
    render() {
        return(
            <div className="App">
                <MainPageContainer />
                {/*<MainPageContainer get_local_position={() => this.props.dispatch(get_local_position())} left_toggle_action={() => this.props.dispatch(toggle_left())} left_toggle={this.props.MainPage.left_toggle} state={this.props.MainPage}/>*/}
                <CitiesSettingsContainer />
            </div>

        )
    }
}

export default App;

//function mapStateToProps(state) {
//    "use strict";
//    return {
//        MainPage: state.MainPage
//    };
//}
//
//export default connect(mapStateToProps)(App);


