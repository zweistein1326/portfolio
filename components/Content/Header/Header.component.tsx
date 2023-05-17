import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import Sign from './Sign.components';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

const socials = {
    github: 'https://github.com/zweistein1326',
    linkedin: 'https://www.linkedin.com/in/siddharthagarwal2608/',
    twitter: 'https://twitter.com/SidAgarwal45',
    email: 'mailto:sid.agarwal45@gmail.com'
}

const Header = () => {
    return (
        <Container style={{}}>
            <StyledHeader>
                <Sign />
                <div style={{paddingLeft: 24}}>
                    <ul style={{display:'flex', flexDirection:'row', listStyleType:'none', color:'#FFF'}}> 
                        <li style={{margin:20}}><a href={socials.github}><GitHub /></a></li>
                        <li style={{margin:20}}><a href={socials.linkedin}><LinkedIn /></a></li>
                        <li style={{margin:20}}><a href={socials.twitter}><Twitter /></a></li>
                        <li style={{margin:20}}><a href={socials.email}><Email /></a></li>
                    </ul>
                </div>
            </StyledHeader>
        </Container>
    )
}

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