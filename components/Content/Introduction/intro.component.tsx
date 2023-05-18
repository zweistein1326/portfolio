import Content from "@/components/Content/content.component"
import Wrapper from "@/components/Wrapper/wrapper.component"
import { ExpandMore } from "@mui/icons-material";
import { Box, Button, Typography, styled } from "@mui/material"
import Image from "next/image";

const Introduction = () => {
    return (
        // @ts-ignore
        <Container minHeight={'100vh'}>
            <InnerContainer sx={{px: 2}}>
                <Box style={{float:'right', margin:'0 0 0 40px', flex:1, display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <StyledImage src='/images/me.jpg' width={400} height={400} alt="Siddharth Agarwal"/>
                </Box>
                <Box>
                    <Box style={{margin: '20px 0'}}>
                        <Intro>Welcome to my homepage!</Intro>
                    </Box>
                    {/* @ts-ignore */}
                    <Description variant={'h3'} style={{color:'#FFF'}}>
                        I am Siddharth. An enthusiastic software engineer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data.
                    </Description>
                </Box>
            </InnerContainer>
            <Box style={{height:'10vh', position:'absolute', bottom: 0, display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                {/* @ts-ignore */}
                <Typography variant="p" style={{color:'#FFF'}}><a href="#EDUCATION">Scroll for more</a></Typography>
                <ExpandMore style={{color:'#FFF'}}/>
            </Box>
        </Container>
    )
}

const Intro = styled('h1')((props) => ({
    fontSize: 52,
    lineHeight: 1.2,
    color: '#000',
    WebkitTextStrokeWidth: 2,
    WebkitTextStrokeColor: '#FFFFFF',
    [props.theme.breakpoints.down('md')]: {
        fontSize: 44,
        textAlign:'center'
    },
}));

const Description = styled(Typography)((props) => ({
    [props.theme.breakpoints.down('md')]: {
        textAlign:'center'
    },
}));

const Container = styled('div')(({minHeight, maxWidth = '960px'}: any)=>({
    backgroundColor:'transparent',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    maxWidth: maxWidth,
    minHeight: minHeight,
    position:'relative'
}))

const InnerContainer = styled(Box)((props: any)=>({
    backgroundColor:'transparent',
    [props.theme.breakpoints.down('md')]: {
        alignItems:'center',
        justifyContent:'center', 
        display:'flex',
        flexDirection:'column',
    },
}))

const StyledImage = styled(Image)((props) => ({
    borderRadius:400, 
    border:'2px solid #FFF',
    [props.theme.breakpoints.down('md')]: {
        width:200,
        height:200,
    },
}));

export default Introduction