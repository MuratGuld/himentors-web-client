async function getGradesOfStudent(studentId) {
  const response = await fetch(
    `http://localhost:5000/students/grades/${studentId}`
  );

  return await response.json();
}

export { getGradesOfStudent };
