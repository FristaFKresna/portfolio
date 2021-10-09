import React from 'react';
import { BackgroundContact, HeaderContact, ContentWrapper, ContentContact, ImageContact, ImageText, LinkText } from './contactElements';
import whatsapp from './../../image/whatsapp.png';
import email from './../../image/gmail.png';
import linkedin from './../../image/linkedin.png';
import instagram from './../../image/instagram.png';


const Contact = (props) => {
    return (
        <BackgroundContact>
            <HeaderContact>Contact</HeaderContact>
            <ContentWrapper>
                <ContentContact>
                    <ImageContact src={email}/>
                    <ImageText><LinkText href="mailto:fristaf.kresna@gmail.com" target="_blank">fristaf.kresna@gmail.com</LinkText></ImageText>
                </ContentContact>
                <ContentContact>
                    <ImageContact src={whatsapp}/>
                    <ImageText><LinkText href="https://api.whatsapp.com/send?phone=6285624037214" target="_blank">+62856-2403-7214</LinkText></ImageText>
                </ContentContact>
                <ContentContact>
                    <ImageContact src={linkedin}/>
                    <ImageText><LinkText href="https://www.linkedin.com/in/frista-f-kresna/" target="_blank">https://www.linkedin.com/in/frista-f-kresna/</LinkText></ImageText>
                </ContentContact>
                <ContentContact>
                    <ImageContact src={instagram}/>
                    <ImageText><LinkText href="https://www.instagram.com/kresnafriciandi/" target="_blank">https://www.instagram.com/kresnafriciandi/</LinkText></ImageText>
                </ContentContact>
            </ContentWrapper>
        </BackgroundContact>
    )
}

export default Contact;
