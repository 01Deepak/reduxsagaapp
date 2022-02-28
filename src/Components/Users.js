import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllUserList, openUserDetailsModal, deleteUserFromList } from '../Action/Index';
import { Card, Button, CardBody, ButtonDiv, CenterLoaderSpan } from '../Styles/UsersStyles';
import { TailSpin } from 'react-loader-spinner'
import UserDetailsModal from './UserDetailsModal';


const Users = () => {
    const dispatch = useDispatch();
    const { usersList, usersLoader, isUserDetailsModalOpen } = useSelector((state) => state.UsersReducer)
    const [user, setUser] = useState()

    console.log("usersList--", usersList)
    console.log("state.UsersReducer--", usersLoader)
    console.log("isUserDetailsModalOpen--", isUserDetailsModalOpen)
    useEffect(async () => {
        // const url = "https://jsonplaceholder.typicode.com/users";
        // const result = await fetch(url);
        // const data = await result.json();
        //console.log(data);

        dispatch(AllUserList());
    }, [])

    const viewDetails = (id) => {
        dispatch(openUserDetailsModal());
        console.log("clicked ", id)
        const filterUser = usersList.filter((val) => {
            if (val.id === id) {
                return true
            }
        })
        setUser(filterUser)

        document.body.style.overflow = 'hidden';
    }

    const deleteUser = (id) => {
        const afterDeleteUserList = usersList.filter((val) => {
            if (val.id === id) {
                return false
            }
            return true
        })
        dispatch(deleteUserFromList(afterDeleteUserList));
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
            {usersList.map((val) => {
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
            })}
        </>




    )
}

export default Users