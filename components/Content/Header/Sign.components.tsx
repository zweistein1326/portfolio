import { Typography, styled } from "@mui/material";
import Link from "next/link";
import { Bangers } from "next/font/google";
import { useEffect } from "react";
import theme from "@/styles/theme";

const bangers = Bangers({ subsets: ["latin"], weight: "400" });
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Sign = () => {
  useEffect(() => {
    const signature = document.getElementById("signature"),
      text = signature?.innerText;
    if (signature) {
      console.log(signature.innerText);
      signature.innerText = "";
      text?.split("").forEach((char: any) => {
        console.log(char);
        const span = document.createElement("span");
        span.innerText = char;
        span.className = "signature-letter";
        signature.appendChild(span);
      });
    }
  }, []);

  const mouseEnter = () => {
    //     const signature_letters = document.getElementsByClassName('signature-letter');
    //     if(signature_letters.length > 0) {
    //         let iteration = 0;
    //         for (let i = 0; i < signature_letters.length; i++) {
    //             for (let j = 0; j < signature_letters.length - i; j++) {
    //                 if(j === signature_letters.length - i - 1) {
    //                     setTimeout(() => {
    //                         console.log(i, j, '_')
    //                         signature_letters[i].innerHTML = '-';
    //                     }, 300);
    //                 } else {
    //                     setTimeout(() => {
    //                         console.log(i, j, alphabet[Math.floor(Math.random() * alphabet.length)])
    //                         signature_letters[i].innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)];
    //                     }, 300);
    //                 }
    //             }
    //             iteration++;
    //             // change the ith letter to a random letter and end with original letter
    //         }
    //         // signature_letters.forEach((letter) => {
    //         //     const random = Math.floor(Math.random() * 2);
    //         // })
    //     }
  };

  return (
    // @ts-ignore
    <StyledSign variant={"p"} onMouseEnter={mouseEnter} id="sign">
      <Link href="#home" id="signature" scroll={false}>
        Sid
      </Link>
    </StyledSign>
  );
};

const StyledSign = styled(Typography)((props: any) => ({
  fontSize: 32,
  fontStyle: "normal",
  color: theme.palette.text.secondary,
  textAlign: "right",
  fontFamily: bangers.style.fontFamily,
  [props.theme.breakpoints.down("md")]: {
    fontSize: 24,
  },
}));

export default Sign;
