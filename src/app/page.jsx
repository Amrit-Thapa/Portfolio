import Introduction from "./components/Introduction";
import Contact from "./components/Contact";
import ResumeTimeLine from "./components/ResumeTimeLine";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

const page = () => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <ResumeTimeLine />
      <Skills />
      <Contact />
    </>
  );
};

export default page;
