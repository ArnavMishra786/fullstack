import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [stateName, setStateName] = useState("");
  const [skills, setSkills] = useState([]);

  const today = new Date().toISOString().split("T")[0];

  const handleSkillChange = (e) => {
    if (e.target.checked) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "First Name: " + firstName +
      "\nLast Name: " + lastName +
      "\nDOB: " + dob +
      "\nGender: " + gender +
      "\nAddress: " + address +
      "\nState: " + stateName +
      "\nSkills: " + skills.join(", ")
    );
  };

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setDob("");
    setGender("");
    setAddress("");
    setStateName("");
    setSkills([]);
  };

  return (
    <div className="container">
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <input
          type="date"
          max={today}
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        <div className="gender">
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          /> Female
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={gender === "Other"}
            onChange={(e) => setGender(e.target.value)}
          /> Other
        </div>

        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></textarea>

        <select
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
          required
        >
          <option value="">Select State</option>
          <option value="Delhi">Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
        </select>

        <div className="skills">
          <label>Skills:</label>
          <input
            type="checkbox"
            value="JavaScript"
            checked={skills.includes("JavaScript")}
            onChange={handleSkillChange}
          /> JavaScript

          <input
            type="checkbox"
            value="React"
            checked={skills.includes("React")}
            onChange={handleSkillChange}
          /> React

          <input
            type="checkbox"
            value="Python"
            checked={skills.includes("Python")}
            onChange={handleSkillChange}
          /> Python
        </div>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" className="cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}

export default App;
