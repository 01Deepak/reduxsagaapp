import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '../Styles/UserDetailsModalStyles'
import { Button } from '../Styles/UsersStyles';
import { closeUpdateUserModal } from '../Action/Index';

const UpdateModal = () => {

    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        id: '',
        title: '',
        firstName: '',
        lastName: '',
        picture: ''
    })




    const handleChange = (event) => {
        const { name, value } = event.target
        setInputs((values) => {
            return (
                {
                    ...values,
                    [name]: value
                }
            )
        })
    }


    const closeModal = () => {
        dispatch(closeUpdateUserModal())
        document.body.style.overflow = 'unset'
    }

    const submitNewUserFormData = (e) => {
        e.preventDefault()
        console.log(inputs)

        // alert("click")
    }
    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <h3>Update User</h3>
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={submitNewUserFormData}>
                        <div>
                            <label>ID : </label>
                            <input type="text" name="id"
                                value={inputs.id}
                                onChange={handleChange} />
                        </div>

                        <div>
                            <label>Title : </label>
                            <input type="text" name="title" placeholder='Enter title'
                                value={inputs.title}
                                onChange={handleChange} />
                        </div>

                        <div>
                            <label>First Name : </label>
                            <input type="text" name="firstName" placeholder='Enter First Name'
                                onChange={handleChange}
                                value={inputs.firstName} />
                        </div>

                        <div>
                            <label>Last Name : </label>
                            <input type="text" name="lastName" placeholder='Enter Lastname'
                                onChange={handleChange}
                                value={inputs.lastName} />
                        </div>

                        <div>
                            <label>Picture : </label>
                            <input type="text" name="picture" placeholder='Enter picture url'
                                onChange={handleChange}
                                value={inputs.picture} />
                        </div>
                        <ModalFooter>
                            <Button type='submit'>Save</Button>
                            <Button onClick={closeModal}>Cancel</Button>
                        </ModalFooter>

                    </form>

                </ModalBody>





            </ModalContent>
        </Modal>
    )
}

export default UpdateModal