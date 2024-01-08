import Introduction from "./sections/Introduction";
import Contact from "./sections/Contact";
import ResumeTimeLine from "./sections/ResumeTimeLine";
import Skills from "./sections/Skills";
import AboutMe from "./sections/AboutMe";

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
