import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllUserList, openUserDetailsModal, deleteUserFromList } from '../Action/Index';
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
        searchedUsersList, addNewUserModal } = useSelector((state) => state.UsersReducer)
    const [user, setUser] = useState()
    const prevY = useRef(0);
    const [targetElement, setTargetElement] = useState(null);

    console.log("usersList.data--", usersList.data)
    console.log("searchedUsersList.data--", searchedUsersList.data)
    console.log("usersLoader--", usersLoader)
    useEffect(async () => {


        dispatch(AllUserList());
    }, [])


    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    };

    const handleObserver = (entities, observer) => {
        const y = entities[0].boundingClientRect.y;

        if (prevY.current > y) {
            alert("you have reached end...")
        }

        prevY.current = y;
    };
    const observer = useRef(new IntersectionObserver(handleObserver, options));

    useEffect(() => {
        if (targetElement) {
            observer.current.observe(targetElement);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetElement]);

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
            {searchedUsersList.data !== undefined ?
                searchedUsersList.data.map((val) => {
                    return (
                        <Card key={val.id}
                            ref={setTargetElement}
                        >
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
                })
                //((root.scrollTop + root.clientHeight) === root.scrollHeight) ? console.log("end") : null
                : <h1>No Data Found...</h1>
            }
            {/* {
                console.log("root", root) ||
                    console.log("root.scrollTop", root.scrollTop) ||
                    console.log("root.clientHeight", root.clientHeight) ||
                    console.log("root.scrollHeight", root.scrollHeight) ||
                    searchedUsersList.data ?
                    window.addEventListener("scroll", event => {

                        if ((root.scrollTop + root.clientHeight) === root.scrollHeight) {
                            alert("end");
                            console.log("root.scrollTop----", root.scrollTop)
                        }
                    })
                    ||
                    console.log("1")
                    : null

            } */}



        </>




    )
}

export default Users