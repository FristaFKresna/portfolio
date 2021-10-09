import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavContainer, NavContent, NavLink, NavLogo, NavLinkContent, NavMobileMenu, NavMobileHamburger, NavMobileMenuWrapper } from './navbarElements';
import { Link } from 'react-scroll';

const NavigationBar = (props) => {
    const [scrollTop, setscrollTop] = useState(null)
    const [windowsWidth, setwindowsWidth] = useState(1000)
    const [isOpen, setisOpen] = useState(false)
    // let nav = document.querySelector("nav");
    // window.onscroll = function() {
    //   if(document.documentElement.scrollTop > 20){
    //     nav.classList.add("sticky");
    //   }else {
    //     nav.classList.remove("sticky");
    //   }
    // }
    useEffect(()=>{setwindowsWidth(window.innerWidth)},[])

    window.onscroll = function() {
        if(document.documentElement.scrollTop > 20){
        setscrollTop("sticky");
        }else {
        setscrollTop(null);
        }
    }

    window.onresize = function() {
        setwindowsWidth(window.innerWidth)
    }

    return (
        // <nav>
        //     <div class="nav-content">
        //     <div class="logo">
        //         <a href="#">CodingLab.</a>
        //     </div>
        //     <ul class="nav-links">
        //         <li><a href="#">Home</a></li>
        //         <li><a href="#">About</a></li>
        //         <li><a href="#">Skills</a></li>
        //         <li><a href="#">Services</a></li>
        //         <li><a href="#">Contact</a></li>
        //     </ul>
        //     </div>   
        // </nav>
        // scrollTop == "sticky" 
        windowsWidth > 767
        ? 
        <NavContainer sticky={scrollTop}>
            <NavContent>
                <NavLogo sticky={scrollTop}>
                    {/* <div>LOGO</div> */}
                </NavLogo>
                <NavLink>
                    <NavLinkContent sticky={scrollTop}>
                    <Link 
                      style={{cursor:'pointer'}}
                      to="home" 
                      smooth={true} 
                      duration={50} 
                      offset={-50}
                    >
                        Home
                    </Link>
                    </NavLinkContent>
                   
                    <NavLinkContent sticky={scrollTop}>
                    <Link 
                      style={{cursor:'pointer'}}
                      to="about" 
                      smooth={true} 
                      duration={50} 
                      offset={-50}
                    >
                        About
                    </Link>
                    </NavLinkContent>

                    <NavLinkContent sticky={scrollTop}>
                    <Link 
                      style={{cursor:'pointer'}}
                      to="skill" 
                      smooth={true} 
                      duration={50} 
                      offset={-50}
                    >
                        Skills
                    </Link>
                    </NavLinkContent>
                    <NavLinkContent sticky={scrollTop}>
                    <Link 
                      style={{cursor:'pointer'}}
                      to="portfolio" 
                      smooth={true} 
                      duration={50} 
                      offset={-100}
                    >
                        Portfolio
                    </Link>
                    </NavLinkContent>
                    <NavLinkContent sticky={scrollTop}>
                    <Link 
                      style={{cursor:'pointer'}}
                      to="contact" 
                      smooth={true} 
                      duration={50} 
                      offset={-50}
                    >
                        Contact
                    </Link>
                    </NavLinkContent>
                </NavLink>
            </NavContent>
        </NavContainer>
        :
        <NavContainer sticky={scrollTop}>
            <NavContent>
                <NavLogo sticky={scrollTop}>
                    {/* <div>LOGO</div> */}
                </NavLogo>
                    <div style={{display:'flex'}} onClick={()=>{setisOpen(!isOpen)}}>
                        <div>
                            <NavMobileHamburger/>
                            <NavMobileHamburger/>
                            <NavMobileHamburger/>
                        </div>
                    </div>
            </NavContent>
            <NavMobileMenuWrapper open={isOpen}>
                <NavMobileMenu sticky={scrollTop}>
                    <Link 
                      style={{cursor:'pointer'}}
                      to="home" 
                      smooth={true} 
                      duration={50} 
                      offset={-50}
                      onClick={()=>{setisOpen(false)}}
                    >
                        Home
                    </Link>
                </NavMobileMenu>

                <NavMobileMenu sticky={scrollTop}>
                    <Link 
                      style={{cursor:'pointer'}}
                      to="about" 
                      smooth={true} 
                      duration={50} 
                      offset={-50}
                      onClick={()=>{setisOpen(false)}}
                    >
                    About
                    </Link>
                </NavMobileMenu>

                <NavMobileMenu sticky={scrollTop}>
                    <Link 
                      style={{cursor:'pointer'}}
                      to="skill" 
                      smooth={true} 
                      duration={50} 
                      offset={-50}
                      onClick={()=>{setisOpen(false)}}
                    >
                    Skills
                    </Link>
                </NavMobileMenu>

                <NavMobileMenu sticky={scrollTop}>
                    <Link 
                      style={{cursor:'pointer'}}
                      to="portfolio" 
                      smooth={true} 
                      duration={50} 
                      offset={-80}
                      onClick={()=>{setisOpen(false)}}
                    >
                    Portfolio
                    </Link>
                </NavMobileMenu>

                <NavMobileMenu sticky={scrollTop}>
                    <Link 
                      style={{cursor:'pointer'}}
                      to="contact" 
                      smooth={true} 
                      duration={50} 
                      offset={-50}
                      onClick={()=>{setisOpen(false)}}
                    >
                    Contact
                    </Link>
                </NavMobileMenu>

            </NavMobileMenuWrapper>
        </NavContainer>
      
    );
  }
  
  export default NavigationBar;