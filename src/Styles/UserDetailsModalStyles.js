import styled from "styled-components";

export const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.5);
`
export const ModalContent = styled.div`
background-color: white;
padding: 1rem;
border-radius: 5px;
`
export const ModalHeader = styled.div`
color: white;
text-align: center;
background: blue;
border-radius: 3px;
`
export const ModalBody = styled.div`
line-height: 2rem;
font-size: 1.1rem;
color: #666666;
font-weight: 500;
`
export const ModalFooter = styled.div`
text-align: end;
`


