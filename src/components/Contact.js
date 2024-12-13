import React from "react";
import "../assets/styles/contact.css";

const Contact = () => {
  const contactInfo = {
    articles: [
      {
        link: false,
        icon: "fa-solid fa-location-dot",
        title: "My Address",
        value: "Hyderabad, Telangana, India",
      },
      {
        link: true,
        icon: "fa-solid fa-share-nodes",
        title: "Social Profiles",
        value: "",
      },
      {
        link: false,
        icon: "fa-solid fa-envelope",
        title: "Email Me",
        value: "halbarsaikumar452@gmail.com",
      },
      {
        link: false,
        icon: "fa-solid fa-phone",
        title: "Call Me",
        value: "+91 9182086206",
      },
    ],
    socialProfiles: [
      {
        icon: "fa-brands fa-instagram",
        url: "https://www.instagram.com/saikumar8742/",
      },
      {
        icon: "fa-brands fa-linkedin",
        url: "https://www.linkedin.com/in/saikumar452/",
      },
      {
        icon: "fa-brands fa-github",
        url: "https://www.github.com/SaikumarBlaze",
      },
      {
        icon: "fa-solid fa-code",
        url: "https://leetcode.com/u/halbarsaikumar452/",
      },
    ],
  };

  return (
    <div className="my-outer-container d-flex align-items-center px-3 py-5">
      <div className="my-inner-container text-light">
        <div className="section-title mb-5">
          <h2 className="section-heading d-flex align-items-center">
            CONTACT <span className="heading-line ms-2"></span>
          </h2>
          <p className="sub-desc">CONTACT ME</p>
        </div>
        <div className="row">
          {contactInfo.articles.map((element, index) => {
            return (
              <div key={index} className="col-md-6">
                <div
                  className="card my-3 text-light"
                  style={{ background: "rgba(255, 255, 255, 0.07)" }}
                >
                  <div className="card-body item-body d-flex">
                    <div className="item-left me-2 d-flex justify-content-center align-items-center">
                      <div className="i-icon mx-2">
                        <i className={element.icon}></i>
                      </div>
                    </div>
                    <div className="item-right">
                      <h5 className="card-title item-title mb-2">
                        {element.title}
                      </h5>
                      {!element.link ? (
                        <p className="card-text item-content">
                          {element.value}
                        </p>
                      ) : (
                        <div className="d-flex">
                          {contactInfo.socialProfiles.map((element, index) => {
                            return (
                              <a
                                key={index}
                                className="td-n"
                                target="_blank"
                                rel="noreferrer"
                                href={element.url}
                              >
                                <i className={`i-con ${element.icon}`}></i>
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
