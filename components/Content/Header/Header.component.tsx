import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import Sign from './Sign.components';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

const socials = {
    github: 'https://github.com/zweistein1326',
    linkedin: 'https://www.linkedin.com/in/siddharthagarwal2608/',
    twitter: 'https://twitter.com/SidAgarwal45',
    email: 'mailto:me@sidart.info'
}

const Header = () => {
    return (
        <Container style={{}}>
            <StyledHeader>
                <Sign />
                <div style={{paddingLeft: 24}}>
                    <SocialIconsContainer style={{display:'flex', flexDirection:'row', listStyleType:'none', color:'#FFF'}}> 
                        <li style={{marginLeft:20}}><a href={socials.github}><GitHub /></a></li>
                        <li style={{marginLeft:20}}><a href={socials.linkedin}><LinkedIn /></a></li>
                        <li style={{marginLeft:20}}><a href={socials.twitter}><Twitter /></a></li>
                        <li style={{marginLeft:20}}><a href={socials.email}><Email /></a></li>
                    </SocialIconsContainer>
                </div>
            </StyledHeader>
        </Container>
    )
}

const SocialIconsContainer = styled('ul')((props) => ({
    
}));

const Container = styled('div')((props) => ({
    position:'fixed',
    top: 0,
    display:'flex', 
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center', 
    height:'10vh', 
    background:'rgba(0,0,0,0.4)', 
    boxShadow:'0px 0px 4px rgba(0, 0, 0, 0.1)',
    left:0, 
    width:'100%', 
    zIndex: 1000,
    [props.theme.breakpoints.down('md')]: {
        height:'8vh',
        padding: '0 32px'
    }
    
}))

const StyledHeader = styled('header')({
    display:'flex',
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between', 
    width:'100vw',
    maxWidth: '960px',
})


export default Header;