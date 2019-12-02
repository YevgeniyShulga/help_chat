import * as types from "../constants/actionTypes";
import {getActiveSite} from "../utils/functions";

export const initialState = {
    currentSite: '',
    currentSender: 'chat',
    textToSend: ''
};

export const senderReducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type) {

        case types.SET_ACTIVE_SITE:
            console.log(getActiveSite());
            return {...state, currentSite: getActiveSite()}

        case types.SET_TEXT_TO_SEND:
            return {...state, textToSend: action.payload}

        default: return state;
    }

}