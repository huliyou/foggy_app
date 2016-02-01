import React from 'react';
import {connect} from 'react-redux';

import CitiesSettingsPage from '../components/CitiesSettings/CitiesSettings';

// actions
import * as mainPageActions from '../actions/MainPageActions';
import * as InitActions from '../actions/InitActions';


//<MainPageContainer get_local_position={() => this.props.dispatch(get_local_position())} left_toggle_action={() => this.props.dispatch(toggle_left())} left_toggle={this.props.MainPage.left_toggle} state={this.props.MainPage}/>
class CitiesSettingsContainer extends React.Component {
    showContent() {
        if(this.props.children) {
            return <div>{this.props.children}</div>
        }else {
            return(
                <div>
                    <CitiesSettingsPage
                        left_toggle = {this.props.MainPage.left_toggle}
                        initProps = {this.props.Init}
                    />
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.showContent()}
            </div>
        )
    }
}

function mapStateToProps(state,props) {
    return {
        Init: state.Init,
        Cities: state.Cities,
        MainPage: state.MainPage
    }
}

export default connect(mapStateToProps)(CitiesSettingsContainer);