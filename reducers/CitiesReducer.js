//var citiesReducer = {
//    preferedCityName: string,
//    items: [
//        {"北京市":{"aqi":""}}
//    ]
//}

import * as citiesSettingsActions from '../actions/CitiesSettingsActions'
import * as AddCityActions from '../actions/AddCityActions'
import Immutable from 'immutable';

let defaultState = Immutable.Map({
    preferedCityName: null,
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
        default:
            return state;
    }

}