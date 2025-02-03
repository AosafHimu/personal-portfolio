import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";



function Home() {
  return (
    <div className='home'>
      <div className='about'>
      <h2> Hi, My Name is Md Aosaful Alam</h2>
        <div className="prompt">
          <p> Academic Tutor - The University of Sydney | Former Intern- Full Stack Web Developer | AWS Certified Cloud Practitioner </p>
          <p>Specialization in Software Engineering, Cyber Security, Data Analytics and Business Intelligence</p>
          <a href='https://www.linkedin.com/in/aosaf-himu/'><LinkedInIcon /></a>
          < a href= "mailto:aosafhimu@gmail.com"><EmailIcon /></a>
          <a href='https://github.com/AosafHimu'> <GithubIcon /> </a>
        </div>

      </div>
      <div className='skills'>
      <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Programming Languages</h2>
            <span>Java, Python, JavaScript (React.Js, Node.Js, Vanilla.Js), HTML, CSS, MySQL</span>
          </li>
          <li className="item">
            <h2>Cyber Security</h2>
            <span>
            Cryptographic Implementation & Mechanism, Encryption, Hashing,
            Computer & Network Security Implementation, Pen testing, Reverse Engineering, Risk Management
            </span>
          </li>
          <li className="item">
            <h2> Data Analysis & Business Intelligence </h2>
            <span>
              Tableau, Power BI, ML Libraries, MongoDB, Deep Learning Algorithms, Data Modeling, Signavio
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;