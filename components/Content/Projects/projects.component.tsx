import Content from "@/components/Content/content.component";
import data from "./projects.json";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import SectionHeading from "@/components/Content/section-heading.component";
import theme from "@/styles/theme";
import styles from "./projects.module.css";
import { Nunito, Prompt } from "next/font/google";
import { useEffect } from "react";

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
  const mediaQuery = useMediaQuery("(max-width: 960px)");
  console.log(mediaQuery);

  const handleClick = () => {
    const projectInfo = document.getElementById(
      `${index}-${styles.projectImage}`
    );
    projectInfo?.classList.add(styles.reveal);
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
          >
            <Image
              src={project.image_uri}
              fill={true}
              style={{ objectFit: "cover" }}
              alt={project.title}
            />
            <button
              onClick={handleClick}
              style={{
                position: "absolute",
                bottom: 12,
                right: 20,
                color: "#FFF",
                fontSize: "0.9rem",
                backgroundColor: "transparent",
                boxShadow: "none",
                border: "none",
                fontWeight: "bold",
              }}
            >
              -&gt; View
            </button>
          </Box>
        )}
        <Box
          className={styles.projectInfo}
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
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
