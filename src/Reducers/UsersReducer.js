import { GETALLUSERLIST, GETALLUSERLISTSUCCESS } from "../Action/ActionTypes"

const initialState = {
    usersList: [],
    usersLoader: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLUSERLIST:
            return {
                ...state,
                usersLoader: true
            }
        case GETALLUSERLISTSUCCESS:
            return {
                ...state,
                usersList: action.payload,
                usersLoader: false
            }
        default: return state;
    }
}

export default userReducer;