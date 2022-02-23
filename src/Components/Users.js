import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllUserList } from '../Action/Index';


const Users = () => {
    const dispatch = useDispatch();
    const { usersList } = useSelector((state) => state.UsersReducer)
    console.log("usersList--", usersList)
    useEffect(async () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const result = await fetch(url);
        const data = await result.json();
        //console.log(data);
        dispatch(AllUserList(data));
    }, [])
    return (

        usersList.map((val) => {
            return (
                <div style={{ marginTop: "48px" }}>
                    <h3>Id:{val.id}</h3>
                    <h4>Name:{val.name}</h4>
                    <h5>email:{val.email}</h5>
                </div>
            )
        })


    )
}

export default Users