import Content from "@/components/Content/content.component";
import data from './projects.json';
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import SectionHeading from "@/components/Content/section-heading.component";

const Projects = () => {
    return (
        <Content minHeight='90vh'>
            <SectionHeading>Notable Works</SectionHeading>
            <Grid container>
                {Object.values(data).map((proj, index) => {
                    return (
                        <ProjectTile project={proj} key={index} index={index}/>
                    )
                })}
            </Grid>
        </Content>
    )
}

const ProjectTile = ({project, index}: any) => {
    return (
        <Grid item xs={12} sm={6} md={4} style={{display:'flex', flexDirection:'column', padding:'12px', borderRadius: 20, overflow:'hidden', position:'relative'}}>
            <Box style={{height: '100%', display:'flex', flexDirection:'column', borderRadius: 20, backgroundColor:'#FFF', overflow:'hidden', position:'relative'}}>
                <Box style={{height:320, width:'100%', position:'relative'}}>
                    <Image src={project.image_uri} fill={true} alt={project.title}/>
                </Box>
                <Box style={{padding: "20px", display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <ProjectStatus status={project.status}/>
                    <Typography variant="h3" style={{fontWeight:'bold', textDecoration:'underline'}}><a href={project.url}>{project.title}</a></Typography>
                    {/* @ts-ignore */}
                    <Typography variant="p" style={{color:'#000', textAlign:'center'}}>{project.description}</Typography>
                </Box>
            </Box>
            {/* <Typography variant="h2">{project.languages}</Typography> */}
        </Grid>
    )
}

const ProjectStatus = ({status}: any) => {

    const bgColor = (() => {
        switch(status) {
            case 'In Progress':
                return '#FFD300';
            case 'Finished':
                return '#0F0';
            default:
                return '#FFF';
        }
    })();
    return (
        <Box style={{backgroundColor: bgColor, padding:'4px', textAlign:'center', fontWeight:'bold', width: '80px', borderRadius: 100, position:'absolute', top: 12, right: 12, zIndex:999999}}>
            {/* @ts-ignore */}
            <Typography variant="p" style={{color:'#000', fontSize: 12}}>{status}</Typography>
        </Box>
    )
}
export default Projects;