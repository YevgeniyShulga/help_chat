import { combineReducers } from 'redux';
import {senderReducer} from './sender'
import {filterReducer} from './filter'
import {chatReducer} from './chat'

export const rootReducer = combineReducers({
    sender: senderReducer,
    filter: filterReducer,
    chat: chatReducer
})