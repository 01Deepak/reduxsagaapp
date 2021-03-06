import {
    GETALLUSERLIST, GETALLUSERLISTSUCCESS, ISUSERDETAILSMODALOPEN,
    CLOSEUSERDETAILSMODAL, DELETEUSER, OPENUSERDELETEMODAL, CLOSEUSERDELETEMODAL,
    AFTERSEARCHUSERSLIST, OPENADDNEWUSERMODAL, CLOSEADDNEWUSERMODAL, ISINFINITELOADER, ISUSERLOADER, ISBOTTOM, USERDETAILSSUCCESS, USERDETAILSINITIATE,
    SEARCHINPUTS, ADDNEWUSER, OPENUPDATEUSERMODAL, CLOSEUPDATEUSERMODAL,UPDATEUSER
} from "../Action/ActionTypes"

const initialState = {
    usersList: [],
    usersLoader: false,
    isUserDetailsModalOpen: false,
    isUserDeleteModal: false,
    idForDeleteUser: null,
    searchedUsersList: [],
    addNewUserModal: false,
    infiniteLoader: false,
    totalData: 0,
    totalLimit: 0,
    fetchMore: null,
    pageNumber: 0,
    bottom: false,
    userDetailsById: [],
    isError: false,
    userDetailsLoader: null,
    loaderInModal: false,
    inputForSearch: '',
    updateUserModal: false,
    dataForUpdateUser:{}

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
            // console.log("total--", action.payload.total)
            return {
                ...state,
                usersList: [...state.usersList, ...action.payload.data],
                searchedUsersList: [...state.searchedUsersList, ...action.payload.data],
                usersLoader: false,
                infiniteLoader: false,
                totalData: action.payload.total,
                totalLimit: action.payload.limit,
                pageNumber: (action.payload.page + 1),
                bottom: false,
                isError: false
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
                usersList: action.payload,
                searchedUsersList: action.payload
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
                addNewUserModal: true,
            }

        case CLOSEADDNEWUSERMODAL:
            return {
                ...state,
                addNewUserModal: false
            }

        case OPENUPDATEUSERMODAL:
            return {
                ...state,
                updateUserModal: true,
                dataForUpdateUser:action.payload
            }

        case CLOSEUPDATEUSERMODAL:
            return {
                ...state,
                updateUserModal: false
            }

        case ISBOTTOM:
            return {
                ...state,
                bottom: true
            }

        case USERDETAILSINITIATE:
            return {
                ...state,
                userDetailsLoader: action.payload
            }


        case USERDETAILSSUCCESS:
            return {
                ...state,
                userDetailsById: action.payload,
                userDetailsLoader: null
            }
        case SEARCHINPUTS:
            return {
                ...state,
                inputForSearch: action.payload
            }
        case ADDNEWUSER:
            console.log("---", action.payload)
            console.log("---", action.payload)
            return {
                ...state,
                usersList: [...state.usersList, action.payload],
                searchedUsersList: [...state.searchedUsersList, action.payload]
            }

            
            case UPDATEUSER:
             const updatedData =  state.searchedUsersList.map((elem) => {
                   if(elem.id === action.payload.id) {
                      console.log("elem--",elem)
                      return {
                          ...elem,
                          title: action.payload.title,
                          firstName: action.payload.firstName,
                          lastName: action.payload.lastName,
                          picture: action.payload.picture,
                      }
                   }
                   return elem
               })
               console.log("updateddata---",updatedData)
                return {
                    ...state,
                    usersList:updatedData,
                    searchedUsersList:updatedData
                }


        default: return state;
    }
}

export default userReducer;