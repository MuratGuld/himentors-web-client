const getHomeworkList = async () => {
  const response = await fetch(
    "http://localhost:5000/homeworks/homeworks-with-grade"
  );
  return await response.json();
};

const getHomeworkListOfWeek = async () => {
  const response = await fetch(
    "http://localhost:5000/homeworks/homeworks-with-grade-week"
  );
  return await response.json();
};

export { getHomeworkList,getHomeworkListOfWeek };
