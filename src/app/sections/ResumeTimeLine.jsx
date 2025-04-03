"use client";
import React from "react";
import {Briefcase, GraduationCap} from "lucide-react";
import SectionHead from "../components/SectionHead";
import SectionContainer from "../components/SectionContainer";
import SectionBody, {SubHeading, Paragraph} from "../components/SectionBody";
import classNames from "classnames";
import {twMerge} from "tailwind-merge";
import useIntersectionObserver from "../Utility/useIntersectionObserver";

const WORK_EXPERIENCE = [
  {
    title: "Senior Software Engineer",
    company: "MyShubhLife (Datasings Technologies Pvt Ltd)",
    period: "01/2023 - Present",
    description:
      "Led and managed a team of four members, overseeing code reviews, feature planning, and design reviews. Additionally, contributed to building the UI solution for a Loan Management system. Successfully revamped the frontend to support SaaS, allowing for seamless customization tailored to individual customer needs",
  },
  {
    title: "Software Engineer",
    company: "MyShubhLife (Datasings Technologies Pvt Ltd)",
    period: "06/2021 - 12/2022",
    description:
      "Created multiple internal dashboards to facilitate smooth customer onboarding and ongoing journey. Developed and maintained reusable code libraries, meticulously tracking changes and their impact on existing functionality. Converted a React app into a Progressive Web App (PWA) to deliver an improved cross-platform user experience on Android and web platforms.",
  },
  {
    title: "Technical Intern",
    company: "MyShubhLife (Datasings Technologies Pvt Ltd)",
    period: "02/2021 - 06/2021",
    description:
      "Boosted the SEO score of https://www.myshubhlife.com from 72 to 92, leading to a notable 27% surge in organic search traffic. Achieved through the implementation of on-page optimization tactics, such as meticulous keyword research, meta-tag optimization, and content refinement.",
  },
];

const Education = [
  {
    title: "Masters in Computer Applications",
    company: "New Horizon College of engineering",
    period: "07/2018 - 04/2021",
    description: "",
  },
  {
    title: "Bachelors in Computer Applications",
    company: "Bangalore University",
    period: "07/2015 - 04/2018",
    description: "",
  },
];

const TimeLineHead = ({children, refe, className}) => {
  return (
    <div
      className={twMerge(
        className,
        "bg-zinc-200 px-3 rounded text-lg tracking-[5px] md:mx-auto w-fit",
      )}
      ref={refe}
    >
      {children}
    </div>
  );
};

const TimeLineItemContainer = ({children, className, refe}) => {
  return (
    <div className={twMerge(className, "relative")} ref={refe}>
      {children}
    </div>
  );
};

const TimelineDetails = ({children}) => {
  return <div>{children}</div>;
};
const TimeLineSection = ({right, children}) => {
  return (
    <div
      className={classNames(
        "md:w-2/4 relative ml-4 md:ml-0 p-10 md:py-0 first:pt-10 last:pb-10 border-l-2",
        {
          "md:!left-[calc(50%-2px)]  md:border-l-2 md:border-r-0": right,
          "md:text-right md:border-r-2 md:border-l-0": !right,
        },
      )}
    >
      {children}
    </div>
  );
};

const TimeSection = () => {
  const [expRef, isExpVisible] = useIntersectionObserver();
  const [expHeadRef, isExpHeadVisible] = useIntersectionObserver();

  const [eduHeadRef, isEduHeadVisible] = useIntersectionObserver();
  const [eduRef, isEduVisible] = useIntersectionObserver();
  return (
    <div className="w-full">
      <React.Fragment>
        <TimeLineHead
          refe={expHeadRef}
          className={isExpHeadVisible && "animate-slideIn"}
        >
          WORK EXPERIENCE
        </TimeLineHead>
        <TimeLineItemContainer
          className={isExpVisible && "animate-slideIn"}
          refe={expRef}
        >
          {WORK_EXPERIENCE.map((item, index) => {
            const right = index % 2 !== 0;
            return (
              <TimeLineSection key={item.title} right={right}>
                <Briefcase
                  size={30}
                  className={classNames(
                    "absolute top-2/4 bg-white -left-4 w-fit",
                    {
                      "md:!-left-4": right,
                      "md:!left-[34rem]": !right,
                    },
                  )}
                />
                <TimelineDetails>
                  <SubHeading>{item.title}</SubHeading>
                  <div className="text-[#00000080]">{item.company}</div>
                  <div className="text-[#00000080] pb-4">{item.period}</div>
                  <Paragraph>{item.description}</Paragraph>
                </TimelineDetails>
              </TimeLineSection>
            );
          })}
        </TimeLineItemContainer>
        <TimeLineHead
          refe={eduHeadRef}
          className={isEduHeadVisible && "animate-slideIn"}
        >
          EDUCATION
        </TimeLineHead>
        <TimeLineItemContainer
          className={isEduVisible && "animate-slideIn"}
          refe={eduRef}
        >
          {Education.map((item, index) => {
            const right = index % 2 == 0;
            return (
              <TimeLineSection key={item.title} right={right}>
                <GraduationCap
                  size={30}
                  className={classNames(
                    "absolute top-2/4 bg-white -left-4 w-fit",
                    {
                      "md:!-left-4": right,
                      "md:!left-[34rem]": !right,
                    },
                  )}
                />
                <TimelineDetails>
                  <SubHeading>{item.title}</SubHeading>
                  <div className="text-[#00000080] ">{item.company}</div>
                  <div className="text-[#00000080] pb-4">{item.period}</div>
                  <Paragraph>{item.description}</Paragraph>
                </TimelineDetails>
              </TimeLineSection>
            );
          })}
        </TimeLineItemContainer>
      </React.Fragment>
    </div>
  );
};

const ResumeTimeLine = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();

  return (
    <SectionContainer>
      <SectionHead
        refe={headerRef}
        className={isHeaderVisible && "animate-slideIn"}
      >
        My Resume
      </SectionHead>
      <SectionBody>
        <TimeSection />
      </SectionBody>
    </SectionContainer>
  );
};

export default ResumeTimeLine;
