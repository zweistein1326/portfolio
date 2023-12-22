import { styled } from "@mui/material";

const Wrapper = ({ children }: any) => {
  return (
    <StyledContainer>
      <SubContainer>{children}</SubContainer>
    </StyledContainer>
  );
};

export default Wrapper;

const StyledContainer = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  background: "#FFFEE6",
  zIndex: 3,
  padding: "0px 48px",
}));

const SubContainer = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  zIndex: 3,
  position: "relative",
}));
