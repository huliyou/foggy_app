/**
 *  组件: 城市设置界面
 *  描述: 添加删除城市,监测点,
 *  创建时间: 2016-1-11
 */

import React from 'react';
import style from '../../asset/styles/CitiesSettingsPage/CitiesSettings.css';

import {Button} from 'react-bootstrap'

import Navigator from './Navigator';
import CitiesBox from './CitiesBox';
import InitPage from '../common/InitPage';

class CitiesSettings extends React.Component {
    isInit() {
        if (this.props.initProps['isFetching']) {
            return (
                <InitPage
                    isFetching = {this.props.initProps['isFetching']}
                />
            )
        }else {
            return <CitiesBox />
        }
    }

    render() {
        return(
            <div className="container CitiesSettings" style={this.props.left_toggle ? {zIndex:0} :{zIndex:-999}}>
                <Navigator />
                {this.isInit()}
            </div>
        );
    }
}

export default CitiesSettings;