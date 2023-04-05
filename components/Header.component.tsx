import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import Sign from './Sign.components';
import Styled from './styles';

const Header = () => {
    return (
        <Styled.Header>
            <Sign />
            <div style={{width:'25vw', paddingLeft: 24}}>
                <ul style={{display:'flex', flexDirection:'row', listStyleType:'none'}}> 
                    <li style={{margin:20}}><a href='#work'><GitHub /></a></li>
                    <li style={{margin:20}}><a href='#projects'><LinkedIn /></a></li>
                    <li style={{margin:20}}><a href='#about'><Twitter /></a></li>
                    <li style={{margin:20}}><a href='#contact'><Email /></a></li>
                </ul>
            </div>
        </Styled.Header>
    )
}

export default Header;