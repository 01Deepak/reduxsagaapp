import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllUserList, openUserDetailsModal, deleteUserFromList, openInfiniteLoder, openUserLoader, trueBottom, initiateUserDetails, openAddNewUserModal, openUpdateUserModal } from '../Action/Index';
import { Card, Button, CardBody, ButtonDiv, CenterLoaderSpan, UsersImageContainer, CenterImageContainer } from '../Styles/UsersStyles';
import { TailSpin } from 'react-loader-spinner'
import UserDetailsModal from './UserDetailsModal';
import { openIsUserDeleteModal } from '../Action/Index';
import IsDeleteUserModal from './IsDeleteUserModal';
import AddNewUserModal from './AddNewUserModal';
import UpdateModal from './UpdateModal';



const Users = () => {
    let root = document.documentElement;
    const dispatch = useDispatch();
    const { usersList, usersLoader, isUserDetailsModalOpen, isUserDeleteModal,
        searchedUsersList, addNewUserModal, infiniteLoader,
        totalData, totalLimit, pageNumber, bottom, isError, userDetailsLoader, inputForSearch, updateUserModal } = useSelector((state) => state.UsersReducer)
    const [user, setUser] = useState()
    const prevY = useRef(0);
    const [targetElement, setTargetElement] = useState(null);
    const redRef = useRef(null);


    const [page, setPage] = useState(0)
    const [someState, setSomeState] = useState("Deepak")
    console.log("usersList --", usersList)
    console.log("searchedUsersList --", searchedUsersList)

    useEffect(async () => {
        dispatch(openUserLoader())
        dispatch(AllUserList(page))
    }, [])

    useEffect(() => {

        if (bottom && (searchedUsersList.length !== totalData)) {

            if (inputForSearch === '') {
                dispatch(openInfiniteLoder())
                dispatch(AllUserList(pageNumber))
            }

        }

    }, [bottom, inputForSearch])

    const options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: "0px",
        threshold: 0,
        delay: 100,
        trackVisibility: true
    };


    const handleObserver = (entities, observer) => {


        const y = entities[0].boundingClientRect.y;

        if (entities[0].isVisible) {
            dispatch(trueBottom())

        }

    };
    const observer = useRef(new IntersectionObserver(handleObserver, options));



    useEffect(() => {

        if (redRef.current) {

            observer.current.observe(redRef.current);
        }
    }, [redRef.current]);

    const viewDetails = (id) => {
        dispatch(openUserDetailsModal());

        dispatch(initiateUserDetails(id))


        document.body.style.overflow = 'hidden';
    }

    const deleteUser = (id) => {
        dispatch(openIsUserDeleteModal(id))
        document.body.style.overflow = 'hidden';
    }

    const editUser = (val) => {
        dispatch(openUpdateUserModal(val))
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
            {isUserDetailsModalOpen === true ? <UserDetailsModal /> : null}

            {isUserDeleteModal === true ? <IsDeleteUserModal /> : null}
            {addNewUserModal === true ? <AddNewUserModal /> : null}
            {updateUserModal === true ? <UpdateModal /> : null}
            {searchedUsersList !== undefined ?
                searchedUsersList.map((val, length) => {

                    return (
                        <Card key={val.id}>
                            <CardBody>
                                <UsersImageContainer>
                                    <CenterImageContainer>
                                        <img src={val.picture} alt='img' />
                                    </CenterImageContainer>

                                </UsersImageContainer>
                                <h3>Id : {val.id}</h3>
                                <p>Name : {val.title} {val.firstName} {val.lastName}</p>

                            </CardBody>
                            <ButtonDiv>
                                <Button onClick={() => viewDetails(val.id)}>{userDetailsLoader === val.id ? 'Loading...' : 'Details'}</Button>
                                <Button onClick={() => editUser(val)}>Edit</Button>
                                <Button onClick={() => deleteUser(val.id)}>delete</Button>
                            </ButtonDiv>
                        </Card >


                    )
                }


                )

                : <h1>No Data Found...</h1>
            }


            {infiniteLoader === true ?
                <CenterLoaderSpan>
                    <TailSpin color="#00BFFF" height={50} width={50} />
                </CenterLoaderSpan>

                : null
            }
            <div id='scrollArea' ref={redRef} style={{ width: '5px', background: 'white', height: '5px' }}></div>
        </>
    )
}

export default Users