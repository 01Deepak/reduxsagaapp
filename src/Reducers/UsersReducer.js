import {
    GETALLUSERLIST, GETALLUSERLISTSUCCESS, ISUSERDETAILSMODALOPEN,
    CLOSEUSERDETAILSMODAL, DELETEUSER, OPENUSERDELETEMODAL, CLOSEUSERDELETEMODAL,
    AFTERSEARCHUSERSLIST, OPENADDNEWUSERMODAL, CLOSEADDNEWUSERMODAL, ISINFINITELOADER, ISUSERLOADER
} from "../Action/ActionTypes"

const initialState = {
    usersList: [],
    usersLoader: false,
    isUserDetailsModalOpen: false,
    isUserDeleteModal: false,
    idForDeleteUser: null,
    searchedUsersList: [],
    addNewUserModal: false,
    infiniteLoader: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case ISINFINITELOADER:
            return {
                ...state,
                infiniteLoader: true
            }

        case ISUSERLOADER:
            return {
                ...state,
                usersLoader: true
            }

        case GETALLUSERLIST:
            return {
                ...state


            }
        case GETALLUSERLISTSUCCESS:
            console.log(action.payload.data)
            return {
                ...state,
                usersList: [...state.usersList, ...action.payload.data],
                searchedUsersList: [...state.searchedUsersList, ...action.payload.data],
                usersLoader: false,
                infiniteLoader: false
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

        case DELETEUSER:
            return {
                ...state,
                usersList: action.payload
            }

        case OPENUSERDELETEMODAL:
            return {
                ...state,
                isUserDeleteModal: true,
                idForDeleteUser: action.payload
            }

        case CLOSEUSERDELETEMODAL:
            return {
                ...state,
                isUserDeleteModal: false
            }

        case AFTERSEARCHUSERSLIST:
            return {
                ...state,
                searchedUsersList: action.payload
            }

        case OPENADDNEWUSERMODAL:
            return {
                ...state,
                addNewUserModal: true
            }

        case CLOSEADDNEWUSERMODAL:
            return {
                ...state,
                addNewUserModal: false
            }


        default: return state;
    }
}

export default userReducer;