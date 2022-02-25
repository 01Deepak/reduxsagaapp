import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllUserList } from '../Action/Index';
import { Card, Button, CardBody, ButtonDiv } from '../Styles/UsersStyles';


const Users = () => {
    const dispatch = useDispatch();
    const { usersList } = useSelector((state) => state.UsersReducer)
    console.log("usersList--", usersList)
    useEffect(async () => {
        // const url = "https://jsonplaceholder.typicode.com/users";
        // const result = await fetch(url);
        // const data = await result.json();
        //console.log(data);
        dispatch(AllUserList());
    }, [])
    return (

        usersList.map((val) => {
            return (

                <Card key={val.id}>
                    <CardBody>
                        <h3>Id : {val.id}</h3>
                        <p>Name : {val.name}</p>
                        <p>email : {val.email}</p>
                    </CardBody>
                    <ButtonDiv>
                        <Button>Details</Button>
                        <Button>Edit</Button>
                        <Button>delete</Button>
                    </ButtonDiv>

                </Card>

            )
        })


    )
}

export default Users