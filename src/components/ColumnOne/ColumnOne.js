import { MdWork } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineExperiment } from "react-icons/ai";
import { GiPlagueDoctorProfile } from "react-icons/gi";

// Components
import WorkExperience from "../WorkExperience/WorkExperience";
import Education from "../Education/Education";

// Css
import "./ColumnOne.css";

const points1 = [
  "Worked as Backend Developer at Eastern Liaoning University.",
  "Created a system where students can create account , get the scores, access semester transcript, contact their professor.",
  " Integrated Full Authentication and Security together with the whole backend .",
  "Penetration Testing",
  "Tech stack: PHP, MySQl, Jquery, Ajax, ThinkPhp",
];

const points2 = [
  "Internal Tool automation with python.",
  "IT Infrastructure Management.",
  "Software product development.",
  "Penetration Testing",
  "IOT Security Evaluation and UAS Security Evaluation",
];

const ColumnOne = ({ className }) => {
  return (
    <div className={`col1 ${className}`}>
      {/* Name */}
      <div className="col1_name_contact_container">
        <div className="col1_name">
          <p>Mikias Berhanu</p>
        </div>
        <div className="col1_contact_info">
          <div className="col1_contact_info_p1">
            <ul>
              <li>
                <p>
                  <small>Email: mikiaszardoz0x00c@outlook.com</small>
                </p>
              </li>
              <li>
                <p>
                  <small>
                    <a href="https://linkedin.com/in/mikias-berhanu-738ab31aa">
                      Check out my Linkedin
                    </a>
                  </small>
                </p>
              </li>
            </ul>
          </div>
          <div className="col1_contact_info_p2">
            <ul>
              <li>
                <p>
                  <small>
                    <a href="https://github.com/mikias21">
                      Check out my Github
                    </a>
                  </small>
                </p>
              </li>
              <li>
                <p>
                  <small>
                    <a href="https://mikias-portifolio.netlify.app/">
                      Check out my Portiflio
                    </a>
                  </small>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Profile */}
      <div className="col1_profile">
        <div className="col1_profile_title">
          <GiPlagueDoctorProfile className="col1_profile_title_icon" />
          <p>Profile</p>
        </div>
        <div className="col1_profile_content">
          <p style={{ fontSize: "11px" }}>
            I am Mekoya Mikias Berhanu, a seasoned cybersecurity professional
            and Full stack developer, with a Master's degree in Software
            Engineering, specializing in software security and vulnerability
            analysis. My professional journey includes valuable experience as a
            junior cybersecurity engineer and Infrastructure manager at Applus
            Laboratories, where I actively addressed practical challenges in the
            field. My research interests span IoT security, web application
            security, AI model security, and network security. Committed to
            continuous learning and staying abreast of industry trends, I bring
            a blend of academic excellence and practical expertise to contribute
            effectively to the dynamic landscape of cybersecurity.
          </p>
        </div>
      </div>
      {/* Work Experience */}
      <div className="col1_work">
        <div className="col1_work_title">
          <MdWork className="col1_experience_title_icon" />
          <p>Work Experience</p>
        </div>
        <div className="col1_work_content" style={{ marginBottom: "15px" }}>
          <WorkExperience
            year="2019 - 2020"
            location="China, Liaoning"
            title="BACKEND DEVELOPER"
            company="EASTERN LIAONING UNIVERSITY"
            points={points2}
          />
        </div>
        <div className="col1_work_content">
          <WorkExperience
            year="2022 - 2023"
            location="China, Shanghai"
            title="CYBER-SECURITY ENGINEER"
            company="Applus Laboratories LTD.,"
            points={points1}
          />
        </div>
      </div>
      {/* Education */}
      <div className="col1_edu">
        <div className="col1_edu_title">
          <FaUserGraduate className="col1_edu_title_icon" />
          <p>Education</p>
        </div>
        <div className="col1_edu_content">
          <Education
            year="2017 - 2021"
            location="China, Liaoning"
            title="BSc in Computer Science"
            university="EASTERN LIAONING UNIVERSITY"
            gpa="CGPA - 4.17 / 4.5"
          />
        </div>
        <div className="col1_edu_content" style={{ marginTop: "20px" }}>
          <Education
            year="2021 - 2024"
            location="China, Xi'an"
            title="Msc in Software Engineering"
            university="NORTHWESTERN POLYTECHNICAL UNIVERSITY"
            gpa="GPA 87.2/100"
          />
        </div>
      </div>
      <div className="col1_soft_skills">
        <div className="col1_soft_skills_title">
          <AiOutlineExperiment className="col1_softskill_title_icon" />
          <p>Skills</p>
        </div>
        <div className="col1_soft_skills_content">
          <p>
            TDD, Agile Development, SCRUM, MVC Cloud Computing, Machine
            Learning, REST API
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColumnOne;
