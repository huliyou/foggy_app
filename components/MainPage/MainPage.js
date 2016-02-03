/**
 *  组件: 主界面
 *  描述: 展示环境信息
 *  创建时间: 2016-1-11
 */

import React from 'react';
var MediaQuery = require('react-responsive');

import styles from '../../asset/styles/MainPage/style.css';

import {Button, Grid, Row, Col,Nav,NavItem,Navbar} from 'react-bootstrap';

import Navigator from './Navigator';
import InitPage from '../common/InitPage';
import CityPanel from './CityPanel';

class  MainPage extends React.Component{
    constructor(props) {
        super(props);
        this.props.get_local_position()
    }

    left_toggle() {
        return this.props.left_toggle;
    }

    render() {
        return (
            <div className={this.left_toggle()? 'MainPage_transform':'MainPage_default'}>
                <Navigator left_toggle_action={this.props.left_toggle_action}/>
                <div className="container city_panel_container">
                        {/*this.props.citiesProps.get("preferedCityName") == null? <CityPanel cityName="定位城市中..."/>:<CityPanel cityName={this.props.citiesProps.get("preferedCityName")} />*/}
                    <CityPanel Cities={this.props.citiesProps}/>
                </div>

            </div>
        );
    }
}

export default MainPage;