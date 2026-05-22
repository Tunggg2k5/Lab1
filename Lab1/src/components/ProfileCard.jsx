import "../style/ProfileCard.css";
import Avatar from "./Avatar";
import StudentInfo from "./StudentInfo";
import HobbyList from "./HobbyList";
import ButtonGroup from "./ButtonGroup";

function ProfileCard({
  student,
  like,
  active,
  darkMode,
  onActive,
  onDarkMode,
  onLike,
}) {
  return (
    <div className="card">
      <Avatar avatar={student.avatar} />

      <StudentInfo student={student} />

      <HobbyList hobbies={student.hobbies} />

      <p className="like-text">Like: {like}</p>

      <ButtonGroup
        active={active}
        darkMode={darkMode}
        onActive={onActive}
        onDarkMode={onDarkMode}
        onLike={onLike}
      />
    </div>
  );
}

export default ProfileCard;