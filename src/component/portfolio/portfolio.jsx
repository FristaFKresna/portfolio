  import React, { useState } from 'react';
  import { PortFolioCardBackGround, HeaderPortfolio, ImagePorto, TextPorto, CardBackground } from './portfolioElements';
  // import Carousel from "react-multi-carousel";
  // import "react-multi-carousel/lib/styles.css";
  import porto1 from './../../image/porto1.png';
  import porto5 from './../../image/porto5.png';
  import porto9 from './../../image/porto9.png';
  import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ModalPorto from '../modalPorto';




  // const responsive = {
  //     superLargeDesktop: {
  //       // the naming can be any, depends on you.
  //       breakpoint: { max: 4000, min: 3000 },
  //       items: 5
  //     },
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 2
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 2
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1
  //     }
  //   };


    const thumb = [
      {
        id:1,
        img: porto1,
        desc:"TokoBuku - Final Project Purwadhika",
        desc2:`A full-stack ecommerce app that sell books from various authors and publishers.
        This is a group final project at Purwadhika Coding School, I build this app with 2 of my classmates in 10 days and presented it at the last day. I realize that this project is far from perfect, so I will learn and practice more in the further.
        `,
        tools:`React Native, MySql, NodeJS, ExpressJS, Redux`
      },
      {
        id:2,
        img: porto5,
        desc:"Web Admin Portal TokoBuku - Final Project Purwadhika",
        desc2:`Web Based Admin Portal for TokoBuku App, this is a part of final project at Purwadhika. it used to update book information, check and proceed the transaction.
        `,
        tools:`ReactJS, MySql, NodeJS, ExpressJS, Bootstrap`
      },
      {
        id:3,
        img: porto9,
        desc:"Web Dapoer IKE - On Proggress",
        desc2:`I try to help my friend to build a small bussiness website. The goals is to reach more customer for his bussiness and in further it can do the transaction to sell and deliver the product,
        it is still on development. 
        `,
        tools:'ReactJS'
      }
    ]

    const showPorto = (onClick) => {

      return thumb.map((val)=>{
        return(
            <PortFolioCardBackGround key={val.id}>
                <ImagePorto src={val.img} onClick={()=>{onClick([val.id, val.desc2, val.tools])}}/>
                <TextPorto>{val.desc}</TextPorto>
            </PortFolioCardBackGround>
        )
      })
      
    }

    const idImage = (id) =>{
      return id
    }


  const Portfolio = (props) => {
    const [modal, setModal] = useState(false);
    const [pict, setPict] = useState(null);
    

    const toggle = (val) => {setModal(!modal);setPict(idImage(val))};


      return (
          <div>
              <HeaderPortfolio>Portfolio</HeaderPortfolio>
                <CardBackground>
                  {/* <div style={{display:'flex', padding:"0 50px", justifyContent:'center', flexWrap:'wrap'}}> */}
                  {showPorto(toggle)}
                  {/* <Carousel responsive={responsive} centerMode={true} draggable={true} > */}
                      {/* <PortFolioCardBackGround>
                          <img src={porto1} onClick={toggle} style={{width:"100%",cursor:'pointer'}}/>
                          <div>Project akhir pwdk</div>
                          
                      </PortFolioCardBackGround>
                      <PortFolioCardBackGround>
                          <div>dapoer ike</div>
                          <div>on progress</div>
                      </PortFolioCardBackGround>
                      <PortFolioCardBackGround>
                          <div>dapoer ike</div>
                          <div>on progress</div>
                      </PortFolioCardBackGround> */}
                  {/* </Carousel> */}
                  {/* </div>     */}
                  </CardBackground>  
                  <ModalPorto modal={modal} pict={pict}/>
          </div>
      )
  }

  export default Portfolio;
