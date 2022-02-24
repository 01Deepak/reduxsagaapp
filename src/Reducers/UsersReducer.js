import { GETALLUSERLIST, GETALLUSERLISTSUCCESS } from "../Action/ActionTypes"

const initialState = {
    usersList: []
}

const userReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case GETALLUSERLIST:
            return {
                ...state
            }
        case GETALLUSERLISTSUCCESS:
            console.log("sdfs")
            return {
                ...state,
                usersList: action.payload
            }
        default: return state;
    }
}

export default userReducer;