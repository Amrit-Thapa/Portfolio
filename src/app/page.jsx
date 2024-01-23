import Introduction from "./sections/Introduction";
import Contact from "./sections/Contact";
import ResumeTimeLine from "./sections/ResumeTimeLine";
import Skills from "./sections/Skills";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";

const page = () => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <ResumeTimeLine />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </>
  );
};

export default page;
