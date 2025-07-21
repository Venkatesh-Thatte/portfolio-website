import Head from "next/head";
import { NextPage } from "next";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Certifications from "../../components/Certifications";
import ContactMe from "../../components/ContactMe";
import Link from "next/link";

const Home: NextPage = () => {
  return (
  
<div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory 
overflow-y-scroll overflow-x-hidden z-0 h-screen">
      <Head>
        <title>Venkatesh&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />c

      {/* Hero Section */}
      <section id="hero" className="snap-start min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="snap-center min-h-screen flex flex-col items-center justify-center px-10 max-w-7xl mx-auto">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="snap-start">
         <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>
       
      <section id="certifications" className="snap-start">
        <Certifications />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img 
          className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0
          cursor-pointer"
          src="/images/img3.jpg" 
          alt="" />
        </div>
      </footer>

      </Link>
    </div>


  );
};

export default Home;

