import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllUserList, openUserDetailsModal, deleteUserFromList, openInfiniteLoder, openUserLoader, trueBottom, initiateUserDetails } from '../Action/Index';
import { Card, Button, CardBody, ButtonDiv, CenterLoaderSpan, UsersImageContainer, CenterImageContainer } from '../Styles/UsersStyles';
import { TailSpin } from 'react-loader-spinner'
import UserDetailsModal from './UserDetailsModal';
import { openIsUserDeleteModal } from '../Action/Index';
import IsDeleteUserModal from './IsDeleteUserModal';
import AddNewUserModal from './AddNewUserModal';
// import ErrorPage from './ErrorPage';


const Users = () => {
    let root = document.documentElement;
    const dispatch = useDispatch();
    const { usersList, usersLoader, isUserDetailsModalOpen, isUserDeleteModal,
        searchedUsersList, addNewUserModal, infiniteLoader,
        totalData, totalLimit, pageNumber, bottom, isError, userDetailsLoader } = useSelector((state) => state.UsersReducer)
    const [user, setUser] = useState()
    const prevY = useRef(0);
    const [targetElement, setTargetElement] = useState(null);
    const redRef = useRef(null);

    // let [page, setPage] = useState(0)
    //const [bottom, setBottom] = useState(false)
    const [page, setPage] = useState(0)
    const [someState, setSomeState] = useState("Deepak")
    // console.log("isUserDetailsModalOpen--", isUserDetailsModalOpen)



    //console.log("PageNumber--", pageNumber)
    //console.log("----searchedUsersList.length--", searchedUsersList.length)
    //console.log("PageNumber--", pageNumber)

    useEffect(async () => {
        dispatch(openUserLoader())
        dispatch(AllUserList(page))
    }, [])

    useEffect(() => {
        // console.log("bottom--", bottom)
        // console.log("pageNumber--", pageNumber)
        // console.log("----searchedUsersList.length--", searchedUsersList.length)
        // console.log("----totalData--", totalData)
        if (bottom && (searchedUsersList.length !== totalData)) {
            // setPage(page + 1)
            dispatch(openInfiniteLoder())
            dispatch(AllUserList(pageNumber))
        }

    }, [bottom])

    const options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: "0px",
        threshold: 0,
        delay: 100,
        trackVisibility: true
    };


    const handleObserver = (entities, observer) => {
        // console.log('1111111 -', entities)
        // console.log('2222222 -', observer)

        const y = entities[0].boundingClientRect.y;
        // console.log('111', entities[0].isVisible)
        // console.log("pageNumber--in--", pageNumber)
        if (entities[0].isVisible) {
            dispatch(trueBottom())
            // dispatch(openInfiniteLoder())
            //dispatch(AllUserList(pageNumber))
        }
        // prevY.current = y;
    };
    const observer = useRef(new IntersectionObserver(handleObserver, options));



    useEffect(() => {
        //  console.log("5555", redRef)
        if (redRef.current) {
            // console.log(redRef)
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
            {/* {isError === true ? <ErrorPage /> : null} */}
            {searchedUsersList !== undefined ?
                searchedUsersList.map((val, length) => {
                    // console.log("length", length)
                    // console.log("val.length", val.length)
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
                                <Button>Edit</Button>
                                <Button onClick={() => deleteUser(val.id)}>delete</Button>
                            </ButtonDiv>
                        </Card >


                    )
                }


                )
                //((root.scrollTop + root.clientHeight) === root.scrollHeight) ? console.log("end") : null
                : <h1>No Data Found...</h1>
            }

            {/* {infiniteLoader === true ?
                <h1>Loading...</h1>
                : <div ref={redRef} style={{ width: '300px', background: 'red', height: '300px' }}></div>
            } */}
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