import React from 'react';
import { BackgroundAbout, ButtonAbout, HeaderAbout, TextAbout } from './aboutElements';
import CV from './../../image/FristaFKresna.pdf'


const AboutContent = (props) => {
    return (
        <BackgroundAbout>
            <HeaderAbout>About Me</HeaderAbout>
            <TextAbout> 
                Hey there. My name is Frista Friciandi Kresna and I’m currently working in Jakarta as programmer.
                Actually I don't have an educational background in the field of information technology, but I'm interested in web and mobile development because I see the growth in field of digital, technology, and web environment in the future have a good prospect. 
                So I've learn <b>Full Stack Web Development</b> at Purwadhika Digital Technology School in 2020. 
                What I have learned there is <b>HTML</b>, <b>CSS</b>, <b>JavaScript Fundamental</b>, 
                <b>React JS</b> & <b>React Native</b>, <b>Node JS</b>, <b>MySQL & MogoDB</b>, and not limited to that I'm keep learning and practicing. 
                If you interest please kindly to see my cv and don't hesitate to contact me.
                <br></br>
            </TextAbout>
            {/* <div style={{top:'50%', right:'50%', marginLeft:'45%'}}> */}
            <a href={CV} download="CV_FristaFKresna"><ButtonAbout>See My CV</ButtonAbout></a>
            {/* </div> */}
        </BackgroundAbout>
    )
}

export default AboutContent;
