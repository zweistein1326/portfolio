import Content from "@/components/Content/content.component"
import Wrapper from "@/components/Wrapper/wrapper.component"
import theme from "@/styles/theme";
import { ExpandMore } from "@mui/icons-material";
import { Box, Button, Typography, styled } from "@mui/material"
import Image from "next/image";
import { Bowlby_One_SC } from 'next/font/google';
import styles from './intro.module.css';
import { useEffect } from "react";

const basic = Bowlby_One_SC({subsets: ['latin'], weight: "400"});

const Introduction = () => {
    const enhance = (id: string) => {
        const element = document.getElementById(id),
              text = element?.innerText.split("");
        if(element) {
            element.innerText = "";
            text?.forEach(letter => {
                const span = document.createElement("span");
                span.className = styles.letter;
                span.innerText = letter;
                element.appendChild(span);
            }) 
        }
    }
    
    useEffect(() => {
        enhance("email");
        enhance("linkedin");
        enhance("phone");
    }, [])

    return (
        // @ts-ignore
        <Container minHeight={'100vh'} id="home">
            <InnerContainer sx={{px: 2}}>
                <Box>
                    {/* <Box style={{margin: '20px 0'}}>
                        <Intro>Hey! I'm Sid</Intro>
                    </Box> */}
                    {/* @ts-ignore */}
                    <div id={styles.description} style={{color:theme.palette.text.primary}}>
                        <Line className="line">
                            <p className={`${styles.word}`}>SID</p>
                            <p className={`${styles.word}`}>AGARWAL</p>
                        </Line>
                        <Line className="line">
                            <p className={`${styles.word}`}>SOFTWARE</p>
                            <p className={`${styles.word}`}>&</p>
                        </Line>
                        <Line className="line">
                            <p className={`${styles.word}`}>PRODUCT</p>
                            <p className={`${styles.word}`}>DEV</p>
                        </Line>
                        <Line className="line">
                            <a id="phone" className={`${styles.word} ${styles.fancy}`}>+852-59291909</a>
                        </Line>
                        <Line className="line">
                            <a id="email" className={`${styles.word} ${styles.fancy}`}>@EMAIL</a>
                            <a id="linkedin" className={`${styles.word} ${styles.fancy}`}>@LINKEDIN</a>
                        </Line>
                    </div>
                </Box>
                <Box style={{margin:'0 0 0 40px', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <StyledImage src='/images/me-avatar.png' width={600} height={600} alt="Siddharth Agarwal"/>
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

const Line = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'row',
    width:'100%',
    justifyContent:'space-between',
    fontSize: 40,
}));

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

const Description = styled('div')((props) => ({
    fontFamily: basic.style.fontFamily,
    display: 'flex',
    flexDirection:'column',
    gap: 0,
    [props.theme.breakpoints.down('md')]: {
        textAlign:'center'
    },
}));

const Container = styled('div')(({minHeight, maxWidth = '960px'}: any)=>({
    background: 'transparent',
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
    width: '100vw',
    backgroundColor:'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    alignItems:'center',
    [props.theme.breakpoints.down('md')]: {
        alignItems:'center',
        justifyContent:'center', 
        display:'flex',
        flexDirection:'column',
    },
}))

const StyledImage = styled(Image)((props) => ({
    // borderRadius:400, 
    // border:'2px solid #000',
    [props.theme.breakpoints.down('md')]: {
        width:200,
        height:200,
    },
}));

export default Introduction