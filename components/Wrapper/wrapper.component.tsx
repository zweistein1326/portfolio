import { styled } from "@mui/material"

const Wrapper = ({children}: any) => {
    return (    
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Wrapper;

const StyledContainer = styled('div')((props)=>({
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:'100%',
    background: '#FFFEE6',
    zIndex: 3
}))