import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
//import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feb, 2024 - Jun, 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Australian Computer Society (ACS), NSW, Australia
          </h3>
          <p> Intern- Full Stack Web Developer </p>
          <p> Language and Tools: React.Js, Express.Js, MySQL, HTML5, SASS Styling, Visual Studio, GitHub, OWSAP ZAP Penetration testing, Selenium </p>
          <p> Developed and optimized full-stack web applications, enhancing user experience and increasing engagement through improved UI/UX design and debugging, resulting in a 30% reduction in bugs </p>
          <p> Implemented secure authentication and authorization using JWT tokens, cookies, and bcrypt, adhering to best practices to mitigate common web security risks </p>
          <p> Conducted Penetration Testing to identify common web application vulnerabilities and Selenium Testing to perform QA operations </p>
          <p> Managed codebase and team collaboration using Git, and created detailed project documentation for smooth handovers and increased project efficiency </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            The University of Sydney, NSW, Australia
          </h3>
          <p> Academic Tutor </p>
          <p> Units: Data Analytics & Business Intelligence, Professional Practice in IT and Understanding IT Innovations</p>
          <p> Conduct tutoring sessions to assist more than 150 students in grasping challenging concepts and improving their academic performance by 20% </p>
          <p> Utilize innovative teaching methods to engage students during sessions, leading to a 50% increase in student attendance and participation </p>
          <p> Collaborate with fellow tutors, faculty members, and course instructors to enhance the overall learning experience and ensure consistency and fairness in grading practices </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Retail Store Team Member
          </h3>
          
          <p>Sydney Party Decorations Ltd, Mascot, NSW 2007</p>
          <p>Provide Customer Service, Restock items, Assisting Cutomer Inquiries, Perform cash operations and Inventory Operations </p>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;