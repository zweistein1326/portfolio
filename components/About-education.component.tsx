import { Grid } from "@mui/material";
import SectionTitle from "./SectionTitle";
import Styled from './styles';

interface Props {
    education: any;
}

const Education = ({education}: Props) => {
    return (
        <Styled.InnerContainer>
            <SectionTitle title={"EDUCATION"}/>
            <Grid container style={{display:'flex', flexDirection:'row', alignItems:'center', width:'100%'}}>
                <Grid item xs={12} sm={5} style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                    <img src={`/${education.logo}.jpeg`} style={{height:'150px', width:'150px', borderRadius:100, marginRight:40, objectFit:'contain'}}/>
                </Grid>
                <Grid xs={12} sm={7}>
                    <div style={{}}>
                        <p style={{fontSize:20, lineHeight:1.4}}>{education.university} ({education.start_year} - {education.end_year})</p>
                        <p style={{fontSize:20, lineHeight:1.4}}>{education.degree}</p>
                        <p style={{fontSize:20, lineHeight:1.4}}>{education.subject}</p>
                        {/* <p style={{fontSize:20, lineHeight:1.4}}>CGPA: {education.cgpa}/{education.max_cgpa}</p> */}
                    </div>
                </Grid>
            </Grid>
        </Styled.InnerContainer>
    )
}

export default Education;