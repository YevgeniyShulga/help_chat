import * as type from "../constants/actionTypes";

export const addUsers = (userList) => {
    return (dispatch) => {
        dispatch({
            type: type.ADD_USERS,
            payload: userList
        })
    }
}

export const addUserToReceived = (id) => {
    return (dispatch) => {
        dispatch({
            type: type.ADD_USER_TO_RECEIVED,
            payload: id
        })
    }
}

export const startSending = () => {
    return (dispatch) => {
        dispatch({
            type: type.START_SENDING,
        })
    }
}
