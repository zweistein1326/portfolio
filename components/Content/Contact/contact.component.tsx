import Content from "@/components/Content/content.component"
import SectionHeading from "@/components/Content/section-heading.component"
import { Box, Typography, styled } from "@mui/material"

const Contact = () => {
    return (
        <Content>
            <SectionHeading>
                Contact Me
            </SectionHeading>
            <StyledBox>
                {/* @ts-ignore */}
                <Typography variant="h4" style={{color:'#FFF', textAlign:'center'}}>Would you like me to work with you or vice-versa? Write to me at <a href="mailto:sid.agarwal45@gmail.com" style={{textDecoration:'underline'}}>sid.agarwal45@gmail.com</a></Typography>
            </StyledBox>
        </Content>
    )
}

const StyledBox = styled(Box)((props: any) => ({
    [props.theme.breakpoints.down('md')]: {
        padding: '0 2rem'
    }
}))
export default Contact;