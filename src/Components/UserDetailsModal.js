import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clolseUserDetailsModal } from '../Action/Index'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '../Styles/UserDetailsModalStyles'
import { Button } from '../Styles/UsersStyles'


const UserDetailsModal = (props) => {

    const dispatch = useDispatch();
    const userDetails = props.user[0];

    const clolseModal = () => {
        dispatch(clolseUserDetailsModal())
        document.body.style.overflow = 'unset'
    }

    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <h3>User Details</h3>
                </ModalHeader>
                <ModalBody>
                    <p>ID : {userDetails.id}</p>
                    <p>Name : {userDetails.name}</p>
                    <p>User Name : {userDetails.username}</p>
                    <p>Phone : {userDetails.phone}</p>
                    <p>Email : {userDetails.email}</p>
                    <p>Address : {userDetails.address.street + " , " + userDetails.address.city + " , " + userDetails.address.zipcode}</p>
                    <p>Company Name : {userDetails.company.name}</p>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={clolseModal}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default UserDetailsModal