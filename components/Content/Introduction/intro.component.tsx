import Content from "@/components/Content/content.component"
import Wrapper from "@/components/Wrapper/wrapper.component"
import { Box, Button, styled } from "@mui/material"
import Image from "next/image";

const Introduction = () => {
    return (
        <Container minHeight={'100vh'}>
            <Box style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Box style={{maxWidth:'40%'}}>
                    <Box style={{margin: '20px 0'}}>
                        <Intro>Hello, it&apos;s me</Intro>
                        <Intro style={{fontSize: 72}}>Siddharth. </Intro>
                    </Box>
                    <p style={{color:'#FFF', fontSize: 20}}>
                        An enthusiastic product developer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data.
                    </p>
                </Box>
                <Box>
                    <Image src='/images/me.jpg' width={400} height={400} style={{borderRadius:400, border:'2px solid #FFF'}} alt="Siddharth Agarwal"/>
                </Box>
            </Box>
            <p><a href="#EDUCATION">Scroll for more v</a></p>
        </Container>
    )
}

const Intro = styled('h1')((props) => ({
    fontSize: 52,
    lineHeight: 1.2,
    color: '#000',
    WebkitTextStrokeWidth: 2,
    WebkitTextStrokeColor: '#FFFFFF'
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
}))

export default Introduction