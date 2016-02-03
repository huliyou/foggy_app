import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router';
import {routeActions} from 'react-router-redux';
import {Field,Container,NavBar} from 'amazeui-touch';

import styles from '../../asset/styles/CitiesSettingsPage/AddCityPage.css';

import * as AddCityActions from '../../actions/AddCityActions';

import CitiesList from './CitiesList';

class AddCityPage extends  React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if(this.props.CitiesList.get('cities').count() == 0) {
            this.props.dispatch(AddCityActions.getCitiesList());
        }
    }
    showList() {
        var cells = [];
        this.props.CitiesList.get('cities').forEach(
            (v,key) => cells.push(<div key={key}>{v}</div>)
        )
        return cells;
    }
    render() {
        return (
            <div className="AddCityPage" style={this.props.MainPage.left_toggle ? {zIndex:0} :{zIndex:-999}}>
                <NavBar
                    leftNav={[{
                            title:'返回',
                            icon:'left-nav',
                        }]
                    }
                    onSelect = {
                        (item,e) => {
                            if(item.title=='返回') {
                                this.props.dispatch(routeActions.goBack())
                            }
                        }
                    }
                />

                <Container className="add_cities_list" scrollable={true} >
                    <CitiesList
                        cities={this.props.CitiesList.get('cities')}
                        dispatch = {this.props.dispatch}
                    />
                </Container>


            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(AddCityPage);

