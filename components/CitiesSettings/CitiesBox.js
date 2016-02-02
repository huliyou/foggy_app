import React from 'react';
import styles from '../../asset/styles/CitiesSettingsPage/CitiesSettings.css';

import {connect} from 'react-redux';

import {Container} from 'amazeui-touch';

class CitiesBox extends React.Component {

    //cellsForRowAtIndexPath(indexRow:number) {
    //    return <div>{this.props.cities.get(indexRow)}</div>
    //}
    //cellsList() {
    //    var list = [];
    //    this.props.cities.forEach(
    //        (v,i) => list.push(this.cellsForRowAtIndexPath(i))
    //    )
    //    return list
    //}
    render() {
        return (
            <Container className="container cell_box" scrollable={true}>
                <div className="container col-xs-12 cell ">
                    <div className="col-xs-4 cityNameLeft">信阳</div>
                    <div className="col-xs-8 text-right">57 优</div>
                </div>
            </Container>
        )
    }
}


//export default connect(state=>state)(CitiesBox);

export default CitiesBox;
