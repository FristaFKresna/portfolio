import styled from 'styled-components';


export const CardBackground = styled.div`
    display:flex;
    padding:0 50px;
    justify-content:center;
    flex-wrap:wrap;
    
    @media screen and (max-width: 767px) {
    padding:0 0px;
    } 
  `


export const PortFolioCardBackGround = styled.div`
    justify-content:center;
    font-family: 'Ubuntu', sans-serif;
    width:50vh;
    height:40vh;
    margin:20px;
    background-color:#669AB3;
    box-shadow: -1px 1px 8px -2px rgba(0,0,0,0.75);
    transition: 0.3s;

    :hover {
        box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.75);
        
    }
    
    @media screen and (max-width: 767px) {
      margin:20px;
    } 
  `


  export const HeaderPortfolio = styled.div`
  text-align:center;
  font-size:40px;
  font-weigth:500;
  font-family: 'Ubuntu', sans-serif;
  margin: 50px 0;
  color:#325B6F;
  

  @media screen and (max-width: 767px) {
    text-align:center;
    font-size:30px;
    font-weigth:500;
    font-family: 'Ubuntu', sans-serif;
    margin: 10px 0;
  } 
`

export const ImagePorto = styled.img`
  width:100%;
  height:32vh;
  cursor:pointer;

  @media screen and (max-width: 767px) {
    
  } 
`

export const TextPorto = styled.div`
  font-weight:700;
  padding:0px 20px;
  color:#FFF3EC;
  text-align:center;
  margin-top:5px;
  text-shadow: 0px 2px 4px rgba(0,0,0,0.70);

  @media screen and (max-width: 767px) {
    
  } 
`



 // #BB2326 
//   #FFF3EC 
//   #669AB3 
//   #325B6F