import { Typography } from '@mui/material';
import Styled from './styles';

const Hero = () => {
    const values = ['THINK', 'EXPLORE', 'BUILD', 'INNOVATE']
    return (
        <Styled.Container hero={true} style={{backgroundImage:'url("/background.png")'}}>
            <div style={{maxWidth:'45vw', minHeight:'36vh', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Typography variant='h2' style={{fontSize:60, lineHeight:1.2, zIndex:99, fontWeight:500, letterSpacing:4, marginBottom:12}}>Namaste 🙏 </Typography>
                <Typography variant='h2' style={{fontSize:60, lineHeight:1.2, zIndex:99, fontWeight:500, letterSpacing:4, marginBottom:12}}>Welcome 👋  </Typography>
                <Typography variant='h2' style={{fontSize:60, lineHeight:1.2, zIndex:99, fontWeight:500, letterSpacing:4, marginBottom:12}}>Willkommen 😊 </Typography>
            </div>
            <Styled.Row style={{alignItems:'flex-end', position:'relative', zIndex:98, marginBottom:'80px',}}>
                <Styled.Row>
                    <a href='' target={'_blank'}><Styled.CTAButton><Typography style={{fontWeight:600, color:'#FFF'}}>View CV</Typography></Styled.CTAButton></a>
                    <a href='mailto:sid.agarwal45@gmail.com' target={'_blank'}><Styled.CTAButton><Typography style={{fontWeight:600, color:'#FFF'}}>Get in touch</Typography></Styled.CTAButton></a>
                </Styled.Row>
            </Styled.Row>
            <Styled.Row style={{gap:32, marginBottom:'80px', position:'relative'}}>
               {values.map((value, index)=> <Styled.ValueCircle key={index}>{value}</Styled.ValueCircle>)}
                <img src="/me-emoji.png" style={{width:480, height:480, position:'absolute', right:0, bottom:0, zIndex:0}}/>
            </Styled.Row>
            {/* <p style={{position:'absolute', bottom: '5%', left:'50%', fontSize:20}}>Scroll down v</p> */}
        </Styled.Container>
    )
}

export default Hero;