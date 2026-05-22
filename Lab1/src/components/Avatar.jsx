import "../style/Avatar.css";

function Avatar({ avatar }) {
  return <img src={avatar} alt="avatar" className="avatar" />;
}

export default Avatar;