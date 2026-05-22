import "../style/HobbyList.css";

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

export default HobbyList;