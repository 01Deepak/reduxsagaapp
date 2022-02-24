import { GETALLUSERLIST, GETALLUSERLISTSUCCESS } from "./ActionTypes"


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