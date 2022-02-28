import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, ModalContent, ModalBody, ModalFooter } from '../Styles/IsDeleteUserModalStyle'
import { Button } from '../Styles/UsersStyles'
import { closeIsUserDeleteModal, deleteUserFromList } from '../Action/Index'


const IsDeleteUserModal = () => {
    const dispatch = useDispatch();
    const { usersList, idForDeleteUser } = useSelector((state) => state.UsersReducer);

    const closeModal = () => {
        dispatch(closeIsUserDeleteModal())
        document.body.style.overflow = 'unset';
    }

    const confirmDelete = () => {
        const afterDeleteUserList = usersList.filter((val) => {
            if (val.id === idForDeleteUser) {
                return false
            }
            return true
        })
        dispatch(deleteUserFromList(afterDeleteUserList));
        closeModal();

    }

    return (
        <Modal>
            <ModalContent>
                <ModalBody>
                    Are You Sure?
                </ModalBody>
                <ModalFooter>
                    <Button onClick={confirmDelete}>Yes</Button>
                    <Button onClick={closeModal}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default IsDeleteUserModal