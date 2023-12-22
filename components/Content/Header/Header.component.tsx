import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import Sign from "./Sign.components";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { socials } from "@/constants/socials";
import theme from "@/styles/theme";
import Link from "next/link";

const Header = () => {
  return (
    <Container id="navbar">
      <StyledHeader>
        <Sign />
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
          <Link href="#edu" className="nav-link" scroll={false}>
            <p>Education</p>
          </Link>
          <Link href="#projects" className="nav-link" scroll={false}>
            <p>Projects</p>
          </Link>
          <Link href="#contact" className="nav-link" scroll={false}>
            <p>Contact</p>
          </Link>
        </div>
      </StyledHeader>
    </Container>
  );
};

const SocialIconsContainer = styled("ul")((props) => ({}));

const Container = styled("div")((props) => ({
  position: "fixed",
  top: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "10vh",
  //   background: "rgba(0,0,0,0.4)",
  //   boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
  left: 0,
  width: "100%",
  zIndex: 1000,
  [props.theme.breakpoints.down("md")]: {
    height: "8vh",
    padding: "0 32px",
  },
}));

const StyledHeader = styled("header")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100vw",
  padding: 12 * 4,
  maxWidth: "960px",
});

export default Header;
