import React from 'react';
import {List} from 'amazeui-touch';

import * as AddCityActions from '../../actions/AddCityActions';
import * as CitiesSettingsActions from '../../actions/CitiesSettingsActions';
import * as MainPageActions from '../../actions/MainPageActions';
import * as GetCityInfoActions from '../../actions/GetCityInfoActions';

import {routeActions} from 'react-router-redux';
import {connect} from 'react-redux';

class SelectedCitiesList extends React.Component {
    constructor(props) {
        super(props);
    }

    listItems() {
        var ListItems = [];
        this.props.cities.forEach(
            (v,i) => ListItems.push(
                <List.Item
                    key={i}
                    title={v}
                    onClick={
                        (e) => {
                            this.props.dispatch(
                                //设置当前城市
                                CitiesSettingsActions.setPreferedCity(v)
                            )
                            this.props.dispatch(
                                //获取当前城市环境信息
                                GetCityInfoActions.getCityInfo(v)
                            )
                            this.props.dispatch(
                                MainPageActions.toggle_left()
                            )
                        }
                    }
                />
            )
        )
        return ListItems;
    }

    render() {
        return (
            <List className="cities_list">
                {this.listItems()}
            </List>
        )
    }
}

function mapStateToProps(state,props) {
    return ({
        cities:props.cities,
        dispatch: state.dispatch
    })

}

export default connect(mapStateToProps)(SelectedCitiesList);

//export default SelectedCitiesList;