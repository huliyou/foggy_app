import React from 'react';
import styles from '../../asset/styles/CitiesSettings.css';

import {Container} from 'amazeui-touch';

class CitiesBox extends React.Component {
    render() {
        return (
            <Container className="container cell_box" scrollable={true}>
                <div className="container col-xs-12 cell ">
                    <div className="col-xs-4">北京</div>
                    <div className="col-xs-8 text-right">107 轻度污染</div>
                </div>
            </Container>
        )
        //return (
        //    <Container className="cell_box" >
        //        hello
        //    </Container>
        //)
    }
}

export default CitiesBox;