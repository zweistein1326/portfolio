import Grid from "@mui/system/Unstable_Grid/Grid";
import SectionTitle from "./SectionTitle";
import Styled from './styles'
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { useState } from "react";
import { Slide } from "@mui/material";

const Projects = () => {
    const projects = [{
        title:'Algol',
        start:{month:'July',year:'2021'},
        end:{month: 'April', year:'2022'},
        description:'Algol is a blockchain based credential generation and verification solution. It allows an authorized party(governments, universities) to create credentials(passports, degrees) and share them with a user. A user can use this credential to verify their identity the validity of which can be checked on the blockchain.',
        image: 'algol.png',
        logo: 'algol.png'
    },{
        title:'Playground',
        start:{month:'July',year:'2021'},
        end:{month: 'November', year:'2021'},
        description:'Playground is a NFT wallet where users can connect their multiple blockchain accounts and import all their NFTs in one place.',
        image: 'playground.png',
        logo: 'hku-logo.jpeg'
    },{
        title:'PayPhone',
        start:{month:'July',year:'2020'},
        end:{month: 'August', year:'2021'},
        description:'PayPhone is a cardless, touchless payments solution which used facial recognition solutions to facilitate transactions in convenience stores such as 7/11 and Wellcome in Hong Kong.',
        image: 'payphone-logo.png',
        logo: 'payphone-logo.png'
    },{
        title:'Personifi',
        start:{month:'November',year:'2019'},
        end:{month: 'January', year:'2020'},
        description:'Personifi is a personal finance management solution.',
        image:'personifi.png',
        logo: 'personifi.png'
    },
    {
        title: 'Hollo, Hong Kong', 
        start:{month:'November', year:'2021'}, 
        end:{month:'April', year:'2022'}, 
        description: 'Hollo is a startup that is building a platform for the healthcare industry. My role as a freelance developer was to build a proof of concept web-application using React Native and Firebase for the company.',
        designation:'Freelance app developer',
        logo:'hollo-logo.jpeg', 
    }];
    return (
        <Grid container spacing={4}>
            {projects.map((project, i)=> <ProjectTile key={i} project={project} index={i}/>)}
        </Grid>
    )
}

const ProjectTile = ({project}: any) => {
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    return (
        <Grid xs={12} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between', gap: 8, width:'100%'}}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', gap: 8, width:'100%'}}>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap: 8}}>
                    <img src={`/${project.logo}`} style={{height:60, width:60, borderRadius:60}}/>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <p style={{color:'#444', fontStyle:'italic'}}>{project.title}</p>
                        <p>{project.designation}</p>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', height:'100%', justifyContent:'center'}}>
                    {/* <p style={{paddingRight: 8}}>{project.start.month} {project.start.year} - {work.end.month} {work.end.year}</p> */}
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', cursor:'pointer'}} onClick={() => {setIsDescriptionVisible(!isDescriptionVisible)}}>
                        {!isDescriptionVisible ? <p>Read more </p> : <p>Read less </p>}
                        {!isDescriptionVisible ? <ArrowDropDown /> : <ArrowDropUp />}
                    </div>
                </div>
            </div>
            <div style={{ overflow:'hidden' }}>
                    <div style={{display: isDescriptionVisible ? 'block' : 'none', transition:'all 0.4s ease-in-out', paddingLeft:68}}>
                        <Slide in={isDescriptionVisible} direction="down" timeout={500}>
                                <p style={{paddingRight: 8}}>{project.description}</p>
                        </Slide>
                    </div>
            </div>
        </Grid>
    )
}

export default Projects;