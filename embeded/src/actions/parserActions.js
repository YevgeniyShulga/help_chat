import * as type from './../constants/actionTypes'

export const addActiveSite = () => {
    return (dispatch) => {
        dispatch({
            type: type.SET_ACTIVE_SITE,
        })
    }
}

export const setAgeRange = (range) => {
    return (dispatch) => {
        dispatch({
            type: type.SET_AGE_RANGE,
            payload: range
        })
    }
}

export const setTextToSend = (text) => {
    return (dispatch) => {
        dispatch({
            type: type.SET_TEXT_TO_SEND,
            payload: text
        })
    }
} 