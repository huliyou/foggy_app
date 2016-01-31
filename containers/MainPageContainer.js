import React from 'react';
import {connect} from 'react-redux';
import MainPage from '../components/MainPage/MainPage';

// actions
import * as mainPageActions from '../actions/MainPageActions';
import * as InitActions from '../actions/InitActions';


//<MainPageContainer get_local_position={() => this.props.dispatch(get_local_position())} left_toggle_action={() => this.props.dispatch(toggle_left())} left_toggle={this.props.MainPage.left_toggle} state={this.props.MainPage}/>
class MainPageContainer extends React.Component {
    render() {
        return (
            <div>
                <MainPage
                    initProps = {this.props.Init}
                    citiesProps = {this.props.Cities}
                    get_local_position = {() => this.props.dispatch(InitActions.get_local_position())}
                    left_toggle_action = {() => this.props.dispatch(mainPageActions.toggle_left())}
                    left_toggle={this.props.MainPage.left_toggle}
                    state={this.props.MainPage}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
   return {
       Init: state.Init,
       Cities: state.Cities,
       MainPage: state.MainPage
   }
}

export default connect(mapStateToProps)(MainPageContainer);