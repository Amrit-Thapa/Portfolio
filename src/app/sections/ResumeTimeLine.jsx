import React from "react";
import {Briefcase, GraduationCap} from "lucide-react";
import SectionHead from "../components/SectionHead";
import SectionContainer from "../components/SectionContainer";
import SectionBody, {SubHeading, Paragraph} from "../components/SectionBody";
import classNames from "classnames";

const WORK_EXPERIENCE = [
  {
    title: "Senior Software Engineer",
    company: "MyShubhLife (Datasings Technologies Pvt Ltd)",
    period: "01/2023 - Present",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    title: "Software Engineer",
    company: "MyShubhLife (Datasings Technologies Pvt Ltd)",
    period: "06/2021 - 12/2022",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    title: "Technical Intern",
    company: "MyShubhLife (Datasings Technologies Pvt Ltd)",
    period: "02/2021 - 06/2021",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const Education = [
  {
    title: "Masters in Computer Applications",
    company: "New Horizon College of engineering",
    period: "07/2018 - 04/2021",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    title: "Bachelors in Computer Applications",
    company: "Bangalore University",
    period: "07/2015 - 04/2018",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const TimeLineHead = ({children}) => {
  return (
    <div className="bg-zinc-200 px-3 rounded text-lg tracking-[5px] md:mx-auto w-fit">
      {children}
    </div>
  );
};

const TimeLineItemContainer = ({children}) => {
  return <div className="relative">{children}</div>;
};

const TimelineDetails = ({children}) => {
  return <div>{children}</div>;
};
const TimeLineSection = ({right, children}) => {
  return (
    <div
      className={classNames(
        "md:w-2/4 relative ml-2 px-10 md:py-12 first:pt-10 last:pb-10",
        {
          "md:!left-[calc(50%-2px)] !text-left md:border-l-2": right,
          "md:!text-right md:border-r-2": !right,
        },
      )}
    >
      {children}
    </div>
  );
};

const TimeSection = () => {
  return (
    <div className="w-full">
      <React.Fragment>
        <TimeLineHead>WORK EXPERIENCE</TimeLineHead>
        <TimeLineItemContainer>
          {WORK_EXPERIENCE.map((item, index) => {
            const right = index % 2 !== 0;
            return (
              <TimeLineSection key={item} right={right}>
                <TimelineDetails>
                  <SubHeading>{item.title}</SubHeading>
                  <div className="text-[#00000080]">{item.company}</div>
                  <div className="text-[#00000080] pb-4">{item.period}</div>
                  <Paragraph>{item.description}</Paragraph>
                </TimelineDetails>
                <Briefcase
                  size={30}
                  className={classNames("absolute top-2/4 bg-white", {
                    "md:!-left-4": right,
                    "md:!-right-4": !right,
                  })}
                />
              </TimeLineSection>
            );
          })}
        </TimeLineItemContainer>
        <TimeLineHead>EDUCATION</TimeLineHead>
        <TimeLineItemContainer>
          {Education.map((item, index) => {
            const right = index % 2 == 0;
            return (
              <TimeLineSection key={item} right={right}>
                <TimelineDetails>
                  <SubHeading>{item.title}</SubHeading>
                  <div className="text-[#00000080] ">{item.company}</div>
                  <div className="text-[#00000080] pb-4">{item.period}</div>
                  <Paragraph>{item.description}</Paragraph>
                </TimelineDetails>
                <GraduationCap
                  size={30}
                  className={classNames("absolute top-2/4 bg-white ", {
                    "md:!-left-4": right,
                    "md:-right-4": !right,
                  })}
                />
              </TimeLineSection>
            );
          })}
        </TimeLineItemContainer>
      </React.Fragment>
    </div>
  );
};

const ResumeTimeLine = () => {
  return (
    <SectionContainer>
      <SectionHead>My Resume</SectionHead>
      <SectionBody>
        <TimeSection />
      </SectionBody>
    </SectionContainer>
  );
};

export default ResumeTimeLine;
