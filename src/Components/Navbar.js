import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import '../Styles/navbar.css'
import { Nav, LeftNav, RightNav, Input } from '../Styles/StyledNavbar';
import { afterSerchUsersList, openAddNewUserModal } from '../Action/Index'

const Navbar = () => {
    const [inputSearch, setInputSearch] = useState('');
    const dispatch = useDispatch();
    const { usersList } = useSelector((state) => state.UsersReducer)
    //console.log("usersList--", usersList)
    const onchangeSearch = (event) => {
        setInputSearch(event.target.value)
        search(event.target.value)
    }

    const search = (input) => {
        const afterSearchUserList = usersList.filter((val) => {
            if (val.name.toLowerCase().includes(input.toLowerCase()) || val.email.toLowerCase().includes(input.toLowerCase())) {
                return true;
            }
            return false;
        })
        console.log("afterSearchUserList--", afterSearchUserList)
        dispatch(afterSerchUsersList(afterSearchUserList))
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
                            value={inputSearch}
                        />
                    </li>
                    <li><button onClick={openModal}>+</button></li>

                </ul>
            </RightNav>
        </Nav>

    )
}

export default Navbar