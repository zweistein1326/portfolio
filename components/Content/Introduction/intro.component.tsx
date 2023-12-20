import Content from "@/components/Content/content.component";
import Wrapper from "@/components/Wrapper/wrapper.component";
import theme from "@/styles/theme";
import { ExpandMore } from "@mui/icons-material";
import { Box, Button, Typography, styled } from "@mui/material";
import Image from "next/image";
import { Bowlby_One_SC } from "next/font/google";
import styles from "./intro.module.css";
import { useEffect } from "react";
import localFont from "next/font/local";
import Link from "next/link";

const basic = Bowlby_One_SC({ subsets: ["latin"], weight: "400" });
const porter_sans_block = localFont({
  src: "../../../public/fonts/porter_sans_block/porter-sans-inline-block.ttf",
});

const Introduction = () => {
  const enhance = (id: string) => {
    const element = document.getElementById(id),
      text = element?.innerText.split("");
    if (element) {
      element.innerText = "";
      text?.forEach((letter) => {
        const span = document.createElement("span");
        span.className = styles.letter;
        span.innerText = letter;
        element.appendChild(span);
      });
    }
  };

  useEffect(() => {
    enhance("email");
    enhance("linkedin");
    enhance("phone");
  }, []);

  return (
    // @ts-ignore
    <Container minHeight={"100vh"} id="home">
      <InnerContainer>
        <Box style={{ flex: 1 }}>
          <div
            id={styles.description}
            style={{ color: theme.palette.text.primary }}
          >
            <Line className="line">
              <p className={`${styles.word}`}>HI,</p>
              <p className={`${styles.word}`}>HALO,</p>
              <p className={`${styles.word}`}>NAMASKAR</p>
            </Line>
            <Line className="line">
              <p className={`${styles.word}`}>WELCOME</p>
              <p className={`${styles.word}`}>TO</p>
              <p className={`${styles.word}`}>MY</p>
              <p className={`${styles.word}`}>SITE</p>
            </Line>
            {/* <Line className="line">
              <p className={`${styles.word}`}>PRODUCT</p>
              <p className={`${styles.word}`}>DEV</p>
            </Line> */}
            {/* <Line className="line">
              <a id="phone" className={`${styles.word} ${styles.fancy}`}>
                +852-59291909
              </a>
            </Line> */}
            <Line className="line">
              {/* <a id="email" className={`${styles.word} ${styles.fancy}`}>
                @EMAIL
              </a> */}
              {/* <a id="linkedin" className={`${styles.word} ${styles.fancy}`}>
                hocus pocus
              </a> */}
            </Line>
          </div>
        </Box>
        {/* <Box
          style={{
            margin: "0 0 0 40px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <StyledImage
            src="/images/me-avatar.png"
            width={300}
            height={300}
            alt="Siddharth Agarwal"
          />
        </Box> */}
      </InnerContainer>
      <Link href="#edu">
        <Box
          style={{
            height: "10vh",
            position: "absolute",
            bottom: 48,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            backgroundColor: theme.palette.text.secondary,
            borderRadius: 20,
            padding: "4px 4px",
          }}
        >
          {/* @ts-ignore */}
          <ExpandMore style={{ color: "#FFF" }} />
        </Box>
      </Link>
    </Container>
  );
};

const Line = styled("div")((props) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
  gap: 12,
}));

const Intro = styled("h1")((props) => ({
  fontSize: 52,
  lineHeight: 1.2,
  color: "#000",
  WebkitTextStrokeWidth: 2,
  WebkitTextStrokeColor: "#FFFFFF",
  [props.theme.breakpoints.down("md")]: {
    fontSize: 44,
    textAlign: "center",
  },
}));

const Description = styled("div")((props) => ({
  fontFamily: basic.style.fontFamily,
  display: "flex",
  flexDirection: "column",
  gap: 0,
  [props.theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const Container = styled("div")(({ minHeight, maxWidth = "960px" }: any) => ({
  background: "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: maxWidth,
  minHeight: minHeight,
  position: "relative",
}));

const InnerContainer = styled(Box)((props: any) => ({
  width: "100%",
  overflow: "hidden",
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "0 !important",
  paddingRight: "0 !important",
  [props.theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
}));

const StyledImage = styled(Image)((props) => ({
  // borderRadius:400,
  // border:'2px solid #000',
  [props.theme.breakpoints.down("md")]: {
    width: "10rem",
    height: "10rem",
  },
}));

export default Introduction;
