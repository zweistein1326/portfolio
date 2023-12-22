import Content from "@/components/Content/content.component";
import SectionHeading from "@/components/Content/section-heading.component";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const education = [
  {
    name: "The University of Hong Kong",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "Aug'18-June'22",
    logo: "/images/education/hku.svg",
  },
  {
    name: "Delhi Public School, R.K. Puram",
    degree: "High School",
    duration: "May'15-April'17",
    logo: "/images/education/dps_logo.png",
  },
];

const Education = () => {
  return (
    <Content id="edu">
      <SectionHeading>Education</SectionHeading>
      <Box display={"flex"} flexDirection={"column"} gap={8}>
        {education.map((ed, index) => (
          <Tile ed={ed} index={index} key={index} />
        ))}
      </Box>
    </Content>
  );
};

const Tile = ({ ed, index }: { ed: any; index: number }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src={ed.logo}
        alt="HKU Logo"
        width={150}
        height={150}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ margin: "0 0px 20px 0px" }}
      />
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          color: theme.palette.text.primary,
          fontWeight: "bold",
        }}
      >
        {ed.name}
      </Typography>
      <Typography
        style={{ textAlign: "center", color: theme.palette.text.primary }}
      >
        {ed.degree}
      </Typography>
      <Typography
        style={{ textAlign: "center", color: theme.palette.text.primary }}
      >
        {ed.duration}
      </Typography>
      {/* <Typography
          variant="h3"
          style={{ textAlign: "center", color: theme.palette.text.primary }}
        >
          Aug&apos;18-May&apos;22
        </Typography> */}
    </Box>
  );
};

export default Education;
