import About from '@/components/About.component'
import Header from '@/components/Header.component'
import Hero from '@/components/Hero.component'
import Projects from '@/components/Projects.component'
import Timeline from '@/components/Timeline.component'
import Work from '@/components/Work.component'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>About - Sid</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{background:'#FFF', color:'#000'}}>
        <Header/>
        <Hero/>
        <Timeline/>
        {/* <Work/> */}
        {/* <Projects/> */}
        <About/>
      </main>
    </>
  )
}
