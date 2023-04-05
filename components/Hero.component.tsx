import { Typography } from '@mui/material';
import Styled from './styles';
import { useState } from 'react';
import About from './About.component';
import Work from './Work.component';
import Projects from './Projects.component';
import { Brush, Hardware, Person } from '@mui/icons-material';

const Hero = () => {
    const tabs = [
        {title: 'About', component: <About/>, icon: <Person />}, 
        {title: 'Work Experience', component: <Work/>, icon:<Hardware />}, 
        {title: 'Projects', component: <Projects/>, icon: <Brush />}
    ];
    const [tab, selectTab] = useState(0);
    return (
        <Styled.Container hero={true} style={{backgroundImage:'url("/background.png")', flexDirection:'row', padding: 0, marginTop:'10vh'}}>
            <Styled.Column style={{position:'relative', zIndex:99, width:'25vw', minWidth:'300px', minHeight:'100%', backgroundColor:'#FFF'}}>
                {tabs.map((t, index) => (
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end', padding:'20px 0', background: tab == index ? 'linear-gradient(90deg, #13A288 6.77%, #021B1D 100%)' : '#FFF', borderRight: tab == index ? '4px solid #000' : '',  cursor:'pointer', color: tab==index ? '#FFF' : '#000'}} key={t.title} id={t.title} onClick={()=>{selectTab(index)}}>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end', gap: 12, paddingRight: 24}}>
                            <p>{t.title}</p>
                            {t.icon}
                        </div>
                    </div>
                ))}
            </Styled.Column>
            <Styled.Column style={{position:'relative', zIndex:99, width:'75vw', minWidth:'300px', minHeight:'100%', backgroundColor:'#FFF', padding:'20px',  boxShadow: 'inset 0px 0px 4px rgba(0, 0, 0, 0.5)'}}>
                {tabs[tab].component}
            </Styled.Column>
            {/* <p style={{position:'absolute', bottom: '5%', left:'50%', fontSize:20}}>Scroll down v</p> */}
        </Styled.Container>
    )
}

export default Hero;