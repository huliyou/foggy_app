import immutable from 'immutable';

const citiesListDefault = immutable.Map(
    {
        isFetching: false,
        cities: immutable.List(),
        errorMessage: ''
    }
)

import * as CitiesListActions from '../actions/AddCityActions';

export default function citiesList(state = citiesListDefault, action) {
   switch (action.type) {
       case CitiesListActions.Get_Cities_List_Request:
           return state.set('isFetching',true);
       case CitiesListActions.Get_Cities_List_Success:
           return state.set('cities',immutable.List(action.cities)).set('isFetching',false);
       case CitiesListActions.Get_Cities_List_Failure:
           return state.set('isFetching',false).set('errorMessage','无法获取城市列表');
      default: return state;
   }
}