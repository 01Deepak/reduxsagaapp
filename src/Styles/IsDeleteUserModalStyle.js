import styled from "styled-components";

export const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.5);
display: flex;
justify-content: center;
align-items: center;
// border: 2px solid red;
`
export const ModalContent = styled.div`
// border: 2px solid green;
background: white;
border-radius: 5px;
     padding: 1rem;
`
export const ModalBody = styled.div`
font-size: 2.1rem;
font-weight: 700;
color: red;
padding: 1rem 3rem;
// border: 2px solid black;
`
export const ModalFooter = styled.div`
text-align: end;
// border: 2px solid blue;
`