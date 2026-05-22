import "./style/App.css";
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import studentData from "./data/studentData";

function App() {
  const [like, setLike] = useState(0);
  const [active, setActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="container">
        <ProfileCard
          student={studentData}
          like={like}
          active={active}
          darkMode={darkMode}
          onActive={() => setActive(!active)}
          onDarkMode={() => setDarkMode(!darkMode)}
          onLike={() => setLike(like + 1)}
        />
      </div>
    </div>
  );
}

export default App;