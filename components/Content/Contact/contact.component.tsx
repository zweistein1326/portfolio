import Content from "@/components/Content/content.component"
import SectionHeading from "@/components/Content/section-heading.component"
import { Box, Typography } from "@mui/material"

const Contact = () => {
    return (
        <Content>
            <SectionHeading>
                Contact Me
            </SectionHeading>
            <Box>
                {/* @ts-ignore */}
                <Typography variant="h4" style={{color:'#FFF'}}>Would you like me to work with you or vice-versa? Write to me at <a href="mailto:sid.agarwal45@gmail.com" style={{textDecoration:'underline'}}>sid.agarwal45@gmail.com</a></Typography>
            </Box>
        </Content>
    )
}

export default Contact;