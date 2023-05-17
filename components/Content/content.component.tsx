import { styled } from "@mui/material";

const Content = ({children, minHeight='40vh', id, maxWidth}: any) => {
    return (
        // @ts-ignore
        <Container minHeight={minHeight} id={`#${id}`} maxWidth={maxWidth}>
            {children}
        </Container>
    )
}

const Container = styled('div')(({minHeight, maxWidth = '960px'}: any)=>({
    backgroundColor:'transparent',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    maxWidth: maxWidth,
    marginBottom: '12vh'
}))

export default Content;
