import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '../Styles/UserDetailsModalStyles'
import { Button } from '../Styles/UsersStyles'
import { closeAddNewUserModal } from '../Action/Index'

const AddNewUserModal = () => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(closeAddNewUserModal())
        document.body.style.overflow = 'usset';
    }

    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <h3>Add New User</h3>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <label>ID : </label>
                        <input type="text" name="id" />
                    </div>

                    <div>
                        <label>Name : </label>
                        <input type="text" name="name" placeholder='Enter Name' />
                    </div>

                    <div>
                        <label>User Name : </label>
                        <input type="text" name="username" placeholder='Enter User Name' />
                    </div>

                    <div>
                        <label>Phone : </label>
                        <input type="text" name="phone" placeholder='Enter Phone' />
                    </div>

                    <div>
                        <label>Email : </label>
                        <input type="email" name="email" placeholder='Enter Email' />
                    </div>

                    <div>
                        <label>Address : </label>
                        <input type="text" name="street" placeholder='street' />
                        <input type="text" name="city" placeholder='city' />
                        <input type="text" name="zipcode" placeholder='zip code' />
                    </div>

                    <div>
                        <label>Company : </label>
                        <input type="text" name="company" placeholder='Enter Company Name' />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button>Save</Button>
                    <Button onClick={closeModal}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AddNewUserModal