import React from "react";
import "../assets/styles/projects.css";
import bootstrap from "../assets/images/Bootstrap.svg";
import react_image from "../assets/images/React.png";
import redux from "../assets/images/Redux.svg";
import express from "../assets/images/Express.png";
import mongodb from "../assets/images/MongoDB.svg";
import firebase from "../assets/images/firebase-2.png";
import project1 from "../assets/images/project-1_1_1_3.jpg";
import project2 from "../assets/images/project-2_2.jpg";
// import project3 from "../assets/images/project-3_3.jpg";
import project4 from "../assets/images/bg-task.jpg";
import project5 from "../assets/images/bg-user.jpg";

const Projects = () => {
  const personalProjects = [
    {
      location: "start",
      bgUrl: project1,
      skillsList: [
        { imageUrl: bootstrap },
        { imageUrl: react_image },
        { imageUrl: redux },
        { imageUrl: express },
        { imageUrl: mongodb },
      ],
      title: "SkyWrite",
      desc: "A note-taking platform with real-time updates and secure JWT authentication.",
      codeUrl: "https://github.com/SaikumarBlaze/SkyWrite",
      icon: "fa-brands fa-github",
    },
    {
      location: "end",
      bgUrl: project4,
      skillsList: [
        { imageUrl: bootstrap },
        { imageUrl: react_image },
        { imageUrl: redux },
        { imageUrl: express },
        { imageUrl: mongodb },
      ],
      title: "TaskFlow",
      desc: "A task management platform with real-time updates and efficient state management using Redux.",
      codeUrl: "https://github.com/SaikumarBlaze/taskflow",
      icon: "fa-brands fa-github",
    },
    {
      location: "start",
      bgUrl: project5,
      skillsList: [
        { imageUrl: bootstrap },
        { imageUrl: react_image },
        { imageUrl: redux },
      ],
      title: "UserManage",
      desc: "A user management platform with CRUD operations, authentication, and integration with Reqres API.",
      codeUrl: "https://github.com/SaikumarBlaze/UserManage",
      icon: "fa-brands fa-github",
    },
    {
      location: "end",
      bgUrl: project2,
      skillsList: [
        { imageUrl: bootstrap },
        { imageUrl: react_image },
        { imageUrl: redux },
        { imageUrl: express },
        { imageUrl: firebase },
      ],
      title: "ChatWave",
      desc: "A messaging app with real-time delivery and Firebase authentication.",
      codeUrl: "https://www.github.com/SaikumarBlaze",
      icon: "fa-brands fa-github",
    },
    // {
    //   location: "start",
    //   bgUrl: project3,
    //   skillsList: [
    //     { imageUrl: bootstrap },
    //     { imageUrl: react_image },
    //     { imageUrl: redux },
    //     { imageUrl: express },
    //     { imageUrl: mongodb },
    //   ],
    //   title: "R-STAPS",
    //   desc: "An expense tracking app with real-time updates and secure backend services.",
    //   codeUrl: "https://www.github.com/SaikumarBlaze",
    //   icon: "fa-brands fa-github",
    // },
  ];

  return (
    <div className="my-outer-container px-4 pt-5">
      <div className="my-inner-container text-light">
        <div className="section-title mb-5">
          <h2 className="section-heading d-flex align-items-center">
            Projects <span className="heading-line ms-2"></span>
          </h2>
          <p className="sub-desc">MY WORKS</p>
        </div>
        {personalProjects.map((element, index) => {
          return (
            <div
              key={index}
              className={`row justify-content-${element.location}`}
            >
              <div className="col-md-11 project-item">
                <div className="card mb-5" style={{ background: "#040404" }}>
                  <div className="card-body project-container">
                    <div
                      className="project-card"
                      style={{
                        backgroundImage: `url(${element.bgUrl})`,
                      }}
                    >
                      <div className="project-content">
                        <div className="project-skills">
                          {element.skillsList.map((element, index) => {
                            return (
                              <img
                                key={index}
                                className="skill"
                                src={element.imageUrl}
                                alt="skill-image"
                              />
                            );
                          })}
                        </div>
                        <h5 className="card-title project-title">
                          {element.title}
                        </h5>
                        <p className="card-text">{element.desc}</p>
                        <a
                          className="td-n"
                          target="_blank"
                          rel="noreferrer"
                          href={element.codeUrl}
                        >
                          <div className="social-icon me-2">
                            <i className={element.icon}></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
