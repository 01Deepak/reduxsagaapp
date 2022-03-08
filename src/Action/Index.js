import {
    GETALLUSERLIST, GETALLUSERLISTSUCCESS, ISUSERDETAILSMODALOPEN, CLOSEUSERDETAILSMODAL, DELETEUSER,
    OPENUSERDELETEMODAL, CLOSEUSERDELETEMODAL, AFTERSEARCHUSERSLIST, OPENADDNEWUSERMODAL, CLOSEADDNEWUSERMODAL,
    ISINFINITELOADER, ISUSERLOADER
} from "./ActionTypes"


export const AllUserList = (payload) => {
    return {
        type: GETALLUSERLIST,
        payload: payload
    }
}

export const getAllUserListSuccess = (payload) => {
    return {
        type: GETALLUSERLISTSUCCESS,
        payload: payload
    }
}

export const openUserDetailsModal = () => {
    return {
        type: ISUSERDETAILSMODALOPEN
    }
}

export const clolseUserDetailsModal = () => {
    return {
        type: CLOSEUSERDETAILSMODAL
    }
}

export const deleteUserFromList = (payload) => {
    return {
        type: DELETEUSER,
        payload: payload
    }
}

export const openIsUserDeleteModal = (payload) => {
    return {
        type: OPENUSERDELETEMODAL,
        payload: payload
    }
}

export const closeIsUserDeleteModal = () => {
    return {
        type: CLOSEUSERDELETEMODAL
    }
}

export const afterSerchUsersList = (payload) => {
    return {
        type: AFTERSEARCHUSERSLIST,
        payload: payload
    }
}

export const openAddNewUserModal = () => {
    return {
        type: OPENADDNEWUSERMODAL
    }
}

export const closeAddNewUserModal = () => {
    return {
        type: CLOSEADDNEWUSERMODAL
    }
}
export const openUserLoader = () => {
    return {
        type: ISUSERLOADER
    }
}
export const openInfiniteLoder = () => {
    console.log('hey')
    return {
        type: ISINFINITELOADER
    }
}

