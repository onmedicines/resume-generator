import "./LiveResumeStyles.css";

export default function LiveResume({ personalDetails, education, skills, projects }) {
  const pd = personalDetails;
  const edu = education; // array
  const sk = skills; // aray
  const pj = projects; // array

  return (
    <div className="live-resume">
      <div className="personal-details-container">
        <h1>{pd.fullName}</h1>
        <div className="contact-details">
          <p>{pd.github}</p>
          <p>{pd.email}</p>
        </div>
      </div>
      <div className="education-container">
        {edu.map((item, index) => {
          return (
            <div key={index} className="institute">
              <h1>{item.qualification}</h1>
              <h2>{item.institute}</h2>
              <p>
                {item.start} - {item.end}
              </p>
              <p>{item.location}</p>
            </div>
          );
        })}
      </div>
      <div className="skills-container">
        {sk.map((item) => {
          return <p className="skill">{item}</p>;
        })}
      </div>
      <div className="projects-container">
        {pj.map((item) => {
          return (
            <div className="project">
              <p>{item.projectName}</p>
              <p>{item.technologiesUsed}</p>
              <p>{item.start}</p>
              <p>{item.end}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
