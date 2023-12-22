import Content from "@/components/Content/content.component";
import SectionHeading from "@/components/Content/section-heading.component";
import { Box, Typography, styled } from "@mui/material";
import { socials } from "@/constants/socials";
import theme from "@/styles/theme";
import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: "400" });

const Contact = () => {
  return (
    <Content id="contact">
      <StyledBox>
        {/* @ts-ignore */}
        <div>
          <SocialIconsContainer
            style={{
              display: "flex",
              flexDirection: "row",
              listStyleType: "none",
              color: theme.palette.text.secondary,
              gap: 20,
            }}
          >
            <li>
              <a href={socials.github} target="_blank">
                <GitHub />
              </a>
            </li>
            <li>
              <a href={socials.linkedin} target="_blank">
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href={socials.twitter} target="_blank">
                <Twitter />
              </a>
            </li>
            <li>
              <a href={socials.email} target="_blank">
                <Email />
              </a>
            </li>
          </SocialIconsContainer>
        </div>
        <Typography
          style={{ color: theme.palette.text.secondary, opacity: 0.6 }}
          className={nunito.className}
        >
          Siddharth Agarwal 2023
        </Typography>
      </StyledBox>
    </Content>
  );
};

const SocialIconsContainer = styled("ul")((props) => ({}));

const StyledBox = styled(Box)((props: any) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 12,
  [props.theme.breakpoints.down("md")]: {
    padding: "0 2rem",
  },
}));
export default Contact;
