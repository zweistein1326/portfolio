import { Typography, styled } from "@mui/material";
import Link from "next/link";

const Sign = () => {
    return (
        // @ts-ignore
        <StyledSign variant={"p"} style={{}}><Link href="#home" scroll={false}>Sid</Link></StyledSign>
    )
}

const StyledSign = styled(Typography)((props: any) => ({
    fontSize:32, 
    fontStyle:'normal',
    color:'#FFF', 
    textAlign:'right',
    fontFamily:"'Allura', cursive",
    [props.theme.breakpoints.down('md')]: {
        fontSize:24
    }
}));

export default Sign;