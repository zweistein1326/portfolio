import Content from "@/components/Content/content.component"
import { Grid } from "@mui/material"

const Process = () => {
    return (
        <Content minHeight={'90vh'} id="PROCESS">
            <h1>Process</h1>
            <Grid>
                <Grid item>
                    <h2>Design</h2>
                    <p>Design is the process of collecting ideas, and aesthetically arranging and implementing them, guided by certain principles for a specific purpose. Web design is a similar process of creation, with the intention of presenting the content on electronic web pages, which the end-users can access through the internet with the help of a web browser.</p>
                </Grid>
            </Grid>
        </Content>
    )
}

export default Process