async function getStudentsOfMentor(pUser) {
  const response = await fetch("http://localhost:5000/students/group-members", {
    method: "post",
    body: JSON.stringify(pUser),
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
}

async function getStudentsOfGroup(pGroupId) {
  const response = await fetch(
    `http://localhost:5000/students/students-of-group/?groupId=${pGroupId}`
  );

  return await response.json();
}

export { getStudentsOfMentor, getStudentsOfGroup };
