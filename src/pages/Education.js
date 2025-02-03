import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
//import WorkIcon from "@material-ui/icons/Work";

function Education() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Performance Education, Wynyard, NSW, Australia
          </h3>
          
          <p> ACS Professional Year Program </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            The University of Sydney, NSW, Australia
          </h3>
          <p> Master of IT and Masters of IT Management</p>
          <p> Achieved 79.8 WAM and High Honor Roll Certificate in Postgraduate Coursework & Capstone Project </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            BRAC University, Dhaka, Bangladesh
          </h3>

          {/*<h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
  </h4>*/}

          <p> Bachelor of Computer Science & Engineering</p>
          <p> Received Dean’s List award in 2018 & 2019 and VC’s List Award in August 2018, April 2019 for academic result.</p>
        </VerticalTimelineElement>
        

        
      </VerticalTimeline>
    </div>
  );
}

export default Education;