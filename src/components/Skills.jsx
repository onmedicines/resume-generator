import DeleteLabel from "../assets/DeleteLLabel.jsx";
import Plus from "../assets/Plus.jsx";

export default function Skills({ skillSet, handleChange, handleDelete, handleAdd }) {
  return (
    <div className="skills-container">
      <header>
        <span>4</span>
        <h1>Skills</h1>
      </header>
      <main>
        <div className="wrapper">
          {skillSet.map((skill, index) => {
            return (
              <div key={index} className="skill">
                <input type="text" value={skill} onChange={(e) => handleChange(e, index)} />
                <button onClick={(e) => handleDelete(e, index)}>
                  <DeleteLabel />
                </button>
              </div>
            );
          })}
        </div>

        {/* footer */}
        <footer>
          <button onClick={handleAdd} className="add-button">
            <span>Add</span>
          </button>
        </footer>
      </main>
    </div>
  );
}
