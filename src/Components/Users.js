import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllUserList, openUserDetailsModal, deleteUserFromList, openInfiniteLoder, openUserLoader } from '../Action/Index';
import { Card, Button, CardBody, ButtonDiv, CenterLoaderSpan } from '../Styles/UsersStyles';
import { TailSpin } from 'react-loader-spinner'
import UserDetailsModal from './UserDetailsModal';
import { openIsUserDeleteModal } from '../Action/Index';
import IsDeleteUserModal from './IsDeleteUserModal';
import AddNewUserModal from './AddNewUserModal';


const Users = () => {
    let root = document.documentElement;
    const dispatch = useDispatch();
    const { usersList, usersLoader, isUserDetailsModalOpen, isUserDeleteModal,
        searchedUsersList, addNewUserModal, infiniteLoader } = useSelector((state) => state.UsersReducer)
    const [user, setUser] = useState()
    const prevY = useRef(0);
    const [targetElement, setTargetElement] = useState(null);
    const redRef = useRef(null);

    let [page, setPage] = useState(0)

    // console.log("usersList.data--", usersList.data)
    // console.log("searchedUsersList.data--", searchedUsersList.data)
    // console.log("usersLoader--", usersLoader)
    // console.log("infiniteLoader---", infiniteLoader)
    useEffect(async () => {
        dispatch(openUserLoader())
        dispatch(AllUserList(page))
    }, [])

    const options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: "0px",
        threshold: 0,
        delay: 100,
        trackVisibility: true
    };

    const handleObserver = (entities, observer) => {
        console.log('1111111 -', entities)
        console.log('2222222 -', observer)

        const y = entities[0].boundingClientRect.y;
        console.log('111', entities[0].isVisible)

        if (entities[0].isVisible) {
            dispatch(openInfiniteLoder())
            console.log("page--", page)
            console.log("pagetype--", typeof (page))
            setPage(page++)
            console.log("page+1 --", page)
            console.log("page --", page)
            dispatch(AllUserList(page))

        }

        // prevY.current = y;
    };
    const observer = useRef(new IntersectionObserver(handleObserver, options));



    useEffect(() => {
        console.log("5555", redRef)
        if (redRef.current) {
            console.log(redRef)
            observer.current.observe(redRef.current);
        }
    }, [redRef.current]);

    const viewDetails = (id) => {
        dispatch(openUserDetailsModal());
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
            {searchedUsersList !== undefined ?
                searchedUsersList.map((val) => {
                    return (
                        <Card key={val.id}>
                            <CardBody>
                                <h3>Id : {val.id}</h3>
                                <p>Name : {val.title} {val.firstName} {val.lastName}</p>

                            </CardBody>
                            <ButtonDiv>
                                <Button onClick={() => viewDetails(val.id)}>Details</Button>
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
                <h1>Loading...</h1>
                : null
            }
            <div id='scrollArea' ref={redRef} style={{ width: '300px', background: 'red', height: '50px' }}></div>
        </>
    )
}

export default Users