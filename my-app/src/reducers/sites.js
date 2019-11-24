import * as type from "./../constants/SiteActionTypes";
export const initialState = {
    addedSites: [],
    availableFilters: [],
    currentSite: '',
    chosen: false,
    users: [],
    activeUser: null,
    activeTotal: 0,
    accountsTotal: 0,
};

export const siteReducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type){

        case type.TYPE_ADD_ACTIVE_SITE :
            const sites = state.addedSites;
            const users = state.users;
            if(!sites.includes(action.payload)){
                sites.push(action.payload);
                users[action.payload.id] = [];
            }
            return {...state, addedSites: sites, users: users, activeTotal: sites.length};

        case type.TYPE_SET_ACTIVE_SITE :
            return {...state, currentSite:true};

        case type.TYPE_SET_CHOSEN_TYPE :
            return {...state, chosen: action.payload};

        case type.TYPE_ADD_USER :
            console.log(action);
            let updatedUsers = state.users;
            let filteredUsers = state.users.filter(function (elem) {
                return elem.id === action.payload.user.id;
            });
            if (state.users[action.payload.siteId] && !filteredUsers.length)
                updatedUsers[action.payload.siteId].push(action.payload.user);
            return {
                ...state,
                users: updatedUsers,
                accountsTotal: updatedUsers.length
            };

        case type.TYPE_SET_ACTIVE_USER :
            return {...state, activeUser: action.payload};

        default :
            return state;
    }

};