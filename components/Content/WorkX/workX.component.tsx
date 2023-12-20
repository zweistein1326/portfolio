import Content from "@/components/Content/content.component";
import data from "./workX.json";
import SectionHeading from "@/components/Content/section-heading.component";
import { Box, Typography, styled } from "@mui/material";
import theme from "@/styles/theme";

const WorkX = () => {
  return (
    <Content>
      <SectionHeading>WorkX</SectionHeading>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {data.map((item, index) => (
          <WorkTile item={item} index={index} key={index} />
        ))}
      </Box>
      <ResumeButton />
    </Content>
  );
};

const ResumeButton = () => {
  return (
    <ButtonContainer>
      <Typography
        variant="h4"
        style={{
          fontSize: 16,
          fontWeight: "normal",
          textTransform: "capitalize",
          WebkitTextStrokeWidth: 0,
        }}
      >
        <a
          href="https://drive.google.com/file/d/1NxUTnefiWV99Pgln7eeV4HJoBNzqiiLe/view?usp=sharing"
          target="_blank"
        >
          Resume / CV
        </a>
      </Typography>
    </ButtonContainer>
  );
};

const ButtonContainer = styled(Box)((props: any) => ({
  padding: "12px 20px",
  borderRadius: 20,
  border: `3px solid ${theme.palette.text.secondary}`,
  marginTop: 40,
  color: theme.palette.text.secondary,
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "> *": {
    color: theme.palette.text.secondary,
    transition: "all 0.2s ease-in-out",
  },
  "&:hover": {
    backgroundColor: theme.palette.text.secondary,
  },
  "&:hover > *": {
    color: "#FFF",
  },
}));

const WorkTile = ({ item, index }: any) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "320px",
        flex: 1,
      }}
    >
      <Typography
        variant="h2"
        style={{
          color: theme.palette.text.primary,
          textAlign: "center",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        <a href={item.url} target="_blank">
          {item.company}
        </a>
      </Typography>
      <Typography
        variant="h3"
        style={{ color: theme.palette.text.primary, textAlign: "center" }}
      >
        {item.title}
      </Typography>
      <Typography
        variant="h3"
        style={{ color: theme.palette.text.primary, textAlign: "center" }}
      >
        {item["start-date"]} - {item["end-date"]}
      </Typography>
    </Box>
  );
};

export default WorkX;
