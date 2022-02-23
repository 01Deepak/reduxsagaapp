import { ALLUSERLIST } from "./ActionTypes"


export const AllUserList = (payload) => {
    return {
        type: ALLUSERLIST,
        payload: payload
    }
}