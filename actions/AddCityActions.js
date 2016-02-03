import fetch from 'isomorphic-fetch';
import AppInfo from 'json!../AppInfo.json';

export const Get_Cities_List_Request = 'Get_Cities_List_Request';
export const Get_Cities_List_Success = 'Get_Cities_List_Success';
export const Get_Cities_List_Failure= 'Get_Cities_List_Failure';

export const ADD_CITY = 'ADD_CITY';

export function getCitiesListRequest() {
    return {
        type: Get_Cities_List_Request
    }
}
export function getCitiesListSuccess(cities) {
    return {
        type: Get_Cities_List_Success,
        cities: cities
    }
}

export function getCitiesListFailure() {
    return({
        type: Get_Cities_List_Failure
    })
}

export function getCitiesList() {
    return function(dispatch) {
        dispatch(getCitiesListRequest());
        var result;
        fetch(AppInfo.webservice_url + '/api/cities')
        .then(response => response.json())
        .then(json => {
            console.log('cities list json: ', json);
            if(json.error) {
                //dispatch(getCitiesListFailure())
                // 假数据
                dispatch(getCitiesListSuccess(['北京','大连']));
            }else{
                dispatch(getCitiesListSuccess(json['cities']))
            }

        })
    }
}

export function addCity(cityName) {
    return ({
        type: ADD_CITY,
        addCityName: cityName
    })
}
