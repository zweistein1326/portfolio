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
    background: 'linear-gradient(110.67deg, #171717 11%, #061127 88.71%, #050A3D 100%)'
}))