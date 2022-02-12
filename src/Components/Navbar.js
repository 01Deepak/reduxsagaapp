import React from 'react';
import '../Styles/navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='left_nav'>
                <ul>
                    <li><a href='#'>Crud Demo</a></li>
                    <li></li>

                </ul>
            </div>
            <div className='right_nav'>
                <ul>
                    <li><button>+</button></li>
                    <li></li>

                </ul>
            </div>
        </div>

    )
}

export default Navbar