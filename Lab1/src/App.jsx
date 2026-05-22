import "./App.css";
import { useState } from "react";

function HobbyList({ hobbies }) {
  return (
    <>
      <h3>List of hobbies</h3>

      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [like, setLike] = useState(0);
  const [active, setActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const student = {
    avatar: "./src/assets/image.png",
    name: "Phạm Văn Tùng",
    studentId: "SE123456",
    className: "SE2009",
    major: "Software Engineering",
    hobbies: ["Code", "Play game", "Watch TV", "Sleep"],
  };

  function handleActive() {
    setActive(!active);
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="container">
        <div className="card">
          <img src={student.avatar} alt="avatar" className="avatar" />

          <h1>{student.name}</h1>

          <p>
            <strong>Student ID:</strong> {student.studentId}
          </p>

          <p>
            <strong>Class name:</strong> {student.className}
          </p>

          <p>
            <strong>Major:</strong> {student.major}
          </p>

          <HobbyList hobbies={student.hobbies} />

          <p>Like: {like}</p>

          <button onClick={handleActive}>
            {active ? "Online" : "Offline"}
          </button>

          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <button onClick={() => setLike(like + 1)}>Like</button>
        </div>
      </div>
    </div>
  );
}

export default App;