import {Left_View_Toggle, toggle_left } from '../actions/MainPageActions'

function MainPageReducers(state={left_toggle: false,
    right_toggle: false,},action) {
    "use strict";

    switch (action.type) {
        case Left_View_Toggle:
            return Object.assign({}, state, {
                left_toggle: !state.left_toggle
            })
        default:
            return state
    }
}

export default MainPageReducers;