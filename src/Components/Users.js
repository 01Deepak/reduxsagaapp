import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllUserList, openUserDetailsModal, deleteUserFromList } from '../Action/Index';
import { Card, Button, CardBody, ButtonDiv, CenterLoaderSpan } from '../Styles/UsersStyles';
import { TailSpin } from 'react-loader-spinner'
import UserDetailsModal from './UserDetailsModal';
import { openIsUserDeleteModal } from '../Action/Index';
import IsDeleteUserModal from './IsDeleteUserModal';
import AddNewUserModal from './AddNewUserModal';


const Users = () => {
    const dispatch = useDispatch();
    const { usersList, usersLoader, isUserDetailsModalOpen, isUserDeleteModal,
        searchedUsersList, addNewUserModal } = useSelector((state) => state.UsersReducer)
    const [user, setUser] = useState()

    //console.log("searchedUsersList--", searchedUsersList)

    useEffect(async () => {


        dispatch(AllUserList());
    }, [])

    const viewDetails = (id) => {
        dispatch(openUserDetailsModal());
        //console.log("clicked ", id)
        const filterUser = usersList.filter((val) => {
            if (val.id === id) {
                return true
            }
        })
        setUser(filterUser)

        document.body.style.overflow = 'hidden';
    }

    const deleteUser = (id) => {
        dispatch(openIsUserDeleteModal(id))
        document.body.style.overflow = 'hidden';

    }

    if (usersLoader) {
        return (
            <CenterLoaderSpan>
                <TailSpin color="#00BFFF" height={150} width={150} />
            </CenterLoaderSpan>
        )
    }
    return (
        <>
            {isUserDetailsModalOpen === true ? <UserDetailsModal user={user} /> : null}
            {isUserDeleteModal === true ? <IsDeleteUserModal /> : null}
            {addNewUserModal === true ? <AddNewUserModal /> : null}
            {searchedUsersList.length !== 0 ?
                searchedUsersList.map((val) => {
                    return (
                        <Card key={val.id} >
                            <CardBody>
                                <h3>Id : {val.id}</h3>
                                <p>Name : {val.name}</p>
                                <p>email : {val.email}</p>
                            </CardBody>
                            <ButtonDiv>
                                <Button onClick={() => viewDetails(val.id)}>Details</Button>
                                <Button>Edit</Button>
                                <Button onClick={() => deleteUser(val.id)}>delete</Button>
                            </ButtonDiv>
                        </Card >
                    )
                })
                : <h1>No Data Found...</h1>
            }


        </>




    )
}

export default Users