require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import fetchJsonp from 'fetch-jsonp';
import AppInfo from 'json!../AppInfo.json';
//import $  from 'jQuery';
import $ from 'jquery';

// cities actions
import * as citiesSettingsActioins from './CitiesSettingsActions';
import * as AddCityActions from './AddCityActions';

export const Get_Local_Position_Request = 'Get_Local_Position_Request';
export const Get_Local_Position_Success = 'Get_Local_Position_Success';
export const Get_Local_Position_Failure = 'Get_Local_Position_Failure';

export function get_local_position() {
    "use strict";
    return function(dispatch) {
        dispatch(get_local_position_request());
        if (navigator.geolocation) {
            var watchID = navigator.geolocation.watchPosition(
                // success callback
                position => {
                    navigator.geolocation.clearWatch(watchID);
                    let pos = {
                        "Latitude": position.coords.latitude,
                        "Longitude": position.coords.longitude
                    }
                    console.log('..pos..',pos)
                    //dispatch(get_local_position_success(pos));
                    let callback = (pos,city) => {
                        dispatch(get_local_position_success(pos, city))
                        dispatch(citiesSettingsActioins.setPreferedCity(city))
                        dispatch(AddCityActions.addCity(city));
                    }
                    _getPositionCityName(pos,callback);
                },
                // failure callback
                () => dispatch(get_local_position_failure())
            )
        } else {
            dispatch(get_local_position_failure())
        }
    }
}

function result(data) {
    "use strict";
    console.log(data);
}

function _getPositionCityName(position,callback) {
    var cityName = '';
    "use strict";
    let query = {
        ak: AppInfo['baidu_ak'],
        location: position['Latitude']+','+position['Longitude'],
        output: 'json',
        callback: 'result'
    }

    fetchJsonp("http://api.map.baidu.com/geocoder/v2/?"+$.param(query),{
        mode:'cors',
    })
    .then(response => response.json())
    .then(json => {
        console.log(json['result']['addressComponent']['city']);
        let cityName = json['result']['addressComponent']['city'];
        // 百度API返回的城市名以'市'结尾,要去掉
        if(cityName.includes('市')) {
            cityName = cityName.slice(0,-1);
        }
        callback(position,cityName);
        //dispatch(get_local_position_success(pos,cityName))
    });

}

export function get_local_position_request() {
    "use strict";
    return {
        type: Get_Local_Position_Request,
    }
}

/**
 *
 * @param position
 */
export function get_local_position_success(position,cityName) {
    "use strict";
    console.log('success......',position,cityName)
    return {
        type: Get_Local_Position_Success,
        position: position,
        cityName: cityName
    }
}

export function get_local_position_failure() {
    "use strict";
    return {
        type: Get_Local_Position_Failure
    }
}

