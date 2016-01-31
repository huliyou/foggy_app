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

    componentWillMount() {
        this.props.get_local_position()
    }

    left_toggle() {
        return this.props.left_toggle;
    }

    render() {
        return (
            <div className={this.left_toggle()? 'MainPage_transform':'MainPage_default'}>
                <Navigator left_toggle_action={this.props.left_toggle_action}/>
                <div className="container contentTest">
                        {this.props.citiesProps["preferedCityName"] == undefined? <CityPanel cityName="定位城市中..."/>:<CityPanel cityName={this.props.citiesProps["preferedCityName"]} />}
                </div>
                <div className="container data_panel">
                    data table
                </div>
            </div>
        );
    }
}

export default MainPage;