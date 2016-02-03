//var citiesReducer = {
//    preferedCityName: string,
//    items: [
//        {"北京市":{"aqi":""}}
//    ]
//}

import * as citiesSettingsActions from '../actions/CitiesSettingsActions'
import * as AddCityActions from '../actions/AddCityActions'
import * as GetCityInfoActions from '../actions/GetCityInfoActions';
import Immutable from 'immutable';

let defaultState = Immutable.Map({
    preferedCityName: null,
    preferedCityInfo: Immutable.Map({
        isFetching: false,
        info:Immutable.Map(),
        error: false,
        errorMessage: null
    }),
    items:Immutable.List()
})

export default function Cities(
    state=defaultState,
    action
) {
    "use strict";

    switch (action.type) {
        case citiesSettingsActions.Set_Prefered_City:
            return state.set('preferedCityName',action.cityName);
        case AddCityActions.ADD_CITY:
            //如果城市名存在跳过
            if(state.get('items').includes(action.addCityName)){
                return state;
            }
            return state.updateIn(['items'], items => items.push(action.addCityName));

        case GetCityInfoActions.GET_CITY_INFO_REQUEST:
            return state.setIn(['preferedCityInfo','isFetching'],true);
            return state.setIn(['preferedCityInfo','error'],false);
        case GetCityInfoActions.GET_CITY_INFO_SUCCESS:
            //如果当前选择的城市与环境信息一致,进行更新
            if(action.cityName === state.get('preferedCityName')){
               return (
                   state.setIn(['preferedCityInfo','isFetching'],false)
                        .setIn(['preferedCityInfo','info'],Immutable.Map(action.info))
                        .setIn(['preferedCityInfo','error'],false)
               )
            }else {
                return state
            }
        case GetCityInfoActions.GET_CITY_INFO_FAILURE:
            return (
                state.setIn(['preferedCityInfo','isFetching'],false)
                    .setIn(['preferedCityInfo','errorMessage'],'无法获取城市环境信息')
                    .setIn(['preferedCityInfo','error'],true)
            )

        default:
            return state;
    }

}