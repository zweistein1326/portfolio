import Content from "@/components/Content/content.component";
import data from './workX.json';
import SectionHeading from "@/components/Content/section-heading.component";
import { Box, Typography } from "@mui/material";

const WorkX = () => {
    return (
        <Content>
            <SectionHeading>WorkX</SectionHeading>
            <Box style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%', flexWrap:'wrap', gap: 24}}>
                {data.map((item, index) => <WorkTile item={item} index={index} key={index}/>)}
            </Box>
        </Content>
    )
}

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