import * as types from "../constants/actionTypes";
import {getActiveSite} from "../utils/functions";

export const initialState = {
    ageFrom: 0,
    ageTo: 99
};

export const filterReducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type) {

        case types.SET_AGE_RANGE:
            return {...state, ageFrom: action.payload[0], ageTo: action.payload[1]}

        default: return state;
    }

}