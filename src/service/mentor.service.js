async function getMentorsOfGroup(pGroupId) {
  const response = await fetch(
    `http://localhost:5000/mentors/mentors-of-group?groupId=${pGroupId}`
  );

  return await response.json();
}

export { getMentorsOfGroup };
