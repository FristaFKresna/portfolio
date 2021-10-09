import React, { useState }  from 'react';
import { ModalBackground, ModalCard, ButtonModal, ImgCard } from './modalPortoElements';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import foto from './../../image/porto1.png'
import foto1 from './../../image/porto2.png'
import foto2 from './../../image/porto3.png'
import foto3 from './../../image/porto4.png'
import foto4 from './../../image/porto5.png'
import foto5 from './../../image/porto6.png'
import foto6 from './../../image/porto7.png'
import foto7 from './../../image/porto8.png'
import foto8 from './../../image/porto9.png'
import foto9 from './../../image/porto10.png'
import foto10 from './../../image/porto11.png'
import foto11 from './../../image/porto12.png'



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ModalPict = [
    {
      id:1,
      img: foto
    },
    {
      id:1,
      img: foto1
    },
    {
      id:1,
      img: foto2
    },
    {
      id:2,
      img: foto4
    },
    {
      id:2,
      img: foto3
    },
    {
      id:2,
      img: foto7
    },
    {
      id:2,
      img: foto6
    },
    {
      id:2,
      img: foto5
    },
    {
      id:3,
      img: foto8
    },
    {
      id:3,
      img: foto9
    },
    {
      id:3,
      img: foto10
    },
    {
      id:3,
      img: foto11
    },
    

  ]

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group" style={{justifyContent:'center', display:'flex'}}>
        <ButtonModal className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>prev</ButtonModal>
        <ButtonModal onClick={() => next()} >next</ButtonModal>
      </div>
    );
  };


  const modalImage = (param) => {
    var filterPict =  ModalPict.filter((val)=>{
      return val.id === param[0]
    })

    return filterPict.map((val,index)=>{
      return <ImgCard key={index} src={val.img}></ImgCard>
    })
  }

  const modalText = (param) => {
    return(
      <div>
        <br/>
        <div>{param[2]}</div>
        <br/>
        <div>{param[1]}</div>
      </div>
     
    )
  }

const ModalPorto = (props) => {
    const [modal, setModal] = useState(true);

    const tutup = () => setModal(!modal);

    const tapAnywhere = () => {
      var content = document.getElementById('modal')

      window.onclick = function(event){
        if(event.target === content){
          setModal(!modal)
        }
      }
    }

    return(
      props.modal === modal ?
            <ModalBackground id="modal" onClick={tapAnywhere}>
                <ModalCard modal={modal}>
                <div onClick={tutup} style={{position:'absolute', top:'5px', right:'15px', fontSize:'20px', cursor:'pointer', fontWeight:'800'}}>X</div>
                    <Carousel responsive={responsive} arrows={false} infinite={true} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
                        {modalImage(props.pict)}
                    </Carousel>
                    {/* <button onClick={tutup}>Tutup</button> */}
                        {modalText(props.pict)}
                </ModalCard>
            </ModalBackground>
            :
            <div></div>
    )

}

export default ModalPorto