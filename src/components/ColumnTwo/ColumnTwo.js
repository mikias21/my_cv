import { FaBook } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { AiFillExperiment } from "react-icons/ai";

import "./ColumnTwo.css";

const ColumnTwo = ({ className }) => {
  return (
    <div className={`col2 ${className}`}>
      <div className="col2_main_skills">
        <div className="col2_main_skills_title_set">
          <AiFillExperiment className="col2_main_skills_icon" />
          <p className="col2_main_skills_title">Skills</p>
        </div>
        <div className="col2_main_skills_content">
          <div className="col2_main_skills_subcontent">
            <p>Programming Languages</p>
            <p>Javascsript ECMA6+, NodeJS, Python (Primary), PHP, Java</p>
          </div>
          <div className="col2_main_skills_subcontent">
            <p>DevOps</p>
            <p>AWS, Docker</p>
          </div>
          <div className="col2_main_skills_subcontent">
            <p>Database</p>
            <p>SQL, Postgresql, Mongo DB, Sqlite</p>
          </div>
          <div className="col2_main_skills_subcontent">
            <p>Web Stack</p>
            <p>
              React, Redux, Context, Next JS, Tailwind, fastapi, flask, netlify,
              render, React Native
            </p>
          </div>
          <div className="col2_main_skills_subcontent">
            <p>Pentesting and Security</p>
            <p>
              WebApp testing, API testing, Network Pentesting, Cloud security
            </p>
          </div>
          <div className="col2_main_skills_subcontent skills_last">
            <p>Additional Skills</p>
            <p>Machine Learning, Infrastructure Managment, Active Directory</p>
          </div>
        </div>
      </div>
      <div className="col2_personal_projects">
        <div className="col2_projects_title_set">
          <FaBook className="col2_projects_icon" />
          <p className="col2_personal_projects_title">Personal Projects</p>
        </div>
        <div className="col2_personal_projects_content">
          <div className="col2_personal_projects_subcontent">
            <p>Predict</p>
            <p className="col2_personal_projects_link">
              <small>https://github.com/mikias21/predict</small>
            </p>
            <ul>
              <li>Made for prototyping Machine Learning models. .</li>
              <li>
                Used for making Regression, Classification and Neural Networks.
              </li>
              <li>
                Used for making Regression, Classification and Neural Networks
              </li>
              <li>
                Developed using Python, Flask, Sqlite3, Javascript, sci-kit
                library, numpy, Pandas
              </li>
            </ul>
          </div>
          <div className="col2_personal_projects_subcontent project_last">
            <p>XSSVIS</p>
            <p className="col2_personal_projects_link">
              <small>https://github.com/mikias21/XSSVIS_MAIN</small>
            </p>
            <ul>
              <li>
                Deep learning model for detection XSS attacks on web
                applications.
              </li>
              <li>
                By combining the power of computer vision and deep learning
                model web traffic anomaly detection.
              </li>
              <li>Python, tensorflow, pandas, numpy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col2_certificates">
        <div className="col2_certificates_title_set">
          <GrCertificate className="col2_certificates_icon" />
          <p className="col2_certificates_title">Certificates</p>
        </div>
        <div className="col2_certificates_content">
          <div className="col2_certificates_subcontent">
            <p className="col2_certificates_date">
              <small>2023-09</small>
            </p>
            <p className="col2_certificate_title">Red Teaming Learning Path</p>
            <p className="col2_certificates_issuer">TryHackMe</p>
          </div>
          <div className="col2_certificates_subcontent">
            <p className="col2_certificates_date">
              <small>2020-12</small>
            </p>
            <p className="col2_certificate_title">Python Skill Assessment</p>
            <p className="col2_certificates_issuer">HackerRank</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnTwo;
