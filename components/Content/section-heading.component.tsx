import { styled } from "@mui/material";

const SectionHeading = ({children}: any) => {
    return (
        <Heading>
            {children}
        </Heading>
    )
}

const Heading = styled('h1')(()=>({
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '60px',
    color: "#000000",
    textShadow: '0px 0px 2px #FFFFFF',
    WebkitTextStrokeWidth: 2,
    WebkitTextStrokeColor: '#FFFFFF',
    textTransform:'uppercase',
    padding: '5vh 0'
}))

export default SectionHeading;