async function checkAuthenticatedUser(pUser) {
  const response = await fetch("http://localhost:5000/mentors/check", {
    method: "post",
    body: JSON.stringify(pUser),
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
}

export { checkAuthenticatedUser };
