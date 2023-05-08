const user = {
  id: 1,
  name: "John",
  age: 25,
};

function recoverData() {
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);
}