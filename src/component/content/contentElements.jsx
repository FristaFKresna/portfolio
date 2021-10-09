import styled from 'styled-components';
// import Poto from './../../image/FFK.png';
import Poto2 from './../../image/FFK_RB.png';


export const BackgroundHome = styled.div`
    height: 100vh;
    width: 100%;
    background: url(${Poto2}) no-repeat;
    background-size: contain;
    background-position: right;
    background-attachment: fixed;
    font-family: 'Ubuntu', sans-serif;
    background-color:#325B6F;
    box-shadow: -1px 0px 38px -5px rgba(0,0,0,1);

    @media screen and (max-width: 767px) {
      background:none;
      background-color:#325B6F;
      background-position: center;
      height:70vh;
    } 
  `

export const HomeText = styled.div` 
    font-family: 'Ubuntu', sans-serif;
    font-size:40px;
    font-weight:500;
    margin-top:40vh;
    margin-left:20vh;
    position:absolute;
    line-height:8vh;
    color:#FFF3EC;


    @media screen and (max-width: 767px) {
      font-family: 'Ubuntu', sans-serif;
      font-size:20px;
      font-weight:500;
      margin-top:55vh;
      margin-left:0vh;
      line-height:4vh;
      text-align:center;
      width:100%;
    }

`

export const ImageMobile = styled.div` 
    
    @media screen and (max-width: 767px) {
      margin-top:5vh;
      background: url(${Poto2}) no-repeat;
      border:100%;
      background-position: center;
      background-size: contain;
      width: 100%;
      height: 50vh;
      position:absolute;
    }

`


export const ButtonContent = styled.button`
  font-size:25px;
  padding:0px 20px;
  border-radius:5%;
  background-color: #669AB3;
  color:white;

  
  &:active {

  }

  &:hover {
    color:black;
  }


  @media screen and (max-width: 767px) {
  
  } 
`



//   Color 
//   #BB2326 
//   #FFF3EC 
//   #669AB3 
//   #325B6F