export const Set_Prefered_City = 'Set_Prefered_City';

export function setPreferedCity(CityName:string) {
    "use strict";
    return {
        type: Set_Prefered_City,
        cityName: CityName
    }
}