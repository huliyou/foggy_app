import React from 'react';
import {List} from 'amazeui-touch';

import * as AddCityActions from '../../actions/AddCityActions';
import {routeActions} from 'react-router-redux';

class CitiesList extends React.Component {

    listItems() {
        var ListItems = [];
        this.props.cities.forEach(
            (v,i) => ListItems.push(
                <List.Item
                    key={i}
                    title={v}
                    onClick={(e)=>{
                        this.props.dispatch(AddCityActions.addCity(v));
                        this.props.dispatch(routeActions.goBack());
                    }}
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

export default CitiesList;