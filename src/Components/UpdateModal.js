import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '../Styles/UserDetailsModalStyles'
import { Button } from '../Styles/UsersStyles';
import { closeUpdateUserModal,editUser } from '../Action/Index';

const UpdateModal = () => {

    const dispatch = useDispatch();
    const {dataForUpdateUser,searchedUsersList} = useSelector((state) => state.UsersReducer)
    //console.log("dataforupdateuser---",dataForUpdateUser)

    const [inputs, setInputs] = useState({
        id: dataForUpdateUser.id,
        title: dataForUpdateUser.title,
        firstName: dataForUpdateUser.firstName,
        lastName: dataForUpdateUser.lastName,
        picture: dataForUpdateUser.picture
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

    const updateUser = (e) => {
        e.preventDefault()
        console.log("inputs-----------",inputs)
dispatch(editUser(inputs))
        // alert("click")
    }
    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <h3>Update User</h3>
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={updateUser}>
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
                            <Button type='submit'>update</Button>
                            <Button onClick={closeModal}>Cancel</Button>
                        </ModalFooter>

                    </form>

                </ModalBody>





            </ModalContent>
        </Modal>
    )
}

export default UpdateModal