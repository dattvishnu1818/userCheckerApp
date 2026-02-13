const inputId = document.getElementById("inputId");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

let user = {
  name: "",
};

function showMessage(message, color, bgColor) {
  output.textContent = message;
  output.style.color = color;
  output.style.backgroundColor = bgColor;
  output.style.transition = "transform 1s ease";
  output.style.transform = "rotate(360deg)";
}

btn.addEventListener("click", function (event) {
  event.preventDefault();
  
  user.name = inputId.value;
  const allowedUserName = "raj";

  if (inputId.value === "") {
    alert("Kindly enter your name");
    inputId.focus();
  } else if (inputId.value === allowedUserName) {
    showMessage("Welcome " + user.name, "green",);
    inputId.value = "";
  } else {
    showMessage("User not allowed", "red", "#e79292");
    inputId.value = "";
  }
});
