import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Education from "./About-education.component";
import Contact from "./About-contact.component";
import SectionTitle from "./SectionTitle";
import Styled from './styles';
import Description from "./About-description.component";
import AboutTab from "./About-tab.component";
import { useState } from "react";

const About = () => {
    const contacts = [{logo:<LinkedIn fontSize='large'/>, url:'https://www.linkedin.com/in/siddharthagarwal2608/'},
    {logo:<GitHub fontSize='large'/>, url:'https://github.com/zweistein1326'},
    {logo:<Email fontSize='large'/>, url:'mailto:sid.agarwal45@gmail.com'}];
    const education = {
        logo:'hku-logo',
        university: 'University of Hong Kong',
        start_year:'2018',
        end_year:'2022',
        degree:'Bachelor of Engineering',
        subject:'Computer Science Engineering',
        cgpa:'3.4',
        max_cgpa:'4.3'
    };
    const [category, setCategory] = useState<'professional' | 'personal'>('professional');
    return (
        <Styled.Container style={{paddingBottom:140}}>
            <AboutTab setCategory={setCategory} category={category}/>
            <Description category={category}/>
        </Styled.Container>
    )
}

export default About;