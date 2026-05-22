import "../style/StudentInfo.css";

function StudentInfo({ student }) {
  return (
    <>
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
    </>
  );
}

export default StudentInfo;