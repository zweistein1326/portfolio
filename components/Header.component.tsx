import Sign from './Sign.components';
import Styled from './styles';

const Header = () => {
    return (
        <Styled.Header>
            <Sign />
            <div>
                <ul style={{display:'flex', flexDirection:'row', listStyleType:'none'}}> 
                    <li style={{margin:20}}><a href='#work'>Work</a></li>
                    <li style={{margin:20}}><a href='#projects'>Projects</a></li>
                    <li style={{margin:20}}><a href='#about'>About</a></li>
                    <li style={{margin:20}}><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </Styled.Header>
    )
}

export default Header;