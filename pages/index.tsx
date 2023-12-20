import Header from "@/components/Content/Header/Header.component";
import Introduction from "@/components/Content/Introduction/intro.component";
import Head from "next/head";
import BodyWrapper from "@/components/Wrapper/wrapper.component";
import Process from "@/components/Content/Process/process.component";
import Skills from "@/components/Content/Skills/skills.component";
import Projects from "@/components/Content/Projects/projects.component";
import WorkX from "@/components/Content/WorkX/workX.component";
import Education from "@/components/Content/Education/education.component";
import Contact from "@/components/Content/Contact/contact.component";

export default function Home() {
  const onPointerMove = (e: any) => {
    const mouse_pointer = document.getElementById("mouse-pointer");
    const { clientX, clientY } = e;
    if (mouse_pointer) {
      console.log(mouse_pointer);
      console.log(clientX, clientY);
      mouse_pointer.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 200, fill: "forwards" }
      );
    }
  };

  return (
    <div onPointerMove={onPointerMove}>
      {/* <div id="mouse-pointer">
        <div id="blob"/>
        <div id="blur"/>
      </div> */}
      <Head>
        <title>Siddharth Agarwal</title>
        <meta name="description" content="Siddharth's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BodyWrapper>
        <Introduction />
        <Education />
        <WorkX />
        <Projects />
        <Skills />
        <Contact />
      </BodyWrapper>
      {/* <Footer /> */}
    </div>
  );
}
