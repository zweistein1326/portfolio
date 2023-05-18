import Header from '@/components/Content/Header/Header.component'
import Introduction from '@/components/Content/Introduction/intro.component'
import Head from 'next/head'
import Wrapper from '@/components/Wrapper/wrapper.component'
import Process from '@/components/Content/Process/process.component'
import Skills from '@/components/Content/Skills/skills.component'
import Projects from '@/components/Content/Projects/projects.component'
import WorkX from '@/components/Content/WorkX/workX.component'
import Education from '@/components/Content/Education/education.component'
import Contact from '@/components/Content/Contact/contact.component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Siddharth Agarwal</title>
        <meta name="description" content="Siddharth's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header/>
        <Introduction />
        <Education />
        <Projects />
        <Skills />
        <WorkX />
        <Contact />
      </Wrapper>
      {/* <Footer /> */}
    </>
  )
}
