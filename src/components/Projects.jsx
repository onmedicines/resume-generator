import Plus from "../assets/Plus";
import Trash from "../assets/Trash";

export default function Projects({ projects, handleChange, handleAdd, handleDelete }) {
  return (
    <div className="projects-container">
      <header>
        <span>5</span>
        <div className="content">
          <h1>Projects</h1>
        </div>
      </header>

      <main>
        {projects.map((project, index) => {
          const { id, projectName, technologiesUsed: techUsed, description, start, end } = project;

          return (
            <div key={id} className="project">
              <header>
                <h1>PROJECT {index + 1}</h1>
                <button onClick={(e) => handleDelete(e, id)} className="delete-button">
                  Delete
                </button>
              </header>
              <main>
                <label>
                  <span>Project name</span>
                  <input type="text" name="projectName" value={projectName} onChange={(e) => handleChange(e, id)} />
                </label>
                <div className="duration">
                  <label>
                    <span>Start</span>
                    <input type="text" name="start" value={start} onChange={(e) => handleChange(e, id)} />
                  </label>
                  <label>
                    <span>End</span>
                    <input type="text" name="end" value={end} onChange={(e) => handleChange(e, id)} />
                  </label>
                </div>
                <label>
                  <span>Technologies used</span>
                  <input type="text" name="technologiesUsed" value={techUsed} onChange={(e) => handleChange(e, id)} />
                </label>
                <label>
                  <span>Description</span>
                  <textarea name="description" rows={10} onChange={(e) => handleChange(e, id)}>
                    {description}
                  </textarea>
                </label>
              </main>
            </div>
          );
        })}

        {/* footer */}
        <footer>
          <button className="add-button" onClick={handleAdd}>
            Add
          </button>
        </footer>
      </main>
    </div>
  );
}
