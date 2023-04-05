import { Fade, Grid, Slide, styled, Typography } from "@mui/material";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Styled from './styles';
import {tags, skills} from '../CONSTANTS';

interface TileProps {
    item: any;
    index: number;
}

const DescriptionTile = ({item, index}: TileProps) => {
    const [hover, setHover] = useState(false);
    return (
        <Grid key={index} xs={12} sm={6} md={4} style={{position:'relative', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
            <img src={item.image} style={{width:'300px', height:'300px', objectFit:'cover', zIndex:0, borderRadius:12}} onMouseEnter={()=>{setHover(true)}}/>
            <Slide style={{borderRadius:12}} direction="down" appear={hover} in={hover} timeout={400} onMouseLeave={()=>{setHover(false)}}>
                <div style={{position:'absolute', top:0, zIndex:9999, width:'300px', height:'300px', background:'rgba(0,0,0,0.6)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'0 12px'}}>
                    <p style={{color:'#FFF', textAlign:'center', fontSize:20, marginBottom:12}}>{item.description}</p>
                    <p style={{color:'#FFF', textAlign:'center', fontSize:16, marginBottom:12}}>{item.location}</p>
                </div>
            </Slide>
        </Grid>
    )
}

interface SubDescProps { 
    description: any;
}

const PersonalDescription = ({description}: SubDescProps) => {
    return (
        <Styled.InnerContainer style={{marginTop:12, marginLeft: 16, paddingRight:24}} id='about'>
            {/* <SectionTitle title={"ABOUT-ME"}/> */}
            <ul>
                {description.description.map((d:string, index:number)=><li key={index} style={{textAlign:'left'}}>
                    <Typography variant="body1" style={{fontSize:16}}>
                        {d}
                    </Typography></li>
                )}
            </ul>
            <Grid container spacing={0} style={{marginTop:40}}>
                {description.items.map((item, index)=> <DescriptionTile item={item} index={index} key={index}/>)}
            </Grid>
        </Styled.InnerContainer>
    )
}

const ProfessionalDescriptionTile = ({item, index}: TileProps) => {
    const [hover, setHover] = useState(false);
    return (
        <Grid key={index} xs={12} sm={6} md={6} style={{position:'relative', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', overflow:'hidden', marginBottom:40}}>
            <img src={item.image} style={{width:'80%', height:'300px', objectFit:'cover', zIndex:0, borderRadius:12}} onMouseEnter={()=>{setHover(true)}}/>
            <Slide style={{borderRadius:12}} direction="down" appear={hover} in={hover} timeout={400} onMouseLeave={()=>{setHover(false)}}>
                <div style={{position:'absolute', top:0, zIndex:9999, width:'80%', height:'300px', background:'rgba(0,0,0,0.6)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'0 12px'}}>
                    <p style={{color:'#FFF', textAlign:'center', fontSize:20, marginBottom:12, fontWeight:'bold'}}>{item.title}</p>
                    <p style={{color:'#FFF', textAlign:'center', fontSize:16, marginBottom:12}}>{item.description}</p>
                    <a href={item.url} target="_blank">
                        <CTAButton>
                            View
                        </CTAButton>
                    </a>
                </div>
            </Slide>
        </Grid>
    )
}

const ProfessionalDescription = ({description}: SubDescProps) => {
    return (
        <Styled.InnerContainer style={{marginTop:12, marginLeft: 16}} id='about'>
            {/* <SectionTitle title={"ABOUT-ME"}/> */}
            <ul>
                {description.description.map((d:string, index:number)=> <li key={index}>
                    <Typography variant="body1" style={{fontSize:16}}>{d}
                    </Typography>
                </li>)}
            </ul>
            {/* <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:40}}>
                <Typography variant='h3' style={{textAlign:'left', marginTop:"40px"}}>Past Projects</Typography>
                <Grid container spacing={0} style={{marginTop:40}}>
                    {description.items.map((item:any, index:number)=> <ProfessionalDescriptionTile item={item} index={index} key={index}/>)}
                </Grid>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:40}}>
                <Typography variant='h3'>
                    Skills
                </Typography>
                <Row style={{alignItems:'center', position:'relative', zIndex:98, flexWrap:'wrap', margin:'20px 0 40px 0'}}>
                    {skills.map((skill:string, index:number)=><p style={{margin:'8px', boxShadow:'0px 0px 4px rgba(0,0,0,0.4)', borderRadius:20, padding:'8px 16px'}} key={index}>{skill}</p>)}
                </Row>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:40}}>
                <Typography variant='h3'>
                    Interests
                </Typography>
                <Row style={{alignItems:'center', position:'relative', zIndex:98, flexWrap:'wrap', marginTop:20}}>
                    {tags.map((tag:string, index:number)=><p style={{margin:'8px', boxShadow:'0px 0px 4px rgba(0,0,0,0.4)', borderRadius:20, padding:'8px 16px'}} key={index}>#{tag}</p>)}
                </Row>
            </div> */}
        </Styled.InnerContainer>
    )
}

interface DescProps {
    category: string;
}

const Description = ({category}: DescProps) => {
    const personalDescription = {
        description: [
            'Sid loves playing sports and knows how to play tennis, basketball, football, skate hockey, long-distance running, volleyball, squash, table-tennis and tons of other sports.', 
            'Fun-fact, he is also really good at bar games like pool and table-soccer',
            'I enjoy travelling to new countries as it gives me an opportunity to know other cultures and showcase my own.',
            'One of Sid\'s favorite pass times is building things. He keeps coming up with new ideas and tries to bring them to reality.',
            'In his free time Sid likes to venture out into the woods and hike along the beautiful terrain of Hong Kong.',
            'I believe that by helping the less fortunate we are also helping ourselves. This is why I volunteer with Books For All, India to help educate lesser priveliged children than myself.',
        ],
        items:[{description:'After runnning a half-marathon personal best at the New Delhi marathon', location:'Delhi, India', url:'', year:'2023', image:'aboutme-1.jpeg'},
        {description:'Organizing a beach clean up in Hong Kong with Fridays for Future', url:'', year:'2022', location:'Hong Kong', image:'aboutme-2.jpeg'},
        {description:'Winning Cyberport\'s enterpreneurship grant', year:'2021', location:'Hong Kong', image:'aboutme-3.jpeg'},
    ]};
    const professionalDescription = {
        description: [
            'I graduated from the University of Hong Kong with a Bachelor\'s degree in Computer Science Engineering.',
            'I have published multiple npm libraries including pchain-types-js and pchain-client-js.',
            'I launched a financial-technology startup in 2019 with my friends in which I was responsible for developing the technology, hiring engineers and fund-raising.',
            'I love creating user experiences using technology and my mission is to create the most user friendly products.',
            'I enjoy dabbling in AI and Robotics.'
        ],
        items:[
        {
            image:'algol.png',
            title:'Algol', 
            description: 'Algol is a blockchain based credential generation and verification solution. It allows an authorized party(governments, universities) to create credentials(passports, degrees) and share them with a user. A user can use this credential to verify their identity the validity of which can be checked on the blockchain.', 
            url:''
        },
        {
            image:'playground.png',
            title:'Playground', 
            description:'Playground is a NFT wallet where users can connect their multiple blockchain accounts and import all their NFTs in one place.',
            url:''
        },
        {
            image:'payphone-logo.png',
            title:'PayPhone', 
            description:'PayPhone is a cardless, touchless payments solution which used facial recognition solutions to facilitate transactions in convenience stores such as 7/11 and Wellcome in Hong Kong.',
            url:'', 
        },
        {
            image:'personifi.png',
            title:'Personifi', 
            description:'Personifi is a personal finance management solution.',
            url:''
        }
    ]};
    return (
        category == 'personal' ? <PersonalDescription description={personalDescription}/> : <ProfessionalDescription description={professionalDescription}/>
    )
}

const CTAButton = styled('button')({
    marginRight: '24px',
    minWidth: '160px',
    minHeight: '40px',
    background: '#F3B521',
    fontSize: '16px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderWidth: '0px',
    borderRadius: '40px',
    cursor:'pointer',
    transition: '0.4s all ease-in-out',
    '&:hover':{
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.50)',
        transition: '0.4s all ease-in-out'
    }
})

const Row = styled('div')({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
})

export default Description;