import styled from "styled-components";

export const Nav = styled.div`
background-color: blue;
display: flex;
justify-content: space-between;
align-items: center;
height: 3rem;
font-size: 1.5rem;
padding: 0 1rem;
position: fixed;
top:0;
width: 100vw;

& ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    & li{
        padding: 0 0.1rem;

        & a:link{
            text-decoration: none;
            color: white;
        }
    }
}

& button{
    width: 3rem;
    height: 3rem;
    font-size: 1.9rem;
    font-weight: 900;
    background: red;
    color: white;
    /* border: 1px solid red; */
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        background: white;
        color: red;
    }
}
`

export const LeftNav = styled.div`
font-weight: 700;
`

export const RightNav = styled.div`
max-width: 15rem;
`
export const Input = styled.input`
padding: 0.4em;
    border: 1px solid blue;
    border-radius: 16px;
`