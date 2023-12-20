import Content from "@/components/Content/content.component";
import SectionHeading from "@/components/Content/section-heading.component";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Education = () => {
  return (
    <Content id="edu">
      <SectionHeading>Education</SectionHeading>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/education/hku.svg"
          alt="HKU Logo"
          width={150}
          height={150}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ margin: "0 0px 20px 0px" }}
        />
        <Typography
          variant="h1"
          style={{ textAlign: "center", color: theme.palette.text.primary }}
        >
          The University of Hong Kong
        </Typography>
        <Typography
          variant="h3"
          style={{ textAlign: "center", color: theme.palette.text.primary }}
        >
          Bachelor of Engineering in Computer Science
        </Typography>
        <Typography
          variant="h3"
          style={{ textAlign: "center", color: theme.palette.text.primary }}
        ></Typography>
        {/* <Typography
          variant="h3"
          style={{ textAlign: "center", color: theme.palette.text.primary }}
        >
          Aug&apos;18-May&apos;22
        </Typography> */}
      </Box>
    </Content>
  );
};

export default Education;
