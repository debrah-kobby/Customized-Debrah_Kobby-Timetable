let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  if (name === "") {
    window.alert("Please Enter Your name");
  }
  if (email === "") {
    window.alert("Please Enter Your Email");
  }
  const brokenNames = [...name];
  /* console.log(brokenNames); */
  console.log(brokenNames[0], brokenNames[1], brokenNames[2]);
});
