import React from "react";
import "../assets/styles/about.css";

const about = () => {
  const personalDetails = {
    summary:
      "A recent Computer Science graduate from the Indian Institute of Information Technology, Jabalpur, specializing in software development. Equipped with expertise in web technologies, cloud infrastructure, and full-stack solutions, demonstrating a strong ability to create efficient, scalable applications using React.js, Node.js, and modern development methodologies.",
    detailsList: [
      { link: false, key: "Birthday", value: "28 August 2002" },
      { link: false, key: "Age", value: "22" },
      { link: false, key: "Degree", value: "B.Tech CSE" },
      { link: false, key: "City", value: "Hyderabad, India" },
      {
        link: true,
        key: "Linkedin",
        value: "saikumar452",
        url: "https://www.linkedin.com/in/saikumar452/",
      },
      {
        link: true,
        key: "GitHub",
        value: "SaikumarBlaze",
        url: "https://www.github.com/SaikumarBlaze",
      },
      {
        link: false,
        key: "Languages",
        value: "English, Hindi, Telugu, Kannada",
      },
    ],
    quote:
      "Technology is more than just a career for me - it's a passion. I love exploring how new tools and frameworks can solve real-world problems.",
    skillsList: [
      { title: "C++", value: "80" },
      { title: "Python", value: "80" },
      { title: "HTML5", value: "95" },
      { title: "CSS3", value: "90" },
      { title: "JavaScript", value: "80" },
      { title: "React Js", value: "80" },
      { title: "Express Js", value: "85" },
      { title: "Node Js", value: "85" },
      { title: "MongoDB", value: "75" },
    ],
    interestList: [
      {
        icon: "fa-solid fa-laptop-code",
        color: "purple",
        value: "Software Engineer",
      },
      {
        icon: "fa-solid fa-code",
        color: "yellow",
        value: "Web Development",
      },
      {
        icon: "fa-solid fa-server",
        color: "cyan",
        value: "DevOps",
      },
      {
        icon: "fa-solid fa-cloud",
        color: "red",
        value: "Cloud Computing",
      },
      {
        icon: "fa-brands fa-github",
        color: "blue",
        value: "Open Source",
      },
      {
        icon: "fa-solid fa-chess",
        color: "dark-blue",
        value: "Chess",
      },
    ],
    availabilityList: [
      { value: "Freelance Work", color: "primary" },
      { value: "Collaborations", color: "success" },
      { value: "Full-Time Roles", color: "info" },
    ],
    availabilityMessage:
      "Feel free to reach out if you'd like to work together or have an exciting project in mind.",
  };

  return (
    <div className="my-outer-container px-4 py-5">
      <div className="my-inner-container text-light">
        <div className="section-title">
          <h2 className="section-heading d-flex align-items-center">
            About <span className="heading-line ms-2"></span>
          </h2>
          <p className="sub-desc">LEARN MORE ABOUT ME</p>
        </div>
        <div className="intro mt-40 mb-7">
          <p className="mb-40">{personalDetails.summary}</p>
          <div className="row">
            {personalDetails.detailsList.map((element, index) => {
              return (
                <div
                  className="col-md-6 d-flex align-items-center mb-3"
                  key={index}
                >
                  <i className="fa-solid fa-chevron-right field-icon me-2"></i>
                  <div className="field-body ms-1">
                    <span className="field-body-title">
                      {element.key} : &nbsp;
                    </span>
                    <span>
                      {element.link ? (
                        <a
                          className="social-link td-n"
                          target="_blank"
                          rel="noreferrer"
                          href={element.url}
                        >
                          {element.value}
                        </a>
                      ) : (
                        element.value
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="personal-quote mt-40 p-3">
            <span>
              <i className="fa-solid fa-quote-left me-2"></i>
            </span>
            {personalDetails.quote}
            <span>
              <i className="fa-solid fa-quote-right ms-2"></i>
            </span>
          </p>
        </div>
        <div className="skills-section m-7">
          <h3 className="section-heading d-flex align-items-center mb-3">
            SKILLS <span className="heading-line ms-2"></span>
          </h3>
          <div className="skills-body">
            {personalDetails.skillsList.map((element, index) => {
              return (
                <div className="skill-progress mb-3" key={index}>
                  <div className="skill-title">
                    <span>{element.title}</span>
                    <span>{element.value}%</span>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={element.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{
                      height: "10px",
                      borderRadius: "0",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div
                      className={`progress-bar w-${element.value} bg-g`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="interests-section m-7">
          <h3 className="section-heading d-flex align-items-center mb-3">
            Interests <span className="heading-line ms-2"></span>
          </h3>
          <div className="row">
            {personalDetails.interestList.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card my-3 text-light interest-item">
                    <div className="card-body d-flex py-4 ps-4">
                      <div className="item-left me-3 d-flex justify-content-center align-items-center">
                        <i
                          className={`my-icon ${element.icon} ${element.color}`}
                        ></i>
                      </div>
                      <div className="item-right d-flex align-items-center">
                        <h5 className="card-title m-0 interest-content">
                          {element.value}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="availability-status">
          <h3 className="section-heading d-flex align-items-center mb-4">
            Availability <span className="heading-line ms-2"></span>
          </h3>
          <div className="status-body">
            {personalDetails.availabilityList.map((element, index) => {
              return (
                <span
                  key={index}
                  className={`badge bg-${element.color} me-2 mb-2`}
                >
                  {element.value}
                </span>
              );
            })}
            <p className="mt-3 desc">
              <span>
                <i className="fa-solid fa-quote-left me-2"></i>
              </span>
              {personalDetails.availabilityMessage}
              <span>
                <i className="fa-solid fa-quote-right ms-2"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
