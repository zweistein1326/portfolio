import theme from "@/styles/theme";
import { styled } from "@mui/material";
import { Reenie_Beanie } from "next/font/google";

const reenie_beanie = Reenie_Beanie({ subsets: ["latin"], weight: "400" });

const SectionHeading = ({ children }: any) => {
  return <Heading className={reenie_beanie.className}>{children}</Heading>;
};

const Heading = styled("h2")((props: any) => ({
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "48px",
  lineHeight: "60px",
  color: theme.palette.text.primary,
  borderBottom: `4px solid ${theme.palette.text.secondary}`,
  marginBottom: "3rem",
  [props.theme.breakpoints.down("md")]: {
    fontSize: "36px",
  },
  minWidth: "40vw",
  textAlign: "center",
}));

export default SectionHeading;
