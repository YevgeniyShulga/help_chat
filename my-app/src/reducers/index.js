import { combineReducers } from 'redux';
import {siteReducer} from './sites'

export const rootReducer = combineReducers({
    sites: siteReducer,
})