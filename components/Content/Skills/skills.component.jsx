import Content from "@/components/Content/content.component"
import SectionHeading from "@/components/Content/section-heading.component";
import { Box, Grid, Typography, styled } from "@mui/material";
import data from './skills.json';
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Skills = () => {
    return (
        <Content id={"SKILLSET"} maxWidth={'100%'}>
            <SectionHeading>Skills</SectionHeading>
            <Box style={{width:'100%', borderTop: '1px solid #FFF'}}>
                {Object.keys(data).map((key) => <SkillBox skills={data[key]} title={key} key={key}/>)}
            </Box>
        </Content>
    )
}

const SkillBox = ({title, skills, key}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <SkillContainer isActive={isActive}>
            <Box style={{width:'100%', maxWidth:'960px', padding:'20px 0'}}>
                <Box style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottom: isActive ? '3px solid #171717' : '', paddingTop:'8px', paddingBottom: isActive ? '20px' : '8px', cursor:'pointer'}} onClick={()=>{setIsActive(!isActive)}}>
                    <Typography variant="h1" style={{color: isActive? '#000' : '#FFF'}}>{title}</Typography>
                    {!isActive ? <ExpandMoreIcon style={{fontSize: 32}}/> : <ExpandMoreIcon style={{transform:'rotate(180deg)', fontSize: 32, color:'#000'}}/>}
                </Box>
                {isActive && <Box style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'flex-start'}}>
                    {skills.map((skill, index) => <SkillTile key={index} skill={skill}/>)}
                </Box>}
            </Box>
        </SkillContainer>
    )
}

const SkillTile = ({skill}) => {

    const bgColor = (()=>{
        const r = Math.floor(Math.random() * 10);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return '#171717';
        return `rgba(${2}, ${g}, ${b})`
    })();

    return (
        <Box style={{margin: '32px 32px 0 0px', padding: '16px 20px', backgroundColor: bgColor, borderRadius: 40}}>
            <Typography variant="p" style={{color:'#FFF', fontWeight: 600}}>
                {skill.title}
            </Typography>
        </Box>
    )
}

const SkillContainer = styled(Box)((props) => ({
    backgroundColor: props.isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255,255,255,0.1)',
    display:'flex', 
    flexDirection:'column',
    alignItems:'center', 
    justifyContent:'center',
    borderBottom: '1px solid #FFF',
    transition: '0.4s ease-in-out'
}));

export default Skills;