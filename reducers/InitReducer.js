import * as initAction from '../actions/InitActions';

//{
//    isFetching: bool,
//    cityName:'',
//    position: {
//        Latitude: number,
//        Longitude: number,
//    }
//    error: bool
//}

export default function Init(state={
    isFetching: false,
    position: undefined,
    cityName:'',
    error: false
},action) {
    switch (action.type) {
        case initAction.Get_Local_Position_Request:
            return Object.assign({},state,{isFetching:true});
        case initAction.Get_Local_Position_Success:
            return Object.assign({},state,{
                isFetching: false,
                position: action.position,
                cityName:action.cityName,
            })
        case initAction.Get_Local_Position_Failure:
            return Object.assign({},state,{
                isFetching: false,
                error: true
            })
        default:
            return state
    }
}