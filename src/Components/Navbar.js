import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import '../Styles/navbar.css'
import { Nav, LeftNav, RightNav, Input } from '../Styles/StyledNavbar';
import { afterSerchUsersList, openAddNewUserModal, updateSearchInput } from '../Action/Index'

const Navbar = () => {
    // const [inputSearch, setInputSearch] = useState('');
    const dispatch = useDispatch();
    const { usersList, inputForSearch } = useSelector((state) => state.UsersReducer)
    // console.log("usersList--", usersList)
    const onchangeSearch = (event) => {
        // setInputSearch(event.target.value)

        dispatch(updateSearchInput(event.target.value))


    }
    useEffect(() => {
        console.log("---", inputForSearch)
        search(inputForSearch)
    }, [inputForSearch])


    const search = (input) => {

        const searchedUserList = usersList.filter((val) => {
            const { title, firstName, lastName, id } = val
            const fullName = title + firstName + lastName
            // console.log(fullName)
            // console.log(input)

            if (fullName.toLowerCase().includes(input.toLowerCase()) || id.toLowerCase().includes(input.toLowerCase())) {
                return true;
            }
            return false;
        })

        dispatch(afterSerchUsersList(searchedUserList))
    }


    const openModal = () => {
        dispatch(openAddNewUserModal())
        document.body.style.overflow = 'hidden';
    }

    return (
        <Nav>
            <LeftNav>
                <ul>
                    <li><a href='#'>Crud Demo</a></li>
                    <li></li>

                </ul>
            </LeftNav>
            <RightNav>
                <ul>
                    <li>
                        <Input type="text"
                            placeholder="Search"
                            onChange={onchangeSearch}
                            value={inputForSearch}
                        />
                    </li>
                    <li><button onClick={openModal}>+</button></li>

                </ul>
            </RightNav>
        </Nav>

    )
}

export default Navbar