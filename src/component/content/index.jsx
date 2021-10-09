import React from 'react';
// import Poto from './../../image/FFK.png';
import { BackgroundHome, HomeText, ImageMobile } from './contentElements';
import Typewriter from 'typewriter-effect';



const ContentWeb = (props) => {
    return (
        <BackgroundHome>
            <ImageMobile/>
            <HomeText>
            <Typewriter
                options={{
                    strings: ("HELLO MY NAME IS FRISTA F KRESNA<br/>I'M A FULLSTACK DEVELOPER"),
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                    pauseFor:'2000',
                    delay:'100'
                    
                    
                }}
                />
                <br/>
                {/* <Button color="primary" size="lg">Contact Me</Button> */}
                {/* <ButtonContent>Contact Me</ButtonContent> */}
            </HomeText>
            {/* <div style={{marginTop:'40vh', position:'absolute', marginLeft:'30vh'}}>
                <h1>HELLO MY NAME IS FRISTA F KRESNA</h1>
                <h1>I'M A FULLSTACK DEVELOPER</h1>
            </div> */}
        </BackgroundHome>
    )
}

export default ContentWeb;
