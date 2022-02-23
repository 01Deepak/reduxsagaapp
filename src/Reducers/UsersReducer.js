import { ALLUSERLIST } from "../Action/ActionTypes"

const initialState = {
    usersList: []
}

const getAllUsersList = (state = initialState, action) => {
    switch (action.type) {
        case ALLUSERLIST:
            return {
                ...state,
                usersList: action.payload
            }

        default: return state;
    }
}

export default getAllUsersList;