import styled from 'styled-components';


export const BackgroundSkill = styled.div`
    justify-content:center;
    font-family: 'Ubuntu', sans-serif;
    padding:25px;
    background-color:#325B6F;
    box-shadow: -1px 0px 38px -5px rgba(0,0,0,1);

    
    
    @media screen and (max-width: 767px) {
      padding:20px
    } 
  `

export const HeaderSkill = styled.div`
  text-align:center;
  font-size:40px;
  font-weigth:500;
  font-family: 'Ubuntu', sans-serif;
  margin: 30px 0;
  color:#FFF3EC;
  

  @media screen and (max-width: 767px) {
    text-align:center;
    font-size:30px;
    font-weigth:500;
    font-family: 'Ubuntu', sans-serif;
    margin: 10px 0;
  } 
`

export const ImageSkillBackground = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin:50px 0;

    @media screen and (max-width: 767px) {
        display:flex;
        flex-wrap:wrap;
        direction:column;
        margin:0;
    } 
  `

  export const ImageSkill = styled.img`
    width:23vh;
    height:20vh;
    margin: 0 20px;

    @media screen and (max-width: 767px) {
        width:15vh;
        height:13vh;
        margin: 0;
    } 
  `