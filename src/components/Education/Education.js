import "./Education.css";

const Education = ({ year, location, title, university, gpa }) => {
  return (
    <div className="edu">
      <div className="edu_date_loc">
        <p>
          <small>{year}</small>
        </p>
        <p>
          <small>{location}</small>
        </p>
      </div>
      <div className="edu_title_uni">
        <p>{title}</p>
        <p>{university}</p>
      </div>
      <div className="edu_content">
        <p>{gpa}</p>
      </div>
    </div>
  );
};

export default Education;
