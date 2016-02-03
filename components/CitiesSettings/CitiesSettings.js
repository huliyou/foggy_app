/**
 *  组件: 城市设置界面
 *  描述: 添加删除城市,监测点,
 *  创建时间: 2016-1-11
 */

import React from 'react';
import style from '../../asset/styles/CitiesSettingsPage/CitiesSettings.css';

import {Container} from 'amazeui-touch'

import Navigator from './Navigator';
import InitPage from '../common/InitPage';
import CitiesList from './CitiesList';
import SelectedCitiesList from './SelectedCitiesList';

class CitiesSettings extends React.Component {
    isInit() {
        if (this.props.initProps['isFetching']) {
            return (
                <InitPage
                    isFetching = {this.props.initProps['isFetching']}
                />
            )
        }
        else if(this.props.citiesProps.get('items').count() > 0){
            return (
                <Container className="selected_cities_list">
                    <SelectedCitiesList cities={this.props.citiesProps.get('items')}/>
                </Container>
            )
        }else {
            return <div></div>
        }
    }

    render() {
        return(
            <div className="CitiesSettings" style={this.props.left_toggle ? {zIndex:0} :{zIndex:-999}}>
                <Navigator dispatch={this.props.dispatch}/>
                {this.isInit()}

            </div>
        );
    }
}

export default CitiesSettings;