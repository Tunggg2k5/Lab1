import "../style/ButtonGroup.css";

function ButtonGroup({ active, darkMode, onActive, onDarkMode, onLike }) {
  return (
    <div className="button-group">
      <button onClick={onActive}>{active ? "Online" : "Offline"}</button>

      <button onClick={onDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <button onClick={onLike}>Like</button>
    </div>
  );
}

export default ButtonGroup;