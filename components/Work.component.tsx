import Grid from "@mui/system/Unstable_Grid/Grid";
import SectionTitle from "./SectionTitle";
import Styled from './styles';
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { useState } from "react";
import { Slide } from "@mui/material";

const Work = () => {
    const works = [
        {
            logo:'parallelchain-logo', 
            title: 'ParallelChain Lab, Hong Kong', 
            start:{month:'March', year:'2022'}, 
            end:{month:'April', year:'2023'}, 
            designation:'Staff Engineer',
            description: 'ParallelChain is a blockchain company that is building a decentralized transactions system. As a staff engineer I was mostly working with JavaScript related frameworks and technologies, such as NextJS and NodeJS. My responsibilities included developing the frontend of the ParallelChain explorer, which is built on top of the NextJS framework. I also worked on the client-libraries, which are written in TypeScript and built on top of the NodeJS framework.'
        },
        {
            logo:'roju-logo', 
            title: 'Roju Limited, Hong Kong', 
            start:{month:'May', year:'2021'},
            end:{month:'Nonvember', year:'2021'}, 
            designation:'Full-stack application developer',
            description: 'Roju is a startup that is building a platform for the sports industry. I worked on the frontend of the platform, which is built with the help of ReactJS and React-native frameworks. I also worked on the backend, which is built on top of the Java(Spring) and AWS frameworks.'
        },
        {
            logo:'fca-logo', 
            title: 'First Code Academy, Hong Kong', 
            start:{month:'June', year:'2019'}, 
            end:{month:'August', year:'2019'}, 
            designation:'STEM/Coding instructor',
            description: 'First Code Academy is a coding school that teaches children how to code. I taught children how to code using the Scratch programming language. I also taught them how to create reponsive websites using HTML, CSS and Vanilla JavaScript. My responsibilities also included teaching children how to create games using Unity, and creating Arduino projects using the Arduino IDE.'
        },
    ];
    return (
        <Grid container spacing={4}>
            {works.map((work, i)=><WorkTile key={i} work={work} index={i}/>)}
        </Grid>
    )
}

const WorkTile = ({work}: any) => {

    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    return (
        <Grid xs={12} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between', gap: 8, width:'100%'}}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', gap: 8, width:'100%', background:'#FFF'}}>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap: 8, width:'100%'}}>
                    <img src={`/${work.logo}.jpeg`} style={{height:60, width:60, borderRadius:60}}/>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <p>{work.designation}</p>
                        <p style={{color:'#444', fontStyle:'italic'}}>{work.title}</p>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', width:'100%'}}>
                    <p style={{paddingRight: 8}}>{work.start.month} {work.start.year} - {work.end.month} {work.end.year}</p>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', cursor:'pointer'}} onClick={() => {setIsDescriptionVisible(!isDescriptionVisible)}}>
                        {!isDescriptionVisible ? <p>Read more </p> : <p>Read less </p>}
                        {!isDescriptionVisible ? <ArrowDropDown /> : <ArrowDropUp />}
                    </div>
                </div>
            </div>
            <div style={{ overflow:'hidden' }}>
                    <div style={{display: isDescriptionVisible ? 'block' : 'none', transition:'all 0.4s ease-in-out', paddingLeft:68}}>
                        <Slide in={isDescriptionVisible} direction="down" timeout={500}>
                                <p style={{paddingRight: 8}}>{work.description}</p>
                        </Slide>
                    </div>
            </div>
        </Grid>
    )
}

export default Work;