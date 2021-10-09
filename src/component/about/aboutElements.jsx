import styled from 'styled-components';


export const BackgroundAbout = styled.div`
    justify-content:center;
    font-family: 'Ubuntu', sans-serif;
    padding:25px;
    box-shadow: -1px 0px 38px -5px rgba(0,0,0,1);
    
    @media screen and (max-width: 767px) {
      padding:0px
    } 
  `

export const HeaderAbout = styled.div`
  text-align:center;
  font-size:40px;
  font-weigth:500;
  font-family: 'Ubuntu', sans-serif;
  margin: 30px 0;
  color:#325B6F;
  

  @media screen and (max-width: 767px) {
    text-align:center;
    font-size:30px;
    font-weigth:500;
    font-family: 'Ubuntu', sans-serif;
    margin:0;
    padding-top:30px;
  } 
`

export const TextAbout = styled.div`
  width:100%;
  text-align:justify;
  font-size:20px;
  font-family: 'Ubuntu', sans-serif;
  margin: 30px 0px;
  padding: 20px 120px;
  line-height:4vh;
  

  @media screen and (max-width: 767px) {
    margin: 10px 0px;
    padding: 10px 20px;
    font-size:18px;
  } 
`

// export const ButtonAbout = styled.div`
//   cursor:pointer;
//   text-align:center;
//   padding:10px;
//   border-radius:4%;
//   color:white;
//   margin: 10px;
//   width:20vh;
//   height:50px;
//   background:#669AB3;
//   transition: 1s
  
  
//   &::active {
//     padding: 0;
//     margin: 0;
//     background:black;
//     opacity: 1;
//     transition: 0s
//   }

//   &:hover {
//     color:black;
//   }


//   @media screen and (max-width: 767px) {
  
//   } 
// `



// export const ButtonAbout2 = styled.button`
//   text-align:center;
//   border-radius:4%;
//   color:white;
//   width:20vh;
//   height:50px;
//   background:#669AB3;
  
//   &::active {
//     color:blue;
//     border:none;
//   }

//   &:hover {
//     color:black;
//   }


//   @media screen and (max-width: 767px) {
  
//   } 
// `

export const ButtonAbout = styled.button`  
padding: 5px 15px;
margin-left:44%;
margin-bottom:40px;
width:25vh;
height:7vh;
font-size: 22px;
font-weight:500;
text-align: center;
cursor: pointer;
outline: none;
color: black;
background-color: #669AB3;
border: none;
border-radius: 5%;
text-decoration:none;
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
    font-size: 18px;
    width:18vh;
    height:6vh;
    margin-left:5%;
  } 
`

// export const ButtonAbout3 = styled.button`
// padding: 15px 25px;
// font-size: 24px;
// text-align: center;
// cursor: pointer;
// outline: none;
// color: #fff;
// background-color: #04AA6D;
// border: none;
// border-radius: 15px;
// box-shadow: 0 5px #999;
  
  
//   &:active {
//     background-color: #3e8e41;
//   box-shadow: 0 2px #666;
//   transform: translateY(4px);
//   }

//   &:hover {
//     background-color: #3e8e41;
//   }


//   @media screen and (max-width: 767px) {
  
//   } 
// `



