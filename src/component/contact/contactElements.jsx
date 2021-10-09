import styled from 'styled-components';


export const BackgroundContact = styled.div`
    font-family: 'Ubuntu', sans-serif;
    background-color:#325B6F;
    margin-top:100px;
    padding: 50px 0;
    box-shadow: -1px 0px 38px -5px rgba(0,0,0,1);

    
    
    @media screen and (max-width: 767px) {
      padding: 20px 0;
    } 
  `


  export const HeaderContact = styled.div`
  text-align:center;
  font-size:40px;
  font-weigth:500;
  font-family: 'Ubuntu', sans-serif;
  color:#FFF3EC;
  

  @media screen and (max-width: 767px) {
    text-align:center;
    font-size:30px;
    font-weigth:500;
    font-family: 'Ubuntu', sans-serif;
    margin: 10px 0;
  } 
`

export const ContentWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:20px 0;

@media screen and (max-width: 767px) {
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    margin:0;
} 
`

export const ContentContact = styled.div`
    width:55vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    height:20vh;
    margin: 0 70px;

    @media screen and (max-width: 767px) {
        width:100%;
        height:13vh;
        margin: 0;
        padding: 10px;
        flex-direction:row;
        flex-wrap:wrap;
    } 
  `


export const ImageContact = styled.img`
    width:8vh;

  @media screen and (max-width: 767px) {
    width:6vh;
    
  } 
`

export const ImageText = styled.div`
    margin-top:10px;
    font-size:20px;
    color:#FFF3EC;
    text-shadow: 3px 1px 10px rgba(0,0,0,1);

  @media screen and (max-width: 767px) {
    font-size:15px;
    margin-left:10px;
  } 
`

export const LinkText = styled.a`
    text-decoration: none;
    cursor:pointer;
    color:#FFF3EC;

    &:hover {
      color:#FFF3EC;
      text-shadow: 3px 5px 15px rgba(0,0,0,1);
    }

  @media screen and (max-width: 767px) {
    
  } 
`