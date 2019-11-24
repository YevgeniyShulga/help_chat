import * as type from './../constants/SiteActionTypes'

export const addActiveSite = (site) => {
    return (dispatch) => {
        dispatch({
            type: type.TYPE_ADD_ACTIVE_SITE,
            payload: site
        })
    }
}

export const setActiveSite = (site) => {
    return (dispatch) => {
        dispatch({
            type: type.TYPE_SET_ACTIVE_SITE,
            payload: site
        })
    }
}

export const isChoosen = (val) => {
    return (dispatch) => {
        dispatch({
            type: type.TYPE_SET_CHOSEN_TYPE,
            payload: val
        })
    }
}

export const addUser = (site, user) => {
    return (dispatch) => {
        dispatch({
            type: type.TYPE_ADD_USER,
            payload: {siteId: site.id, user: user}
        })
    }
}

export const setActiveUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: type.TYPE_SET_ACTIVE_USER,
            payload: user
        })
    }
}