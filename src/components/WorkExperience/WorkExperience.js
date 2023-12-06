import "./WorkExperience.css";

const WorkExperience = ({ year, location, title, company, points }) => {
  return (
    <div className="work_exp">
      <div className="work_exp_date_loc">
        <p>
          <small>{year}</small>
        </p>
        <p>
          <small>{location}</small>
        </p>
      </div>
      <div className="work_exp_title_company">
        <p>{title}</p>
        <p>{company}</p>
      </div>
      <div className="work_exp_content">
        <ul>
          {points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
