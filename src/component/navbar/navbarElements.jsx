import styled from 'styled-components';

export const NavContainer = styled.nav`
    ${props => props.sticky === 'sticky' ?
    `padding: 20px 20px;
    background: #669AB3;
    height:10vh;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    z-index:1;

    @media screen and (max-width: 767px) {
        padding:0;
      } 
    `
    :

    `position: fixed;
    top: 0;
    left: 0;
    height:10vh;
    width: 100%;
    padding: 20px 20px;
    transition: all 0.4s ease;
    
    @media screen and (max-width: 767px) {
        z-index:1;
        padding:0;
      } `}
`
// 4070f4
export const NavContent = styled.div`
    height: 100%;
    max-width: 1200px;
    padding:27px 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
    padding : 10px;
    }
`


export const NavLogo = styled.div`
    font-weight: 500;
    font-size: 35px;
    color: ${props => props.sticky === 'sticky' ? `#fff` :`#4070f4`};
    cursor: pointer;
    transition: all 0.3s ease;
`


export const NavLink = styled.ul`
    display: flex;
`


export const NavLinkContent = styled.li`
    list-style: none;
    margin: 0 10px;
    color: ${props => props.sticky === 'sticky' ? `#fff` : `#fff`};
    font-size: 20px;
    font-weight: 500;
    padding: 10px 10px;
    transition: all 0.4s ease;

    &:hover {
        color: ${props => props.sticky === 'sticky' ?`#325B6F`:`#4070f4`};
      }

    @media screen and (max-width: 767px) {
        
    } 
     
`


export const NavMobileMenu = styled.section`
    list-style: none;
    margin: 0 8px;
    color: ${props => props.sticky === 'sticky' ? `#fff` : `#0E2431`};
    font-size: 18px;
    font-weight: 500;
    padding: 10px 4px;
    transition: all 0.4s ease;
    
`

// export const NavMobileMenuWrapper = styled.div`
//     display:${props => props.open === true ? `block` : `none`};
//     -webkit-transition: opacity 600ms, visibility 600ms;
//     transition: opacity 600ms, visibility 600ms;
    
    
// `
// const pulse = keyframes`
// from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `

// const animation = props =>
//   css`
//     ${pulse} ${props.animationLength} 5s fade-out;
//   `

// const fadein = keyframes`
//  from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const fadeout = keyframes`
//  from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//   }
// `;

export const NavMobileMenuWrapper = styled.div`
    ${props => props.open === true ?
         `height: auto; 
         opacity: 1;
         transition: height 0ms 0ms, opacity 900ms 0ms;
        

         @media screen and (max-width: 767px) {
             background:#669AB3;
        } 
      
         ` 
         
         : 
         `
         overflow: hidden;  
         height: 0;
         opacity: 0;
         transition: height 0ms 700ms, opacity 500ms 0ms;

         
         `
        }
    
`

export const NavMobileHamburger = styled.span`
    display: block;
    width: 30px;
    height: 4px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
    
`







