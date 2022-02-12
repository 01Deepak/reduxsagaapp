import React from 'react';
//import '../Styles/navbar.css'
import { Nav, LeftNav } from '../Styles/StyledNavbar';

const Navbar = () => {
    return (
        <Nav>
            <LeftNav>
                <ul>
                    <li><a href='#'>Crud Demo</a></li>
                    <li></li>

                </ul>
            </LeftNav>
            <div className='right_nav'>
                <ul>
                    <li><button>+</button></li>
                    <li></li>

                </ul>
            </div>
        </Nav>

    )
}

export default Navbar