import { GETALLUSERLIST, GETALLUSERLISTSUCCESS, ISUSERDETAILSMODALOPEN, CLOSEUSERDETAILSMODAL } from "../Action/ActionTypes"

const initialState = {
    usersList: [],
    usersLoader: false,
    isUserDetailsModalOpen: false
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

        case ISUSERDETAILSMODALOPEN:
            return {
                ...state,
                isUserDetailsModalOpen: true
            }

        case CLOSEUSERDETAILSMODAL:
            return {
                ...state,
                isUserDetailsModalOpen: false
            }


        default: return state;
    }
}

export default userReducer;