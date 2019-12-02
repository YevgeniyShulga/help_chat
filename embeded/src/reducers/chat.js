import * as types from "../constants/actionTypes";
import {getActiveSite} from "../utils/functions";

export const initialState = {
    onlineList: [],
    closed: false,
    mail: {
        alreadyReceived: [],
    },
    chat: {
        alreadyReceived: [],
    }
    
};

export const chatReducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type) {

        case types.ADD_USERS:
            let newState = state;
            if (action.payload.length > 0) {
                let users = state.onlineList.concat(action.payload)
                newState = {...state, onlineList: users}
            } else {
                newState = {...state, closed: true}
            }
            return newState

        default: return state;
    }

}