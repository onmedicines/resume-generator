import { useState } from "react";

// initial data
import { initialEducationDetails, initialIntro, initialPersonalDetails, initialSkillSet, initialProjects } from "./assets/initialDetails";

// Components
import Education from "./components/Education";
import Personal from "./components/Personal";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import LiveResume from "./LiveResume";
import Introduction from "./components/Introduction";

export default function App() {
  // state variables
  const [preview, setPreview] = useState(false);
  const [intro, setIntro] = useState(initialIntro);
  const [personalDetails, setPersonalDetails] = useState(initialPersonalDetails);
  const [education, setEducation] = useState(initialEducationDetails);
  const [skillSet, setSkillSet] = useState(initialSkillSet);
  const [projects, setProjects] = useState(initialProjects);

  // handle changes and addition of fields
  // intro
  const handleIntroChange = (e) => {
    const { value } = e.target;
    setIntro(value);
  };

  // personal details
  const handlePersonalDetailsChange = (e) => {
    const { name: nameAttr, value } = e.target;
    if (nameAttr === "phoneNumber" && value >= 9999999999) {
      setPersonalDetails(personalDetails);
      return;
    }
    setPersonalDetails({ ...personalDetails, [nameAttr]: value });
  };

  // education
  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    setEducation(
      education.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        } else {
          return item;
        }
      })
    );
  };
  const handleAddEducation = (e) => {
    const uniqueID = crypto.randomUUID();
    const newEducationArray = [
      ...education,
      {
        id: uniqueID,
        institute: "",
        qualification: "",
        start: "",
        end: "",
        location: "",
      },
    ];
    setEducation(newEducationArray);
  };
  const handleDeleteEducation = (e, idToDelete) => {
    const newArray = education.filter((item) => item.id !== idToDelete);
    setEducation(newArray);
  };

  // skills
  const handleSkillChange = (e, indexToChange) => {
    const { value } = e.target;
    const newArray = skillSet.map((skill, index) => {
      if (index === indexToChange) {
        return value;
      } else {
        return skill;
      }
    });
    setSkillSet(newArray);
  };
  const handleSkillDelete = (e, indexToRemove) => {
    const newArray = skillSet.filter((skill, index) => index !== indexToRemove);
    setSkillSet(newArray);
  };
  const handleSkillAdd = (e) => {
    const newArray = [...skillSet, ""];
    setSkillSet(newArray);
  };

  // projects
  const handleChangeProject = (e, idToChange) => {
    const { name, value } = e.target;
    const newArray = projects.map((project) => {
      if (project.id === idToChange) {
        if (name === "technologiesUsed") {
          return { ...project, technologiesUsed: value.split(/[\s,]+/) };
        } else {
          return { ...project, [name]: value };
        }
      } else {
        return project;
      }
    });
    setProjects(newArray);
  };
  const handleAddProject = (e) => {
    const newArray = [
      ...projects,
      {
        id: crypto.randomUUID(),
        projectName: "",
        technologiesUsed: "",
        start: "",
        end: "",
        description: "",
      },
    ];
    setProjects(newArray);
  };
  const handleDeleteProject = (e, idToRemove) => {
    const newArray = projects.filter((project) => project.id !== idToRemove);
    setProjects(newArray);
  };

  return (
    <>
      <header>
        <nav>
          <h1>Resumer</h1>
          <ul>
            <li
              onClick={() => {
                setPreview(false);
                console.log("Set preview to false");
              }}>
              Edit
            </li>
            <li
              onClick={() => {
                setPreview(true);
                console.log("Set preview to true");
              }}>
              Preview
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {preview ? (
          <LiveResume intro={intro} personalDetails={personalDetails} education={education} skills={skillSet} projects={projects} />
        ) : (
          <div className="details-container">
            <Introduction intro={intro} handleChange={handleIntroChange} />
            <Personal {...personalDetails} handleChange={handlePersonalDetailsChange} />
            <Education education={education} handleChange={handleEducationChange} handleAdd={handleAddEducation} handleDelete={handleDeleteEducation} />
            <Skills skillSet={skillSet} handleChange={handleSkillChange} handleDelete={handleSkillDelete} handleAdd={handleSkillAdd} />
            <Projects projects={projects} handleAdd={handleAddProject} handleDelete={handleDeleteProject} handleChange={handleChangeProject} />
          </div>
        )}
      </main>
    </>
  );
}
