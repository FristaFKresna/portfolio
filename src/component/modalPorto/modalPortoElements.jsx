import styled, { keyframes, css } from 'styled-components';


export const ModalBackground = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top:0%;
    padding:2em;
    background:rgba(0, 0, 0, 0.8);
    z-index:1;
    animation: 1s ease-out;
    transition: opacity 600ms, visibility 600ms;

    @media screen and (max-width: 767px) {
      padding:0;
      position: fixed;
    } 

`


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const animationIn = props =>
  css`
    100ms ${fadeIn} ease-in;
  `

const animationOut = props =>
  css`
    300ms ${fadeOut} ease-out;
  `

export const ModalCard = styled.div`
    width: 100vh;
    height: 90vh;
    position: relative;
    top:50%;
    left:50%;
    padding:2em;
    background:white;
    transform:translate(-50%, -50%);
    animation:${props => props.modal = true ? animationIn : animationOut };
    overflow:auto;

    @media screen and (max-width: 767px) {
      width: 100%;
      height: 100%;
    } 
`

export const ButtonModal = styled.button`
padding: 5px 15px;
margin: 5px 5px;
font-size: 15px;
text-align: center;
cursor: pointer;
outline: none;
color: white;
background-color: #669AB3;
border: none;
border-radius: 3%;
box-shadow: 0 2px #999;
  
  
  &:active {
    background-color: #325B6F;
    box-shadow: 0 1px #666;
    transform: translateY(2px);
  }

  &:hover {
    color:white;
    background-color: #325B6F;
  }


  @media screen and (max-width: 767px) {
  
  } 
`

export const ImgCard = styled.img`
    height: 55vh;
    width: 100%;

    @media screen and (max-width: 767px) {
      height: 40vh;
    width: 100%;

    } 

`