import * as types from "../constants/actionTypes";
import {getActiveSite} from "../utils/functions";

export const initialState = {
    onlineList: [],
    closed: false,
    sendingStarted: false,
    mail: {
        alreadyReceived: [],
    },
    chat: {
        alreadyReceived: [],
        template: false
    },
    type: 'chat',

    
};

export const chatReducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type) {

        case types.ADD_USERS:
            let newState = state;
            if (action.payload.length > 0) {
                let users = state.onlineList.concat(action.payload);
                newState = {...state, onlineList: users}
            } else {
                newState = {...state, closed: true}
            }
            return newState;

        case types.START_SENDING:
            return {...state, sendingStarted: true};

        case types.ACTIVATE_SENDING_BY_TEMPLATE:
            let chatConfig = state.chat;
            chatConfig.template = !state.chat.template;
            return {...state, chat: chatConfig};

        case types.ADD_USER_TO_RECEIVED:
            let users = state[state.type].alreadyReceived;
            users.push(action.payload);
            state[state.type].alreadyReceived = users;
            return state;



        default: return state;
    }

}