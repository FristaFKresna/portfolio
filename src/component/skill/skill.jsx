import React from 'react';
import react from './../../image/react.png';
import bootstrap from './../../image/bootsrap.png';
import html from './../../image/html.png';
import css from './../../image/css.png';
import nodejs from './../../image/nodejs.png';
import javascript from './../../image/javascript.png';
import sql from './../../image/sql.png';
import { BackgroundSkill, HeaderSkill, ImageSkill, ImageSkillBackground } from './skillElements';


const SkillContent = (props) => {
    return (
        <BackgroundSkill>
            {/* <HeaderSkill>My skills include, but are not limited to</HeaderSkill> */}
            <HeaderSkill>My Skills</HeaderSkill>
            <ImageSkillBackground>
                <ImageSkill src={html}/>
                <ImageSkill src={css}/>
                <ImageSkill src={javascript}/>
                <ImageSkill src={bootstrap}/>
            </ImageSkillBackground>
            <ImageSkillBackground>
                <ImageSkill src={react}/>
                <ImageSkill src={nodejs}/>
                <ImageSkill src={sql}/>
            </ImageSkillBackground>
        </BackgroundSkill>
        
            

        
    )
}

export default SkillContent;
