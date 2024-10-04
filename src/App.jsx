import { useState } from "react";

// Components
import ToolBar from "./components/ToolBar";
import Education from "./components/Education";
import Personal from "./components/Personal";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import LiveResume from "./LiveResume";
import Introduction from "./components/Introduction";

export default function App() {
  const initialPersonalDetails = {
    fullName: "Anurag Semwal",
    github: "github.com/onmedicines",
    linkedin: "linkedin.com/in/onmedicines",
    email: "semwalanuragjune@gmail.com",
    phoneNumber: "+91 9621547997",
    cityAndCountry: "Lucknow, India",
  };
  const initialEducationDetails = [
    {
      id: 0,
      institute: "University of Lucknow",
      qualification: "Bachelors of Computer Science",
      start: "2021",
      end: "2024",
      location: "Lucknow, Uttar Pradesh",
    },
  ];
  const initialSkillSet = ["HTML", "CSS", "JavaScript"];
  const initialProjects = [
    {
      id: 251548318,
      projectName: "Assignment Submission App",
      technologiesUsed: ["Express.js", "Node.js", "HTML", "CSS", "EJS"],
      description: "This app lets you make a student id and faculty id. The students can submit assignments of their respective subjects and the teachers acn view those assignments",
      start: "June 2024",
      end: "July 2024",
    },
  ];

  // state variables
  const [preview, setPreview] = useState(false);
  const [personalDetails, setPersonalDetails] = useState(initialPersonalDetails);
  const [education, setEducation] = useState(initialEducationDetails);
  const [skillSet, setSkillSet] = useState(initialSkillSet);
  const [projects, setProjects] = useState(initialProjects);

  // handle changes and addition of fields
  // personal details
  const handlePersonalDetailsChange = (e) => {
    const { name: nameAttr, value } = e.target;
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
        return { ...project, [name]: value };
      } else {
        return project;
      }
    });
    setProjects(newArray);
  };
  const handleAddProject = (e) => {};
  const handleDeleteProject = (e) => {};

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
          <LiveResume personalDetails={personalDetails} education={education} skills={skillSet} projects={projects} />
        ) : (
          <div className="details-container">
            <Introduction />
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
