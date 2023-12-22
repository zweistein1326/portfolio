import Content from "@/components/Content/content.component";
import SectionHeading from "@/components/Content/section-heading.component";
import { Box, Grid, Typography, styled } from "@mui/material";
import data from "./skills.json";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "@/styles/theme";

const Skills = () => {
  return (
    <Content id={"SKILLSET"} maxWidth={"100%"}>
      <SectionHeading>Skills</SectionHeading>
      <Box style={{ width: "100%", borderTop: "1px solid #FFF" }}>
        {Object.keys(data).map((key) => (
          <Skill skills={data[key]} title={key} key={key} />
        ))}
      </Box>
    </Content>
  );
};

const Skill = ({ title, skills, key }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <SkillContainer isActive={isActive}>
      <Box
        style={{
          width: "100%",
          maxWidth: "960px",
          padding: "8px 20px",
        }}
      >
        <SkillHeadingBox
          isActive={isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <Typography
            variant="h3"
            style={{ color: isActive ? "#000" : "#FFF", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          {!isActive ? (
            <ExpandMoreIcon style={{ fontSize: 32, color: "#FFF" }} />
          ) : (
            <ExpandMoreIcon
              style={{
                transform: "rotate(180deg)",
                fontSize: 32,
                color: "#000",
              }}
            />
          )}
        </SkillHeadingBox>
        {isActive && (
          <SubSkillsContainer>
            {skills.map((skill, index) => (
              <SubSkillTile key={index} skill={skill} />
            ))}
          </SubSkillsContainer>
        )}
      </Box>
    </SkillContainer>
  );
};

const SubSkillTile = ({ skill }) => {
  const bgColor = (() => {
    const r = Math.floor(Math.random() * 10);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return "#171717";
    return `rgba(${2}, ${g}, ${b})`;
  })();

  return (
    // <Box
    //   style={{
    //     margin: "32px 32px 0 0px",
    //     padding: "16px 20px",
    //     backgroundColor: bgColor,
    //     borderRadius: 40,
    //   }}
    // >
    <Typography
      variant="p"
      style={{ color: "#000", fontWeight: 500, paddingTop: 4 }}
    >
      - {skill.title}
    </Typography>
    // </Box>
  );
};

const SkillHeadingBox = styled(Box)((props) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  //   borderBottom: props.isActive ? "3px solid #171717" : "",
  paddingTop: "8px",
  paddingBottom: props.isActive ? "20px" : "8px",
  cursor: "pointer",
  [props.theme.breakpoints.down("md")]: {
    padding: "0 20px",
    paddingTop: "8px",
    paddingBottom: props.isActive ? "20px" : "8px",
  },
}));

const SubSkillsContainer = styled(Box)((props) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  [props.theme.breakpoints.down("md")]: {
    padding: "0 20px",
  },
}));

const SkillContainer = styled(Box)((props) => ({
  backgroundColor: props.isActive
    ? "rgba(255, 255, 255, 1)"
    : theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  //   borderBottom: "1px solid #FFF",
  transition: "0.4s ease-in-out",
  borderRadius: 20,
  overflow: "hidden",
  marginBottom: 4,
}));

export default Skills;
