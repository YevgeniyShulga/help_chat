import * as type from "../constants/actionTypes";

export const addUsers = (userList) => {
    return (dispatch) => {
        dispatch({
            type: type.ADD_USERS,
            payload: userList
        })
    }
}
