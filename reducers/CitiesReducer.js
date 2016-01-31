//var citiesReducer = {
//    preferedCityName: string,
//    items: [
//        {"北京市":{"aqi":""}}
//    ]
//}

import * as citiesSettingsActions from '../actions/CitiesSettingsActions'

export default function Cities(
    state = {
        preferedCityName: undefined,
        items:[]
    },
    action
) {
    "use strict";

    switch (action.type) {
        case citiesSettingsActions.Set_Prefered_City:
            return (
                Object.assign({}, state, {
                    preferedCityName: action.cityName
                })
            );
        default:
            return state;
    }

}