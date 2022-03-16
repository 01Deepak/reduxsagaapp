import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clolseUserDetailsModal, openLoaderInModal } from '../Action/Index'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '../Styles/UserDetailsModalStyles'
import { Card, Button, CardBody, ButtonDiv, CenterLoaderSpan, UsersImageContainer, CenterImageContainer } from '../Styles/UsersStyles';
import { TailSpin } from 'react-loader-spinner'


const UserDetailsModal = (props) => {

    const dispatch = useDispatch();
    const { userDetailsById, userDetailsLoader } = useSelector((state) => state.UsersReducer)
    const { id, firstName, title, lastName, picture, dateOfBirth, email, gender, phone, registerDate, updatedDate, location } = userDetailsById



    const closeModal = () => {
        dispatch(clolseUserDetailsModal())
        document.body.style.overflow = 'unset'
    }

    return (
        <>



            <Modal>
                <ModalContent>
                    <ModalHeader>

                    </ModalHeader>
                    <ModalBody>
                        <Card>
                            {
                                userDetailsLoader !== null
                                    ?
                                    <div style={{ display: "flex" }}>
                                        <CenterLoaderSpan>
                                            <TailSpin color="#00BFFF" height={224} width={50} />
                                        </CenterLoaderSpan>
                                    </div>
                                    :
                                    <CardBody>
                                        <UsersImageContainer>
                                            <CenterImageContainer>
                                                <img src={picture} alt='img' />
                                            </CenterImageContainer>

                                        </UsersImageContainer>
                                        <div>
                                            <h3>Id : {id}</h3>
                                            <p>Name : {title} {firstName} {lastName}</p>
                                            <p> dateOfBirth: {dateOfBirth}</p>
                                            <p> email: {email}</p>
                                            <p> gender: {gender}</p>
                                            <p> phone: {phone}</p>
                                            <p> registerDate: {registerDate}</p>
                                            <p> updatedDate: {updatedDate}</p>
                                            <p> dateOfBirth: {dateOfBirth}</p>
                                            <p> location:{location.street} ,{location.city} ,{location.state} ,{location.country} </p>
                                        </div>




                                    </CardBody>
                            }


                        </Card >


                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={closeModal}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </>
    )

}


export default UserDetailsModal