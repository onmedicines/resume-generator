import Plus from "../assets/Plus.jsx";
import Trash from "../assets/Trash.jsx";

export default function Education({ education, handleChange, handleAdd, handleDelete }) {
  return (
    <div className="education-container">
      <header>
        <span>3</span>
        <h1>Education</h1>
      </header>

      <main>
        {education.map((item, index) => {
          const { id, institute, qualification, start, end, location } = item;
          return (
            <div key={index} className="institute-container">
              <header>
                <h1>INSTITUTION {index + 1}</h1>
                <button onClick={(e) => handleDelete(e, id)} className="delete-button">
                  Delete
                </button>
              </header>
              <main>
                <label>
                  <span>Qualification:</span>
                  <input type="text" name="qualification" value={qualification} onChange={(e) => handleChange(e, id)} />
                </label>
                <label>
                  <span>Institute</span>
                  <input type="text" name="institute" value={institute} onChange={(e) => handleChange(e, id)} />
                </label>
                <div className="duration">
                  <label>
                    <span>Start year</span>
                    <input type="number" name="start" value={start} onChange={(e) => handleChange(e, id)} placeholder="YYYY" />
                  </label>
                  <label>
                    <span>End year</span>
                    <input type="number" name="end" value={end} onChange={(e) => handleChange(e, id)} placeholder="YYYY" />
                  </label>
                </div>
                <label>
                  <span>Institute's Location</span>
                  <input type="text" name="location" value={location} onChange={(e) => handleChange(e, id)} placeholder="" />
                </label>
              </main>
            </div>
          );
        })}

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
