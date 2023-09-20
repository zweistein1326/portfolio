import Content from "@/components/Content/content.component"
import SectionHeading from "@/components/Content/section-heading.component"
import { Box, Typography, styled } from "@mui/material"
import { socials } from "@/constants/socials"

const Contact = () => {
    return (
        <Content>
            <SectionHeading>
                Contact Me
            </SectionHeading>
            <StyledBox>
                {/* @ts-ignore */}
                <Typography variant="h4" style={{color:'#FFF', textAlign:'center'}}>Write to me at <a href={`mailto:${socials.email}`} target="_blank" style={{textDecoration:'underline'}}>{socials.email}</a></Typography>
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