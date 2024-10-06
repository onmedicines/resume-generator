import MapPin from "./assets/MapPin";
import "./LiveResumeStyles.css";

export default function LiveResume({ intro, personalDetails, education, skills, projects }) {
  const pd = personalDetails;
  const edu = education; // array
  const sk = skills; // aray
  const pj = projects; // array

  return (
    <div className="live-resume">
      <div className="sidebar">
        <div className="name-container">
          <h1>{pd.fullName}</h1>
          <p>
            <MapPin /> {pd.cityAndCountry}
          </p>
        </div>
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>{pd.phoneNumber}</p>
          <p>{pd.email}</p>
          <p>{pd.linkedin}</p>
          <p>{pd.github}</p>
        </div>
        <div className="skills-container">
          <h3>Skills</h3>
          {sk.join(", ")}
        </div>
      </div>
      <div className="main">
        <div className="intro">
          <p>{intro}</p>
        </div>
        <div className="education-container">
          <h1>Education</h1>
          {edu.map((item, index) => {
            return (
              <div key={index} className="institute">
                <header>
                  <h3>{item.qualification}</h3>
                  <p>
                    {item.start} - {item.end}
                  </p>
                </header>
                <main>
                  <p>{item.institute}</p>
                  <p>
                    <MapPin /> {item.location}
                  </p>
                </main>
              </div>
            );
          })}
        </div>
        <div className="projects-container">
          <header>
            <h1>Projects</h1>
          </header>
          <main>
            {pj.map((item) => {
              return (
                <div className="project">
                  <header>
                    <p className="heading">
                      <span className="project-name">{item.projectName}</span> | <span className="tech-used">{item.technologiesUsed.join(", ")}</span>
                    </p>
                    <p className="duration">
                      {item.start} - {item.end}
                    </p>
                  </header>
                  <main>
                    <p className="description">{item.description}</p>
                  </main>
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </div>
  );
}
