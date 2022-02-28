import { GETALLUSERLIST, GETALLUSERLISTSUCCESS, ISUSERDETAILSMODALOPEN, CLOSEUSERDETAILSMODAL } from "./ActionTypes"


export const AllUserList = () => {
    return {
        type: GETALLUSERLIST
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