import Content from "@/components/Content/content.component";
import data from './workX.json';
import SectionHeading from "@/components/Content/section-heading.component";
import { Box, Typography, styled } from "@mui/material";

const WorkX = () => {
    return (
        <Content>
            <SectionHeading>
                WorkX
            </SectionHeading>
            <Box style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%', flexWrap:'wrap', gap: 24}}>
                {data.map((item, index) => <WorkTile item={item} index={index} key={index}/>)}
            </Box>
            <ResumeButton />
        </Content>
    )
}

const ResumeButton = () => {
    return (
        <ButtonContainer>
            <Typography variant="h4" style={{fontSize: 16, fontWeight:'normal', textTransform:'capitalize', WebkitTextStrokeWidth: 0}}><a href="https://drive.google.com/file/d/1DvQCx2WE7tmXvyC11Jk9Oh7LmTiKafcd/view?usp=share_link" target="_blank">View Resume</a></Typography>
        </ButtonContainer>
    )
}

const ButtonContainer = styled(Box)((props: any) => ({
    padding:'12px 20px', 
    borderRadius: 20, 
    border:'3px solid #FFF', 
    marginTop: 40,
    color: '#FFF',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '> *': {
        color: '#FFF',
        transition: 'all 0.2s ease-in-out',
    },
    '&:hover': {
        backgroundColor: '#FFF',
    },
    '&:hover > *': {
        color: '#000',
    }
}))

const WorkTile = ({item, index}: any) => {
    return (
        <Box style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minWidth:'320px', flex: 1}}>
            <Typography variant="h2" style={{color:'#FFF', textAlign:'center', fontWeight:'bold', textDecoration:'underline'}}><a href={item.url} target="_blank">{item.company}</a></Typography>
            <Typography variant="h3" style={{color:'#FFF', textAlign:'center'}}>{item.title}</Typography>
            <Typography variant="h3" style={{color:'#FFF', textAlign:'center'}}>{item['start-date']} - {item['end-date']}</Typography>
        </Box>
    )
}

export default WorkX;