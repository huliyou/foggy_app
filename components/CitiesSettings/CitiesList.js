import React from 'react';
import {List} from 'amazeui-touch';

class CitiesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: this.props.cities
        }
    }

    listItems() {
        var ListItems = [];
        this.props.cities.forEach(
            (v,i) => ListItems.push(
                <List.Item title={v}/>
            )
        )
        return ListItems;
    }

    render() {
        return (
            <List>
                {this.listItems()}
            </List>
        )
    }
}

export default CitiesList;