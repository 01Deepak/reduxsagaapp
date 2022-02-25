import styled from "styled-components"

export const Card = styled.div`
// margin-top: 48px;
margin: 0.5rem 0.5rem;
    border: 2px solid;
    min-height: 14rem;
    min-width: 20rem;
    border-radius: 4px;
    background: #eeefff;
    color: #505050;
`
export const CardBody = styled.div`
min-height: 9rem;
margin: 1rem 0.4rem;
line-height: 2rem;
font-size: 1rem;
font-weight: 600;
`

export const ButtonDiv = styled.div`
display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
min-width: 6rem;
/* min-height: 1.3rem; */
padding: 2px;
margin: 0 0.4rem;
background: blue;
color: white;
border: 1px solid blue;
border-radius: 3px;
cursor:pointer;

&:hover {
    background: white;
    color:blue;
}
`

export const CardParentDiv = styled.div`
display: flex;
flex-wrap: wrap;
// border: 3px solid yellow;
box-sizing: border-box;
max-width: 66rem;
margin: 50px auto;
`