import Content from "@/components/Content/content.component";
import data from "./projects.json";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import SectionHeading from "@/components/Content/section-heading.component";
import theme from "@/styles/theme";
import styles from "./projects.module.css";
import { Nunito, Prompt } from "next/font/google";
import { useEffect, useState } from "react";

const nunito = Nunito({ subsets: ["latin"], weight: "400" });
const prompt = Prompt({ subsets: ["latin"], weight: "400" });

const Projects = () => {
  return (
    <Content minHeight="90vh" id="projects">
      <SectionHeading>Projects</SectionHeading>
      {/* Search Bar
        Allow users to search for projects by skill
      */}
      <Grid container className={styles.tileContainer}>
        {Object.values(data).map((proj, index) => {
          return <ProjectTile project={proj} key={index} index={index} />;
        })}
      </Grid>
    </Content>
  );
};

const ProjectTile = ({ project, index }: any) => {
  const mediaQuery = useMediaQuery("(max-width: 720px)");
  const [isInfoVisible, setInfoVisible] = useState(false);

  const handleClick = () => {
    const cardImage = document.getElementById(
      `${index}-${styles.projectImage}`
    );
    if (cardImage) {
      cardImage.style.transition = "opacity 0.5s ease-in-out";
      if (isInfoVisible) {
        cardImage.style.opacity = "1";
        cardImage.style.pointerEvents = "all";
      } else {
        cardImage.style.opacity = "0";
        cardImage.style.pointerEvents = "none";
      }
      isInfoVisible ? setInfoVisible(false) : setInfoVisible(true);
    }
  };

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "12px",
        borderRadius: 20,
        height: "360px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box className={styles.projectTile}>
        {!(index % 2) && !mediaQuery && (
          <Box
            style={{
              height: "100%",
              width: "40%",
              position: "relative",
            }}
          >
            <Image
              src={project.image_uri}
              fill={true}
              style={{ objectFit: "cover" }}
              alt={project.title}
            />
          </Box>
        )}
        {mediaQuery && (
          <Box
            style={{
              height: 400,
              width: "100%",
            }}
            id={`${index}-${styles.projectImage}`}
            className={styles.projectImage}
          >
            <Image
              src={project.image_uri}
              fill={true}
              style={{ objectFit: "cover" }}
              alt={project.title}
            />
          </Box>
        )}
        <Box className={styles.projectInfo}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 12,
            }}
          >
            <Typography
              variant="h3"
              style={{
                fontWeight: "bold",
                color: theme.palette.text.primary,
                fontSize: "1.4rem",
              }}
              className={prompt.className}
            >
              {project.title}
            </Typography>
            <Typography
              style={{
                color: theme.palette.text.primary,
                textAlign: "left",
                fontSize: "0.9rem",
              }}
              className={nunito.className}
            >
              {project.description}
            </Typography>
            <ActionButton link={project.url} />
          </Box>
        </Box>
        {index % 2 && !mediaQuery ? (
          <Box
            style={{
              height: "100%",
              width: "40%",
              position: "relative",
            }}
          >
            <Image
              src={project.image_uri}
              fill={true}
              style={{ objectFit: "cover" }}
              alt={project.title}
            />
          </Box>
        ) : null}
        {mediaQuery && (
          <button
            onClick={handleClick}
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: isInfoVisible
                ? theme.palette.text.secondary
                : "#FFF",
              padding: "8px 12px",
              boxShadow: "none",
              border: "none",
              borderRadius: 20,
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "0.75rem",
                color: !isInfoVisible ? theme.palette.text.secondary : "#FFF",
              }}
            >{`${isInfoVisible ? "Hide" : "Read"}`}</p>
          </button>
        )}
      </Box>
    </Grid>
  );
};

const ActionButton = ({ link }: { link: string }) => {
  return (
    <a href={link} target="_blank" className={styles.actionButton}>
      {/* @ts-ignore */}
      <Typography
        style={{
          textAlign: "center",
          fontStyle: "italic",
          fontSize: "0.9rem",
        }}
      >
        View Project
      </Typography>
    </a>
  );
};

const Tag = ({ tag, index }: any) => {
  return (
    <Box
      style={{
        backgroundColor: theme.palette.text.secondary,
        padding: "8px 12px",
        margin: "4px",
        borderRadius: 40,
      }}
    >
      {/* @ts-ignore */}
      <Typography
        style={{
          color: "#FFF",
          textAlign: "center",
          fontStyle: "italic",
          fontSize: "0.9rem",
        }}
      >
        {tag}
      </Typography>
    </Box>
  );
};

const ProjectStatus = ({ status }: any) => {
  const bgColor = (() => {
    switch (status) {
      case "In Progress":
        return "#FFD300";
      case "Finished":
        return "#0F0";
      default:
        return "#FFF";
    }
  })();
  return (
    <Box
      style={{
        backgroundColor: bgColor,
        padding: "4px",
        textAlign: "center",
        fontWeight: "bold",
        width: "80px",
        borderRadius: 100,
        position: "absolute",
        top: 12,
        right: 12,
        zIndex: 999999,
      }}
    >
      {/* @ts-ignore */}
      <Typography variant="p" style={{ color: "#000", fontSize: 12 }}>
        {status}
      </Typography>
    </Box>
  );
};
export default Projects;
